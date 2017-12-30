
/**
 * 获取快递信息
 */
function getExpressInfo(nu, callBack) {
  wx.request({
    url: 'http://apis.baidu.com/kuaidicom/express_api/express_api?muti=0&order=desc&nu=' + nu,
    method: 'GET',
    data: {
      x: '',
      y: ''
    },
    header: {
      // 'content-type': 'application/json',// 默认值
      'apikey': '985236102e5c282413267e40b3a049f3'
    },
    success: function (res) {
      // console.log(res.data)
      callBack(res.data)
    }
  })
}


//==========================导出==========================
exports.getExpressInfo = getExpressInfo