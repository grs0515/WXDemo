// src/project/readermovie/movie/movie-component.js
var app = getApp();
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

  },
  /**
   * 组件实例进入页面节点树时执行
   */
  attached: function (event) {

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
      * 请求电影数据
      */
    getMovieListData: function (url, key, categoryTitle) {
      wx.request({
        url: url,
        method: 'GET',
        header: {
          "Content-Type": "json"
        },
        success: (res) => {
          this.processDoubanData(res.data, key, categoryTitle)
        },
        fail: (err) => {
          console.log(err)
        }
      })
    },
    /**
     * 处理数据
     */
    processDoubanData: function (data, key, categoryTitle) {
      var movieSubjects = data.subjects;
      console.log(movieSubjects)
    },
  }
})
