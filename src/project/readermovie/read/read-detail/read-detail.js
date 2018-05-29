// src/project/readermovie/read/read-detail/read-detail.js
var postDatas = require("../../../../../data/posts-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isMusicPlaying: false,
    ifStarting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.postId;
    this.setData({
      postData: postDatas.postList[postId],
      currentPostId: postId
    });
    /**获取播放状态 */
    this.getWxBackgroundAudioPlayerState();
    //监听
    wx.onBackgroundAudioPlay(this.onAudioPlayListener);
    wx.onBackgroundAudioPause(this.onAudioPlayListener);
    wx.onBackgroundAudioStop(() => {
      this.setData({
        isMusicPlaying: false,
        ifStarting: false
      })
    });
    var isCollectList = wx.getStorageSync("posts_collected");
    if (isCollectList) {
      this.setData({
        isCollect: isCollectList[postId]
      });
    } else {
      var isCollectList = {};
      isCollectList[postId] = false;
      wx.setStorageSync("posts_collected", isCollectList)
    }

  },
  /**
   * 监听音乐播放状态变化。
   */
  onAudioPlayListener: function () {
    console.log("音乐播放状态变化。");
    this.getWxBackgroundAudioPlayerState();
  },
  /**
   * 获取播放状态 
   */
  getWxBackgroundAudioPlayerState: function () {
    var that = this;
    var currentUrl = this.data.postData.music.url;
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        //0:暂停;1:继续;2:播放/停止
        var status = res.status
        //同一个URL, 继续
        var ifStatus = currentUrl == res.dataUrl && res.status == 1;
        //ifStarting 点击播放
        var ifStarting = res.status == 2 && that.data.ifStarting;
        that.setData({
          isMusicPlaying: ifStatus || ifStarting ? true : false
        });
      }
    });
  },
  /**
   * 点击播放音乐
   */
  onClickAudioStrat: function (event) {
    var music = this.data.postData.music;
    wx.playBackgroundAudio({
      dataUrl: music.url,
      title: music.title,
      coverImgUrl: music.coverImg
    });
    this.setData({
      isMusicPlaying: true,
      ifStarting: true
    })
  },

  /**
   * 点击暂停音乐
   */
  onClickAudioPasue: function (event) {
    wx.pauseBackgroundAudio();
    this.setData({
      isMusicPlaying: false,
      ifStarting: false
    })
  },
  /**
   * 收藏-同步
   */
  onClickCollect: function () {
    var collectList = wx.getStorageSync("posts_collected");
    var isCollect = !collectList[this.data.currentPostId];
    collectList[this.data.currentPostId] = isCollect;
    wx.showModal({
      title: '收藏',
      content: isCollect ? '收藏该文章？' : '取消收藏该文章？',
      success: (res) => {
        if (res.confirm) {
          wx.setStorageSync("posts_collected", collectList)
          this.setData({
            isCollect: isCollect
          })
        }
      }
    })
  }
})