Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    txt: "这里text是内容",
    list:["aaa","bbb","ccc"],
    importText:"导入数据的内容"
  },
  btnClick: function () {
    console.log("按钮被点击了")
    var show = this.data.isShow
    var newList = this.data.list
    newList.shift()//删除一项内容
    this.setData(
      { txt: "恭喜你 中奖了~"
      ,isShow:!show
      ,list:newList
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