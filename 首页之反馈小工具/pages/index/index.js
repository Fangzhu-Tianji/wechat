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
    // wx.showToast({
    //   title: '成功案例你是谁啊哈哈哈哈',
    //   icon: 'loading',
    //   // image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    //   duration: 2000,
    //   mask: true,
    //   success: function(e){
    //     console.log(e);
    //   },
    //   fail: function (e) {
    //     console.log(e);
    //   }
    // })
    // wx.showLoading({
    //   title: '加载中',
    // })
    // setTimeout(function(){
    //   wx.hideLoading()
    // },4000)
    
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
  modal: function(){
    wx.showModal({
      title: '这是模态',
      content: '哈哈哈哈哈哈',
      // showCancel: false,
      success: function(res){
        if(res.confirm){
          console.log('确定')
        }
        else if(res.cancel){
          console.log('取消')
        }
      }
    })
  },
  actionSheet: function(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res)
      },
      fail: function (res) {
        console.log(res)
      }
    })
  }
})