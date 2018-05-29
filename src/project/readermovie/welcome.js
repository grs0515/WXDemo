// src/project/readermovie/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  onTapJourney: function (event) {
    //带返回
    // wx.navigateTo({
    //   url: "posts/post"
    // });
    wx.redirectTo({
      url: "main/index"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("加载 welcome onload");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

})