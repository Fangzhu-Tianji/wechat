//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    markers: [{
      id: 0,
      latitude: 22.543099,
      longitude: 114.057868,
      title: 'hhshs',
      iconPath: '../../images/map.png',
      width: 50,
      height: 30,
      rotate: 0,
      callout: {
        content: '这是财视通公司',
        color: '#ff0000',
        fontSize: 16,
        borderRadius: 10,
        bgColor: '#000000',
        padding: 10,
        display: 'ALWAYS'
      }
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
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

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res);
      }
    })
    // wx.chooseLocation({
    //   success: function(res){
    //     console.log(res);
    //   }
    // })

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  marker: function(res){
    console.log(res)
  },
  callout: function(res){
    console.log(res)
    wx.openLocation({
      latitude: 22.543099,
      longitude: 114.057868,
      scale: 28
    })
  }
})
