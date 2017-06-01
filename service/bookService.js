var utils = require("../utils/util.js");
var book = require("./requestService.js");
var config = require("../config.js");
const cacheKey = 'book_'
function getBookId(id, callback) {
  let hasCache = false;
  let bookCacheKey = cacheKey + id;
  try {
    var value = wx.getStorageSync(bookCacheKey)
    if (value) {
      console.log('res data' + value)
      callback(value)
      return;
    }
  } catch (e) {
    console.log(e)
  }

  book.request({
    url: config.bookUrl + id,
    method: 'GET',
    header: {
    },
    success: function (res) {
      try {
        wx.setStorageSync(bookCacheKey, res.data)
      } catch (e) {
      }
      callback(res.data)
    },
    fail: function (e) {
      console.log(JSON.stringify(e));
      wx.showModal({
        title: '提示',
        content: '网络错误,请检查网络',
        showCancel: false
      })
    },
    complete: function () {
      //wx.hideToast();
    }
  })
}

module.exports = {
  getBookId
}  