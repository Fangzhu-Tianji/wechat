var data = require('../../../json/data.js');
var data2 = data.photo2;
Page({
  data: {
    show: false,
    numbers: 0,
    pix: data.photo1,
    scrollTop: {
      goTop: false,
      top: 0
    }
  },
  onLoad: function (options) {
  },
  previewImage: function(e){
    wx.previewImage({
      current: e.target.dataset.src,
      urls: this.data.pix
    })
  },
  scroll: function (e) {
    var top = e.detail.scrollTop;
    if(top > 300){
      this.setData({
        "scrollTop.goTop": true
      })
    }
    else {
      this.setData({
        "scrollTop.goTop": false
      })
    }
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
      }, 1000)
    }    
  },
  goTop: function(){
    var _top = this.data.scrollTop.top;
    if (_top == 1) {
      _top = 0;
    } else {
      _top = 1;
    }  
    this.setData({
      "scrollTop.top": _top
    })
  }
})