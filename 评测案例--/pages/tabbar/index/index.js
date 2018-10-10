var indexData = require("../../../json/data.js");
Page({
  data: {
    imgUrls: [
      '/images/banner-2.jpg',
      '/images/banner-1.jpg',
      '/images/banner-3.jpg'
    ],
    contentItem: ['', '', '', ''],
    listItem: ['', '', '', '']
  },
  onLoad: function (options) {
    this.setData({
      contentItem: indexData.indexGood
    })
    this.setData({
      listItem: indexData.indexHot
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: '首页',
      path: '/pages/tabbar/index/index',
      imageUrl: '/images/transmit-img.jpg',
      success: function (res) {
        // 转发成功
        console.log(res)
      },
      fail: function (res) {
        // 转发失败
        console.log(res)
      }
    }
  }
})