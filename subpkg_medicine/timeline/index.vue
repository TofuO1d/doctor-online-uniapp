<script setup>
  import { ref } from 'vue'
  import { logisticsApi } from '@/services/medicine'

  // 获取地址参数
  const props = defineProps({
    id: String,
  })

  // 地图路线
  const polyline = ref([])
  // 起点终点标记
  const markers = ref([])
  // 地图中心点
  const center = ref({})
  // 当前位置
  const logisticsInfo = ref({})

  // 胶囊距离顶部的距离
  let top = 0

  // #ifdef MP-WEIXIN
  const menuButton = uni.getMenuButtonBoundingClientRect()
  top = menuButton.top - (50 - menuButton.height) / 2 + 'px'
  // #endif

  // 查看物流信息
  async function getLogistics() {
    // 调用接口
    const { code, data, message } = await logisticsApi(props.id)
    // 判断接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)
    // 渲染数据
    logisticsInfo.value = data

    // 起始点坐标
    const from = data.logisticsInfo[0]
    // 终止点坐标
    const to = data.logisticsInfo[data.logisticsInfo.length - 1]

    // 线路标记点，起点、终点
    markers.value = [
      {
        id: 1,
        latitude: from.latitude,
        longitude: from.longitude,
        iconPath: '/static/images/start.png',
        width: 25,
        height: 30,
      },
      {
        id: 2,
        latitude: to.latitude,
        longitude: to.longitude,
        iconPath: '/static/images/end.png',
        width: 25,
        height: 30,
      },
    ]

    // 调用云函数获取路线坐标点
    uniCloud.callFunction({
      name: 'qq-maps',
      data: {
        from: Object.values(from).join(','),
        to: Object.values(to).join(','),
      },
      success({ result }) {
        const coords = result.result.routes[0].polyline
        const points = []

        //坐标解压（返回的点串坐标，通过前向差分进行压缩）
        for (let i = 2; i < coords.length; i++) {
          coords[i] = Number(coords[i - 2]) + Number(coords[i]) / 1000000
        }

        //将解压后的坐标放入点串数组pl中
        for (let i = 0; i < coords.length; i += 2) {
          points.push({ latitude: coords[i], longitude: coords[i + 1] })
        }

        // 假设位置
        const current = points[100]
        // 地图中心点为运输车辆所在位置
        center.value = current

        // 标记运输车辆的位置
        markers.value.push({
          id: 3,
          latitude: current.latitude,
          longitude: current.longitude,
          iconPath: '/static/images/car.png',
          width: 50,
          height: 30,
        })

        // 路线轨迹
        polyline.value.push({
          points,
          color: '#16c2a3',
          width: 5,
        })
      },
      fail(error) {
        console.log(error)
      },
    })
  }

  // 自定义返回
  function onBackClick() {
    uni.navigateBack({ delta: 1 })
  }

  getLogistics()
</script>

<template>
  <view class="timeline-page">
    <map
      :polyline="polyline"
      :markers="markers"
      :latitude="center.latitude"
      :longitude="center.longitude"
      scale="12"
      class="uni-map"
    />
    <cover-view :style="{ paddingTop: top }" class="navigator-bar">
      <cover-view @click="onBackClick" class="icon-back">
        <cover-image src="/static/images/icon-back.png" />
      </cover-view>

      <cover-view class="title">{{ logisticsInfo.statusValue }}</cover-view>
    </cover-view>
    <cover-view class="timeline-meta">
      <cover-view class="status">{{ logisticsInfo.statusValue }}</cover-view>
      <cover-view class="extra">
        预计 {{ logisticsInfo.estimatedTime }} 送达
        {{ logisticsInfo.name }}
        {{ logisticsInfo.awbNo }}
      </cover-view>
    </cover-view>
    <view class="timeline-detail">
      <view class="title">物流详情</view>
      <view class="timeline">
        <view class="line">
          <view class="badge text">收</view>
          <view class="content">
            收货地址：广东省广州市大华区明离路科技园880号
          </view>
        </view>
        <view v-for="item in logisticsInfo.list" :key="item.id" class="line">
          <view class="badge dot" v-if="item.status <= 3"></view>
          <view class="badge icon" v-if="item.status === 4">
            <uni-icons
              color="#2cb5a5"
              custom-prefix="iconfont"
              type="icon-truck"
            />
          </view>
          <view class="badge icon" v-if="item.status === 5">
            <uni-icons
              color="#2cb5a5"
              custom-prefix="iconfont"
              type="icon-checked"
            />
          </view>
          <view class="label">{{ item.statusValue }}</view>
          <view class="content">{{ item.content }}</view>
          <view class="time">{{ item.createTime }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
  @import './index.scss';
</style>
