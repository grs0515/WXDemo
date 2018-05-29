// my-behavior.js
module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String,
      value:"myBehaviorProperty"
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function () { },
  methods: {
    myBehaviorMethod: function () {
      console.log('log from my-behavior.js')
    }
  }
})