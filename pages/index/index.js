var bookService = require("../../service/bookService.js");
const pageSize = 5;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    pageNum: 0,
    bookIds: [1007914, 1036274, 1001136, 2361768, 1941301,
      4826530, 1052990, 1433640, 1021193, 1004088,
      1028404, 1982200, 1907739, 1041128, 1064841,
      1028270, 1007952, 1270150, 1433572, 1077778],
    books: [],
    loading: true,
    loaded: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBookIds();
  },
  getBookIds() {
    let that = this;
    for (var i = that.data.pageNum * pageSize; i < (that.data.pageNum + 1) * pageSize; i++) {
      if (i >= 20) {
        that.setData({
          loading: false,
          loaded: true
        })
        return;
      }
      bookService.getBookId(that.data.bookIds[i], function (data) {
        let items = that.data.books.concat(data)
        that.setData({
          books: items,
          loading: false
        })
      });
    }
    this.data.bookIds.map(m => {

    })
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
    let pageNum = this.data.pageNum >= 4 ? 4 : this.data.pageNum + 1
    this.setData({
      loading: true,
      pageNum: pageNum
    })
    this.getBookIds()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})