// src/project/readermovie/main/index.js
var tabDatas = require("../../../../data/tabbar-data.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    srollHeight: 0,
    selectTabId: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initScrollHeight();

    this.setData({
      tabDataList:tabDatas.configDatas
    })
  },
  /**
   * 初始化滚动布局高度
   */
  initScrollHeight: function () {
    try {
      var res = wx.getSystemInfoSync();
      console.log(res.windowWidth);
      this.setData({
        // srollHeight高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将300rpx转换为px）,80为tabbar-component.wxss定义的
        srollHeight: res.windowHeight - res.windowWidth / 750 * (80 + 3)
      });
    } catch (e) {
      console.log(e);
    }
  },
  /**
   * 底部导航回调
   */
  onClickTabLisenter: function (event) {
    console.log(event.detail);
    //默认初始化数据
    this.setData({
      selectTabId: event.detail.tabid,
    });
    wx.setNavigationBarTitle({
      title: event.detail.tabtitle,
    });
  }
})