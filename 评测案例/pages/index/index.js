Page({
  data: {
    imgUrls: [
      '../../images/banner-2.jpg',
      '../../images/banner-1.jpg',
      '../../images/banner-3.jpg'
    ],
    contentItem: ['','','',''],
    listItem: ['', '', '', '']
  },
  onLoad: function (options) {
    
  },
  onShareAppMessage: function (res) {
    return {
      title: '首页',
      path: '/page/index',
      imageUrl: '../../images/transmit-img.jpg',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})