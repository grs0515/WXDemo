// src/demo/index.js
var appconfig = require("../../data/appconfig.js");
Page({

  onLoad:function(options){
    this.setData({
      listDatas: appconfig.configDatas.demoList
    })
  }
})