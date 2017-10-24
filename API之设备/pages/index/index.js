//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    wx.getSystemInfo({
      success: function(res){
        console.log(res);
      }
    })
    console.log(wx.canIUse('getSystemInfo.success.screenWidth'))
    wx.getNetworkType({
      success: function(res){
        console.log(res.networkType);
      }
    })
    // wx.setScreenBrightness({
    //   value: 1,
    //   success: function(res){
    //     console.log(res);
    //   }
    // })
    // wx.vibrateLong({
    //   success: function(){

    //   }
    // })
    wx.onUserCaptureScreen(function (res) {
      console.log('用户截屏了')
    })

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  tel: function(){
    wx.makePhoneCall({
      phoneNumber: '拨打13722222222' //仅为示例，并非真实的电话号码
    })
  },
  scanCode: function(){
    wx.scanCode({
      onlyFromCamera: false,
      success: (res) => {
        console.log(res)
      }
    })
  },
  setClipboardData: function(){
    wx.setClipboardData({
      data: 'this is 剪切板',
      success: (res) => {
        console.log(res);
      }
    })
  },
  getClipboardData: function(){
    wx.getClipboardData({
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  addPhoneContact: function(){
    wx.addPhoneContact({
      firstName: '花花'
    })
  }
})
