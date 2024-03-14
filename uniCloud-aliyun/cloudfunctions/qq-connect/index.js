'use strict'

exports.main = async (event, context) => {
  // 获取QQ平台提供的 openid
  const {
    data: { client_id, openid },
  } = await uniCloud.request({
    url: 'https://graph.qq.com/oauth2.0/me',
    data: {
      access_token: event.access_token,
      fmt: 'json',
    },
  })

  // 调用 QQ 平台的API 获取用户信息
  const {
    data: { nickname, figureurl_2 },
  } = await uniCloud.request({
    url: 'https://graph.qq.com/user/get_user_info',
    data: {
      access_token: event.access_token,
      oauth_consumer_key: client_id,
      openid: openid,
    },
  })

  //返回数据给客户端
  return { openId: openid, nickname, avatar: figureurl_2 }
}
