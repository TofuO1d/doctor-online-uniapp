'use strict'

exports.main = async (event, context) => {
  // 路线规划
  const { data } = await uniCloud.request({
    url: 'https://apis.map.qq.com/ws/direction/v1/driving/',
    data: {
      key: 'FFABZ-43ZHH-72BDF-WAD6P-FDZYK-UHBOQ',
      from: event.from,
      to: event.to,
    },
  })

  //返回数据给客户端
  return data
}
