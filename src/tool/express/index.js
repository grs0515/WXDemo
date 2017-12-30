var http = require("../../../util/http.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    expressNu: null,
    expressInfo: null
  },

 //点击查询
  btnClick:function(){
    //例子 806820160474
    var mThis = this;
    http.getExpressInfo(this.data.expressNu,function(data){
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
})