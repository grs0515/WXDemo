// src/jikexueyuan/day03/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    title:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id:options.id,
      title:options.title
    })
  },

})