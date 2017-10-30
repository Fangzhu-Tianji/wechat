Page({
  data: {
    companyImg: [
      "http://webapp.jinglih.com/images/wechat/jqx-1.jpg",
      "http://webapp.jinglih.com/images/wechat/jqx-2.jpg",
      "http://webapp.jinglih.com/images/wechat/jqx-3.jpg",
      "http://webapp.jinglih.com/images/wechat/jqx-4.jpg",
      "http://webapp.jinglih.com/images/wechat/jqx-5.jpg",
      "http://webapp.jinglih.com/images/wechat/jqx-6.jpg"
    ]
  },
  onLoad: function (options) {
    
  },
  onShareAppMessage: function (res) {
    return {
      title: '金融投资  多元产业',
      path: '/page/index',
      imageUrl: 'http://webapp.jinglih.com/images/wechat/jqx-6.jpg',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  openMap: function(){
    wx.openLocation({
      latitude: 22.54247,
      longitude: 114.05601,
      scale: 28,
      name: '金千禧金融控股',
      address: '深圳市福田区益田路6001号太平金融大厦28楼'
    })
  },
  openTel: function(){
    wx.makePhoneCall({
      phoneNumber: '0755-23947300'
    })
  },
  openImg: function(e){
    wx.previewImage({
      current: e.target.dataset.src,
      urls: this.data.companyImg
    })
  }
})