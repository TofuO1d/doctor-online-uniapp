'use strict'
exports.main = async (event, context) => {
  // 云函数获取实人认证实例
  const frvManager = uniCloud.getFacialRecognitionVerifyManager({
    requestId: context.requestId,
  })

  // 云函数提交姓名、身份证号以获取认证服务的certifyId
  const result = await frvManager.getCertifyId({
    realName: event.realName,
    idCard: event.idCard,
    metaInfo: event.metaInfo,
  })

  //返回数据给客户端
  return result
}
