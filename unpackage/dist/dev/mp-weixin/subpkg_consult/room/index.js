"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_user = require("../../stores/user.js");
const services_consult = require("../../services/consult.js");
require("../../utils/http.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_easyinput2 + _easycom_uni_icons2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (roomStatus + patientInfo + notifyInfo + messageInfo + prescriptionInfo + rateInfo + _easycom_uni_easyinput + _easycom_uni_icons)();
}
const roomStatus = () => "./components/room-status.js";
const patientInfo = () => "./components/patient-info.js";
const notifyInfo = () => "./components/notify-info.js";
const messageInfo = () => "./components/message-info.js";
const prescriptionInfo = () => "./components/prescription-info.js";
const rateInfo = () => "./components/rate-info.js";
const _sfc_main = {
  __name: "index",
  props: {
    orderId: String
  },
  setup(__props) {
    const props = __props;
    const { token, userId } = stores_user.useUserStore();
    const messageList = common_vendor.ref([]);
    const orderDetail = common_vendor.ref({});
    const textMessage = common_vendor.ref("");
    const refreshTrigger = common_vendor.ref(false);
    const lastTime = common_vendor.ref(common_vendor.dayjs().format("YYYY-MM-DD HH:mm:ss"));
    const socket = common_vendor.lookup("https://consult-api.itheima.net", {
      auth: { token: "Bearer " + token },
      query: { orderId: props.orderId },
      transports: ["websocket", "polling"],
      timeout: 5e3
    });
    socket.on("chatMsgList", ({ code, data }) => {
      refreshTrigger.value = false;
      if (code !== 1e4)
        return;
      const tempList = [];
      data.forEach(({ createTime, items }, index) => {
        if (index === 0)
          lastTime.value = createTime;
        tempList.push(
          {
            msgType: 31,
            msg: { content: createTime },
            id: createTime
          },
          ...items
        );
      });
      if (tempList.length === 0)
        return common_vendor.index.utils.toast("没有更多聊天记录了");
      messageList.value.unshift(...tempList);
    });
    socket.on("receiveChatMsg", (message) => {
      socket.emit("updateMsgStatus", message.id);
      messageList.value.push(message);
    });
    socket.on("statusChange", getOrderDetail);
    function onPullDownRefresh() {
      refreshTrigger.value = true;
      socket.emit("getChatMsgList", 20, lastTime.value, props.orderId);
    }
    function onInputConfirm() {
      var _a, _b;
      socket.emit("sendChatMsg", {
        from: userId,
        to: (_b = (_a = orderDetail.value) == null ? void 0 : _a.docInfo) == null ? void 0 : _b.id,
        msgType: 1,
        msg: {
          content: textMessage.value
        }
      });
      textMessage.value = "";
    }
    function onImageButtonClick() {
      if (orderDetail.value.status !== 3) {
        return common_vendor.index.utils.toast("医生当前不在线!");
      }
      common_vendor.Ds.chooseAndUploadFile({
        type: "image",
        count: 1,
        extension: [".jpg", ".png", "gif"],
        success: ({ tempFiles }) => {
          var _a, _b;
          const picture = {
            id: tempFiles[0].lastModified,
            url: tempFiles[0].url
          };
          socket.emit("sendChatMsg", {
            from: userId,
            to: (_b = (_a = orderDetail.value) == null ? void 0 : _a.docInfo) == null ? void 0 : _b.id,
            msgType: 4,
            msg: { picture }
          });
        }
      });
    }
    async function getOrderDetail() {
      const { code, data, message } = await services_consult.orderDetailApi(props.orderId);
      if (code !== 1e4)
        return common_vendor.index.utils.toast(message);
      orderDetail.value = data;
    }
    getOrderDetail();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          ["status-value"]: orderDetail.value.statusValue,
          countdown: orderDetail.value.countdown,
          status: orderDetail.value.status
        }),
        b: common_vendor.f(messageList.value, (message, k0, i0) => {
          var _a;
          return common_vendor.e({
            a: message.msgType === 21
          }, message.msgType === 21 ? {
            b: "0f0516ec-1-" + i0,
            c: common_vendor.p({
              info: message.msg.consultRecord
            })
          } : {}, {
            d: message.msgType >= 31
          }, message.msgType >= 31 ? {
            e: common_vendor.t(message.msg.content),
            f: "0f0516ec-2-" + i0,
            g: common_vendor.p({
              type: message.msgType
            })
          } : {}, {
            h: message.msgType <= 4
          }, message.msgType <= 4 ? {
            i: "0f0516ec-3-" + i0,
            j: common_vendor.p({
              info: message,
              type: message.msgType
            })
          } : {}, {
            k: message.msgType === 22
          }, message.msgType === 22 ? {
            l: "0f0516ec-4-" + i0,
            m: common_vendor.p({
              info: message.msg.prescription
            })
          } : {}, {
            n: message.msgType === 23
          }, message.msgType === 23 ? {
            o: "0f0516ec-5-" + i0,
            p: common_vendor.p({
              ["order-id"]: props.orderId,
              ["doctor-id"]: (_a = orderDetail.value.docInfo) == null ? void 0 : _a.id
            })
          } : {}, {
            q: message.msgType === 24
          }, message.msgType === 24 ? {
            r: "0f0516ec-6-" + i0,
            s: common_vendor.p({
              evaluateDoc: message.msg.evaluateDoc,
              ["has-evaluate"]: true
            })
          } : {}, {
            t: message.id
          });
        }),
        c: common_vendor.o(onPullDownRefresh),
        d: refreshTrigger.value
      }, {
        e: common_vendor.o(onInputConfirm),
        f: common_vendor.o(($event) => textMessage.value = $event),
        g: common_vendor.p({
          disabled: orderDetail.value.status !== 3,
          clearable: false,
          ["input-border"]: false,
          ["placeholder-style"]: "font-size: 32rpx; color: #c3c3c5;",
          placeholder: "问医生",
          modelValue: textMessage.value
        }),
        h: common_vendor.p({
          size: "40",
          color: "#979797",
          type: "image"
        }),
        i: common_vendor.o(onImageButtonClick)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/consult-patient/day09/03-code/优医咨询/subpkg_consult/room/index.vue"]]);
wx.createPage(MiniProgramPage);
