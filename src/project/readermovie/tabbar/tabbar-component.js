// util/xtabbar/tabbar-component.js
var tabbarData = require("../../../../data/tabbar-data.js");
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    initTabData: {
      type: String,
      value: "test...."
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabbarList: []
  },
  /**
   * 组件实例进入页面节点树时执行
   */
  attached: function (event) {
    this.setData({
      tabbarList: tabbarData.configDatas,
    });
    //初始化传递数据
    var initTabData = {
      tabid: tabbarData.configDatas[0].tabId,
      tabtitle: tabbarData.configDatas[0].title,
      tabselect: tabbarData.configDatas[0].tabSelect,
      tabcount: tabbarData.configDatas.length
    };
    this.triggerEvent('tabevent', initTabData);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // target 和currentTarget
    // target指的是当前点击的组件 和currentTarget 指的是事件捕获的组件
    // target这里指的是image，而currentTarget指的是view
    onClickTabBar: function (event) {
      var list = this.data.tabbarList;
      var tabId = event.currentTarget.dataset.tabid;
      var tabSelect = event.currentTarget.dataset.tabselect;
      var tempList = [];
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        if (item.tabId == tabId) {
          item.tabSelect = !tabSelect;
        } else {
          item.tabSelect = false;
        }
        tempList.push(item);
      }
      this.setData({
        tabbarList: tempList
      });
      // var myEventDetail = {} // detail对象，提供给事件监听函数
      // var myEventOption = {} // 触发事件的选项
      // this.triggerEvent('myevent', myEventDetail, myEventOption)
      //和初始化传递格式一致 {tabid: 2, tabjumpurl: "", tabselect: false}
      this.triggerEvent('tabevent', event.currentTarget.dataset);
    }
  }
})
