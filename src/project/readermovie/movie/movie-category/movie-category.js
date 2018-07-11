// src/project/readermovie/movie/movie-category/movie-category.js
var app = getApp();
var http = require("../../../../../util/http.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var category = options.category;
    wx.setNavigationBarTitle({
      title: category
    });
    var url = "";
    switch (category) {
      case "正在热映":
        url = app.doubanBase + "/v2/movie/in_theaters";
        break;
      case "即将上映":
        url = app.doubanBase + "/v2/movie/coming_soon";
        break;
      default:
        url = app.doubanBase + "/v2/movie/top250";
        break;
    }
    //请求
    http.getMovieListData(url, (data) => {
      this.setData({
        movieCatagory: data.subjects,
        requestUrl: url,
        startCount: 20//默认
      })
    });
  },
  /**
  * 点击详情
  */
  onItemClick: function (event) {
    var movieId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../movie-detail/movie-detail?movieId=' + movieId
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    var refreshUrl = this.data.requestUrl + "?start=0&count=20";
    http.getMovieListData(refreshUrl, (data) => {
      this.setData({
        movieCatagory: data.subjects
      });
      this.data.startCount = 20;//默认
      wx.stopPullDownRefresh();
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var loadUrl = this.data.requestUrl + "?start=" + this.data.startCount + "&count=20";
    http.getMovieListData(loadUrl, (data) => {
      console.log(data.subjects);
      if (data.isEmpty) return;
      var newMovieCategory = this.data.movieCatagory.concat(data.subjects);
      this.data.startCount += 20;
      this.setData({
        movieCatagory: newMovieCategory,
      });
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log("onShareAppMessage");
  }
})