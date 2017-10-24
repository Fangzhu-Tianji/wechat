Page({
  data: {
    text: "Page animation",
    animation: '',
    animation2: ''
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
    this.animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 4000,
      timingFunction: "ease",
      delay: 0
    })
    this.animation2 = wx.createAnimation({
      transformOrigin: "10% 10%",
      duration: 6000,
      timingFunction: "ease",
      delay: 0
    })
  },

  /**
   * 旋转
   */
  rotate: function () {
    //顺时针旋转10度
    //
    this.animation.rotate(150).step()
    this.setData({
      //输出动画
      animation: this.animation.export()
    })
  },
  rotate2: function () {
    //顺时针旋转10度
    //
    this.animation2.rotate(250).step()
    this.setData({
      //输出动画
      animation2: this.animation2.export()
    })
  },

  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})