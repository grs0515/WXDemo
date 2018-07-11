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
    success: function(res) {
      // console.log(res.data)
      callBack(res.data)
    }
  })
}
/**
 * 获取电影信息
 */
function getMovieListData(url, callBack) {
  wx.showLoading({
    title: '正在加载中...'
  });
  wx.showNavigationBarLoading();
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "Content-Type": "json"
    },
    success: (res) => {
      wx.hideNavigationBarLoading();
      wx.hideLoading();
      console.log(res.data);
      callBack(res.data)
    },
    fail: (err) => {
      wx.hideNavigationBarLoading();
      wx.hideLoading();
      console.log(err)
      wx.showToast({
        title: err,
        icon: 'fail',
        duration: 2000,
      })
    }
  })
}
//==========================导出==========================
module.exports = {
  getExpressInfo: getExpressInfo,
  getMovieListData: getMovieListData
}