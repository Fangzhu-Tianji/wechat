var app = getApp();
Page({
  data: {
    username: '',
    password: '',
    loading: false
  },
  onLoad: function (options) {
    
  },
  usernameInput: function(e){
    this.setData({
      username: e.detail.value
    })
  },
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  submit: function(e){
    if(this.data.username == "" || this.data.password == ""){
      wx.showToast({
        title: '请填写表单数据',
        icon: 'loading',
        duration: 500
      })
    }
    else {
      app.globalData.userInfo.nickName = this.data.username;
      this.setData({
        loading: true
      })
      setTimeout(function(){
        wx.switchTab({
          url: '../user/user'
        })
      },1000)
    }
  },
  wxLogin: function(){
    wx.login({
      success: function(res){
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getUserInfo({
      success: (res) => {
        app.globalData.userInfo.nickName = res.userInfo.nickName;
        app.globalData.userInfo.avatarUrl = res.userInfo.avatarUrl;
        wx.switchTab({
          url: '../user/user'
        })
      }
    })
    // wx.getSetting({
    //   success: (res) => {
    //     console.log(res)
    //     if (res.authSetting['scope.userInfo']) {
    //       wx.getUserInfo({
    //         success: (res) => {
    //           app.globalData.userInfo.nickName = res.userInfo.nickName;
    //           app.globalData.userInfo.avatarUrl = res.userInfo.avatarUrl;
    //           wx.switchTab({
    //             url: '../user/user'
    //           })
    //         }
    //       })

    //     }
    //   }
    // })
  }
})