// src/project/readermovie/movie/movie-detail/movie-detail.js
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
    var movieId = options.movieId;
    var detailUrl = app.doubanBase + "/v2/movie/subject/" + movieId;
    http.getMovieListData(detailUrl, (data) => {
      this.setData({
        detail: data
      })
    });
  },
  /**
   * 1,点击预览图片
   */
  onPreviewImage: function(event) {
    var src = event.currentTarget.dataset.src;
    var arrs = [];
    var detail = event.currentTarget.dataset.detail;
    if (detail) {
      for(var index in detail){
        var url = detail[index].avatars.large;
        arrs.push(url);
      }
    }else{
      arrs.push(src);
    }
    wx.previewImage({
      urls: arrs,
      current: src
    })

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})