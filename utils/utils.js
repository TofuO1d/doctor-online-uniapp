// 此处封装的方法放到 uni 全局对象中

uni.utils = {
  /**
   * 轻提示（showToast）
   */
  toast(title = '数据加载失败...', icon = 'none') {
    uni.showToast({ title, icon, mask: true })
  },
}
