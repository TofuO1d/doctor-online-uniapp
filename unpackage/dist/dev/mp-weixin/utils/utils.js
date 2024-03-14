"use strict";
const common_vendor = require("../common/vendor.js");
common_vendor.index.utils = {
  /**
   * 用户反馈（轻提示）
   * @param {string} title 提示文字内容
   * @param {string} icon 提示图标类型
   */
  toast(title = "数据加载失败！", icon = "none") {
    common_vendor.index.showToast({
      title,
      icon,
      mask: true
    });
  }
};
