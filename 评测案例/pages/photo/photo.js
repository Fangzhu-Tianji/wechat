var data = require('../../json/data.js');
var data2 = data.photo2;
Page({
  data: {
    show: false,
    numbers: 0,
    pix: data.photo1
  },
  onLoad: function (options) {
  },
  previewImage: function(e){
    wx.previewImage({
      current: e.target.dataset.src,
      urls: this.data.pix
    })
  },
  scroll: function(e){
    // console.log(e)
  },
  tolower: function(e){
    var _this = this;
    if (_this.data.numbers == 0){
      var pixs = _this.data.pix;
      _this.setData({
        show: true
      })
      var timeOut = setTimeout(function () {
        _this.setData({
          pix: pixs.concat(data2),
          numbers: 1,
          show: false
        })
        console.log(_this.data.pix)
      }, 2000)
    }    
  }
})