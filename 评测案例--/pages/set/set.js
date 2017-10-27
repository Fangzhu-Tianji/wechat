var app = getApp();
Page({
  data: {
  
  },
  onLoad: function (options) {
  
  },
  outLogin: function(){
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: function (res) {
        if (res.confirm) {
          app.globalData.userInfo.nickName = null;
          app.globalData.userInfo.avatarUrl = null;
          wx.switchTab({
            url: '../index/index'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})