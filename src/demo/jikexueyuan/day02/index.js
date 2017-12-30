
var app = require("../../../../util/http.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    expressNu:null,
    expressInfo:null
  },
  view1Click:function(){
    console.log("view1Click")
  },
  view2Click: function (e) {
    console.log("view2Click")
    console.log(e)
  },
  view3Click: function (e) {
    console.log("view3Click")
    console.log(e)
  },
  //点击查询
  btnClick:function(){
    //例子 806820160474
    var mThis = this;
    app.getExpressInfo(this.data.expressNu,function(data){
      console.log(data)
      mThis.setData({
        expressInfo:data
      })
    })
  },
  //动态获取输入框内容
  getInput:function(e){
    this.setData({
      expressNu: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */ 
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})