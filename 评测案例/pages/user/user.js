var app = getApp();
Page({
  data: {
    nickName: '',
    avatarUrl: '../../images/userinfo-d.png',
    show: "none"
  },
  onLoad: function (options) {
    this.setData({
      show: "block"
    })
    if (app.globalData.userInfo.nickName == null && app.globalData.userInfo.avatarUrl == null){
      wx.redirectTo({
        url: '../login/login'
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
  }
})