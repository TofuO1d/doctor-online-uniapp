"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "feed-list",
  props: {
    list: Array
  },
  setup(__props) {
    const props = __props;
    common_vendor.onMounted(() => {
      console.log("mounted...");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.list, (item, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.creatorName),
            b: common_vendor.t(item.creatorHospatalName),
            c: common_vendor.t(item.creatorDep),
            d: common_vendor.t(item.creatorTitles),
            e: item.likeFlag === 1
          }, item.likeFlag === 1 ? {} : {}, {
            f: common_vendor.t(item.title),
            g: common_vendor.t(item.topic),
            h: common_vendor.t(item.content),
            i: common_vendor.f(item.coverUrl, (picture, k1, i1) => {
              return {
                a: picture
              };
            }),
            j: item.id
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/pages/index/components/feed-list.vue"]]);
wx.createComponent(Component);
