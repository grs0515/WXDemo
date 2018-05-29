App({

  globalData: 'I am global data',
  // doubanBase: "https://api.douban.com",
  doubanBase: "http://t.yushu.im",
  //用户信息
  appData:{
    userInfo:null
  },
  deviceData:{
    model:"",
    pixelRatio:0,
    windowWidth:0,
    // windowHeight:0,//每个界面高度不一样
    language:"",
    version:"",
    platform:""
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("onLaunch")
    try {
      //加载系统信息
      var res = wx.getSystemInfoSync()
      this.deviceData.model = res.model;
      this.deviceData.pixelRatio = res.pixelRatio;
      this.deviceData.windowWidth = res.windowWidth;
      this.deviceData.windowHeight = res.windowHeight;
      this.deviceData.language = res.language;
      this.deviceData.version = res.version;
      this.deviceData.platform = res.platform;
    } catch (e) {
      console.log(e);
    }
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("onShow")
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("onError")
    console.log(msg)
  }
})
