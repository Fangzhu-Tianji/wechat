var app = getApp();
Page({
  data: {
    nickName: '',
    avatarUrl: '../../images/userinfo-d.png',
    show: "none"
  },
  onLoad: function (options) {
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
  }
})