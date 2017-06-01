/**
 * 小程序配置文件
 */
var host = "https://api.douban.com/v2/book/"

var config = {
  host,
  loginUrl: `${host}/passport/login`,
  // 用code换取openId
  openIdUrl: `https://${host}/openid`,

  // 测试的信道服务接口
  tunnelUrl: `https://${host}/tunnel`,

  // 生成支付订单的接口
  paymentUrl: `https://${host}/payment`,

  // 发送模板消息接口
  templateMessageUrl: `https://${host}/templateMessage`,
};

module.exports = config
