
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    //全局数据
    if (app.appData.userInfo == null) {
      wx.redirectTo({
        url: '../day03/login/login',
      })
    } else {
      this.setData({ userInfo: app.appData.userInfo })
    }
  },
  //跳转
  btnJump: function () {
    wx.navigateTo({
      url: '../day03/user/user?id=1&title=标题',
    })
  },
})