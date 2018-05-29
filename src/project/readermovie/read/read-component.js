// src/project/readermovie/read/read-component.js
var postsData = require("../../../../data/posts-data.js");
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件实例进入页面节点树时执行
   */
  attached: function (event) {
    this.setData({
      postList: postsData.postList,
    });

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPostTap:function(event){
      var postId = event.currentTarget.dataset.postid;
      wx.navigateTo({
        url: '../read/read-detail/read-detail?postId='+postId,
      })
    }
  }
})
