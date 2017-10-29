var app = getApp();
Page({
  data: {
    nickName: '',
    avatarUrl: '../../images/userinfo-d.png',
    show: "none"
  },
  onLoad: function (options) {
    if (app.globalData.userInfo.nickName == null && app.globalData.userInfo.avatarUrl == null){
      wx.showModal({
        title: '提示',
        content: '登录后方能进入个人中心，确定登录？',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../login/login'
            })
          } else if (res.cancel) {
            wx.switchTab({
              url: '../index/index'
            })
          }
        }
      })
    }
    else if (app.globalData.userInfo.nickName !== null && app.globalData.userInfo.avatarUrl == null) {
      this.setData({
        nickName: app.globalData.userInfo.nickName,
        show: "block"
      })
    }
    else {
      this.setData({
        nickName: app.globalData.userInfo.nickName,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        show: "block"
      })
    }
  },
  onShow: function () {
    if (app.globalData.userInfo.nickName == null && app.globalData.userInfo.avatarUrl == null) {
      wx.showModal({
        title: '提示',
        content: '登录后方能进入个人中心，确定登录？',
        success: function (res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../login/login'
            })
          } else if (res.cancel) {
            wx.switchTab({
              url: '../index/index'
            })
          }
        }
      })
    }
    else if (app.globalData.userInfo.nickName !== null && app.globalData.userInfo.avatarUrl == null) {
      this.setData({
        nickName: app.globalData.userInfo.nickName,
        show: "block"
      })
    }
    else {
      this.setData({
        nickName: app.globalData.userInfo.nickName,
        avatarUrl: app.globalData.userInfo.avatarUrl,
        show: "block"
      })
    }
  },
  goMap: function(){
    // wx.getLocation({
    //   type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    //   success: function (res) {
    //     console.log(res)
    //     var latitude = res.latitude
    //     var longitude = res.longitude
    //     wx.openLocation({
    //       latitude: 22.60651,
    //       longitude: 114.04657,
    //       scale: 28,
    //       name: '横岭',
    //       address: '深圳市龙华新区横岭工业园'
    //     })
    //   }
    // })
    wx.openLocation({
      latitude: 22.60651,
      longitude: 114.04657,
      scale: 28,
      name: '横岭',
      address: '深圳市龙华新区横岭工业园'
    })
  },
  goTel: function(){
    wx.makePhoneCall({
      phoneNumber: '13720345691'
    })
  },
  goPhoto: function(){
    wx.navigateTo({
      url: '../photo/photo'
    })
  },
  goSet: function(){
    this.setData({
      show: "none"
    })
    wx.navigateTo({
      url: '../set/set'
    })
  }
})