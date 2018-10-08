Page({
  /**
   * 页面的初始数据
   */
  data: {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  //进入关于我们
  goAboutUs: function () {
    wx.navigateTo({
      url: '../../user/about-us/about-us'
    })
  }
})