<script setup>
  import { ref } from 'vue'
  import { debounce } from '@/utils'
  import { orderListApi } from '@/services/consult'

  // 接收组件外传入的数据
  const props = defineProps({
    type: {
      type: Number,
      default: 1,
    },
  })

  // 页码
  const current = ref(1)
  // 每页数据条数
  const pageSize = 5
  // 订单列表
  const orderList = ref([])
  // 加载状态提示
  const loadingStatus = ref('loading')

  // 是否还有更多数据
  const hasMore = ref(true)

  // 分页请求更多数据
  const onScrollToLower = debounce(() => {
    if (hasMore.value) getOrderList()
  }, 400)

  // 获取问诊订单列表
  async function getOrderList() {
    // 正在加载
    loadingStatus.value = 'loading'

    // 调用接口
    const { code, data, message } = await orderListApi({
      type: props.type,
      current: current.value,
      pageSize,
    })
    // 检测接口是否调用成功
    if (code !== 10000) return uni.utils.toast(message)

    //将请求来的数据追加进来
    orderList.value = [...orderList.value, ...data.rows]

    // 页码加 1
    current.value++
    // 是否还有更多的数据
    hasMore.value = current.value <= data.pageTotal
    // 没有更多数据
    loadingStatus.value = hasMore.value ? 'more' : 'noMore'
  }

  getOrderList()
</script>

<template>
  <scroll-view
    refresher-enabled
    @scrolltolower="onScrollToLower"
    refresher-background="#f6f6f6"
    class="uni-scroll-view"
    scroll-y
  >
    <view class="consult-list">
      <view class="consult-list-item">
        <view class="consult-header">
          <view class="label">
            <image
              class="doctor-avatar"
              src="/static/uploads/doctor-avatar.jpg"
            />
            <text>极速问诊（自动分配医生）</text>
          </view>
          <text class="status color-1">咨询中</text>
        </view>

        <navigator
          class="consult-body"
          hover-class="none"
          url="/subpkg_consult/order_detail/index"
        >
          <uni-list :border="false">
            <uni-list-item
              :border="false"
              title="病情描述"
              right-text="腹痛腹泻  胃部有些痉挛"
            />
            <uni-list-item :border="false" title="价格" right-text="¥ 39.00" />
            <uni-list-item
              :border="false"
              title="创建时间"
              right-text="2019-07-08  09:55:54"
            />
          </uni-list>
        </navigator>

        <view class="consult-footer">
          <button class="uni-button minor">取消订单</button>
          <button class="uni-button">继续支付</button>
        </view>
      </view>
      <view class="consult-list-item">
        <view class="consult-header">
          <view class="label">
            <image
              class="doctor-avatar"
              src="/static/uploads/doctor-avatar.jpg"
            />
            <text>极速问诊（自动分配医生）</text>
          </view>
          <text class="status color-3">待支付</text>
        </view>
        <navigator
          class="consult-body"
          hover-class="none"
          url="/subpkg_consult/order_detail/index"
        >
          <uni-list :border="false">
            <uni-list-item
              :border="false"
              title="病情描述"
              right-text="腹痛腹泻  胃部有些痉挛"
            />
            <uni-list-item :border="false" title="价格" right-text="¥ 39.00" />
            <uni-list-item
              :border="false"
              title="创建时间"
              right-text="2019-07-08  09:55:54"
            />
          </uni-list>
        </navigator>
        <view class="consult-footer">
          <view class="uni-button more">
            <text class="label">更多</text>
            <uni-transition :show="true">
              <view class="list">
                <view class="list-item">查看处方</view>
                <view class="list-item">删除订单</view>
              </view>
            </uni-transition>
          </view>
          <button class="uni-button minor">取消订单</button>
          <button class="uni-button">继续支付</button>
        </view>
      </view>
      <view class="consult-list-item">
        <view class="consult-header">
          <view class="label">
            <image
              class="doctor-avatar"
              src="/static/uploads/doctor-avatar.jpg"
            />
            <text>极速问诊（自动分配医生）</text>
          </view>
          <text class="status">待接诊</text>
        </view>
        <navigator
          class="consult-body"
          hover-class="none"
          url="/subpkg_consult/order_detail/index"
        >
          <uni-list :border="false">
            <uni-list-item
              :border="false"
              title="病情描述"
              right-text="腹痛腹泻  胃部有些痉挛"
            />
            <uni-list-item :border="false" title="价格" right-text="¥ 39.00" />
            <uni-list-item
              :border="false"
              title="创建时间"
              right-text="2019-07-08  09:55:54"
            />
          </uni-list>
        </navigator>
        <view class="consult-footer">
          <button class="uni-button minor">取消订单</button>
          <button class="uni-button">继续支付</button>
        </view>
      </view>
      <view class="consult-list-item">
        <view class="consult-header">
          <view class="label">
            <image
              class="doctor-avatar"
              src="/static/uploads/doctor-avatar.jpg"
            />
            <text>极速问诊（自动分配医生）</text>
          </view>
          <text class="status color-2">已取消</text>
        </view>
        <navigator
          class="consult-body"
          hover-class="none"
          url="/subpkg_consult/order_detail/index"
        >
          <uni-list :border="false">
            <uni-list-item
              :border="false"
              title="病情描述"
              right-text="腹痛腹泻  胃部有些痉挛"
            />
            <uni-list-item :border="false" title="价格" right-text="¥ 39.00" />
            <uni-list-item
              :border="false"
              title="创建时间"
              right-text="2019-07-08  09:55:54"
            />
          </uni-list>
        </navigator>
        <view class="consult-footer">
          <button class="uni-button minor">取消订单</button>
          <button class="uni-button">继续支付</button>
        </view>
      </view>

      <!-- 加载状态 -->
      <uni-load-more
        :status="loadingStatus"
        color="#C3C3C5"
        :icon-size="16"
        :content-text="{
          contentdown: '上拉显示更多',
          contentrefresh: '数据正在加载中',
          contentnomore: '没有更多数据了',
        }"
      />
    </view>
  </scroll-view>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
