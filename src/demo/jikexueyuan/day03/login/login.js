
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: null,
    password: null
  },
  usernameInput: function (e) {
    this.setData({ username: e.detail.value })
  },
  passwordInput: function (e) {
    this.setData({ password: e.detail.value })
  },
  btnLogin:function(){
    app.appData.userInfo = {
      username:this.data.username,
      password: this.data.password
    }
    console.log(app.appData.userInfo)
    wx.redirectTo({
      url: '../index',
    })
  }
})