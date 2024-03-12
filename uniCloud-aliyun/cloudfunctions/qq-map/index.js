'use strict'
exports.main = async (event, context) => {
  //event为客户端上传的参数
  console.log('event : ', event)

  // uni.request 用在页面里发请求
  // uniCloud.request 用在云函数中发请求

  const result = await uniCloud.request({
    url: 'https://apis.map.qq.com/ws/direction/v1/driving',
    data: {
      key: 'MZBBZ-QGKCJ-OZNFL-KIWO5-3ZAT2-SLFDW',
      from: '40.060539,116.343847',
      to: '40.086757,116.328634',
    },
  })

  console.log('qq 地图', result)

  //返回数据给客户端
  return { name: '小小明' }
}
