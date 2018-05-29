// components/component-tag-name.js
var myBehavior = require('my-behavior')
Component({
  behaviors: [myBehavior],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  //外部样式,需要改变的Class
  externalClasses: ['outer-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    myProperty: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 'myProperty', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal) {
        console.log("新内容: "+newVal);
        console.log("旧内容: " + oldVal);
        this.methods.onTap
      } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    },
    myProperty2: String // 简化的定义方式
  },

  /**
   * 组件的初始数据
   */
  data: {
  // 私有数据，可用于模版渲染
    xxList: [{
      listA: 'init data'
    }]
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { },
  moved: function () { },
  detached: function () { },

  /**
   * 组件的方法列表
   */
  methods: {
    onMyButtonTap: function () {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
        myProperty: 'Test'
      })
    },
    _myPrivateMethod: function () {
      // 内部方法建议以下划线开头
      this.replaceDataOnPath(['xxList', 0, 'listA'], 'myPrivateData') // 这里将 xxList数据 设为 'myPrivateData'
      this.applyDataUpdates()
    },
    onTap: function () {
      // this.triggerEvent('customevent', {}) 
      // 只会触发 pageEventListener2
      this.triggerEvent('customevent', {}, { bubbles: true }) // 会依次触发 pageEventListener2 、 pageEventListener1
      // this.triggerEvent('customevent', {}, { bubbles: true, composed: true }) 
      // 会依次触发 pageEventListener2 、 anotherEventListener 、 pageEventListener1
    }
  }
})
