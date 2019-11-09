// pages/switch_images/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList:[
      '../../images/boy.png',
      '../../images/girl.png',
      '../../images/left.gif',
      '../../images/right.png',
    ],
    index:0,
  },
  // 上一页的点击事件
  prevTap(){
    let index = --this.data.index;
    if(index === -1){
      index = this.data.imgList.length-1;
    }
    this.setData({
      index: index
    })
  },
  // 下一页的点击事件
  nextTap(){
    let index = ++this.data.index;
    if(index === this.data.imgList.length){
      index = 0;
    }
    this.setData({
      index:index
    })
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

  }
})