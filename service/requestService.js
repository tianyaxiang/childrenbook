var utils = require("../utils/util.js");
function requestNoToken(r) {
  wx.request({
    url: r.url,
    data: r.data,
    method: r.method ? r.method : 'POST',
    success: function (res) {
      // wx.hideToast();
      r.success(res);
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
function request(r) {
  wx.request({
    url: r.url,
    data: r.data,
    method: r.method ? r.method : 'POST',
    header: {
    },
    success: function (res) {
      // wx.hideToast();
      r.success(res);
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

function post(r) {

}

function upload(url, path, callback) {
  wx.showToast({
    icon: "loading",
    title: "正在上传图片…"
  }),
    wx.uploadFile({
      url: url,
      filePath: path[0],
      name: 'file',
      header: { "Content-Type": "multipart/form-data", 'ukey': utils.getToken() },
      formData: {
      },
      success: function (res) {
        console.log(res);
        if (res.statusCode != 200) {
          wx.showModal({
            title: '提示',
            content: '上传失败',
            showCancel: false
          })
          return;
        }
        var data = res.data
        wx.showToast({
          title: '上传成功',
          icon: 'success',
          duration: 2000
        })
        console.log(data)
        callback(data);
      },
      fail: function (e) {
        wx.showModal({
          title: '提示',
          content: '上传失败',
          showCancel: false
        })
      },
      complete: function () {
        wx.hideToast();  //隐藏Toast
      }
    })
}

module.exports = {
  request
  , upload,
  requestNoToken
}  