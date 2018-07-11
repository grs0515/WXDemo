// src/project/readermovie/movie/movie-component.js
var app = getApp();
var http = require("../../../../util/http.js");
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    containerShow: true,
    searchShow: false,
    inputValue: ''
  },
  /**
   * 组件实例进入页面节点树时执行
   */
  attached: function(event) {

    var inTheatersUrl = app.doubanBase +
      "/v2/movie/in_theaters" + "?start=0&count=3";
    var comingSoonUrl = app.doubanBase +
      "/v2/movie/coming_soon" + "?start=0&count=3";
    var top250Url = app.doubanBase +
      "/v2/movie/top250" + "?start=0&count=3";

    this.getMovieListData(inTheatersUrl, "inTheaters", "正在热映");
    this.getMovieListData(comingSoonUrl, "comingSoon", "即将上映");
    this.getMovieListData(top250Url, "top250", "豆瓣Top250");

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 1,点击更多
     */
    onClickMoreTap: function(event) {
      //获取绑定数据
      var category = event.currentTarget.dataset.category;
      //带有component组件的,当前URL是调用的main目录里
      wx.navigateTo({
        url: "../movie/movie-category/movie-category?category=" + category
      })
    },
    /**
     * 2,搜索-失去焦点
     */
    onSearchBindBlur: function(event) {
      var key = event.detail.value;
      if (key.isEmpty) return;
      var searchUrl = app.doubanBase + "/v2/movie/search?q=" + key;
      http.getMovieListData(searchUrl, (data) => {
        this.setData({
          movieSearch: data.subjects
        });
      });
    },
    /**
     * 3,点击详情
     */
    onItemClick:function(event){
      var movieId= event.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../movie/movie-detail/movie-detail?movieId='+movieId
      })
    },
    /**
     * 点击输入框-获得焦点
     */
    onSearchBindFocus: function(event) {
      this.setData({
        containerShow: false,
        searchShow: true,
        movieSearch: [] //清空
      });
    },
    /**
     * 关闭输入框-失去焦点
     */
    onCloseSearch: function() {
      this.setData({
        containerShow: true,
        searchShow: false,
        inputValue: '',
        movieSearch: [] //清空
      });
    },
    /**
     * 请求电影数据
     */
    getMovieListData: function(url, key, categoryTitle) {
      //使用http替换
      http.getMovieListData(url, (data) => {
        this.processDoubanData(data, key, categoryTitle)
      });
    },
    /**
     * 处理数据
     */
    processDoubanData: function(data, key, categoryTitle) {
      // 组装数据格式
      var movieSubjects = {};
      movieSubjects[key] = {
        categoryTitle: categoryTitle,
        movieData: data
      };
      // 填充
      this.setData(movieSubjects);
    },
  }
})