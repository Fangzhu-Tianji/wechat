Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/swiper-1.jpg',
      '../../images/swiper-1.jpg',
      '../../images/swiper-1.jpg'
    ],
    zizhiImg: [
      '../../images/zizhi-1.jpg',
      '../../images/zizhi-2.jpg',
      '../../images/zizhi-3.jpg'
    ],
    markers: [{
      id: 0,
      latitude: 22.54247,
      longitude: 114.05601
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  // 地图
  markertap: function(e){
    wx.openLocation({
      latitude: 22.54247,
      longitude: 114.05601,
      scale: 28,
      name: '金千禧金融控股',
      address: '深圳市福田区益田路6001号太平金融大厦28楼'
    })
  },
  // 电话
  openTel: function(){
    wx.makePhoneCall({
      phoneNumber: '0755-23917300'
    })
  }
})