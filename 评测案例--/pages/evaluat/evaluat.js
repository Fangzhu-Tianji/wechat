Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      url: 'https://cnodejs.org/api/v1/user/alsotang', //仅为示例，并非真实的接口地址
      data: {},
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        _this.setData({
          info: res.data.data
        })
      }
    })
  }
})