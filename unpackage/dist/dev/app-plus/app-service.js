if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$_ = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v2) => v2.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$r], ["__scopeId", "data-v-d31e1c47"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const ON_SHOW = "onShow";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const _sfc_main$Z = {
    __name: "custom-tabs",
    props: {
      list: {
        type: Array,
        default: []
      }
    },
    emits: ["click"],
    setup(__props, { emit: customTabsEmit }) {
      const customTabsProps = __props;
      const tabIndex = vue.ref(0);
      const tabBarRect = vue.ref([]);
      vue.onMounted(() => {
        const selectorQuery = uni.createSelectorQuery().in(vue.getCurrentInstance());
        selectorQuery.selectAll(".custom-tabs, .tabbar-text").boundingClientRect(([parent, ...data]) => {
          tabBarRect.value = data.map(({ width, left }) => {
            return { left: left - parent.left, width };
          });
        });
        selectorQuery.exec();
      });
      const cursorPosition = vue.computed(() => {
        if (tabBarRect.value.length === 0)
          return;
        const { width, left } = tabBarRect.value[tabIndex.value];
        return left + (width - 20) / 2;
      });
      function onTabChange(index, tab) {
        tabIndex.value = index;
        customTabsEmit("click", { index, ...tab });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "custom-tabs" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(customTabsProps.list, (tab, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: tab.label,
                onClick: ($event) => onTabChange(index, tab),
                class: vue.normalizeClass([{ active: tabIndex.value === index }, "custom-tabs-bar"])
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "tabbar-text" },
                  vue.toDisplayString(tab.label),
                  1
                  /* TEXT */
                )
              ], 10, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createElementVNode(
            "view",
            {
              class: "custom-tabs-cursor",
              style: vue.normalizeStyle({ left: vue.unref(cursorPosition) + "px" })
            },
            null,
            4
            /* STYLE */
          )
        ]);
      };
    }
  };
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-80524daf"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/components/custom-tabs/custom-tabs.vue"]]);
  const _sfc_main$Y = {
    __name: "custom-sticky",
    props: {
      offsetTop: {
        type: [String, Number],
        default: 0
      },
      backgroundColor: {
        type: String,
        default: "#fff"
      }
    },
    setup(__props) {
      const stickyProps = __props;
      const stickStyle = vue.computed(() => {
        return {
          paddingTop: stickyProps.offsetTop,
          backgroundColor: stickyProps.backgroundColor
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            style: vue.normalizeStyle(vue.unref(stickStyle)),
            class: "custom-sticky"
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const __easycom_2$5 = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-25d0445b"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/components/custom-sticky/custom-sticky.vue"]]);
  const _sfc_main$X = {
    __name: "scroll-page",
    props: {
      borderStyle: {
        type: [String, Boolean],
        default: false
      },
      refresherEnabled: {
        type: Boolean,
        default: false
      },
      refresherTriggered: {
        type: Boolean,
        default: false
      },
      backgroundColor: {
        type: String,
        default: "#fff"
      }
    },
    emits: ["refresherrefresh", "scrolltolower"],
    setup(__props) {
      const scrollPageProps = __props;
      const { windowHeight } = uni.getSystemInfoSync();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("scroll-view", {
          style: vue.normalizeStyle({
            height: vue.unref(windowHeight) + "px",
            boxSizing: "border-box",
            borderBottom: scrollPageProps.borderStyle,
            backgroundColor: scrollPageProps.backgroundColor
          }),
          "scroll-y": "",
          refresherEnabled: scrollPageProps.refresherEnabled,
          refresherTriggered: scrollPageProps.refresherTriggered,
          onRefresherrefresh: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("refresherrefresh", $event)),
          onScrolltolower: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("scrolltolower", $event))
        }, [
          vue.createElementVNode("view", { class: "scroll-page-content" }, [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ], 44, ["refresherEnabled", "refresherTriggered"]);
      };
    }
  };
  const __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__scopeId", "data-v-eef314e4"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/components/scroll-page/scroll-page.vue"]]);
  var toString$2 = Object.prototype.toString;
  function isArray(val) {
    return toString$2.call(val) === "[object Array]";
  }
  function isObject$3(val) {
    return val !== null && typeof val === "object";
  }
  function isDate(val) {
    return toString$2.call(val) === "[object Date]";
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (var i2 = 0, l2 = obj.length; i2 < l2; i2++) {
        fn.call(null, obj[i2], i2, obj);
      }
    } else {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject$1(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge() {
    let result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
      forEach(arguments[i2], assignValue);
    }
    return result;
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function encode$2(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url2, params, paramsSerializer) {
    if (!params) {
      return url2;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts2 = [];
      forEach(params, function serialize(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray(val)) {
          key = key + "[]";
        } else {
          val = [val];
        }
        forEach(val, function parseValue(v2) {
          if (isDate(v2)) {
            v2 = v2.toISOString();
          } else if (isObject$3(v2)) {
            v2 = JSON.stringify(v2);
          }
          parts2.push(encode$2(key) + "=" + encode$2(v2));
        });
      });
      serializedParams = parts2.join("&");
    }
    if (serializedParams) {
      var hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$1 = (keys, config2) => {
    let config = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config[prop] = config2[prop];
      }
    });
    return config;
  };
  const adapter = (config) => {
    return new Promise((resolve, reject) => {
      let fullPath = buildURL(buildFullPath(config.baseURL, config.url), config.params, config.paramsSerializer);
      const _config = {
        url: fullPath,
        header: config.header,
        complete: (response) => {
          config.fullPath = fullPath;
          response.config = config;
          response.rawData = response.data;
          try {
            let jsonParseHandle = false;
            const forcedJSONParsingType = typeof config.forcedJSONParsing;
            if (forcedJSONParsingType === "boolean") {
              jsonParseHandle = config.forcedJSONParsing;
            } else if (forcedJSONParsingType === "object") {
              const includesMethod = config.forcedJSONParsing.include || [];
              jsonParseHandle = includesMethod.includes(config.method);
            }
            if (jsonParseHandle && typeof response.data === "string") {
              response.data = JSON.parse(response.data);
            }
          } catch (e) {
          }
          settle(resolve, reject, response);
        }
      };
      let requestTask;
      if (config.method === "UPLOAD") {
        delete _config.header["content-type"];
        delete _config.header["Content-Type"];
        let otherConfig = {
          filePath: config.filePath,
          name: config.name
        };
        const optionalKeys = [
          "files",
          "timeout",
          "formData"
        ];
        requestTask = uni.uploadFile({ ..._config, ...otherConfig, ...mergeKeys$1(optionalKeys, config) });
      } else if (config.method === "DOWNLOAD") {
        const optionalKeys = [
          "timeout"
        ];
        requestTask = uni.downloadFile({ ..._config, ...mergeKeys$1(optionalKeys, config) });
      } else {
        const optionalKeys = [
          "data",
          "method",
          "timeout",
          "dataType",
          "responseType",
          "sslVerify",
          "firstIpv4"
        ];
        requestTask = uni.request({ ..._config, ...mergeKeys$1(optionalKeys, config) });
      }
      if (config.getTask) {
        config.getTask(requestTask, config);
      }
    });
  };
  const dispatchRequest = (config) => {
    return adapter(config);
  };
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h2) => {
      if (h2 !== null) {
        fn(h2);
      }
    });
  };
  const mergeKeys = (keys, globalsConfig, config2) => {
    let config = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config[prop] = config2[prop];
      } else if (!isUndefined(globalsConfig[prop])) {
        config[prop] = globalsConfig[prop];
      }
    });
    return config;
  };
  const mergeConfig = (globalsConfig, config2 = {}) => {
    const method = config2.method || globalsConfig.method || "GET";
    let config = {
      baseURL: config2.baseURL || globalsConfig.baseURL || "",
      method,
      url: config2.url || "",
      params: config2.params || {},
      custom: { ...globalsConfig.custom || {}, ...config2.custom || {} },
      header: deepMerge(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus", "paramsSerializer", "forcedJSONParsing"];
    config = { ...config, ...mergeKeys(defaultToConfig2Keys, globalsConfig, config2) };
    if (method === "DOWNLOAD") {
      const downloadKeys = [
        "timeout"
      ];
      config = { ...config, ...mergeKeys(downloadKeys, globalsConfig, config2) };
    } else if (method === "UPLOAD") {
      delete config.header["content-type"];
      delete config.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined(config2[prop])) {
          config[prop] = config2[prop];
        }
      });
      if (isUndefined(config.timeout) && !isUndefined(globalsConfig.timeout)) {
        config["timeout"] = globalsConfig["timeout"];
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config = { ...config, ...mergeKeys(defaultsKeys, globalsConfig, config2) };
    }
    return config;
  };
  const defaults = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    paramsSerializer: null,
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    // 是否尝试将响应数据json化
    forcedJSONParsing: true
  };
  var clone = function() {
    function _instanceof(obj, type) {
      return type != null && obj instanceof type;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_2) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_2) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_2) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value2) {
              resolve(_clone(value2, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype == "undefined") {
            proto = Object.getPrototypeOf(parent2);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }
        if (circular) {
          var index = allParents.indexOf(parent2);
          if (index != -1) {
            return allChildren[index];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value2, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value2, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value2) {
            var entryChild = _clone(value2, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i2 in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i2);
          if (attrs) {
            child[i2] = _clone(parent2[i2], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i2);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i2] = _clone(parent2[i2], depth2 - 1);
          } catch (e) {
            if (e instanceof TypeError) {
              continue;
            } else if (e instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i2 = 0; i2 < symbols.length; i2++) {
            var symbol = symbols[i2];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i2 = 0; i2 < allPropertyNames.length; i2++) {
            var propertyName = allPropertyNames[i2];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c2 = function() {
      };
      c2.prototype = parent;
      return new c2();
    };
    function __objToStr(o2) {
      return Object.prototype.toString.call(o2);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o2) {
      return typeof o2 === "object" && __objToStr(o2) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o2) {
      return typeof o2 === "object" && __objToStr(o2) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o2) {
      return typeof o2 === "object" && __objToStr(o2) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re2) {
      var flags = "";
      if (re2.global)
        flags += "g";
      if (re2.ignoreCase)
        flags += "i";
      if (re2.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  let Request$1 = class Request {
    /**
     * @param {Object} arg - 全局配置
     * @param {String} arg.baseURL - 全局根路径
     * @param {Object} arg.header - 全局header
     * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
     * @param {String} arg.dataType = [json] - 全局默认的dataType
     * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
     * @param {Object} arg.custom - 全局默认的自定义参数
     * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
     * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
     * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
     * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
     * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
     */
    constructor(arg = {}) {
      if (!isPlainObject$1(arg)) {
        arg = {};
        formatAppLog("warn", "at node_modules/luch-request/src/lib/core/Request.js:37", "设置全局参数必须接收一个Object");
      }
      this.config = clone({ ...defaults, ...arg });
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    /**
     * @Function
     * @param {Request~setConfigCallback} f - 设置全局默认配置
     */
    setConfig(f2) {
      this.config = f2(this.config);
    }
    middleware(config) {
      config = mergeConfig(this.config, config);
      let chain = [dispatchRequest, void 0];
      let promise = Promise.resolve(config);
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }
      return promise;
    }
    /**
     * @Function
     * @param {Object} config - 请求配置项
     * @prop {String} options.url - 请求路径
     * @prop {Object} options.data - 请求参数
     * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
     * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
     * @prop {Object} [options.header = config.header] - 请求header
     * @prop {Object} [options.method = config.method] - 请求方法
     * @returns {Promise<unknown>}
     */
    request(config = {}) {
      return this.middleware(config);
    }
    get(url2, options = {}) {
      return this.middleware({
        url: url2,
        method: "GET",
        ...options
      });
    }
    post(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "POST",
        ...options
      });
    }
    put(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "PUT",
        ...options
      });
    }
    delete(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "DELETE",
        ...options
      });
    }
    options(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "OPTIONS",
        ...options
      });
    }
    upload(url2, config = {}) {
      config.url = url2;
      config.method = "UPLOAD";
      return this.middleware(config);
    }
    download(url2, config = {}) {
      config.url = url2;
      config.method = "DOWNLOAD";
      return this.middleware(config);
    }
    get version() {
      return "3.1.0";
    }
  };
  var isVue2 = false;
  function set$1(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value2) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value2));
          } catch (e) {
          }
          currentSettings = value2;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value2) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value2);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * pinia v2.0.33
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o2) {
    return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url2, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url2);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url2) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url2, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a2 = document.createElement("a");
    a2.download = name;
    a2.rel = "noopener";
    if (typeof blob === "string") {
      a2.href = blob;
      if (a2.origin !== location.origin) {
        if (corsEnabled(a2.href)) {
          download(blob, name, opts);
        } else {
          a2.target = "_blank";
          click(a2);
        }
      } else {
        click(a2);
      }
    } else {
      a2.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a2.href);
      }, 4e4);
      setTimeout(function() {
        click(a2);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a2 = document.createElement("a");
        a2.href = blob;
        a2.target = "_blank";
        setTimeout(function() {
          click(a2);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url2 = reader.result;
        if (typeof url2 !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url2 = isChromeIOS ? url2 : url2.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url2;
        } else {
          location.assign(url2);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url2 = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url2);
      else
        location.href = url2;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url2);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o2) {
    return "_a" in o2 && "install" in o2;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      pinia.state.value = JSON.parse(await navigator.clipboard.readText());
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = await getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      pinia.state.value = JSON.parse(text);
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events2) {
    if (!events2)
      return {};
    if (Array.isArray(events2)) {
      return events2.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events2.type),
        key: formatDisplay(events2.key),
        oldValue: events2.oldValue,
        newValue: events2.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state (option store only)",
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (!store._isOptionsAPI) {
                toastMessage(`Cannot reset "${nodeId}" store because it's a setup store.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events: events2, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events2)),
          groupId: activeAction
        };
        activeAction = void 0;
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events2 && !Array.isArray(events2)) {
          eventData.subtitle = events2.type;
        }
        if (events2) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events2
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        });
        return actions[actionName].apply(trackedStore, arguments);
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    if (options.state) {
      store._isOptionsAPI = true;
    }
    if (typeof options.state === "function") {
      patchActionForGrouping(
        // @ts-expect-error: can cast the store...
        store,
        Object.keys(options.actions)
      );
      const originalHotUpdate = store._hotUpdate;
      vue.toRaw(store)._hotUpdate = function(newStore) {
        originalHotUpdate.apply(this, arguments);
        patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
      };
    }
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value2, key) => target.set(key, value2));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o2) {
    return !!(vue.isRef(o2) && o2.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = vue.markRaw([]);
    let actionSubscriptions = vue.markRaw([]);
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value2) => {
            triggerSubscriptions(afterCallbackList, value2);
            return value2;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(
      assign(
        {
          _hmrPayload,
          _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
          // devtools custom properties
        },
        partialStore
        // must be added later
        // setupStore
      )
    );
    pinia._s.set($id, store);
    const setupStore = pinia._e.run(() => {
      scope = vue.effectScope();
      return scope.run(() => setup());
    });
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set$1(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set$1(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set$1(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set$1(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p2) => {
        Object.defineProperty(store, p2, assign({ value: store[p2] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
      const currentInstance = vue.getCurrentInstance();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || currentInstance && vue.inject(piniaSymbol, null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT && currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
      !hot) {
        const vm = currentInstance.proxy;
        const cache2 = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache2[id] = store;
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  function storeToRefs(store) {
    {
      store = vue.toRaw(store);
      const refs = {};
      for (const key in store) {
        const value2 = store[key];
        if (vue.isRef(value2) || vue.isReactive(value2)) {
          refs[key] = // ---
          vue.toRef(store, key);
        }
      }
      return refs;
    }
  }
  const useUserStore = defineStore(
    "user",
    () => {
      const token = vue.ref("");
      const redirectURL = vue.ref("/pages/index/index");
      const openType = vue.ref("switchTab");
      const userId = vue.ref("");
      return { token, userId, redirectURL, openType };
    },
    {
      persist: {
        paths: ["token", "userId", "redirectURL", "openType"]
      }
    }
  );
  const tabBarList = [
    "pages/index/index",
    "pages/wiki/index",
    "pages/notify/index",
    "pages/my/index"
  ];
  const http = new Request$1({
    // 接口基地址
    baseURL: "https://consult-api.itheima.net/",
    custom: {
      loading: true
    }
  });
  http.interceptors.request.use(
    function(config) {
      if (config.custom.loading) {
        uni.showLoading({ title: "正在加载...", mask: true });
      }
      const userStore = useUserStore();
      const defaultHeader = {};
      if (userStore.token) {
        defaultHeader.Authorization = "Bearer " + userStore.token;
      }
      config.header = {
        ...defaultHeader,
        ...config.header
      };
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
  http.interceptors.response.use(
    function({ statusCode, data, config }) {
      uni.hideLoading();
      return data;
    },
    function(error) {
      uni.hideLoading();
      if (error.statusCode === 401)
        reLogin();
      return Promise.reject(error);
    }
  );
  function reLogin() {
    const pageStack = getCurrentPages();
    const currentPage = pageStack[pageStack.length - 1];
    const redirectURL = currentPage.$page.fullPath;
    const openType = tabBarList.includes(currentPage.route) ? "switchTab" : "redirectTo";
    const userStore = useUserStore();
    userStore.redirectURL = redirectURL;
    userStore.openType = openType;
    uni.redirectTo({ url: `/pages/login/index` });
  }
  const feedListApi = (data) => {
    return http.get("/patient/home/knowledge", { params: data });
  };
  const doctorListApi = (current = 1, pageSize = 5) => {
    return http.get("/home/page/doc", { params: { current, pageSize } });
  };
  const followDoctorApi = (id, type = "doc") => {
    return http.post("/like", { id, type });
  };
  const evaluateDoctorApi = (data) => {
    return http.post("/patient/order/evaluate", data);
  };
  const _sfc_main$W = {
    __name: "feed-list",
    props: {
      list: Array
    },
    setup(__props) {
      const props = __props;
      vue.onMounted(() => {
        formatAppLog("log", "at pages/index/components/feed-list.vue:5", "mounted...");
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "feed-list" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(props.list, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: item.id,
                class: "feed-list-item"
              }, [
                vue.createElementVNode("view", { class: "feed-meta" }, [
                  vue.createElementVNode("image", {
                    class: "doctor-avatar",
                    src: "/static/uploads/doctor-avatar.jpg"
                  }),
                  vue.createElementVNode("view", { class: "doctor-info" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "name" },
                      vue.toDisplayString(item.creatorName),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "desc" },
                      vue.toDisplayString(item.creatorHospatalName) + " " + vue.toDisplayString(item.creatorDep) + " " + vue.toDisplayString(item.creatorTitles),
                      1
                      /* TEXT */
                    )
                  ]),
                  item.likeFlag === 1 ? (vue.openBlock(), vue.createElementBlock("button", {
                    key: 0,
                    class: "doctor-button",
                    plain: ""
                  }, " 已关注 ")) : (vue.openBlock(), vue.createElementBlock("button", {
                    key: 1,
                    class: "doctor-button",
                    plain: ""
                  }, "+ 关注"))
                ]),
                vue.createElementVNode(
                  "view",
                  { class: "feed-topic" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "feed-relation" },
                  "# " + vue.toDisplayString(item.topic),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "feed-content" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "text" },
                    vue.toDisplayString(item.content),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "picture" }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(item.coverUrl, (picture) => {
                        return vue.openBlock(), vue.createElementBlock("image", {
                          mode: "aspectFill",
                          class: "uni-image",
                          src: picture
                        }, null, 8, ["src"]);
                      }),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ])
                ]),
                vue.createElementVNode("view", { class: "feed-extra" }, [
                  vue.createElementVNode("text", null, "12 收藏"),
                  vue.createElementVNode("text", null, "120 评论")
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const feedList = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-2ea4cd24"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/pages/index/components/feed-list.vue"]]);
  const _sfc_main$V = {
    __name: "doctor-list",
    props: {
      list: Array
    },
    setup(__props) {
      async function onFollowButtonClick(doctor) {
        const { code, data, message } = await followDoctorApi(doctor.id);
        if (code !== 1e4)
          return uni.utils.toast(message);
        doctor.likeFlag = 1;
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock("view", { class: "doctor-list" }, [
          vue.createElementVNode("view", { class: "doctor-list-header" }, [
            vue.createElementVNode("text", { class: "title" }, "推荐关注"),
            vue.createElementVNode("navigator", {
              "hover-class": "none",
              url: " ",
              class: "more"
            }, "查看更多"),
            vue.createVNode(_component_uni_icons, {
              color: "#c3c3c5",
              type: "forward"
            })
          ]),
          vue.createElementVNode("scroll-view", {
            "scroll-x": "",
            "show-scrollbar": false
          }, [
            vue.createElementVNode("view", { class: "doctor-list-wrapper" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(__props.list, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: item.id,
                    class: "doctor-list-item"
                  }, [
                    vue.createElementVNode("image", {
                      class: "doctor-avatar",
                      src: item.avatar
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "view",
                      { class: "name" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "unit" },
                      vue.toDisplayString(item.hospitalName) + " " + vue.toDisplayString(item.depName),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "level" },
                      vue.toDisplayString(item.positionalTitles),
                      1
                      /* TEXT */
                    ),
                    item.likeFlag === 1 ? (vue.openBlock(), vue.createElementBlock("button", {
                      key: 0,
                      class: "follow"
                    }, "已关注")) : (vue.openBlock(), vue.createElementBlock("button", {
                      key: 1,
                      onClick: ($event) => onFollowButtonClick(item),
                      class: "follow"
                    }, " + 关注 ", 8, ["onClick"]))
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ]);
      };
    }
  };
  const doctorList = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-d20dbb80"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/pages/index/components/doctor-list.vue"]]);
  const _sfc_main$U = {
    __name: "index",
    setup(__props) {
      const { safeAreaInsets } = uni.getSystemInfoSync();
      const tabIndex = vue.ref(0);
      const feedTabs = vue.reactive([
        {
          label: "推荐",
          type: "recommend",
          current: 1,
          list: [],
          hasMore: true,
          rendered: true
        },
        {
          label: "关注",
          type: "like",
          current: 1,
          list: [],
          hasMore: true,
          rendered: false
        },
        {
          label: "减脂",
          type: "fatReduction",
          current: 1,
          list: [],
          hasMore: true,
          rendered: false
        },
        {
          label: "饮食",
          type: "food",
          current: 1,
          list: [],
          hasMore: true,
          rendered: false
        }
      ]);
      const feedType = vue.computed(() => feedTabs[tabIndex.value].type);
      const feedCurrent = vue.computed(() => feedTabs[tabIndex.value].current);
      const feedPageSize = vue.ref(5);
      const doctorItems = vue.ref([]);
      function onFeedTabChange({ index }) {
        tabIndex.value = index;
        if (!feedTabs[index].rendered)
          getFeedList();
        feedTabs[index].rendered = true;
      }
      function onScrollToLower() {
        if (feedTabs[tabIndex.value].hasMore)
          getFeedList();
      }
      async function getFeedList() {
        const { code, data, message } = await feedListApi({
          type: feedType.value,
          current: feedCurrent.value,
          pageSize: feedPageSize.value
        });
        if (code !== 1e4)
          return uni.utils.toast(message);
        data.rows.forEach((row) => {
          row.content = row.content.replace(/<[^>]+>/g, "");
        });
        const list = feedTabs[tabIndex.value].list;
        feedTabs[tabIndex.value].list = [...list, ...data.rows];
        const current = feedTabs[tabIndex.value].current;
        feedTabs[tabIndex.value].current = current + 1;
        feedTabs[tabIndex.value].hasMore = current + 1 <= data.pageTotal;
      }
      async function getDoctorList() {
        const { code, data, message } = await doctorListApi();
        if (code !== 1e4)
          return uni.utils.toast(message);
        doctorItems.value = data.rows;
      }
      getFeedList();
      getDoctorList();
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        const _component_custom_tabs = resolveEasycom(vue.resolveDynamicComponent("custom-tabs"), __easycom_0$6);
        const _component_custom_sticky = resolveEasycom(vue.resolveDynamicComponent("custom-sticky"), __easycom_2$5);
        const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_4$1);
        return vue.openBlock(), vue.createBlock(_component_scroll_page, { onScrolltolower: onScrollToLower }, {
          default: vue.withCtx(() => [
            vue.createElementVNode(
              "view",
              {
                class: "index-page",
                style: vue.normalizeStyle({ backgroundPositionY: -48 + vue.unref(safeAreaInsets).top + "px" })
              },
              [
                vue.createCommentVNode(" 页面导航 "),
                vue.createElementVNode(
                  "view",
                  {
                    style: vue.normalizeStyle({ paddingTop: vue.unref(safeAreaInsets).top + "px" }),
                    class: "page-navbar"
                  },
                  " 优医 ",
                  4
                  /* STYLE */
                ),
                vue.createCommentVNode(" 搜索栏 "),
                vue.createElementVNode("view", { class: "search-bar" }, [
                  vue.createElementVNode("input", {
                    "placeholder-class": "input-placeholder",
                    placeholder: "搜一搜: 疾病/症状/医生/健康知识",
                    class: "input",
                    type: "text"
                  }),
                  vue.createElementVNode("view", { class: "icon-search" }, [
                    vue.createVNode(_component_uni_icons, {
                      size: "22",
                      color: "#C3C3C5",
                      type: "search"
                    })
                  ])
                ]),
                vue.createCommentVNode(" 快速入口 "),
                vue.createElementVNode("view", { class: "quick-entry" }, [
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-entry-item"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-entry-icon",
                      src: "/static/images/quick-entry-1.png"
                    }),
                    vue.createElementVNode("text", { class: "label" }, "问医生"),
                    vue.createElementVNode("text", { class: "small" }, "按科室查问医生")
                  ]),
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-entry-item",
                    url: "/subpkg_consult/quickly/index?type=2"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-entry-icon",
                      src: "/static/images/quick-entry-2.png"
                    }),
                    vue.createElementVNode("text", { class: "label" }, "极速问诊"),
                    vue.createElementVNode("text", { class: "small" }, "20s医生极速回复")
                  ]),
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-entry-item"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-entry-icon",
                      src: "/static/images/quick-entry-3.png"
                    }),
                    vue.createElementVNode("text", { class: "label" }, "开药门诊"),
                    vue.createElementVNode("text", { class: "small" }, "线上买药更方便")
                  ])
                ]),
                vue.createCommentVNode(" 快速查看 "),
                vue.createElementVNode("view", { class: "quick-view" }, [
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-view-item",
                    url: "/subpkg_medicine/order_list/index"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-view-icon",
                      src: "/static/images/quick-view-1.png"
                    }),
                    vue.createElementVNode("text", { class: "label" }, "药品订单")
                  ]),
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-view-item",
                    url: "/subpkg_archive/list/index"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-view-icon",
                      src: "/static/images/quick-view-2.png"
                    }),
                    vue.createElementVNode("text", { class: "label" }, "健康档案")
                  ]),
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-view-item"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-view-icon",
                      src: "/static/images/quick-view-3.png"
                    }),
                    vue.createElementVNode("text", { class: "label" }, "我的处方")
                  ]),
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    class: "quick-view-item"
                  }, [
                    vue.createElementVNode("image", {
                      class: "quick-view-icon",
                      src: "/static/images/quick-view-4.png"
                    }),
                    vue.createElementVNode("text", { class: "label" }, "疾病查询")
                  ])
                ]),
                vue.createCommentVNode(" 广告位 "),
                vue.createElementVNode("view", { class: "banner-placeholder" }, [
                  vue.createElementVNode("swiper", {
                    class: "uni-swiper",
                    "indicator-dots": "",
                    "indicator-color": "#ffffff99",
                    "indicator-active-color": "#fff",
                    circular: ""
                  }, [
                    vue.createElementVNode("swiper-item", null, [
                      vue.createElementVNode("navigator", {
                        "hover-class": "none",
                        class: "navigator",
                        url: " "
                      }, [
                        vue.createElementVNode("image", {
                          class: "banner-image",
                          src: "/static/images/banner-1.png"
                        })
                      ])
                    ]),
                    vue.createElementVNode("swiper-item", null, [
                      vue.createElementVNode("navigator", {
                        "hover-class": "none",
                        class: "navigator",
                        url: " "
                      }, [
                        vue.createElementVNode("image", {
                          class: "banner-image",
                          src: "/static/images/banner-1.png",
                          mode: "aspectFill"
                        })
                      ])
                    ])
                  ])
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    class: "doctor-feeds",
                    style: vue.normalizeStyle({ marginTop: -vue.unref(safeAreaInsets).top + "px" })
                  },
                  [
                    vue.createVNode(_component_custom_sticky, {
                      "offset-top": vue.unref(safeAreaInsets).top + "px"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_custom_tabs, {
                          onClick: onFeedTabChange,
                          list: feedTabs
                        }, null, 8, ["list"])
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["offset-top"])
                  ],
                  4
                  /* STYLE */
                ),
                vue.createCommentVNode(" 医生列表 "),
                vue.withDirectives(vue.createVNode(doctorList, { list: doctorItems.value }, null, 8, ["list"]), [
                  [vue.vShow, vue.unref(feedType) === "recommend"]
                ]),
                vue.createCommentVNode(" 关注知识列表 "),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(feedTabs, (feed, index) => {
                    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                      key: feed.type
                    }, [
                      feed.rendered ? (vue.openBlock(), vue.createBlock(feedList, {
                        key: 0,
                        list: feed.list
                      }, null, 8, ["list"])) : vue.createCommentVNode("v-if", true)
                    ])), [
                      [vue.vShow, tabIndex.value === index]
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              4
              /* STYLE */
            )
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/pages/index/index.vue"]]);
  const _sfc_main$T = {
    __name: "custom-section",
    props: {
      title: {
        type: String,
        default: ""
      },
      showArrow: {
        type: Boolean,
        default: false
      },
      customStyle: {
        type: Object,
        default: {}
      }
    },
    setup(__props) {
      const sectionProps = __props;
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "custom-section",
            style: vue.normalizeStyle({ ...sectionProps.customStyle })
          },
          [
            vue.createElementVNode("view", { class: "custom-section-header" }, [
              vue.createElementVNode(
                "view",
                { class: "section-header-title" },
                vue.toDisplayString(sectionProps.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "section-header-right" }, [
                vue.renderSlot(_ctx.$slots, "right", {}, void 0, true),
                sectionProps.showArrow ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  color: "#c3c3c5",
                  size: "16",
                  type: "forward"
                })) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-d0088301"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/components/custom-section/custom-section.vue"]]);
  const _sfc_main$S = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w2 = this.width / 2, h2 = 10;
        if (this.isDot) {
          w2 = 5;
          h2 = 5;
        }
        const x2 = `${-w2 + this.offset[0]}px`;
        const y2 = `${-h2 + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x2,
            top: y2
          },
          rightBottom: {
            right: x2,
            bottom: y2
          },
          leftBottom: {
            left: x2,
            bottom: y2
          },
          leftTop: {
            left: x2,
            top: y2
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          minWidth: "0",
          height: "10px",
          padding: "0",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-badge--x" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.text ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          class: vue.normalizeClass([$options.classNames, "uni-badge"]),
          style: vue.normalizeStyle([$options.positionStyle, $props.customStyle, $options.dotStyle]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
        },
        vue.toDisplayString($options.displayValue),
        7
        /* TEXT, CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$q], ["__scopeId", "data-v-c97cb896"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$R = {
    name: "UniListItem",
    emits: ["click", "switchChange"],
    props: {
      direction: {
        type: String,
        default: "row"
      },
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      ellipsis: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: [Boolean, String],
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      showBadge: {
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        type: String,
        default: ""
      },
      badgeType: {
        type: String,
        default: "success"
      },
      badgeStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      rightText: {
        type: String,
        default: ""
      },
      thumb: {
        type: String,
        default: ""
      },
      thumbSize: {
        type: String,
        default: "base"
      },
      showExtraIcon: {
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "",
            color: "#000000",
            size: 20,
            customPrefix: ""
          };
        }
      },
      border: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: Object,
        default() {
          return {
            padding: "",
            backgroundColor: "#FFFFFF"
          };
        }
      },
      keepScrollPosition: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      "customStyle.padding": {
        handler(padding) {
          if (typeof padding == "number") {
            padding += "";
          }
          let paddingArr = padding.split(" ");
          if (paddingArr.length === 1) {
            const allPadding = paddingArr[0];
            this.padding = {
              "top": allPadding,
              "right": allPadding,
              "bottom": allPadding,
              "left": allPadding
            };
          } else if (paddingArr.length === 2) {
            const [verticalPadding, horizontalPadding] = paddingArr;
            this.padding = {
              "top": verticalPadding,
              "right": horizontalPadding,
              "bottom": verticalPadding,
              "left": horizontalPadding
            };
          } else if (paddingArr.length === 4) {
            const [topPadding, rightPadding, bottomPadding, leftPadding] = paddingArr;
            this.padding = {
              "top": topPadding,
              "right": rightPadding,
              "bottom": bottomPadding,
              "left": leftPadding
            };
          }
        },
        immediate: true
      }
    },
    // inject: ['list'],
    data() {
      return {
        isFirstChild: false,
        padding: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
      }
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getForm(name = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      onSwitchChange(e) {
        this.$emit("switchChange", e.detail);
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback = {
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback);
            break;
          case "redirectTo":
            uni.redirectTo(callback);
            break;
          case "reLaunch":
            uni.reLaunch(callback);
            break;
          case "switchTab":
            uni.switchTab(callback);
            break;
          default:
            uni.navigateTo(callback);
        }
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_1$5);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
      style: vue.normalizeStyle({ "background-color": $props.customStyle.backgroundColor }),
      "hover-class": !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.isFirstChild ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: vue.normalizeClass(["border--left", { "uni-list--border": $props.border }])
        },
        null,
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }]),
          style: vue.normalizeStyle({ paddingTop: $data.padding.top, paddingLeft: $data.padding.left, paddingRight: $data.padding.right, paddingBottom: $data.padding.bottom })
        },
        [
          vue.renderSlot(_ctx.$slots, "header", {}, () => [
            vue.createElementVNode("view", { class: "uni-list-item__header" }, [
              $props.thumb ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-list-item__icon"
              }, [
                vue.createElementVNode("image", {
                  src: $props.thumb,
                  class: vue.normalizeClass(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
                }, null, 10, ["src"])
              ])) : $props.showExtraIcon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-list-item__icon"
              }, [
                vue.createVNode(_component_uni_icons, {
                  customPrefix: $props.extraIcon.customPrefix,
                  color: $props.extraIcon.color,
                  size: $props.extraIcon.size,
                  type: $props.extraIcon.type
                }, null, 8, ["customPrefix", "color", "size", "type"])
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ], true),
          vue.renderSlot(_ctx.$slots, "body", {}, () => [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
              },
              [
                $props.title ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: vue.normalizeClass(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
                  },
                  vue.toDisplayString($props.title),
                  3
                  /* TEXT, CLASS */
                )) : vue.createCommentVNode("v-if", true),
                $props.note ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 1,
                    class: "uni-list-item__content-note"
                  },
                  vue.toDisplayString($props.note),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ], true),
          vue.renderSlot(_ctx.$slots, "footer", {}, () => [
            $props.rightText || $props.showBadge || $props.showSwitch ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: vue.normalizeClass(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
              },
              [
                $props.rightText ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-list-item__extra-text"
                  },
                  vue.toDisplayString($props.rightText),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true),
                $props.showBadge ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
                  key: 1,
                  type: $props.badgeType,
                  text: $props.badgeText,
                  "custom-style": $props.badgeStyle
                }, null, 8, ["type", "text", "custom-style"])) : vue.createCommentVNode("v-if", true),
                $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("switch", {
                  key: 2,
                  disabled: $props.disabled,
                  checked: $props.switchChecked,
                  onChange: _cache[0] || (_cache[0] = (...args) => $options.onSwitchChange && $options.onSwitchChange(...args))
                }, null, 40, ["disabled", "checked"])) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ], true)
        ],
        6
        /* CLASS, STYLE */
      ),
      $props.showArrow || $props.link ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
        key: 1,
        size: 16,
        class: "uni-icon-wrapper",
        color: "#bbb",
        type: "arrowright"
      })) : vue.createCommentVNode("v-if", true)
    ], 14, ["hover-class"]);
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$p], ["__scopeId", "data-v-c7524739"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  const _sfc_main$Q = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      stackFromEnd: {
        type: Boolean,
        default: false
      },
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      },
      renderReverse: {
        type: Boolean,
        default: false
      }
    },
    // provide() {
    // 	return {
    // 		list: this
    // 	};
    // },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e) {
        this.$emit("scrolltolower");
      },
      scroll(e) {
        this.$emit("scroll", e);
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-list uni-border-top-bottom" }, [
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-list--border-top"
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-list--border-bottom"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$o], ["__scopeId", "data-v-c2f1266a"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  const verifyCodeApi = (data) => {
    return http.get("/code", { params: data });
  };
  const loginByMobileApi = (data) => {
    return http.post("/login", data);
  };
  const loginByPassword = (data) => {
    return http.post("/login/password", data);
  };
  const userInfoApi = () => {
    return http.get("/patient/myUser");
  };
  const _sfc_main$P = {
    __name: "index",
    setup(__props) {
      const userStore = useUserStore();
      const userInfo = vue.ref({});
      function onLogoutClick() {
        userStore.token = "";
        userStore.openType = "switchTab";
        userStore.redirectURL = "/pages/index/index";
        uni.reLaunch({ url: "/pages/login/index" });
      }
      async function getUserInfo() {
        const { code, data, message } = await userInfoApi();
        if (code !== 1e4)
          return uni.utils.toast(message);
        userInfo.value = data;
      }
      getUserInfo();
      return (_ctx, _cache) => {
        const _component_custom_section = resolveEasycom(vue.resolveDynamicComponent("custom-section"), __easycom_0$5);
        const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_1$5);
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$4);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$4);
        const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_4$1);
        return vue.openBlock(), vue.createBlock(_component_scroll_page, { "background-color": "#F6F7F9" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "my-page" }, [
              vue.createCommentVNode(" 用户资料（头像&昵称） "),
              vue.createElementVNode("view", { class: "user-profile" }, [
                vue.createElementVNode("image", {
                  class: "user-avatar",
                  src: userInfo.value.avatar
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "user-info" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "nickname" },
                    vue.toDisplayString(userInfo.value.account),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("text", { class: "iconfont icon-edit" })
                ])
              ]),
              vue.createCommentVNode(" 用户数据 "),
              vue.createElementVNode("view", { class: "user-data" }, [
                vue.createElementVNode("navigator", {
                  "hover-class": "none",
                  url: " "
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "data-number" },
                    vue.toDisplayString(userInfo.value.collectionNumber),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("text", { class: "data-label" }, "收藏")
                ]),
                vue.createElementVNode("navigator", {
                  "hover-class": "none",
                  url: " "
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "data-number" },
                    vue.toDisplayString(userInfo.value.likeNumber),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("text", { class: "data-label" }, "关注")
                ]),
                vue.createElementVNode("navigator", {
                  "hover-class": "none",
                  url: " "
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "data-number" },
                    vue.toDisplayString(userInfo.value.score),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("text", { class: "data-label" }, "积分")
                ]),
                vue.createElementVNode("navigator", {
                  "hover-class": "none",
                  url: " "
                }, [
                  vue.createElementVNode(
                    "text",
                    { class: "data-number" },
                    vue.toDisplayString(userInfo.value.couponNumber),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("text", { class: "data-label" }, "优惠券")
                ])
              ]),
              vue.createCommentVNode(" 问诊医生 "),
              vue.createVNode(_component_custom_section, {
                "custom-style": { paddingBottom: "20rpx" },
                title: "问诊中"
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("swiper", {
                    class: "uni-swiper",
                    "indicator-active-color": "#2CB5A5",
                    "indicator-color": "#EAF8F6",
                    "indicator-dots": ""
                  }, [
                    vue.createElementVNode("swiper-item", null, [
                      vue.createElementVNode("view", { class: "doctor-brief" }, [
                        vue.createElementVNode("image", {
                          class: "doctor-avatar",
                          src: "/static/uploads/doctor-avatar.jpg"
                        }),
                        vue.createElementVNode("view", { class: "doctor-info" }, [
                          vue.createElementVNode("view", { class: "meta" }, [
                            vue.createElementVNode("text", { class: "name" }, "王医生"),
                            vue.createElementVNode("text", { class: "title" }, "内分泌科 | 主任医师")
                          ]),
                          vue.createElementVNode("view", { class: "meta" }, [
                            vue.createElementVNode("text", { class: "tag" }, "三甲"),
                            vue.createElementVNode("text", { class: "hospital" }, "积水潭医院")
                          ])
                        ]),
                        vue.createElementVNode("navigator", {
                          class: "doctor-contcat",
                          "hover-class": "none",
                          url: " "
                        }, " 进入咨询 ")
                      ])
                    ]),
                    vue.createElementVNode("swiper-item", null, [
                      vue.createElementVNode("view", { class: "doctor-brief" }, [
                        vue.createElementVNode("image", {
                          class: "doctor-avatar",
                          src: "/static/uploads/doctor-avatar.jpg"
                        }),
                        vue.createElementVNode("view", { class: "doctor-info" }, [
                          vue.createElementVNode("view", { class: "meta" }, [
                            vue.createElementVNode("text", { class: "name" }, "王医生"),
                            vue.createElementVNode("text", { class: "title" }, "内分泌科 | 主任医师")
                          ]),
                          vue.createElementVNode("view", { class: "meta" }, [
                            vue.createElementVNode("text", { class: "tag" }, "三甲"),
                            vue.createElementVNode("text", { class: "hospital" }, "积水潭医院")
                          ])
                        ]),
                        vue.createElementVNode("navigator", {
                          class: "doctor-contcat",
                          "hover-class": "none",
                          url: " "
                        }, " 进入咨询 ")
                      ])
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createCommentVNode(" 药品订单 "),
              vue.createVNode(_component_custom_section, {
                "show-arrow": "",
                title: "药品订单"
              }, {
                right: vue.withCtx(() => [
                  vue.createElementVNode("navigator", {
                    "hover-class": "none",
                    url: "/subpkg_medicine/order_list/index"
                  }, "全部订单")
                ]),
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "drug-order" }, [
                    vue.createElementVNode("navigator", {
                      "hover-class": "none",
                      url: "/subpkg_medicine/order_list/index"
                    }, [
                      vue.createVNode(_component_uni_badge, {
                        text: 0,
                        offset: [3, 3],
                        absolute: "rightTop"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode("image", {
                            src: "/static/images/order-status-1.png",
                            class: "status-icon"
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      vue.createElementVNode("text", { class: "status-label" }, "待付款")
                    ]),
                    vue.createElementVNode("navigator", {
                      "hover-class": "none",
                      url: "/subpkg_medicine/order_list/index"
                    }, [
                      vue.createVNode(_component_uni_badge, {
                        text: "2",
                        offset: [3, 3],
                        absolute: "rightTop"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode("image", {
                            src: "/static/images/order-status-2.png",
                            class: "status-icon"
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      vue.createElementVNode("text", { class: "status-label" }, "待付款")
                    ]),
                    vue.createElementVNode("navigator", {
                      "hover-class": "none",
                      url: "/subpkg_medicine/order_list/index"
                    }, [
                      vue.createVNode(_component_uni_badge, {
                        text: 0,
                        offset: [3, 3],
                        absolute: "rightTop"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode("image", {
                            src: "/static/images/order-status-3.png",
                            class: "status-icon"
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      vue.createElementVNode("text", { class: "status-label" }, "待付款")
                    ]),
                    vue.createElementVNode("navigator", {
                      "hover-class": "none",
                      url: "/subpkg_medicine/order_list/index"
                    }, [
                      vue.createVNode(_component_uni_badge, {
                        text: 0,
                        offset: [3, 3],
                        absolute: "rightTop"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode("image", {
                            src: "/static/images/order-status-4.png",
                            class: "status-icon"
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      vue.createElementVNode("text", { class: "status-label" }, "待付款")
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createCommentVNode(" 快捷工具 "),
              vue.createVNode(_component_custom_section, { title: "快捷工具" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_list, { border: false }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_list_item, {
                        border: false,
                        title: "我的问诊",
                        "show-arrow": "",
                        "show-extra-icon": "",
                        to: "/subpkg_consult/order_list/index",
                        "extra-icon": {
                          customPrefix: "icon-symbol",
                          type: "icon-symbol-tool-01"
                        }
                      }),
                      vue.createVNode(_component_uni_list_item, {
                        border: false,
                        title: "我的处方",
                        "show-arrow": "",
                        "show-extra-icon": "",
                        "extra-icon": {
                          customPrefix: "icon-symbol",
                          type: "icon-symbol-tool-02"
                        }
                      }),
                      vue.createVNode(_component_uni_list_item, {
                        border: false,
                        title: "家庭档案",
                        "show-arrow": "",
                        "show-extra-icon": "",
                        to: "/subpkg_archive/list/index",
                        "extra-icon": {
                          customPrefix: "icon-symbol",
                          type: "icon-symbol-tool-03"
                        }
                      }),
                      vue.createVNode(_component_uni_list_item, {
                        border: false,
                        title: "地址管理",
                        "show-arrow": "",
                        "show-extra-icon": "",
                        "extra-icon": {
                          customPrefix: "icon-symbol",
                          type: "icon-symbol-tool-04"
                        }
                      }),
                      vue.createVNode(_component_uni_list_item, {
                        border: false,
                        title: "我的评价",
                        "show-arrow": "",
                        "show-extra-icon": "",
                        "extra-icon": {
                          customPrefix: "icon-symbol",
                          type: "icon-symbol-tool-05"
                        }
                      }),
                      vue.createVNode(_component_uni_list_item, {
                        border: false,
                        title: "官方客服",
                        "show-arrow": "",
                        "show-extra-icon": "",
                        "extra-icon": {
                          customPrefix: "icon-symbol",
                          type: "icon-symbol-tool-06"
                        }
                      }),
                      vue.createVNode(_component_uni_list_item, {
                        border: false,
                        title: "设置",
                        "show-arrow": "",
                        "show-extra-icon": "",
                        "extra-icon": {
                          customPrefix: "icon-symbol",
                          type: "icon-symbol-tool-07"
                        }
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createCommentVNode(" 退出登录 "),
              vue.createElementVNode("view", {
                onClick: onLogoutClick,
                class: "logout-button"
              }, "退出登录")
            ])
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const PagesMyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/pages/my/index.vue"]]);
  const _sfc_main$O = {
    data() {
      return {};
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesNotifyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$n], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/pages/notify/index.vue"]]);
  const _sfc_main$N = {
    data() {
      return {};
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesWikiIndex = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$m], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/pages/wiki/index.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$M = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i2 in styles) {
          let line = this.toLine(i2);
          transform += line + ":" + styles[i2] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i2 in obj) {
          try {
            if (typeof obj[i2] === "object") {
              this.animation[i2](...obj[i2]);
            } else {
              this.animation[i2](obj[i2]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i2} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$l], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$L = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:279", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$4);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle({ backgroundColor: $options.bg }),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* HYDRATE_EVENTS */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$k], ["__scopeId", "data-v-4dd3c44b"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const useCounterStore = defineStore(
    "counter",
    () => {
      const count = vue.ref(0);
      const double = vue.computed(() => count.value * 2);
      function increment() {
        count.value++;
      }
      function decrement() {
        count.value--;
      }
      return { count, double, increment, decrement };
    },
    {
      persist: {
        paths: ["count"]
      }
    }
  );
  const _sfc_main$K = {
    __name: "index",
    setup(__props) {
      const counterStore = useCounterStore();
      formatAppLog("log", "at pages/test/index.vue:11", counterStore.count);
      formatAppLog("log", "at pages/test/index.vue:13", counterStore.double);
      const { count, double } = storeToRefs(counterStore);
      let _count = 0;
      function increment() {
        counterStore.$patch({
          count: ++_count
        });
      }
      function decrement() {
        counterStore.$patch({
          count: --_count
        });
      }
      async function onButtonClick() {
        const result = await http.request({
          url: "/echo",
          method: "get",
          custom: {
            abc: 123
            // loading: false,
          },
          header: {
            customHeader: "11111111"
          }
        });
        uni.utils.toast("测试轻提示");
        formatAppLog("log", "at pages/test/index.vue:56", result);
      }
      function test() {
        formatAppLog("log", "at pages/test/index.vue:60", 111);
      }
      const popupRef = vue.ref();
      function onMaskClick() {
        formatAppLog("log", "at pages/test/index.vue:68", "蒙层点击了...");
      }
      function openPopup() {
        popupRef.value.open();
      }
      function closePopup() {
        popupRef.value.close();
      }
      return (_ctx, _cache) => {
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_3$2);
        const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_4$1);
        return vue.openBlock(), vue.createBlock(_component_scroll_page, {
          "background-color": "#f6f6f6",
          "refresher-enabled": "",
          onScrolltolower: test,
          onRefresherrefresh: test
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", { class: "custom-icons" }, [
                vue.createElementVNode("text", { class: "iconfont icon-done" }),
                vue.createElementVNode("text", { class: "icon-symbol icon-symbol-tool-01" })
              ]),
              vue.createElementVNode("button", {
                onClick: onButtonClick,
                type: "primary"
              }, "luch-request 测试"),
              vue.createElementVNode("view", { class: "counter" }, [
                vue.createElementVNode("button", {
                  onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(counterStore).decrement && vue.unref(counterStore).decrement(...args)),
                  class: "button",
                  type: "primary"
                }, " - "),
                vue.createElementVNode("input", {
                  class: "input",
                  value: vue.unref(counterStore).count,
                  type: "text"
                }, null, 8, ["value"]),
                vue.createElementVNode("button", {
                  onClick: _cache[1] || (_cache[1] = (...args) => vue.unref(counterStore).increment && vue.unref(counterStore).increment(...args)),
                  class: "button",
                  type: "primary"
                }, " + ")
              ]),
              vue.createElementVNode("view", { class: "counter" }, [
                vue.createElementVNode("button", {
                  onClick: decrement,
                  class: "button",
                  type: "primary"
                }, "-"),
                vue.createElementVNode("input", {
                  class: "input",
                  value: vue.unref(count),
                  type: "text"
                }, null, 8, ["value"]),
                vue.createElementVNode("button", {
                  onClick: increment,
                  class: "button",
                  type: "primary"
                }, "+")
              ]),
              vue.createElementVNode("view", { class: "state" }, [
                vue.createElementVNode(
                  "text",
                  { class: "text" },
                  "count: " + vue.toDisplayString(vue.unref(count)),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  { class: "text" },
                  "double: " + vue.toDisplayString(vue.unref(double)),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "popup-demo" }, [
                vue.createElementVNode("button", {
                  onClick: openPopup,
                  class: "button",
                  type: "primary"
                }, " 打开弹层 "),
                vue.createElementVNode("button", {
                  onClick: closePopup,
                  class: "button",
                  type: "primary"
                }, " 关闭弹层 ")
              ]),
              vue.createVNode(
                _component_uni_popup,
                {
                  ref_key: "popupRef",
                  ref: popupRef,
                  onMaskClick,
                  "is-mask-click": false,
                  type: "bottom"
                },
                {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "popup-container" })
                  ]),
                  _: 1
                  /* STABLE */
                },
                512
                /* NEED_PATCH */
              ),
              vue.createCommentVNode(' <view class="blank"></view> ')
            ])
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const PagesTestIndex = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/pages/test/index.vue"]]);
  const isObject$2 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse$1(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse$1(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject$2(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts2) {
    return !!parts2.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts2) {
    return parts2.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const pages = [
    {
      path: "pages/index/index",
      style: {
        navigationBarTitleText: "优医咨询",
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/my/index",
      style: {
        navigationBarTitleText: "我的",
        enablePullDownRefresh: false,
        navigationStyle: "custom"
      }
    },
    {
      path: "pages/notify/index",
      style: {
        navigationBarTitleText: "消息通知",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/wiki/index",
      style: {
        navigationBarTitleText: "健康百科",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/test/index",
      style: {
        navigationBarTitleText: "测试页",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/login/index",
      style: {
        navigationBarTitleText: "用户登录",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/login/qq",
      style: {
        navigationBarTitleText: "QQ登录",
        enablePullDownRefresh: false
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "优医咨询",
    navigationBarBackgroundColor: "#fff",
    backgroundColor: "#F8F8F8"
  };
  const tabBar = {
    color: "#6F6F6F",
    selectedColor: "#6F6F6F",
    borderStyle: "white",
    list: [
      {
        text: "首页",
        pagePath: "pages/index/index",
        iconPath: "static/tabbar/home-default.png",
        selectedIconPath: "static/tabbar/home-active.png"
      },
      {
        text: "健康百科",
        pagePath: "pages/wiki/index",
        iconPath: "static/tabbar/wiki-default.png",
        selectedIconPath: "static/tabbar/wiki-active.png"
      },
      {
        text: "消息通知",
        pagePath: "pages/notify/index",
        iconPath: "static/tabbar/notify-default.png",
        selectedIconPath: "static/tabbar/notify-active.png"
      },
      {
        text: "我的",
        pagePath: "pages/my/index",
        iconPath: "static/tabbar/my-default.png",
        selectedIconPath: "static/tabbar/my-active.png"
      }
    ]
  };
  const subPackages = [
    {
      root: "subpkg_archive",
      pages: [
        {
          path: "form/index",
          style: {
            navigationBarTitleText: "添加患者"
          }
        },
        {
          path: "list/index",
          style: {
            navigationBarTitleText: "患者列表"
          }
        }
      ]
    },
    {
      root: "subpkg_consult",
      pages: [
        {
          path: "quickly/index",
          style: {
            navigationBarTitleText: "极速问诊"
          }
        },
        {
          path: "department/index",
          style: {
            navigationBarTitleText: "选择科室"
          }
        },
        {
          path: "description/index",
          style: {
            navigationBarTitleText: "图文问诊"
          }
        },
        {
          path: "patient/index",
          style: {
            navigationBarTitleText: "选择患者"
          }
        },
        {
          path: "payment/index",
          style: {
            navigationBarTitleText: "等待付款"
          }
        },
        {
          path: "room/index",
          style: {
            navigationBarTitleText: "问诊室"
          }
        },
        {
          path: "order_list/index",
          style: {
            navigationBarTitleText: "订单列表"
          }
        },
        {
          path: "order_detail/index",
          style: {
            navigationBarTitleText: "订单详情"
          }
        }
      ]
    },
    {
      root: "uni_modules/uni-pay/pages",
      pages: [
        {
          path: "success/success",
          style: {
            navigationBarTitleText: "支付成功",
            backgroundColor: "#F8F8F8"
          }
        },
        {
          path: "ad-interactive-webview/ad-interactive-webview",
          style: {
            navigationBarTitleText: "ad",
            backgroundColor: "#F8F8F8"
          }
        }
      ]
    },
    {
      root: "subpkg_medicine",
      pages: [
        {
          path: "payment/index",
          style: {
            navigationBarTitleText: "等待支付"
          }
        },
        {
          path: "pay_result/index",
          style: {
            navigationBarTitleText: "支付结果"
          }
        },
        {
          path: "order_detail/index",
          style: {
            navigationBarTitleText: "订单详情"
          }
        },
        {
          path: "order_list/index",
          style: {
            navigationBarTitleText: "订单列表"
          }
        },
        {
          path: "timeline/index",
          style: {
            navigationBarTitleText: "查看物流",
            navigationStyle: "custom"
          }
        }
      ]
    }
  ];
  const uniIdRouter = {};
  const t$3 = {
    pages,
    globalStyle,
    tabBar,
    subPackages,
    uniIdRouter
  };
  function n(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function s(e, t2, n2) {
    return e(n2 = { path: t2, exports: {}, require: function(e2, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t3 && n2.path);
    } }, n2.exports), n2.exports;
  }
  var r = s(function(e, t2) {
    var n2;
    e.exports = (n2 = n2 || function(e2, t3) {
      var n3 = Object.create || function() {
        function e3() {
        }
        return function(t4) {
          var n4;
          return e3.prototype = t4, n4 = new e3(), e3.prototype = null, n4;
        };
      }(), s2 = {}, r2 = s2.lib = {}, i2 = r2.Base = { extend: function(e3) {
        var t4 = n3(this);
        return e3 && t4.mixIn(e3), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e3 = this.extend();
        return e3.init.apply(e3, arguments), e3;
      }, init: function() {
      }, mixIn: function(e3) {
        for (var t4 in e3)
          e3.hasOwnProperty(t4) && (this[t4] = e3[t4]);
        e3.hasOwnProperty("toString") && (this.toString = e3.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, o2 = r2.WordArray = i2.extend({ init: function(e3, n4) {
        e3 = this.words = e3 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e3.length;
      }, toString: function(e3) {
        return (e3 || c2).stringify(this);
      }, concat: function(e3) {
        var t4 = this.words, n4 = e3.words, s3 = this.sigBytes, r3 = e3.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var i3 = 0; i3 < r3; i3++) {
            var o3 = n4[i3 >>> 2] >>> 24 - i3 % 4 * 8 & 255;
            t4[s3 + i3 >>> 2] |= o3 << 24 - (s3 + i3) % 4 * 8;
          }
        else
          for (i3 = 0; i3 < r3; i3 += 4)
            t4[s3 + i3 >>> 2] = n4[i3 >>> 2];
        return this.sigBytes += r3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e2.ceil(n4 / 4);
      }, clone: function() {
        var e3 = i2.clone.call(this);
        return e3.words = this.words.slice(0), e3;
      }, random: function(t4) {
        for (var n4, s3 = [], r3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var r4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return r4 /= 4294967296, (r4 += 0.5) * (e2.random() > 0.5 ? 1 : -1);
          };
        }, i3 = 0; i3 < t4; i3 += 4) {
          var a3 = r3(4294967296 * (n4 || e2.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new o2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push((i3 >>> 4).toString(16)), s3.push((15 & i3).toString(16));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e3.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new o2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], r3 = 0; r3 < n4; r3++) {
          var i3 = t4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(i3));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e3.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new o2.init(n4, t4);
      } }, h2 = a2.Utf8 = { stringify: function(e3) {
        try {
          return decodeURIComponent(escape(u2.stringify(e3)));
        } catch (e4) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e3) {
        return u2.parse(unescape(encodeURIComponent(e3)));
      } }, l2 = r2.BufferedBlockAlgorithm = i2.extend({ reset: function() {
        this._data = new o2.init(), this._nDataBytes = 0;
      }, _append: function(e3) {
        "string" == typeof e3 && (e3 = h2.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, r3 = n4.sigBytes, i3 = this.blockSize, a3 = r3 / (4 * i3), c3 = (a3 = t4 ? e2.ceil(a3) : e2.max((0 | a3) - this._minBufferSize, 0)) * i3, u3 = e2.min(4 * c3, r3);
        if (c3) {
          for (var h3 = 0; h3 < c3; h3 += i3)
            this._doProcessBlock(s3, h3);
          var l3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new o2.init(l3, u3);
      }, clone: function() {
        var e3 = i2.clone.call(this);
        return e3._data = this._data.clone(), e3;
      }, _minBufferSize: 0 });
      r2.Hasher = l2.extend({ cfg: i2.extend(), init: function(e3) {
        this.cfg = this.cfg.extend(e3), this.reset();
      }, reset: function() {
        l2.reset.call(this), this._doReset();
      }, update: function(e3) {
        return this._append(e3), this._process(), this;
      }, finalize: function(e3) {
        return e3 && this._append(e3), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e3) {
        return function(t4, n4) {
          return new e3.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e3) {
        return function(t4, n4) {
          return new d2.HMAC.init(e3, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), i$1 = r, o = (s(function(e, t2) {
    var n2;
    e.exports = (n2 = i$1, function(e2) {
      var t3 = n2, s2 = t3.lib, r2 = s2.WordArray, i2 = s2.Hasher, o2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e2.abs(e2.sin(t4 + 1)) | 0;
      }();
      var c2 = o2.MD5 = i2.extend({ _doReset: function() {
        this._hash = new r2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e3, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, r3 = e3[s3];
          e3[s3] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8);
        }
        var i3 = this._hash.words, o3 = e3[t4 + 0], c3 = e3[t4 + 1], p2 = e3[t4 + 2], f2 = e3[t4 + 3], g2 = e3[t4 + 4], m2 = e3[t4 + 5], y2 = e3[t4 + 6], _2 = e3[t4 + 7], w2 = e3[t4 + 8], v2 = e3[t4 + 9], I2 = e3[t4 + 10], S2 = e3[t4 + 11], b2 = e3[t4 + 12], k2 = e3[t4 + 13], C = e3[t4 + 14], T2 = e3[t4 + 15], P2 = i3[0], A2 = i3[1], E2 = i3[2], O = i3[3];
        P2 = u2(P2, A2, E2, O, o3, 7, a2[0]), O = u2(O, P2, A2, E2, c3, 12, a2[1]), E2 = u2(E2, O, P2, A2, p2, 17, a2[2]), A2 = u2(A2, E2, O, P2, f2, 22, a2[3]), P2 = u2(P2, A2, E2, O, g2, 7, a2[4]), O = u2(O, P2, A2, E2, m2, 12, a2[5]), E2 = u2(E2, O, P2, A2, y2, 17, a2[6]), A2 = u2(A2, E2, O, P2, _2, 22, a2[7]), P2 = u2(P2, A2, E2, O, w2, 7, a2[8]), O = u2(O, P2, A2, E2, v2, 12, a2[9]), E2 = u2(E2, O, P2, A2, I2, 17, a2[10]), A2 = u2(A2, E2, O, P2, S2, 22, a2[11]), P2 = u2(P2, A2, E2, O, b2, 7, a2[12]), O = u2(O, P2, A2, E2, k2, 12, a2[13]), E2 = u2(E2, O, P2, A2, C, 17, a2[14]), P2 = h2(P2, A2 = u2(A2, E2, O, P2, T2, 22, a2[15]), E2, O, c3, 5, a2[16]), O = h2(O, P2, A2, E2, y2, 9, a2[17]), E2 = h2(E2, O, P2, A2, S2, 14, a2[18]), A2 = h2(A2, E2, O, P2, o3, 20, a2[19]), P2 = h2(P2, A2, E2, O, m2, 5, a2[20]), O = h2(O, P2, A2, E2, I2, 9, a2[21]), E2 = h2(E2, O, P2, A2, T2, 14, a2[22]), A2 = h2(A2, E2, O, P2, g2, 20, a2[23]), P2 = h2(P2, A2, E2, O, v2, 5, a2[24]), O = h2(O, P2, A2, E2, C, 9, a2[25]), E2 = h2(E2, O, P2, A2, f2, 14, a2[26]), A2 = h2(A2, E2, O, P2, w2, 20, a2[27]), P2 = h2(P2, A2, E2, O, k2, 5, a2[28]), O = h2(O, P2, A2, E2, p2, 9, a2[29]), E2 = h2(E2, O, P2, A2, _2, 14, a2[30]), P2 = l2(P2, A2 = h2(A2, E2, O, P2, b2, 20, a2[31]), E2, O, m2, 4, a2[32]), O = l2(O, P2, A2, E2, w2, 11, a2[33]), E2 = l2(E2, O, P2, A2, S2, 16, a2[34]), A2 = l2(A2, E2, O, P2, C, 23, a2[35]), P2 = l2(P2, A2, E2, O, c3, 4, a2[36]), O = l2(O, P2, A2, E2, g2, 11, a2[37]), E2 = l2(E2, O, P2, A2, _2, 16, a2[38]), A2 = l2(A2, E2, O, P2, I2, 23, a2[39]), P2 = l2(P2, A2, E2, O, k2, 4, a2[40]), O = l2(O, P2, A2, E2, o3, 11, a2[41]), E2 = l2(E2, O, P2, A2, f2, 16, a2[42]), A2 = l2(A2, E2, O, P2, y2, 23, a2[43]), P2 = l2(P2, A2, E2, O, v2, 4, a2[44]), O = l2(O, P2, A2, E2, b2, 11, a2[45]), E2 = l2(E2, O, P2, A2, T2, 16, a2[46]), P2 = d2(P2, A2 = l2(A2, E2, O, P2, p2, 23, a2[47]), E2, O, o3, 6, a2[48]), O = d2(O, P2, A2, E2, _2, 10, a2[49]), E2 = d2(E2, O, P2, A2, C, 15, a2[50]), A2 = d2(A2, E2, O, P2, m2, 21, a2[51]), P2 = d2(P2, A2, E2, O, b2, 6, a2[52]), O = d2(O, P2, A2, E2, f2, 10, a2[53]), E2 = d2(E2, O, P2, A2, I2, 15, a2[54]), A2 = d2(A2, E2, O, P2, c3, 21, a2[55]), P2 = d2(P2, A2, E2, O, w2, 6, a2[56]), O = d2(O, P2, A2, E2, T2, 10, a2[57]), E2 = d2(E2, O, P2, A2, y2, 15, a2[58]), A2 = d2(A2, E2, O, P2, k2, 21, a2[59]), P2 = d2(P2, A2, E2, O, g2, 6, a2[60]), O = d2(O, P2, A2, E2, S2, 10, a2[61]), E2 = d2(E2, O, P2, A2, p2, 15, a2[62]), A2 = d2(A2, E2, O, P2, v2, 21, a2[63]), i3[0] = i3[0] + P2 | 0, i3[1] = i3[1] + A2 | 0, i3[2] = i3[2] + E2 | 0, i3[3] = i3[3] + O | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, r3 = 8 * t4.sigBytes;
        n3[r3 >>> 5] |= 128 << 24 - r3 % 32;
        var i3 = e2.floor(s3 / 4294967296), o3 = s3;
        n3[15 + (r3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), n3[14 + (r3 + 64 >>> 9 << 4)] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var h3 = c3[u3];
          c3[u3] = 16711935 & (h3 << 8 | h3 >>> 24) | 4278255360 & (h3 << 24 | h3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e3 = i2.clone.call(this);
        return e3._hash = this._hash.clone(), e3;
      } });
      function u2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (t4 & n3 | ~t4 & s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function h2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (t4 & s3 | n3 & ~s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function l2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (t4 ^ n3 ^ s3) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      function d2(e3, t4, n3, s3, r3, i3, o3) {
        var a3 = e3 + (n3 ^ (t4 | ~s3)) + r3 + o3;
        return (a3 << i3 | a3 >>> 32 - i3) + t4;
      }
      t3.MD5 = i2._createHelper(c2), t3.HmacMD5 = i2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), s(function(e, t2) {
    var n2;
    e.exports = (n2 = i$1, void function() {
      var e2 = n2, t3 = e2.lib.Base, s2 = e2.enc.Utf8;
      e2.algo.HMAC = t3.extend({ init: function(e3, t4) {
        e3 = this._hasher = new e3.init(), "string" == typeof t4 && (t4 = s2.parse(t4));
        var n3 = e3.blockSize, r2 = 4 * n3;
        t4.sigBytes > r2 && (t4 = e3.finalize(t4)), t4.clamp();
        for (var i2 = this._oKey = t4.clone(), o2 = this._iKey = t4.clone(), a2 = i2.words, c2 = o2.words, u2 = 0; u2 < n3; u2++)
          a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
        i2.sigBytes = o2.sigBytes = r2, this.reset();
      }, reset: function() {
        var e3 = this._hasher;
        e3.reset(), e3.update(this._iKey);
      }, update: function(e3) {
        return this._hasher.update(e3), this;
      }, finalize: function(e3) {
        var t4 = this._hasher, n3 = t4.finalize(e3);
        return t4.reset(), t4.finalize(this._oKey.clone().concat(n3));
      } });
    }());
  }), s(function(e, t2) {
    e.exports = i$1.HmacMD5;
  })), a = s(function(e, t2) {
    e.exports = i$1.enc.Utf8;
  }), c = s(function(e, t2) {
    var n2;
    e.exports = (n2 = i$1, function() {
      var e2 = n2, t3 = e2.lib.WordArray;
      function s2(e3, n3, s3) {
        for (var r2 = [], i2 = 0, o2 = 0; o2 < n3; o2++)
          if (o2 % 4) {
            var a2 = s3[e3.charCodeAt(o2 - 1)] << o2 % 4 * 2, c2 = s3[e3.charCodeAt(o2)] >>> 6 - o2 % 4 * 2;
            r2[i2 >>> 2] |= (a2 | c2) << 24 - i2 % 4 * 8, i2++;
          }
        return t3.create(r2, i2);
      }
      e2.enc.Base64 = { stringify: function(e3) {
        var t4 = e3.words, n3 = e3.sigBytes, s3 = this._map;
        e3.clamp();
        for (var r2 = [], i2 = 0; i2 < n3; i2 += 3)
          for (var o2 = (t4[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255) << 16 | (t4[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255) << 8 | t4[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && i2 + 0.75 * a2 < n3; a2++)
            r2.push(s3.charAt(o2 >>> 6 * (3 - a2) & 63));
        var c2 = s3.charAt(64);
        if (c2)
          for (; r2.length % 4; )
            r2.push(c2);
        return r2.join("");
      }, parse: function(e3) {
        var t4 = e3.length, n3 = this._map, r2 = this._reverseMap;
        if (!r2) {
          r2 = this._reverseMap = [];
          for (var i2 = 0; i2 < n3.length; i2++)
            r2[n3.charCodeAt(i2)] = i2;
        }
        var o2 = n3.charAt(64);
        if (o2) {
          var a2 = e3.indexOf(o2);
          -1 !== a2 && (t4 = a2);
        }
        return s2(e3, t4, r2);
      }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" };
    }(), n2.enc.Base64);
  });
  const u = "FUNCTION", h = "OBJECT", l = "CLIENT_DB", d = "pending", p = "fullfilled", f = "rejected";
  function g(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function m(e) {
    return "object" === g(e);
  }
  function y(e) {
    return "function" == typeof e;
  }
  function _(e) {
    return function() {
      try {
        return e.apply(e, arguments);
      } catch (e2) {
        console.error(e2);
      }
    };
  }
  const w = "REJECTED", v = "NOT_PENDING";
  class I {
    constructor({ createPromise: e, retryRule: t2 = w } = {}) {
      this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t2;
    }
    get needRetry() {
      if (!this.status)
        return true;
      switch (this.retryRule) {
        case w:
          return this.status === f;
        case v:
          return this.status !== d;
      }
    }
    exec() {
      return this.needRetry ? (this.status = d, this.promise = this.createPromise().then((e) => (this.status = p, Promise.resolve(e)), (e) => (this.status = f, Promise.reject(e))), this.promise) : this.promise;
    }
  }
  function S(e) {
    return e && "string" == typeof e ? JSON.parse(e) : e;
  }
  const b = true, k = "app", T = S([]), P = k, A = S('{\n    "address": [\n        "127.0.0.1",\n        "192.168.50.16"\n    ],\n    "debugPort": 9000,\n    "initialLaunchType": "remote",\n    "servePort": 7000,\n    "skipFiles": [\n        "<node_internals>/**",\n        "D:/Program Files/HBuilderX.3.8.12.20230817/HBuilderX/plugins/unicloud/**/*.js"\n    ]\n}\n'), E = S('[{"provider":"aliyun","spaceName":"shenling-driver-aliyun","spaceId":"mp-664d2554-cfa5-4427-9adf-d14025991d5f","clientSecret":"mt/tOb5EKPv5YGPj7hEkcg==","endpoint":"https://api.next.bspapp.com"}]') || [];
  let x = "";
  try {
    x = "__UNI__702A041";
  } catch (e) {
  }
  let R = {};
  function U(e, t2 = {}) {
    var n2, s2;
    return n2 = R, s2 = e, Object.prototype.hasOwnProperty.call(n2, s2) || (R[e] = t2), R[e];
  }
  R = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {};
  const L = ["invoke", "success", "fail", "complete"], N = U("_globalUniCloudInterceptor");
  function D(e, t2) {
    N[e] || (N[e] = {}), m(t2) && Object.keys(t2).forEach((n2) => {
      L.indexOf(n2) > -1 && function(e2, t3, n3) {
        let s2 = N[e2][t3];
        s2 || (s2 = N[e2][t3] = []), -1 === s2.indexOf(n3) && y(n3) && s2.push(n3);
      }(e, n2, t2[n2]);
    });
  }
  function F(e, t2) {
    N[e] || (N[e] = {}), m(t2) ? Object.keys(t2).forEach((n2) => {
      L.indexOf(n2) > -1 && function(e2, t3, n3) {
        const s2 = N[e2][t3];
        if (!s2)
          return;
        const r2 = s2.indexOf(n3);
        r2 > -1 && s2.splice(r2, 1);
      }(e, n2, t2[n2]);
    }) : delete N[e];
  }
  function M(e, t2) {
    return e && 0 !== e.length ? e.reduce((e2, n2) => e2.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function q(e, t2) {
    return N[e] && N[e][t2] || [];
  }
  function K(e) {
    D("callObject", e);
  }
  const j = U("_globalUniCloudListener"), B = "response", $ = "needLogin", W = "refreshToken", z = "clientdb", J = "cloudfunction", H = "cloudobject";
  function G(e) {
    return j[e] || (j[e] = []), j[e];
  }
  function V(e, t2) {
    const n2 = G(e);
    n2.includes(t2) || n2.push(t2);
  }
  function Y(e, t2) {
    const n2 = G(e), s2 = n2.indexOf(t2);
    -1 !== s2 && n2.splice(s2, 1);
  }
  function Q(e, t2) {
    const n2 = G(e);
    for (let e2 = 0; e2 < n2.length; e2++) {
      (0, n2[e2])(t2);
    }
  }
  let X, Z = false;
  function ee() {
    return X || (X = new Promise((e) => {
      Z && e(), function t2() {
        if ("function" == typeof getCurrentPages) {
          const t3 = getCurrentPages();
          t3 && t3[0] && (Z = true, e());
        }
        Z || setTimeout(() => {
          t2();
        }, 30);
      }();
    }), X);
  }
  function te(e) {
    const t2 = {};
    for (const n2 in e) {
      const s2 = e[n2];
      y(s2) && (t2[n2] = _(s2));
    }
    return t2;
  }
  class ne extends Error {
    constructor(e) {
      super(e.message), this.errMsg = e.message || e.errMsg || "unknown system error", this.code = this.errCode = e.code || e.errCode || "SYSTEM_ERROR", this.errSubject = this.subject = e.subject || e.errSubject, this.cause = e.cause, this.requestId = e.requestId;
    }
    toJson(e = 0) {
      if (!(e >= 10))
        return e++, { errCode: this.errCode, errMsg: this.errMsg, errSubject: this.errSubject, cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause };
    }
  }
  var se = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t2) => uni.setStorageSync(e, t2), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() };
  function re$1(e) {
    return e && re$1(e.__v_raw) || e;
  }
  function ie() {
    return { token: se.getStorageSync("uni_id_token") || se.getStorageSync("uniIdToken"), tokenExpired: se.getStorageSync("uni_id_token_expired") };
  }
  function oe({ token: e, tokenExpired: t2 } = {}) {
    e && se.setStorageSync("uni_id_token", e), t2 && se.setStorageSync("uni_id_token_expired", t2);
  }
  let ae, ce;
  function ue() {
    return ae || (ae = uni.getSystemInfoSync()), ae;
  }
  function he() {
    let e, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e = s2, t2 = n2;
      }
    } catch (e2) {
    }
    return { channel: e, scene: t2 };
  }
  function le() {
    const e = uni.getLocale && uni.getLocale() || "en";
    if (ce)
      return { ...ce, locale: e, LOCALE: e };
    const t2 = ue(), { deviceId: n2, osName: s2, uniPlatform: r2, appId: i2 } = t2, o2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e2 = 0; e2 < o2.length; e2++) {
      delete t2[o2[e2]];
    }
    return ce = { PLATFORM: r2, OS: s2, APPID: i2, DEVICEID: n2, ...he(), ...t2 }, { ...ce, locale: e, LOCALE: e };
  }
  var de = { sign: function(e, t2) {
    let n2 = "";
    return Object.keys(e).sort().forEach(function(t3) {
      e[t3] && (n2 = n2 + "&" + t3 + "=" + e[t3]);
    }), n2 = n2.slice(1), o(n2, t2).toString();
  }, wrappedRequest: function(e, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e, { complete(e2) {
        e2 || (e2 = {});
        const t3 = e2.data && e2.data.header && e2.data.header["x-serverless-request-id"] || e2.header && e2.header["request-id"];
        if (!e2.statusCode || e2.statusCode >= 400)
          return s2(new ne({ code: "SYS_ERR", message: e2.errMsg || "request:fail", requestId: t3 }));
        const r2 = e2.data;
        if (r2.error)
          return s2(new ne({ code: r2.error.code, message: r2.error.message, requestId: t3 }));
        r2.result = r2.data, r2.requestId = t3, delete r2.data, n2(r2);
      } }));
    });
  }, toBase64: function(e) {
    return c.stringify(a.parse(e));
  } }, pe = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  const { t: fe } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: pe, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: pe }, "zh-Hans");
  var ge = class {
    constructor(e) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e, t2))
          throw new Error(fe("uniCloud.init.paramRequired", { param: t2 }));
      }), this.config = Object.assign({}, { endpoint: 0 === e.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = se, this._getAccessTokenPromiseHub = new I({ createPromise: () => this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e2) => {
        if (!e2.result || !e2.result.accessToken)
          throw new ne({ code: "AUTH_FAILED", message: "获取accessToken失败" });
        this.setAccessToken(e2.result.accessToken);
      }), retryRule: v });
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e) {
      this.accessToken = e;
    }
    requestWrapped(e) {
      return de.wrappedRequest(e, this.adapter.request);
    }
    requestAuth(e) {
      return this.requestWrapped(e);
    }
    request(e, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, n2) => {
        !t3 || "GATEWAY_INVALID_TOKEN" !== t3.code && "InvalidParameter.InvalidToken" !== t3.code ? n2(t3) : e2();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e) {
      const t2 = Object.assign({}, e);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = de.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
    async authorize() {
      await this.getAccessToken();
    }
    callFunction(e) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
          e2 && e2.statusCode < 400 ? o2(e2) : a2(new ne({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e2) {
          a2(new ne({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e2) => {
          i2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    async uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", cloudPathAsRealPath: s2 = false, onUploadProgress: r2, config: i2 }) {
      if ("string" !== g(t2))
        throw new ne({ code: "INVALID_PARAM", message: "cloudPath必须为字符串类型" });
      if (!(t2 = t2.trim()))
        throw new ne({ code: "INVALID_PARAM", message: "cloudPath不可为空" });
      if (/:\/\//.test(t2))
        throw new ne({ code: "INVALID_PARAM", message: "cloudPath不合法" });
      const o2 = i2 && i2.envType || this.config.envType;
      if (s2 && ("/" !== t2[0] && (t2 = "/" + t2), t2.indexOf("\\") > -1))
        throw new ne({ code: "INVALID_PARAM", message: "使用cloudPath作为路径时，cloudPath不可包含“\\”" });
      const a2 = (await this.getOSSUploadOptionsFromPath({ env: o2, filename: s2 ? t2.split("/").pop() : t2, fileId: s2 ? t2 : void 0 })).result, c2 = "https://" + a2.cdnDomain + "/" + a2.ossPath, { securityToken: u2, accessKeyId: h2, signature: l2, host: d2, ossPath: p2, id: f2, policy: m2, ossCallbackUrl: y2 } = a2, _2 = { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: h2, Signature: l2, host: d2, id: f2, key: p2, policy: m2, success_action_status: 200 };
      if (u2 && (_2["x-oss-security-token"] = u2), y2) {
        const e2 = JSON.stringify({ callbackUrl: y2, callbackBody: JSON.stringify({ fileId: f2, spaceId: this.config.spaceId }), callbackBodyType: "application/json" });
        _2.callback = de.toBase64(e2);
      }
      const w2 = { url: "https://" + a2.host, formData: _2, fileName: "file", name: "file", filePath: e, fileType: n2 };
      if (await this.uploadFileToOSS(Object.assign({}, w2, { onUploadProgress: r2 })), y2)
        return { success: true, filePath: e, fileID: c2 };
      if ((await this.reportOSSUpload({ id: f2 })).success)
        return { success: true, filePath: e, fileID: c2 };
      throw new ne({ code: "UPLOAD_FAILED", message: "文件上传失败" });
    }
    getTempFileURL({ fileList: e } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e) && 0 !== e.length || n2(new ne({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t2({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
      });
    }
    async getFileInfo({ fileList: e } = {}) {
      if (!Array.isArray(e) || 0 === e.length)
        throw new ne({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.info", params: JSON.stringify({ id: e.map((e2) => e2.split("?")[0]).join(",") }) };
      return { fileList: (await this.request(this.setupRequest(t2))).result };
    }
  };
  var me = { init(e) {
    const t2 = new ge(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const ye = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
  var _e;
  !function(e) {
    e.local = "local", e.none = "none", e.session = "session";
  }(_e || (_e = {}));
  var we = function() {
  };
  const ve = () => {
    let e;
    if (!Promise) {
      e = () => {
      }, e.promise = {};
      const t3 = () => {
        throw new ne({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
    }
    const t2 = new Promise((t3, n2) => {
      e = (e2, s2) => e2 ? n2(e2) : t3(s2);
    });
    return e.promise = t2, e;
  };
  function Ie(e) {
    return void 0 === e;
  }
  function Se(e) {
    return "[object Null]" === Object.prototype.toString.call(e);
  }
  var be;
  function ke(e) {
    const t2 = (n2 = e, "[object Array]" === Object.prototype.toString.call(n2) ? e : [e]);
    var n2;
    for (const e2 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e2;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp";
  }(be || (be = {}));
  const Ce = { adapter: null, runtime: void 0 }, Te = ["anonymousUuidKey"];
  class Pe extends we {
    constructor() {
      super(), Ce.adapter.root.tcbObject || (Ce.adapter.root.tcbObject = {});
    }
    setItem(e, t2) {
      Ce.adapter.root.tcbObject[e] = t2;
    }
    getItem(e) {
      return Ce.adapter.root.tcbObject[e];
    }
    removeItem(e) {
      delete Ce.adapter.root.tcbObject[e];
    }
    clear() {
      delete Ce.adapter.root.tcbObject;
    }
  }
  function Ae(e, t2) {
    switch (e) {
      case "local":
        return t2.localStorage || new Pe();
      case "none":
        return new Pe();
      default:
        return t2.sessionStorage || new Pe();
    }
  }
  class Ee {
    constructor(e) {
      if (!this._storage) {
        this._persistence = Ce.adapter.primaryStorage || e.persistence, this._storage = Ae(this._persistence, Ce.adapter);
        const t2 = `access_token_${e.env}`, n2 = `access_token_expire_${e.env}`, s2 = `refresh_token_${e.env}`, r2 = `anonymous_uuid_${e.env}`, i2 = `login_type_${e.env}`, o2 = `user_info_${e.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: r2, loginTypeKey: i2, userInfoKey: o2 };
      }
    }
    updatePersistence(e) {
      if (e === this._persistence)
        return;
      const t2 = "local" === this._persistence;
      this._persistence = e;
      const n2 = Ae(e, Ce.adapter);
      for (const e2 in this.keys) {
        const s2 = this.keys[e2];
        if (t2 && Te.includes(e2))
          continue;
        const r2 = this._storage.getItem(s2);
        Ie(r2) || Se(r2) || (n2.setItem(s2, r2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, r2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e, r2);
      } catch (e2) {
        throw e2;
      }
    }
    getStore(e, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e2) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e) {
      this._storage.removeItem(e);
    }
  }
  const Oe = {}, xe = {};
  function Re(e) {
    return Oe[e];
  }
  class Ue {
    constructor(e, t2) {
      this.data = t2 || null, this.name = e;
    }
  }
  class Le extends Ue {
    constructor(e, t2) {
      super("error", { error: e, data: t2 }), this.error = e;
    }
  }
  const Ne = new class {
    constructor() {
      this._listeners = {};
    }
    on(e, t2) {
      return function(e2, t3, n2) {
        n2[e2] = n2[e2] || [], n2[e2].push(t3);
      }(e, t2, this._listeners), this;
    }
    off(e, t2) {
      return function(e2, t3, n2) {
        if (n2 && n2[e2]) {
          const s2 = n2[e2].indexOf(t3);
          -1 !== s2 && n2[e2].splice(s2, 1);
        }
      }(e, t2, this._listeners), this;
    }
    fire(e, t2) {
      if (e instanceof Le)
        return console.error(e.error), this;
      const n2 = "string" == typeof e ? new Ue(e, t2 || {}) : e;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e2 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e2)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }();
  function De(e, t2) {
    Ne.on(e, t2);
  }
  function Fe(e, t2 = {}) {
    Ne.fire(e, t2);
  }
  function Me(e, t2) {
    Ne.off(e, t2);
  }
  const qe = "loginStateChanged", Ke = "loginStateExpire", je = "loginTypeChanged", Be = "anonymousConverted", $e = "refreshAccessToken";
  var We;
  !function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
  }(We || (We = {}));
  const ze = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Je = { "X-SDK-Version": "1.3.5" };
  function He(e, t2, n2) {
    const s2 = e[t2];
    e[t2] = function(t3) {
      const r2 = {}, i2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: o3 } = n3.call(e, t3);
        Object.assign(r2, s3), Object.assign(i2, o3);
      });
      const o2 = t3.data;
      return o2 && (() => {
        var e2;
        if (e2 = o2, "[object FormData]" !== Object.prototype.toString.call(e2))
          t3.data = { ...o2, ...r2 };
        else
          for (const e3 in r2)
            o2.append(e3, r2[e3]);
      })(), t3.headers = { ...t3.headers || {}, ...i2 }, s2.call(e, t3);
    };
  }
  function Ge() {
    const e = Math.random().toString(16).slice(2);
    return { data: { seqId: e }, headers: { ...Je, "x-seqid": e } };
  }
  class Ve {
    constructor(e = {}) {
      var t2;
      this.config = e, this._reqClass = new Ce.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `请求在${this.config.timeout / 1e3}s内未完成，已中断`, restrictedMethods: ["post"] }), this._cache = Re(this.config.env), this._localCache = (t2 = this.config.env, xe[t2]), He(this._reqClass, "post", [Ge]), He(this._reqClass, "upload", [Ge]), He(this._reqClass, "download", [Ge]);
    }
    async post(e) {
      return await this._reqClass.post(e);
    }
    async upload(e) {
      return await this._reqClass.upload(e);
    }
    async download(e) {
      return await this._reqClass.download(e);
    }
    async refreshAccessToken() {
      let e, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e = await this._refreshAccessTokenPromise;
      } catch (e2) {
        t2 = e2;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: r2 } = this._cache.keys;
      this._cache.removeStore(e), this._cache.removeStore(t2);
      let i2 = this._cache.getStore(n2);
      if (!i2)
        throw new ne({ message: "未登录CloudBase" });
      const o2 = { refresh_token: i2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", o2);
      if (a2.data.code) {
        const { code: e2 } = a2.data;
        if ("SIGN_PARAM_INVALID" === e2 || "REFRESH_TOKEN_EXPIRED" === e2 || "INVALID_REFRESH_TOKEN" === e2) {
          if (this._cache.getStore(s2) === We.ANONYMOUS && "INVALID_REFRESH_TOKEN" === e2) {
            const e3 = this._cache.getStore(r2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          Fe(Ke), this._cache.removeStore(n2);
        }
        throw new ne({ code: a2.data.code, message: `刷新access token失败：${a2.data.code}` });
      }
      if (a2.data.access_token)
        return Fe($e), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new ne({ message: "refresh token不存在，登录状态异常" });
      let s2 = this._cache.getStore(e), r2 = this._cache.getStore(t2), i2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, r2) && (i2 = false), (!s2 || !r2 || r2 < Date.now()) && i2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: r2 };
    }
    async request(e, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let r2 = "application/x-www-form-urlencoded";
      const i2 = { action: e, env: this.config.env, dataVersion: "2019-08-16", ...t2 };
      if (-1 === ze.indexOf(e)) {
        const { refreshTokenKey: e2 } = this._cache.keys;
        this._cache.getStore(e2) && (i2.access_token = (await this.getAccessToken()).accessToken);
      }
      let o2;
      if ("storage.uploadFile" === e) {
        o2 = new FormData();
        for (let e2 in o2)
          o2.hasOwnProperty(e2) && void 0 !== o2[e2] && o2.append(e2, i2[e2]);
        r2 = "multipart/form-data";
      } else {
        r2 = "application/json", o2 = {};
        for (let e2 in i2)
          void 0 !== i2[e2] && (o2[e2] = i2[e2]);
      }
      let a2 = { headers: { "content-type": r2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: h2, search: l2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), h2 && (d2 = { ...h2, ...d2 });
      let p2 = function(e2, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let r3 = "";
        for (let e3 in n3)
          "" === r3 ? !s3 && (t3 += "?") : r3 += "&", r3 += `${e3}=${encodeURIComponent(n3[e3])}`;
        return /^http(s)?\:\/\//.test(t3 += r3) ? t3 : `${e2}${t3}`;
      }(ye, "//tcb-api.tencentcloudapi.com/web", d2);
      l2 && (p2 += l2);
      const f2 = await this.post({ url: p2, data: o2, ...a2 }), g2 = f2.header && f2.header["x-tcb-trace"];
      if (g2 && this._localCache.setStore(s2, g2), 200 !== Number(f2.status) && 200 !== Number(f2.statusCode) || !f2.data)
        throw new ne({ code: "NETWORK_ERROR", message: "network request error" });
      return f2;
    }
    async send(e, t2 = {}) {
      const n2 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
      if ("ACCESS_TOKEN_EXPIRED" === n2.data.code && -1 === ze.indexOf(e)) {
        await this.refreshAccessToken();
        const n3 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new ne({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new ne({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
  }
  const Ye = {};
  function Qe(e) {
    return Ye[e];
  }
  class Xe {
    constructor(e) {
      this.config = e, this._cache = Re(e.env), this._request = Qe(e.env);
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
    setAccessToken(e, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e);
    }
  }
  class Ze {
    constructor(e) {
      if (!e)
        throw new ne({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e, this._cache = Re(this._envId), this._request = Qe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e) {
      if ("string" != typeof e)
        throw new ne({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e });
    }
    linkWithRedirect(e) {
      e.signInWithRedirect();
    }
    updatePassword(e, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e });
    }
    updateEmail(e) {
      return this._request.send("auth.updateEmail", { newEmail: e });
    }
    updateUsername(e) {
      if ("string" != typeof e)
        throw new ne({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e });
    }
    async getLinkedUidList() {
      const { data: e } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e;
      return n2.forEach((e2) => {
        e2.wxOpenId && e2.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", { uid: e });
    }
    unlink(e) {
      return this._request.send("auth.unlink", { platform: e });
    }
    async update(e) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 } = e, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: r2, country: i2, city: o2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setUserInfo() {
      const { userInfoKey: e } = this._cache.keys, t2 = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
        this[e2] = t2[e2];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e), this.setUserInfo();
    }
  }
  class et {
    constructor(e) {
      if (!e)
        throw new ne({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = Re(e);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, r2 = this._cache.getStore(t2), i2 = this._cache.getStore(n2), o2 = this._cache.getStore(s2);
      this.credential = { refreshToken: r2, accessToken: i2, accessTokenExpire: o2 }, this.user = new Ze(e);
    }
    get isAnonymousAuth() {
      return this.loginType === We.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === We.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === We.WECHAT || this.loginType === We.WECHAT_OPEN || this.loginType === We.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class tt extends Xe {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e) || void 0, s2 = this._cache.getStore(t2) || void 0, r2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (r2.uuid && r2.refresh_token) {
        this._setAnonymousUUID(r2.uuid), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), Fe(qe), Fe(je, { env: this.config.env, loginType: We.ANONYMOUS, persistence: "local" });
        const e2 = new et(this.config.env);
        return await e2.user.refresh(), e2;
      }
      throw new ne({ message: "匿名登录失败" });
    }
    async linkAndRetrieveDataWithTicket(e) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: r2, ticket: e });
      if (i2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(i2.refresh_token), await this._request.refreshAccessToken(), Fe(Be, { env: this.config.env }), Fe(je, { loginType: We.CUSTOM, persistence: "local" }), { credential: { refreshToken: i2.refresh_token } };
      throw new ne({ message: "匿名转化失败" });
    }
    _setAnonymousUUID(e) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e), this._cache.setStore(n2, We.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class nt extends Xe {
    async signIn(e) {
      if ("string" != typeof e)
        throw new ne({ code: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), Fe(qe), Fe(je, { env: this.config.env, loginType: We.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new et(this.config.env);
      throw new ne({ message: "自定义登录失败" });
    }
  }
  class st extends Xe {
    async signIn(e, t2) {
      if ("string" != typeof e)
        throw new ne({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token: i2, access_token_expire: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), i2 && o2 ? this.setAccessToken(i2, o2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Fe(qe), Fe(je, { env: this.config.env, loginType: We.EMAIL, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new ne({ code: s2.code, message: `邮箱登录失败: ${s2.message}` }) : new ne({ message: "邮箱登录失败" });
    }
    async activate(e) {
      return this._request.send("auth.activateEndUserMail", { token: e });
    }
    async resetPasswordWithToken(e, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t2 });
    }
  }
  class rt extends Xe {
    async signIn(e, t2) {
      if ("string" != typeof e)
        throw new ne({ code: "PARAM_ERROR", message: "username must be a string" });
      "string" != typeof t2 && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: We.USERNAME, username: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: r2, access_token_expire: i2, access_token: o2 } = s2;
      if (r2)
        return this.setRefreshToken(r2), o2 && i2 ? this.setAccessToken(o2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), Fe(qe), Fe(je, { env: this.config.env, loginType: We.USERNAME, persistence: this.config.persistence }), new et(this.config.env);
      throw s2.code ? new ne({ code: s2.code, message: `用户名密码登录失败: ${s2.message}` }) : new ne({ message: "用户名密码登录失败" });
    }
  }
  class it {
    constructor(e) {
      this.config = e, this._cache = Re(e.env), this._request = Qe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), De(je, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e = this.hasLoginState();
      return e && e.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new tt(this.config);
    }
    customAuthProvider() {
      return new nt(this.config);
    }
    emailAuthProvider() {
      return new st(this.config);
    }
    usernameAuthProvider() {
      return new rt(this.config);
    }
    async signInAnonymously() {
      return new tt(this.config).signIn();
    }
    async signInWithEmailAndPassword(e, t2) {
      return new st(this.config).signIn(e, t2);
    }
    signInWithUsernameAndPassword(e, t2) {
      return new rt(this.config).signIn(e, t2);
    }
    async linkAndRetrieveDataWithTicket(e) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new tt(this.config)), De(Be, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
    }
    async signOut() {
      if (this.loginType === We.ANONYMOUS)
        throw new ne({ message: "匿名用户不支持登出操作" });
      const { refreshTokenKey: e, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e);
      if (!s2)
        return;
      const r2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e), this._cache.removeStore(t2), this._cache.removeStore(n2), Fe(qe), Fe(je, { env: this.config.env, loginType: We.NULL, persistence: this.config.persistence }), r2;
    }
    async signUpWithEmailAndPassword(e, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t2 });
    }
    async sendPasswordResetEmail(e) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e });
    }
    onLoginStateChanged(e) {
      De(qe, () => {
        const t3 = this.hasLoginState();
        e.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e.call(this, t2);
    }
    onLoginStateExpired(e) {
      De(Ke, e.bind(this));
    }
    onAccessTokenRefreshed(e) {
      De($e, e.bind(this));
    }
    onAnonymousConverted(e) {
      De(Be, e.bind(this));
    }
    onLoginTypeChanged(e) {
      De(je, () => {
        const t2 = this.hasLoginState();
        e.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e } = this._cache.keys;
      return this._cache.getStore(e) ? new et(this.config.env) : null;
    }
    async isUsernameRegistered(e) {
      if ("string" != typeof e)
        throw new ne({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e) {
      return new nt(this.config).signIn(e);
    }
    shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : { ...e.data, requestId: e.seqId });
    }
    getAuthHeader() {
      const { refreshTokenKey: e, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e) {
      const { env: t2 } = e.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e) {
      const { loginType: t2, persistence: n2, env: s2 } = e.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const ot = function(e, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2, filePath: r2, onUploadProgress: i2, fileType: o2 = "image" } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: h2, cosFileId: l2 }, requestId: d2 } = e2, p2 = { key: s2, signature: c2, "x-cos-meta-fileid": l2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: p2, file: r2, name: s2, fileType: o2, onUploadProgress: i2 }).then((e3) => {
        201 === e3.statusCode ? t2(null, { fileID: h2, requestId: d2 }) : t2(new ne({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e3.data}` }));
      }).catch((e3) => {
        t2(e3);
      });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, at = function(e, t2) {
    t2 = t2 || ve();
    const n2 = Qe(this.config.env), { cloudPath: s2 } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      t2(null, e2);
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, ct = function({ fileList: e }, t2) {
    if (t2 = t2 || ve(), !e || !Array.isArray(e))
      return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };
    for (let t3 of e)
      if (!t3 || "string" != typeof t3)
        return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };
    const n2 = { fileid_list: e };
    return Qe(this.config.env).send("storage.batchDeleteFile", n2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, ut = function({ fileList: e }, t2) {
    t2 = t2 || ve(), e && Array.isArray(e) || t2(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });
    let n2 = [];
    for (let s3 of e)
      "object" == typeof s3 ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : "string" == typeof s3 ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });
    const s2 = { file_list: n2 };
    return Qe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.download_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, ht = async function({ fileID: e }, t2) {
    const n2 = (await ut.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
    if ("SUCCESS" !== n2.code)
      return t2 ? t2(n2) : new Promise((e2) => {
        e2(n2);
      });
    const s2 = Qe(this.config.env);
    let r2 = n2.download_url;
    if (r2 = encodeURI(r2), !t2)
      return s2.download({ url: r2 });
    t2(await s2.download({ url: r2 }));
  }, lt = function({ name: e, data: t2, query: n2, parse: s2, search: r2 }, i2) {
    const o2 = i2 || ve();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e2) {
      return Promise.reject(e2);
    }
    if (!e)
      return Promise.reject(new ne({ code: "PARAM_ERROR", message: "函数名不能为空" }));
    const c2 = { inQuery: n2, parse: s2, search: r2, function_name: e, request_data: a2 };
    return Qe(this.config.env).send("functions.invokeFunction", c2).then((e2) => {
      if (e2.code)
        o2(null, e2);
      else {
        let t3 = e2.data.response_data;
        if (s2)
          o2(null, { result: t3, requestId: e2.requestId });
        else
          try {
            t3 = JSON.parse(e2.data.response_data), o2(null, { result: t3, requestId: e2.requestId });
          } catch (e3) {
            o2(new ne({ message: "response data must be json" }));
          }
      }
      return o2.promise;
    }).catch((e2) => {
      o2(e2);
    }), o2.promise;
  }, dt = { timeout: 15e3, persistence: "session" }, pt = {};
  class ft {
    constructor(e) {
      this.config = e || this.config, this.authObj = void 0;
    }
    init(e) {
      switch (Ce.adapter || (this.requestClient = new Ce.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `请求在${(e.timeout || 5e3) / 1e3}s内未完成，已中断` })), this.config = { ...dt, ...e }, true) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new ft(this.config);
    }
    auth({ persistence: e } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e || Ce.adapter.primaryStorage || dt.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e2) {
        const { env: t3 } = e2;
        Oe[t3] = new Ee(e2), xe[t3] = new Ee({ ...e2, persistence: "local" });
      }(this.config), n2 = this.config, Ye[n2.env] = new Ve(n2), this.authObj = new it(this.config), this.authObj;
    }
    on(e, t2) {
      return De.apply(this, [e, t2]);
    }
    off(e, t2) {
      return Me.apply(this, [e, t2]);
    }
    callFunction(e, t2) {
      return lt.apply(this, [e, t2]);
    }
    deleteFile(e, t2) {
      return ct.apply(this, [e, t2]);
    }
    getTempFileURL(e, t2) {
      return ut.apply(this, [e, t2]);
    }
    downloadFile(e, t2) {
      return ht.apply(this, [e, t2]);
    }
    uploadFile(e, t2) {
      return ot.apply(this, [e, t2]);
    }
    getUploadMetadata(e, t2) {
      return at.apply(this, [e, t2]);
    }
    registerExtension(e) {
      pt[e.name] = e;
    }
    async invokeExtension(e, t2) {
      const n2 = pt[e];
      if (!n2)
        throw new ne({ message: `扩展${e} 必须先注册` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e) {
      const { adapter: t2, runtime: n2 } = ke(e) || {};
      t2 && (Ce.adapter = t2), n2 && (Ce.runtime = n2);
    }
  }
  var gt = new ft();
  function mt(e, t2, n2) {
    void 0 === n2 && (n2 = {});
    var s2 = /\?/.test(t2), r2 = "";
    for (var i2 in n2)
      "" === r2 ? !s2 && (t2 += "?") : r2 += "&", r2 += i2 + "=" + encodeURIComponent(n2[i2]);
    return /^http(s)?:\/\//.test(t2 += r2) ? t2 : "" + e + t2;
  }
  class yt {
    post(e) {
      const { url: t2, data: n2, headers: s2 } = e;
      return new Promise((e2, r2) => {
        se.request({ url: mt("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e2(t3);
        }, fail(e3) {
          r2(e3);
        } });
      });
    }
    upload(e) {
      return new Promise((t2, n2) => {
        const { url: s2, file: r2, data: i2, headers: o2, fileType: a2 } = e, c2 = se.uploadFile({ url: mt("https:", s2), name: "file", formData: Object.assign({}, i2), filePath: r2, fileType: a2, header: o2, success(e2) {
          const n3 = { statusCode: e2.statusCode, data: e2.data || {} };
          200 === e2.statusCode && i2.success_action_status && (n3.statusCode = parseInt(i2.success_action_status, 10)), t2(n3);
        }, fail(e2) {
          n2(new Error(e2.errMsg || "uploadFile:fail"));
        } });
        "function" == typeof e.onUploadProgress && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((t3) => {
          e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const _t = { setItem(e, t2) {
    se.setStorageSync(e, t2);
  }, getItem: (e) => se.getStorageSync(e), removeItem(e) {
    se.removeStorageSync(e);
  }, clear() {
    se.clearStorageSync();
  } };
  var wt = { genAdapter: function() {
    return { root: {}, reqClass: yt, localStorage: _t, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  gt.useAdapters(wt);
  const vt = gt, It = vt.init;
  vt.init = function(e) {
    e.env = e.spaceId;
    const t2 = It.call(this, e);
    t2.config.provider = "tencent", t2.config.spaceId = e.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e2) {
      const t3 = n2.call(this, e2);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
        var n3;
        t3[e3] = (n3 = t3[e3], function(e4) {
          e4 = e4 || {};
          const { success: t4, fail: s2, complete: r2 } = te(e4);
          if (!(t4 || s2 || r2))
            return n3.call(this, e4);
          n3.call(this, e4).then((e5) => {
            t4 && t4(e5), r2 && r2(e5);
          }, (e5) => {
            s2 && s2(e5), r2 && r2(e5);
          });
        }).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var St = vt;
  var bt = class extends ge {
    getAccessToken() {
      return new Promise((e, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e(n2);
      });
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      "auth" !== t2 && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = de.sign(n2, this.config.clientSecret);
      const r2 = le();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(r2));
      const { token: i2 } = ie();
      return s2["x-client-token"] = i2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, onUploadProgress: i2 }) {
      return new Promise((o2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: r2, success(e2) {
          e2 && e2.statusCode < 400 ? o2(e2) : a2(new ne({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
        }, fail(e2) {
          a2(new ne({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "文件上传失败" }));
        } });
        "function" == typeof i2 && c2 && "function" == typeof c2.onProgressUpdate && c2.onProgressUpdate((e2) => {
          i2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new ne({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });
      let r2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: i2, formData: o2, name: a2 } = t3.result;
        r2 = t3.result.fileUrl;
        const c2 = { url: i2, formData: o2, name: a2, filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: r2 }) : s3(new ne({ code: "UPLOAD_FAILED", message: "文件上传失败" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2)).then((e2) => {
        if (e2.success)
          return e2.result;
        throw new ne({ code: "DELETE_FILE_FAILED", message: "删除文件失败" });
      });
    }
    getTempFileURL({ fileList: e } = {}) {
      if (!Array.isArray(e) || 0 === e.length)
        throw new ne({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" });
      const t2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2)).then((e2) => {
        if (e2.success)
          return { fileList: e2.result.fileList.map((e3) => ({ fileID: e3.fileID, tempFileURL: e3.tempFileURL })) };
        throw new ne({ code: "GET_TEMP_FILE_URL_FAILED", message: "获取临时文件链接失败" });
      });
    }
  };
  var kt = { init(e) {
    const t2 = new bt(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  function Ct({ data: e }) {
    let t2;
    t2 = le();
    const n2 = JSON.parse(JSON.stringify(e || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e2 } = ie();
      e2 && (n2.uniIdToken = e2);
    }
    return n2;
  }
  async function Tt({ name: e, data: t2 } = {}) {
    await this.__dev__.initLocalNetwork();
    const { localAddress: n2, localPort: s2 } = this.__dev__, r2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], i2 = this.config.spaceId, o2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e}`;
    return new Promise((t3, n3) => {
      se.request({ method: "POST", url: o2, data: { name: e, platform: P, provider: r2, spaceId: i2 }, timeout: 3e3, success(e2) {
        t3(e2);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });
      } });
    }).then(({ data: e2 } = {}) => {
      const { code: t3, message: n3 } = e2 || {};
      return { code: 0 === t3 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (0 !== n3) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`此云函数（${e}）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`此云函数（${e}）已加密不可本地调试，自动切换为云端已部署的云函数`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
            break;
          case "NETWORK_ERROR": {
            const e2 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
            throw console.error(e2), new Error(e2);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e2 = `检测本地调试服务出现错误：${s3}，请检查网络环境或重启客户端再试`;
            throw console.error(e2), new Error(e2);
          }
        }
        return this._callCloudFunction({ name: e, data: t2 });
      }
      return new Promise((e2, n4) => {
        const s4 = Ct.call(this, { data: t2 });
        se.request({ method: "POST", url: a2, data: { provider: r2, platform: P, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new ne({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e2({ result: s5 }), fail(e3) {
          n4(new ne({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const Pt = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];
  var At = /[\\^$.*+?()[\]{}|]/g, Et = RegExp(At.source);
  function Ot(e, t2, n2) {
    return e.replace(new RegExp((s2 = t2) && Et.test(s2) ? s2.replace(At, "\\$&") : s2, "g"), n2);
    var s2;
  }
  const Rt = "request", Ut = "response", Lt = "both";
  const yn = { code: 2e4, message: "System error" }, _n = { code: 20101, message: "Invalid client" };
  function In(e) {
    const { errSubject: t2, subject: n2, errCode: s2, errMsg: r2, code: i2, message: o2, cause: a2 } = e || {};
    return new ne({ subject: t2 || n2 || "uni-secure-network", code: s2 || i2 || yn.code, message: r2 || o2, cause: a2 });
  }
  let bn;
  function An({ secretType: e } = {}) {
    return e === Rt || e === Ut || e === Lt;
  }
  function En({ name: e, data: t2 = {} } = {}) {
    return "DCloud-clientDB" === e && "encryption" === t2.redirectTo && "getAppClientKey" === t2.action;
  }
  function On({ provider: e, spaceId: t2, functionName: n2 } = {}) {
    const { appId: s2, uniPlatform: r2, osName: i2 } = ue();
    let o2 = r2;
    "app" === r2 && (o2 = i2);
    const a2 = function({ provider: e2, spaceId: t3 } = {}) {
      const n3 = T;
      if (!n3)
        return {};
      e2 = function(e3) {
        return "tencent" === e3 ? "tcb" : e3;
      }(e2);
      const s3 = n3.find((n4) => n4.provider === e2 && n4.spaceId === t3);
      return s3 && s3.config;
    }({ provider: e, spaceId: t2 });
    if (!a2 || !a2.accessControl || !a2.accessControl.enable)
      return false;
    const c2 = a2.accessControl.function || {}, u2 = Object.keys(c2);
    if (0 === u2.length)
      return true;
    const h2 = function(e2, t3) {
      let n3, s3, r3;
      for (let i3 = 0; i3 < e2.length; i3++) {
        const o3 = e2[i3];
        o3 !== t3 ? "*" !== o3 ? o3.split(",").map((e3) => e3.trim()).indexOf(t3) > -1 && (s3 = o3) : r3 = o3 : n3 = o3;
      }
      return n3 || s3 || r3;
    }(u2, n2);
    if (!h2)
      return false;
    if ((c2[h2] || []).find((e2 = {}) => e2.appId === s2 && (e2.platform || "").toLowerCase() === o2.toLowerCase()))
      return true;
    throw console.error(`此应用[appId: ${s2}, platform: ${o2}]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client`), In(_n);
  }
  function xn({ functionName: e, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function Rn(e) {
    const t2 = e.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = Ct.call(e, { data: n3.data });
      const r2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider], i2 = An(n3), o2 = En(n3), a2 = i2 || o2;
      return t2.call(this, n3).then((e2) => (e2.errCode = 0, !a2 && xn.call(this, { functionName: s2, result: e2, logPvd: r2 }), Promise.resolve(e2)), (e2) => (!a2 && xn.call(this, { functionName: s2, result: e2, logPvd: r2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: r3, content: i3, mode: o3 } = n4[s3], a3 = e3.match(r3);
          if (!a3)
            continue;
          let c2 = i3;
          for (let e4 = 1; e4 < a3.length; e4++)
            c2 = Ot(c2, `{$${e4}}`, a3[e4]);
          for (const e4 in t3)
            c2 = Ot(c2, `{${e4}}`, t3[e4]);
          return "replace" === o3 ? c2 : e3 + c2;
        }
        return e3;
      }({ message: `[${n3.name}]: ${e2.message}`, formatter: Pt, extraInfo: { functionName: s2 } })), Promise.reject(e2)));
    };
    e.callFunction = function(t3) {
      const { provider: s2, spaceId: r2 } = e.config, i2 = t3.name;
      let o2, a2;
      if (t3.data = t3.data || {}, e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && E ? (e._callCloudFunction || (e._callCloudFunction = n2, e._callLocalFunction = Tt), o2 = Tt) : o2 = n2, o2 = o2.bind(e), En(t3))
        a2 = n2.call(e, t3);
      else if (An(t3)) {
        a2 = new bn({ secretType: t3.secretType, uniCloudIns: e }).wrapEncryptDataCallFunction(n2.bind(e))(t3);
      } else if (On({ provider: s2, spaceId: r2, functionName: i2 })) {
        a2 = new bn({ secretType: t3.secretType, uniCloudIns: e }).wrapVerifyClientCallFunction(n2.bind(e))(t3);
      } else
        a2 = o2(t3);
      return Object.defineProperty(a2, "result", { get: () => (console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), a2;
    };
  }
  bn = class {
    constructor() {
      throw In({ message: `Platform ${P} is not enabled, please check whether secure network module is enabled in your manifest.json` });
    }
  };
  const Un = Symbol("CLIENT_DB_INTERNAL");
  function Ln(e, t2) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Un, e.inspect = null, e.__v_raw = void 0, new Proxy(e, { get(e2, n2, s2) {
      if ("_uniClient" === n2)
        return null;
      if ("symbol" == typeof n2)
        return e2[n2];
      if (n2 in e2 || "string" != typeof n2) {
        const t3 = e2[n2];
        return "function" == typeof t3 ? t3.bind(e2) : t3;
      }
      return t2.get(e2, n2, s2);
    } });
  }
  function Nn(e) {
    return { on: (t2, n2) => {
      e[t2] = e[t2] || [], e[t2].indexOf(n2) > -1 || e[t2].push(n2);
    }, off: (t2, n2) => {
      e[t2] = e[t2] || [];
      const s2 = e[t2].indexOf(n2);
      -1 !== s2 && e[t2].splice(s2, 1);
    } };
  }
  const Dn = ["db.Geo", "db.command", "command.aggregate"];
  function Fn(e, t2) {
    return Dn.indexOf(`${e}.${t2}`) > -1;
  }
  function Mn(e) {
    switch (g(e = re$1(e))) {
      case "array":
        return e.map((e2) => Mn(e2));
      case "object":
        return e._internalType === Un || Object.keys(e).forEach((t2) => {
          e[t2] = Mn(e[t2]);
        }), e;
      case "regexp":
        return { $regexp: { source: e.source, flags: e.flags } };
      case "date":
        return { $date: e.toISOString() };
      default:
        return e;
    }
  }
  function qn(e) {
    return e && e.content && e.content.$method;
  }
  class Kn {
    constructor(e, t2, n2) {
      this.content = e, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e = this;
      const t2 = [e.content];
      for (; e.prevStage; )
        e = e.prevStage, t2.push(e.content);
      return { $db: t2.reverse().map((e2) => ({ $method: e2.$method, $param: Mn(e2.$param) })) };
    }
    toString() {
      return JSON.stringify(this.toJSON());
    }
    getAction() {
      const e = this.toJSON().$db.find((e2) => "action" === e2.$method);
      return e && e.$param && e.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e) => "action" !== e.$method) };
    }
    get isAggregate() {
      let e = this;
      for (; e; ) {
        const t2 = qn(e), n2 = qn(e.prevStage);
        if ("aggregate" === t2 && "collection" === n2 || "pipeline" === t2)
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e = this;
      for (; e; ) {
        if ("command" === qn(e))
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e = this;
      for (; e; ) {
        const t2 = qn(e), n2 = qn(e.prevStage);
        if ("aggregate" === t2 && "command" === n2)
          return true;
        e = e.prevStage;
      }
      return false;
    }
    getNextStageFn(e) {
      const t2 = this;
      return function() {
        return jn({ $method: e, $param: Mn(Array.from(arguments)) }, t2, t2._database);
      };
    }
    get count() {
      return this.isAggregate ? this.getNextStageFn("count") : function() {
        return this._send("count", Array.from(arguments));
      };
    }
    get remove() {
      return this.isCommand ? this.getNextStageFn("remove") : function() {
        return this._send("remove", Array.from(arguments));
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    get add() {
      return this.isCommand ? this.getNextStageFn("add") : function() {
        return this._send("add", Array.from(arguments));
      };
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      return this.isCommand ? this.getNextStageFn("set") : function() {
        throw new Error("JQL禁止使用set方法");
      };
    }
    _send(e, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e, $param: Mn(t2) }), b) {
        const e2 = s2.$db.find((e3) => "collection" === e3.$method), t3 = e2 && e2.$param;
        t3 && 1 === t3.length && "string" == typeof e2.$param[0] && e2.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function jn(e, t2, n2) {
    return Ln(new Kn(e, t2, n2), { get(e2, t3) {
      let s2 = "db";
      return e2 && e2.content && (s2 = e2.content.$method), Fn(s2, t3) ? jn({ $method: t3 }, e2, n2) : function() {
        return jn({ $method: t3, $param: Mn(Array.from(arguments)) }, e2, n2);
      };
    } });
  }
  function Bn({ path: e, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e.map((e2) => ({ $method: e2 })), { $method: t2, $param: this.param }] };
      }
      toString() {
        return JSON.stringify(this.toJSON());
      }
    };
  }
  function $n(e, t2 = {}) {
    return Ln(new e(t2), { get: (e2, t3) => Fn("db", t3) ? jn({ $method: t3 }, null, e2) : function() {
      return jn({ $method: t3, $param: Mn(Array.from(arguments)) }, null, e2);
    } });
  }
  class Wn extends class {
    constructor({ uniClient: e = {}, isJQL: t2 = false } = {}) {
      this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = U("_globalUniCloudDatabaseCallback")), t2 || (this.auth = Nn(this._authCallBacks)), this._isJQL = t2, Object.assign(this, Nn(this._dbCallBacks)), this.env = Ln({}, { get: (e2, t3) => ({ $env: t3 }) }), this.Geo = Ln({}, { get: (e2, t3) => Bn({ path: ["Geo"], method: t3 }) }), this.serverDate = Bn({ path: [], method: "serverDate" }), this.RegExp = Bn({ path: [], method: "RegExp" });
    }
    getCloudEnv(e) {
      if ("string" != typeof e || !e.trim())
        throw new Error("getCloudEnv参数错误");
      return { $env: e.replace("$cloudEnv_", "") };
    }
    _callback(e, t2) {
      const n2 = this._dbCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    _callbackAuth(e, t2) {
      const n2 = this._authCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    multiSend() {
      const e = Array.from(arguments), t2 = e.map((e2) => {
        const t3 = e2.getAction(), n2 = e2.getCommand();
        if ("getTemp" !== n2.$db[n2.$db.length - 1].$method)
          throw new Error("multiSend只支持子命令内使用getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e });
    }
  } {
    _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
    _callCloudFunction({ action: e, command: t2, multiCommand: n2, queryList: s2 }) {
      function r2(e2, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const r3 = s2[n3];
            r3.udb && "function" == typeof r3.udb.setResult && (t3 ? r3.udb.setResult(t3) : r3.udb.setResult(e2.result.dataList[n3]));
          }
      }
      const i2 = this, o2 = this._isJQL ? "databaseForJQL" : "database";
      function a2(e2) {
        return i2._callback("error", [e2]), M(q(o2, "fail"), e2).then(() => M(q(o2, "complete"), e2)).then(() => (r2(null, e2), Q(B, { type: z, content: e2 }), Promise.reject(e2)));
      }
      const c2 = M(q(o2, "invoke")), u2 = this._uniClient;
      return c2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: l, data: { action: e, command: t2, multiCommand: n2 } })).then((e2) => {
        const { code: t3, message: n3, token: s3, tokenExpired: c3, systemInfo: u3 = [] } = e2.result;
        if (u3)
          for (let e3 = 0; e3 < u3.length; e3++) {
            const { level: t4, message: n4, detail: s4 } = u3[e3], r3 = console["warn" === t4 ? "error" : t4] || console.log;
            let i3 = "[System Info]" + n4;
            s4 && (i3 = `${i3}
详细信息：${s4}`), r3(i3);
          }
        if (t3) {
          return a2(new ne({ code: t3, message: n3, requestId: e2.requestId }));
        }
        e2.result.errCode = e2.result.errCode || e2.result.code, e2.result.errMsg = e2.result.errMsg || e2.result.message, s3 && c3 && (oe({ token: s3, tokenExpired: c3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: c3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: c3 }]), Q(W, { token: s3, tokenExpired: c3 }));
        const h2 = [{ prop: "affectedDocs", tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代" }, { prop: "code", tips: "code不再推荐使用，请使用errCode替代" }, { prop: "message", tips: "message不再推荐使用，请使用errMsg替代" }];
        for (let t4 = 0; t4 < h2.length; t4++) {
          const { prop: n4, tips: s4 } = h2[t4];
          if (n4 in e2.result) {
            const t5 = e2.result[n4];
            Object.defineProperty(e2.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e3) {
          return M(q(o2, "success"), e3).then(() => M(q(o2, "complete"), e3)).then(() => {
            r2(e3, null);
            const t4 = i2._parseResult(e3);
            return Q(B, { type: z, content: t4 }), Promise.resolve(t4);
          });
        }(e2);
      }, (e2) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e2.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a2(new ne({ code: e2.code || "SYSTEM_ERROR", message: e2.message, requestId: e2.requestId }));
      });
    }
  }
  const zn = "token无效，跳转登录页面", Jn = "token过期，跳转登录页面", Hn = { TOKEN_INVALID_TOKEN_EXPIRED: Jn, TOKEN_INVALID_INVALID_CLIENTID: zn, TOKEN_INVALID: zn, TOKEN_INVALID_WRONG_TOKEN: zn, TOKEN_INVALID_ANONYMOUS_USER: zn }, Gn = { "uni-id-token-expired": Jn, "uni-id-check-token-failed": zn, "uni-id-token-not-exist": zn, "uni-id-check-device-feature-failed": zn };
  function Vn(e, t2) {
    let n2 = "";
    return n2 = e ? `${e}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function Yn(e = [], t2 = "") {
    const n2 = [], s2 = [];
    return e.forEach((e2) => {
      true === e2.needLogin ? n2.push(Vn(t2, e2.path)) : false === e2.needLogin && s2.push(Vn(t2, e2.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function Qn(e) {
    return e.split("?")[0].replace(/^\//, "");
  }
  function Xn() {
    return function(e) {
      let t2 = e && e.$page && e.$page.fullPath || "";
      return t2 ? ("/" !== t2.charAt(0) && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e = getCurrentPages();
      return e[e.length - 1];
    }());
  }
  function Zn() {
    return Qn(Xn());
  }
  function es(e = "", t2 = {}) {
    if (!e)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = Qn(e);
    return n2.some((e2) => e2.pagePath === s2);
  }
  const ts = !!t$3.uniIdRouter;
  const { loginPage: ns, routerNeedLogin: ss, resToLogin: rs, needLoginPage: is, notNeedLoginPage: os, loginPageInTabBar: as } = function({ pages: e = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: r2 = {} } = t$3) {
    const { loginPage: i2, needLogin: o2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = Yn(e), { needLoginPage: h2, notNeedLoginPage: l2 } = function(e2 = []) {
      const t2 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: r3 = [] } = e3, { needLoginPage: i3, notNeedLoginPage: o3 } = Yn(r3, s3);
        t2.push(...i3), n3.push(...o3);
      }), { needLoginPage: t2, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: i2, routerNeedLogin: o2, resToLogin: a2, needLoginPage: [...c2, ...h2], notNeedLoginPage: [...u2, ...l2], loginPageInTabBar: es(i2, r2) };
  }();
  if (is.indexOf(ns) > -1)
    throw new Error(`Login page [${ns}] should not be "needLogin", please check your pages.json`);
  function cs(e) {
    const t2 = Zn();
    if ("/" === e.charAt(0))
      return e;
    const [n2, s2] = e.split("?"), r2 = n2.replace(/^\//, "").split("/"), i2 = t2.split("/");
    i2.pop();
    for (let e2 = 0; e2 < r2.length; e2++) {
      const t3 = r2[e2];
      ".." === t3 ? i2.pop() : "." !== t3 && i2.push(t3);
    }
    return "" === i2[0] && i2.shift(), "/" + i2.join("/") + (s2 ? "?" + s2 : "");
  }
  function us(e) {
    const t2 = Qn(cs(e));
    return !(os.indexOf(t2) > -1) && (is.indexOf(t2) > -1 || ss.some((t3) => function(e2, t4) {
      return new RegExp(t4).test(e2);
    }(e, t3)));
  }
  function hs({ redirect: e }) {
    const t2 = Qn(e), n2 = Qn(ns);
    return Zn() !== n2 && t2 !== n2;
  }
  function ls({ api: e, redirect: t2 } = {}) {
    if (!t2 || !hs({ redirect: t2 }))
      return;
    const n2 = function(e2, t3) {
      return "/" !== e2.charAt(0) && (e2 = "/" + e2), t3 ? e2.indexOf("?") > -1 ? e2 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2;
    }(ns, t2);
    as ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
    const s2 = { navigateTo: uni.navigateTo, redirectTo: uni.redirectTo, switchTab: uni.switchTab, reLaunch: uni.reLaunch };
    setTimeout(() => {
      s2[e]({ url: n2 });
    });
  }
  function ds({ url: e } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e2, tokenExpired: t3 } = ie();
      let n3;
      if (e2) {
        if (t3 < Date.now()) {
          const e3 = "uni-id-token-expired";
          n3 = { errCode: e3, errMsg: Gn[e3] };
        }
      } else {
        const e3 = "uni-id-check-token-failed";
        n3 = { errCode: e3, errMsg: Gn[e3] };
      }
      return n3;
    }();
    if (us(e) && n2) {
      n2.uniIdRedirectUrl = e;
      if (G($).length > 0)
        return setTimeout(() => {
          Q($, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function ps() {
    !function() {
      const e2 = Xn(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = ds({ url: e2 });
      t2 || n2 && ls({ api: "redirectTo", redirect: e2 });
    }();
    const e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e.length; t2++) {
      const n2 = e[t2];
      uni.addInterceptor(n2, { invoke(e2) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = ds({ url: e2.url });
        return t3 ? e2 : s2 ? (ls({ api: n2, redirect: cs(e2.url) }), false) : e2;
      } });
    }
  }
  function fs() {
    this.onResponse((e) => {
      const { type: t2, content: n2 } = e;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e2) {
            if ("object" != typeof e2)
              return false;
            const { errCode: t3 } = e2 || {};
            return t3 in Gn;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e2) {
            if ("object" != typeof e2)
              return false;
            const { errCode: t3 } = e2 || {};
            return t3 in Hn;
          }(n2);
      }
      s2 && function(e2 = {}) {
        const t3 = G($);
        ee().then(() => {
          const n3 = Xn();
          if (n3 && hs({ redirect: n3 }))
            return t3.length > 0 ? Q($, Object.assign({ uniIdRedirectUrl: n3 }, e2)) : void (ns && ls({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function gs(e) {
    !function(e2) {
      e2.onResponse = function(e3) {
        V(B, e3);
      }, e2.offResponse = function(e3) {
        Y(B, e3);
      };
    }(e), function(e2) {
      e2.onNeedLogin = function(e3) {
        V($, e3);
      }, e2.offNeedLogin = function(e3) {
        Y($, e3);
      }, ts && (U("_globalUniCloudStatus").needLoginInit || (U("_globalUniCloudStatus").needLoginInit = true, ee().then(() => {
        ps.call(e2);
      }), rs && fs.call(e2)));
    }(e), function(e2) {
      e2.onRefreshToken = function(e3) {
        V(W, e3);
      }, e2.offRefreshToken = function(e3) {
        Y(W, e3);
      };
    }(e);
  }
  let ms;
  const ys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", _s = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function ws() {
    const e = ie().token || "", t2 = e.split(".");
    if (!e || 3 !== t2.length)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(ms(s2).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e2) {
      throw new Error("获取当前用户信息出错，详细错误信息为：" + e2.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  ms = "function" != typeof atob ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !_s.test(e))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e += "==".slice(2 - (3 & e.length));
    for (var n2, s2, r2 = "", i2 = 0; i2 < e.length; )
      t2 = ys.indexOf(e.charAt(i2++)) << 18 | ys.indexOf(e.charAt(i2++)) << 12 | (n2 = ys.indexOf(e.charAt(i2++))) << 6 | (s2 = ys.indexOf(e.charAt(i2++))), r2 += 64 === n2 ? String.fromCharCode(t2 >> 16 & 255) : 64 === s2 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return r2;
  } : atob;
  var vs = s(function(e, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function r2(e2, t3) {
      return e2.tempFiles.forEach((e3, n3) => {
        e3.name || (e3.name = e3.path.substring(e3.path.lastIndexOf("/") + 1)), t3 && (e3.fileType = t3), e3.cloudPath = Date.now() + "_" + n3 + e3.name.substring(e3.name.lastIndexOf("."));
      }), e2.tempFilePaths || (e2.tempFilePaths = e2.tempFiles.map((e3) => e3.path)), e2;
    }
    function i2(e2, t3, { onChooseFile: s3, onUploadProgress: r3 }) {
      return t3.then((e3) => {
        if (s3) {
          const t4 = s3(e3);
          if (void 0 !== t4)
            return Promise.resolve(t4).then((t5) => void 0 === t5 ? e3 : t5);
        }
        return e3;
      }).then((t4) => false === t4 ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e3, t5, s4 = 5, r4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const i3 = t5.tempFiles, o2 = i3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= o2)
              return void (!i3.find((e4) => !e4.url && !e4.errMsg) && n3(t5));
            const u2 = i3[s5];
            e3.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e4) {
              e4.index = s5, e4.tempFile = u2, e4.tempFilePath = u2.path, r4 && r4(e4);
            } }).then((e4) => {
              u2.url = e4.fileID, s5 < o2 && c2();
            }).catch((e4) => {
              u2.errMsg = e4.errMsg || e4.message, s5 < o2 && c2();
            });
          }
        });
      }(e2, t4, 5, r3));
    }
    t2.initChooseAndUploadFile = function(e2) {
      return function(t3 = { type: "all" }) {
        return "image" === t3.type ? i2(e2, function(e3) {
          const { count: t4, sizeType: n3, sourceType: i3 = ["album", "camera"], extension: o2 } = e3;
          return new Promise((e4, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: i3, extension: o2, success(t5) {
              e4(r2(t5, "image"));
            }, fail(e5) {
              a2({ errMsg: e5.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : "video" === t3.type ? i2(e2, function(e3) {
          const { camera: t4, compressed: n3, maxDuration: i3, sourceType: o2 = ["album", "camera"], extension: a2 } = e3;
          return new Promise((e4, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: i3, sourceType: o2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: i4, height: o3, width: a3 } = t5;
              e4(r2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: i4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: o3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e5) {
              c2({ errMsg: e5.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : i2(e2, function(e3) {
          const { count: t4, extension: n3 } = e3;
          return new Promise((e4, i3) => {
            let o2 = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o2 = wx.chooseMessageFile), "function" != typeof o2)
              return i3({ errMsg: s2 + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });
            o2({ type: "all", count: t4, extension: n3, success(t5) {
              e4(r2(t5));
            }, fail(e5) {
              i3({ errMsg: e5.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), Is = n(vs);
  const Ss = "manual";
  function bs(e) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e2 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e2.push(this[t2]);
        }), e2;
      }, (e2, t2) => {
        if (this.loadtime === Ss)
          return;
        let n2 = false;
        const s2 = [];
        for (let r2 = 2; r2 < e2.length; r2++)
          e2[r2] !== t2[r2] && (s2.push(e2[r2]), n2 = true);
        e2[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e2, t2) {
    }, mixinDatacomEasyGet({ getone: e2 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: r2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = r2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const i2 = e2 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = i2, t2 && t2(i2);
      }).catch((e3) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, n2 && n2(e3);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const r2 = t2.collection || this.collection;
      n2 = Array.isArray(r2) ? n2.collection(...r2) : n2.collection(r2);
      const i2 = t2.where || this.where;
      i2 && Object.keys(i2).length && (n2 = n2.where(i2));
      const o2 = t2.field || this.field;
      o2 && (n2 = n2.field(o2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      true === (void 0 !== t2.distinct ? t2.distinct : this.distinct) && (n2 = n2.distinct());
      const h2 = t2.orderby || this.orderby;
      h2 && (n2 = n2.orderBy(h2));
      const l2 = void 0 !== t2.pageCurrent ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = void 0 !== t2.pageSize ? t2.pageSize : this.mixinDatacomPage.size, p2 = void 0 !== t2.getcount ? t2.getcount : this.getcount, f2 = void 0 !== t2.gettree ? t2.gettree : this.gettree, g2 = void 0 !== t2.gettreepath ? t2.gettreepath : this.gettreepath, m2 = { getCount: p2 }, y2 = { limitLevel: void 0 !== t2.limitlevel ? t2.limitlevel : this.limitlevel, startWith: void 0 !== t2.startwith ? t2.startwith : this.startwith };
      return f2 && (m2.getTree = y2), g2 && (m2.getTreePath = y2), n2 = n2.skip(d2 * (l2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function ks(e) {
    return function(t2, n2 = {}) {
      n2 = function(e2, t3 = {}) {
        return e2.customUI = t3.customUI || e2.customUI, e2.parseSystemError = t3.parseSystemError || e2.parseSystemError, Object.assign(e2.loadingOptions, t3.loadingOptions), Object.assign(e2.errorOptions, t3.errorOptions), "object" == typeof t3.secretMethods && (e2.secretMethods = t3.secretMethods), e2;
      }({ customUI: false, loadingOptions: { title: "加载中...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: r2, errorOptions: i2, parseSystemError: o2 } = n2, a2 = !s2;
      return new Proxy({}, { get: (s3, c2) => function({ fn: e2, interceptorName: t3, getCallbackArgs: n3 } = {}) {
        return async function(...s4) {
          const r3 = n3 ? n3({ params: s4 }) : {};
          let i3, o3;
          try {
            return await M(q(t3, "invoke"), { ...r3 }), i3 = await e2(...s4), await M(q(t3, "success"), { ...r3, result: i3 }), i3;
          } catch (e3) {
            throw o3 = e3, await M(q(t3, "fail"), { ...r3, error: o3 }), o3;
          } finally {
            await M(q(t3, "complete"), o3 ? { ...r3, error: o3 } : { ...r3, result: i3 });
          }
        };
      }({ fn: async function s4(...u2) {
        let l2;
        a2 && uni.showLoading({ title: r2.title, mask: r2.mask });
        const d2 = { name: t2, type: h, data: { method: c2, params: u2 } };
        "object" == typeof n2.secretMethods && function(e2, t3) {
          const n3 = t3.data.method, s5 = e2.secretMethods || {}, r3 = s5[n3] || s5["*"];
          r3 && (t3.secretType = r3);
        }(n2, d2);
        let p2 = false;
        try {
          l2 = await e.callFunction(d2);
        } catch (e2) {
          p2 = true, l2 = { result: new ne(e2) };
        }
        const { errSubject: f2, errCode: g2, errMsg: m2, newToken: y2 } = l2.result || {};
        if (a2 && uni.hideLoading(), y2 && y2.token && y2.tokenExpired && (oe(y2), Q(W, { ...y2 })), g2) {
          let e2 = m2;
          if (p2 && o2) {
            e2 = (await o2({ objectName: t2, methodName: c2, params: u2, errSubject: f2, errCode: g2, errMsg: m2 })).errMsg || m2;
          }
          if (a2)
            if ("toast" === i2.type)
              uni.showToast({ title: e2, icon: "none" });
            else {
              if ("modal" !== i2.type)
                throw new Error(`Invalid errorOptions.type: ${i2.type}`);
              {
                const { confirm: t3 } = await async function({ title: e3, content: t4, showCancel: n4, cancelText: s5, confirmText: r3 } = {}) {
                  return new Promise((i3, o3) => {
                    uni.showModal({ title: e3, content: t4, showCancel: n4, cancelText: s5, confirmText: r3, success(e4) {
                      i3(e4);
                    }, fail() {
                      i3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "提示", content: e2, showCancel: i2.retry, cancelText: "取消", confirmText: i2.retry ? "重试" : "确定" });
                if (i2.retry && t3)
                  return s4(...u2);
              }
            }
          const n3 = new ne({ subject: f2, code: g2, message: m2, requestId: l2.requestId });
          throw n3.detail = l2.result, Q(B, { type: H, content: n3 }), n3;
        }
        return Q(B, { type: H, content: l2.result }), l2.result;
      }, interceptorName: "callObject", getCallbackArgs: function({ params: e2 } = {}) {
        return { objectName: t2, methodName: c2, params: e2 };
      } }) });
    };
  }
  function Cs(e) {
    return U("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
  }
  async function Ts({ openid: e, callLoginByWeixin: t2 = false } = {}) {
    Cs(this);
    throw new Error(`[SecureNetwork] API \`initSecureNetworkByWeixin\` is not supported on platform \`${P}\``);
  }
  async function Ps(e) {
    const t2 = Cs(this);
    return t2.initPromise || (t2.initPromise = Ts.call(this, e)), t2.initPromise;
  }
  function As(e) {
    return function({ openid: t2, callLoginByWeixin: n2 = false } = {}) {
      return Ps.call(e, { openid: t2, callLoginByWeixin: n2 });
    };
  }
  function Es(e) {
    const t2 = { getSystemInfo: uni.getSystemInfo, getPushClientId: uni.getPushClientId };
    return function(n2) {
      return new Promise((s2, r2) => {
        t2[e]({ ...n2, success(e2) {
          s2(e2);
        }, fail(e2) {
          r2(e2);
        } });
      });
    };
  }
  class Os extends class {
    constructor() {
      this._callback = {};
    }
    addListener(e, t2) {
      this._callback[e] || (this._callback[e] = []), this._callback[e].push(t2);
    }
    on(e, t2) {
      return this.addListener(e, t2);
    }
    removeListener(e, t2) {
      if (!t2)
        throw new Error('The "listener" argument must be of type function. Received undefined');
      const n2 = this._callback[e];
      if (!n2)
        return;
      const s2 = function(e2, t3) {
        for (let n3 = e2.length - 1; n3 >= 0; n3--)
          if (e2[n3] === t3)
            return n3;
        return -1;
      }(n2, t2);
      n2.splice(s2, 1);
    }
    off(e, t2) {
      return this.removeListener(e, t2);
    }
    removeAllListener(e) {
      delete this._callback[e];
    }
    emit(e, ...t2) {
      const n2 = this._callback[e];
      if (n2)
        for (let e2 = 0; e2 < n2.length; e2++)
          n2[e2](...t2);
    }
  } {
    constructor() {
      super(), this._uniPushMessageCallback = this._receivePushMessage.bind(this), this._currentMessageId = -1, this._payloadQueue = [];
    }
    init() {
      return Promise.all([Es("getSystemInfo")(), Es("getPushClientId")()]).then(([{ appId: e } = {}, { cid: t2 } = {}] = []) => {
        if (!e)
          throw new Error("Invalid appId, please check the manifest.json file");
        if (!t2)
          throw new Error("Invalid push client id");
        this._appId = e, this._pushClientId = t2, this._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), this.emit("open"), this._initMessageListener();
      }, (e) => {
        throw this.emit("error", e), this.close(), e;
      });
    }
    async open() {
      return this.init();
    }
    _isUniCloudSSE(e) {
      if ("receive" !== e.type)
        return false;
      const t2 = e && e.data && e.data.payload;
      return !(!t2 || "UNI_CLOUD_SSE" !== t2.channel || t2.seqId !== this._seqId);
    }
    _receivePushMessage(e) {
      if (!this._isUniCloudSSE(e))
        return;
      const t2 = e && e.data && e.data.payload, { action: n2, messageId: s2, message: r2 } = t2;
      this._payloadQueue.push({ action: n2, messageId: s2, message: r2 }), this._consumMessage();
    }
    _consumMessage() {
      for (; ; ) {
        const e = this._payloadQueue.find((e2) => e2.messageId === this._currentMessageId + 1);
        if (!e)
          break;
        this._currentMessageId++, this._parseMessagePayload(e);
      }
    }
    _parseMessagePayload(e) {
      const { action: t2, messageId: n2, message: s2 } = e;
      "end" === t2 ? this._end({ messageId: n2, message: s2 }) : "message" === t2 && this._appendMessage({ messageId: n2, message: s2 });
    }
    _appendMessage({ messageId: e, message: t2 } = {}) {
      this.emit("message", t2);
    }
    _end({ messageId: e, message: t2 } = {}) {
      this.emit("end", t2), this.close();
    }
    _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
    _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
    toJSON() {
      return { appId: this._appId, pushClientId: this._pushClientId, seqId: this._seqId };
    }
    close() {
      this._destroy(), this.emit("close");
    }
  }
  async function xs(e, t2) {
    const n2 = `http://${e}:${t2}/system/ping`;
    try {
      const e2 = await (s2 = { url: n2, timeout: 500 }, new Promise((e3, t3) => {
        se.request({ ...s2, success(t4) {
          e3(t4);
        }, fail(e4) {
          t3(e4);
        } });
      }));
      return !(!e2.data || 0 !== e2.data.code);
    } catch (e2) {
      return false;
    }
    var s2;
  }
  async function Rs(e) {
    {
      const { osName: e2, osVersion: t3 } = ue();
      "ios" === e2 && function(e3) {
        if (!e3 || "string" != typeof e3)
          return 0;
        const t4 = e3.match(/^(\d+)./);
        return t4 && t4[1] ? parseInt(t4[1]) : 0;
      }(t3) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
    }
    const t2 = e.__dev__;
    if (!t2.debugInfo)
      return;
    const { address: n2, servePort: s2 } = t2.debugInfo, { address: r2 } = await async function(e2, t3) {
      let n3;
      for (let s3 = 0; s3 < e2.length; s3++) {
        const r3 = e2[s3];
        if (await xs(r3, t3)) {
          n3 = r3;
          break;
        }
      }
      return { address: n3, port: t3 };
    }(n2, s2);
    if (r2)
      return t2.localAddress = r2, void (t2.localPort = s2);
    const i2 = console["error"];
    let o2 = "";
    if ("remote" === t2.debugInfo.initialLaunchType ? (t2.debugInfo.forceRemote = true, o2 = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o2 = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o2 += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", 0 === P.indexOf("mp-") && (o2 += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t2.debugInfo.forceRemote)
      throw new Error(o2);
    i2(o2);
  }
  function Us(e) {
    e._initPromiseHub || (e._initPromiseHub = new I({ createPromise: function() {
      let t2 = Promise.resolve();
      var n2;
      n2 = 1, t2 = new Promise((e2) => {
        setTimeout(() => {
          e2();
        }, n2);
      });
      const s2 = e.auth();
      return t2.then(() => s2.getLoginState()).then((e2) => e2 ? Promise.resolve() : s2.signInAnonymously());
    } }));
  }
  const Ls = { tcb: St, tencent: St, aliyun: me, private: kt };
  let Ns = new class {
    init(e) {
      let t2 = {};
      const n2 = Ls[e.provider];
      if (!n2)
        throw new Error("未提供正确的provider参数");
      t2 = n2.init(e), function(e2) {
        const t3 = {};
        e2.__dev__ = t3, t3.debugLog = "app" === P;
        const n3 = A;
        n3 && !n3.code && (t3.debugInfo = n3);
        const s2 = new I({ createPromise: function() {
          return Rs(e2);
        } });
        t3.initLocalNetwork = function() {
          return s2.exec();
        };
      }(t2), Us(t2), Rn(t2), function(e2) {
        const t3 = e2.uploadFile;
        e2.uploadFile = function(e3) {
          return t3.call(this, e3);
        };
      }(t2), function(e2) {
        e2.database = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e2.init(t3).database();
          if (this._database)
            return this._database;
          const n3 = $n(Wn, { uniClient: e2 });
          return this._database = n3, n3;
        }, e2.databaseForJQL = function(t3) {
          if (t3 && Object.keys(t3).length > 0)
            return e2.init(t3).databaseForJQL();
          if (this._databaseForJQL)
            return this._databaseForJQL;
          const n3 = $n(Wn, { uniClient: e2, isJQL: true });
          return this._databaseForJQL = n3, n3;
        };
      }(t2), function(e2) {
        e2.getCurrentUserInfo = ws, e2.chooseAndUploadFile = Is.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
          return bs(e2);
        } }), e2.SSEChannel = Os, e2.initSecureNetworkByWeixin = As(e2), e2.importObject = ks(e2);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
        if (!t2[e2])
          return;
        const n3 = t2[e2];
        t2[e2] = function() {
          return n3.apply(t2, Array.from(arguments));
        }, t2[e2] = function(e3, t3) {
          return function(n4) {
            let s2 = false;
            if ("callFunction" === t3) {
              const e4 = n4 && n4.type || u;
              s2 = e4 !== u;
            }
            const r2 = "callFunction" === t3 && !s2, i2 = this._initPromiseHub.exec();
            n4 = n4 || {};
            const { success: o2, fail: a2, complete: c2 } = te(n4), h2 = i2.then(() => s2 ? Promise.resolve() : M(q(t3, "invoke"), n4)).then(() => e3.call(this, n4)).then((e4) => s2 ? Promise.resolve(e4) : M(q(t3, "success"), e4).then(() => M(q(t3, "complete"), e4)).then(() => (r2 && Q(B, { type: J, content: e4 }), Promise.resolve(e4))), (e4) => s2 ? Promise.reject(e4) : M(q(t3, "fail"), e4).then(() => M(q(t3, "complete"), e4)).then(() => (Q(B, { type: J, content: e4 }), Promise.reject(e4))));
            if (!(o2 || a2 || c2))
              return h2;
            h2.then((e4) => {
              o2 && o2(e4), c2 && c2(e4), r2 && Q(B, { type: J, content: e4 });
            }, (e4) => {
              a2 && a2(e4), c2 && c2(e4), r2 && Q(B, { type: J, content: e4 });
            });
          };
        }(t2[e2], e2).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e = E;
    let t2 = {};
    if (e && 1 === e.length)
      t2 = e[0], Ns = Ns.init(t2), Ns._isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", t3.forEach((e2) => {
        Ns[e2] = function() {
          return console.error(n2), Promise.reject(new ne({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(Ns, { get mixinDatacom() {
      return bs(Ns);
    } }), gs(Ns), Ns.addInterceptor = D, Ns.removeInterceptor = F, Ns.interceptObject = K;
  })();
  var Ds = Ns;
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$J = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm", "clear", "eyes", "change", "keyboardheightchange"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
        // 用于判断当前是否是使用回车操作
      };
    },
    computed: {
      // 输入框内是否有值
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      },
      // 处理外层样式的style
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      // input 内容的类和样式处理
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      // input右侧样式
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        this.val = newVal;
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      /**
       * 初始化变量值
       */
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = null;
        }
      },
      /**
       * 点击图标时触发
       * @param {Object} type
       */
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      /**
       * 显示隐藏内容，密码框时生效
       */
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      /**
       * 输入时触发
       * @param {Object} event
       */
      onInput(event) {
        let value2 = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value2 = this.trimStr(value2);
          }
          if (typeof this.trim === "string") {
            value2 = this.trimStr(value2, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value2;
        this.$emit("input", value2);
        this.$emit("update:modelValue", value2);
      },
      /**
       * 外部调用方法
       * 获取焦点时触发
       * @param {Object} event
       */
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      /**
       * 外部调用方法
       * 失去焦点时触发
       * @param {Object} event
       */
      onBlur() {
        this.focused = false;
        this.$emit("focus", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      /**
       * 按下键盘的发送键
       * @param {Object} e
       */
      onConfirm(e) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      /**
       * 清理内容
       * @param {Object} event
       */
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      /**
       * 键盘高度发生变化的时候触发此事件
       * 兼容性：微信小程序2.7.0+、App 3.1.0+
       * @param {Object} event
       */
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      /**
       * 去除空格
       */
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle($options.boxStyle)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
            style: vue.normalizeStyle($options.inputContentStyle)
          },
          [
            $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
              size: "22"
            }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
            $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
              name: $props.name,
              value: $data.val,
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              disabled: $props.disabled,
              "placeholder-class": "uni-easyinput__placeholder-class",
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              autoHeight: $props.autoHeight,
              "cursor-spacing": $props.cursorSpacing,
              onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
              onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight", "cursor-spacing"])) : (vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              type: $props.type === "password" ? "text" : $props.type,
              class: "uni-easyinput__content-input",
              style: vue.normalizeStyle($options.inputStyle),
              name: $props.name,
              value: $data.val,
              password: !$data.showPassword && $props.type === "password",
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              "placeholder-class": "uni-easyinput__placeholder-class",
              disabled: $props.disabled,
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              confirmType: $props.confirmType,
              "cursor-spacing": $props.cursorSpacing,
              onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
              onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
              onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
              onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing"])),
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                vue.createCommentVNode(" 开启密码时显示小眼睛 "),
                $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 22,
                  color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[11] || (_cache[11] = ($event) => $options.onClickIcon("suffix")),
                  size: "22"
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 5 },
              [
                $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$j], ["__scopeId", "data-v-09fd5285"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$I = {
    name: "uniFormsItem",
    options: {
      virtualHost: true
    },
    provide() {
      return {
        uniFormItem: this
      };
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      }
    },
    props: {
      // 表单校验规则
      rules: {
        type: Array,
        default() {
          return null;
        }
      },
      // 表单域的属性名，在使用校验规则时必填
      name: {
        type: [String, Array],
        default: ""
      },
      required: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      },
      // label的宽度 ，默认 80
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: ""
      },
      // 强制显示错误信息
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      // 1.4.0 弃用，统一使用 form 的校验时机
      // validateTrigger: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 弃用，统一使用 form 的label 位置
      // labelPosition: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 以下属性已经废弃，请使用  #label 插槽代替
      leftIcon: String,
      iconColor: {
        type: String,
        default: "#606266"
      }
    },
    data() {
      return {
        errMsg: "",
        userRules: null,
        localLabelAlign: "left",
        localLabelWidth: "65px",
        localLabelPos: "left",
        border: false,
        isFirstBorder: false
      };
    },
    computed: {
      // 处理错误信息
      msg() {
        return this.errorMessage || this.errMsg;
      }
    },
    watch: {
      // 规则发生变化通知子组件更新
      "form.formRules"(val) {
        this.init();
      },
      "form.labelWidth"(val) {
        this.localLabelWidth = this._labelWidthUnit(val);
      },
      "form.labelPosition"(val) {
        this.localLabelPos = this._labelPosition();
      },
      "form.labelAlign"(val) {
      }
    },
    created() {
      this.init(true);
      if (this.name && this.form) {
        this.$watch(
          () => {
            const val = this.form._getDataValue(this.name, this.form.localData);
            return val;
          },
          (value2, oldVal) => {
            const isEqual2 = this.form._isEqual(value2, oldVal);
            if (!isEqual2) {
              const val = this.itemSetValue(value2);
              this.onFieldChange(val, false);
            }
          },
          {
            immediate: false
          }
        );
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules = null) {
        this.userRules = rules;
        this.init(false);
      },
      // 兼容老版本表单组件
      setValue() {
      },
      /**
       * 外部调用方法
       * 校验数据
       * @param {any} value 需要校验的数据
       * @param {boolean} 是否立即校验
       * @return {Array|null} 校验内容
       */
      async onFieldChange(value2, formtrigger = true) {
        const {
          formData,
          localData,
          errShowType,
          validateCheck,
          validateTrigger,
          _isRequiredField,
          _realName
        } = this.form;
        const name = _realName(this.name);
        if (!value2) {
          value2 = this.form.formData[name];
        }
        const ruleLen = this.itemRules.rules && this.itemRules.rules.length;
        if (!this.validator || !ruleLen || ruleLen === 0)
          return;
        const isRequiredField2 = _isRequiredField(this.itemRules.rules || []);
        let result = null;
        if (validateTrigger === "bind" || formtrigger) {
          result = await this.validator.validateUpdate(
            {
              [name]: value2
            },
            formData
          );
          if (!isRequiredField2 && (value2 === void 0 || value2 === "")) {
            result = null;
          }
          if (result && result.errorMessage) {
            if (errShowType === "undertext") {
              this.errMsg = !result ? "" : result.errorMessage;
            }
            if (errShowType === "toast") {
              uni.showToast({
                title: result.errorMessage || "校验错误",
                icon: "none"
              });
            }
            if (errShowType === "modal") {
              uni.showModal({
                title: "提示",
                content: result.errorMessage || "校验错误"
              });
            }
          } else {
            this.errMsg = "";
          }
          validateCheck(result ? result : null);
        } else {
          this.errMsg = "";
        }
        return result ? result : null;
      },
      /**
       * 初始组件数据
       */
      init(type = false) {
        const {
          validator,
          formRules,
          childrens,
          formData,
          localData,
          _realName,
          labelWidth,
          _getDataValue,
          _setDataValue
        } = this.form || {};
        this.localLabelAlign = this._justifyContent();
        this.localLabelWidth = this._labelWidthUnit(labelWidth);
        this.localLabelPos = this._labelPosition();
        this.form && type && childrens.push(this);
        if (!validator || !formRules)
          return;
        if (!this.form.isFirstBorder) {
          this.form.isFirstBorder = true;
          this.isFirstBorder = true;
        }
        if (this.group) {
          if (!this.group.isFirstBorder) {
            this.group.isFirstBorder = true;
            this.isFirstBorder = true;
          }
        }
        this.border = this.form.border;
        const name = _realName(this.name);
        const itemRule = this.userRules || this.rules;
        if (typeof formRules === "object" && itemRule) {
          formRules[name] = {
            rules: itemRule
          };
          validator.updateSchema(formRules);
        }
        const itemRules = formRules[name] || {};
        this.itemRules = itemRules;
        this.validator = validator;
        this.itemSetValue(_getDataValue(this.name, localData));
      },
      unInit() {
        if (this.form) {
          const {
            childrens,
            formData,
            _realName
          } = this.form;
          childrens.forEach((item, index) => {
            if (item === this) {
              this.form.childrens.splice(index, 1);
              delete formData[_realName(item.name)];
            }
          });
        }
      },
      // 设置item 的值
      itemSetValue(value2) {
        const name = this.form._realName(this.name);
        const rules = this.itemRules.rules || [];
        const val = this.form._getValue(name, value2, rules);
        this.form._setDataValue(name, this.form.formData, val);
        return val;
      },
      /**
       * 移除该表单项的校验结果
       */
      clearValidate() {
        this.errMsg = "";
      },
      // 是否显示星号
      _isRequired() {
        return this.required;
      },
      // 处理对齐方式
      _justifyContent() {
        if (this.form) {
          const {
            labelAlign
          } = this.form;
          let labelAli = this.labelAlign ? this.labelAlign : labelAlign;
          if (labelAli === "left")
            return "flex-start";
          if (labelAli === "center")
            return "center";
          if (labelAli === "right")
            return "flex-end";
        }
        return "flex-start";
      },
      // 处理 label宽度单位 ,继承父元素的值
      _labelWidthUnit(labelWidth) {
        return this.num2px(this.labelWidth ? this.labelWidth : labelWidth || (this.label ? 65 : "auto"));
      },
      // 处理 label 位置
      _labelPosition() {
        if (this.form)
          return this.form.labelPosition || "left";
        return "left";
      },
      /**
       * 触发时机
       * @param {Object} rule 当前规则内时机
       * @param {Object} itemRlue 当前组件时机
       * @param {Object} parentRule 父组件时机
       */
      isTrigger(rule, itemRlue, parentRule) {
        if (rule === "submit" || !rule) {
          if (rule === void 0) {
            if (itemRlue !== "bind") {
              if (!itemRlue) {
                return parentRule === "" ? "bind" : "submit";
              }
              return "submit";
            }
            return "bind";
          }
          return "submit";
        }
        return "bind";
      },
      num2px(num) {
        if (typeof num === "number") {
          return `${num}px`;
        }
        return num;
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-forms-item", ["is-direction-" + $data.localLabelPos, $data.border ? "uni-forms-item--border" : "", $data.border && $data.isFirstBorder ? "is-first-border" : ""]])
      },
      [
        vue.renderSlot(_ctx.$slots, "label", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__label", { "no-label": !$props.label && !$props.required }]),
              style: vue.normalizeStyle({ width: $data.localLabelWidth, justifyContent: $data.localLabelAlign })
            },
            [
              $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "is-required"
              }, "*")) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($props.label),
                1
                /* TEXT */
              )
            ],
            6
            /* CLASS, STYLE */
          )
        ], true),
        vue.createElementVNode("view", { class: "uni-forms-item__content" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__error", { "msg--active": $options.msg }])
            },
            [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($options.msg),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )
        ])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$i], ["__scopeId", "data-v-462874dd"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    )
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
    // "fileurls": 'array'
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key in args) {
      let reg = new RegExp("{" + key + "}");
      str = str.replace(reg, args[key]);
    }
    return str;
  }
  function isEmptyValue(value2, type) {
    if (value2 === void 0 || value2 === null) {
      return true;
    }
    if (typeof value2 === "string" && !value2) {
      return true;
    }
    if (Array.isArray(value2) && !value2.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value2).length) {
      return true;
    }
    return false;
  }
  const types = {
    integer(value2) {
      return types.number(value2) && parseInt(value2, 10) === value2;
    },
    string(value2) {
      return typeof value2 === "string";
    },
    number(value2) {
      if (isNaN(value2)) {
        return false;
      }
      return typeof value2 === "number";
    },
    "boolean": function(value2) {
      return typeof value2 === "boolean";
    },
    "float": function(value2) {
      return types.number(value2) && !types.integer(value2);
    },
    array(value2) {
      return Array.isArray(value2);
    },
    object(value2) {
      return typeof value2 === "object" && !types.array(value2);
    },
    date(value2) {
      return value2 instanceof Date;
    },
    timestamp(value2) {
      if (!this.integer(value2) || Math.abs(value2).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value2) {
      return typeof value2.url === "string";
    },
    email(value2) {
      return typeof value2 === "string" && !!value2.match(pattern.email) && value2.length < 255;
    },
    url(value2) {
      return typeof value2 === "string" && !!value2.match(pattern.url);
    },
    pattern(reg, value2) {
      try {
        return new RegExp(reg).test(value2);
      } catch (e) {
        return false;
      }
    },
    method(value2) {
      return typeof value2 === "function";
    },
    idcard(value2) {
      return typeof value2 === "string" && !!value2.match(pattern.idcard);
    },
    "url-https"(value2) {
      return this.url(value2) && value2.startsWith("https://");
    },
    "url-scheme"(value2) {
      return value2.startsWith("://");
    },
    "url-web"(value2) {
      return false;
    }
  };
  class RuleValidator {
    constructor(message) {
      this._message = message;
    }
    async validateRule(fieldKey, fieldValue, value2, data, allData) {
      var result = null;
      let rules = fieldValue.rules;
      let hasRequired = rules.findIndex((item) => {
        return item.required;
      });
      if (hasRequired < 0) {
        if (value2 === null || value2 === void 0) {
          return result;
        }
        if (typeof value2 === "string" && !value2.length) {
          return result;
        }
      }
      var message = this._message;
      if (rules === void 0) {
        return message["default"];
      }
      for (var i2 = 0; i2 < rules.length; i2++) {
        let rule = rules[i2];
        let vt2 = this._getValidateType(rule);
        Object.assign(rule, {
          label: fieldValue.label || `["${fieldKey}"]`
        });
        if (RuleValidatorHelper[vt2]) {
          result = RuleValidatorHelper[vt2](rule, value2, message);
          if (result != null) {
            break;
          }
        }
        if (rule.validateExpr) {
          let now2 = Date.now();
          let resultExpr = rule.validateExpr(value2, allData, now2);
          if (resultExpr === false) {
            result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
            break;
          }
        }
        if (rule.validateFunction) {
          result = await this.validateFunction(rule, value2, data, allData, vt2);
          if (result !== null) {
            break;
          }
        }
      }
      if (result !== null) {
        result = message.TAG + result;
      }
      return result;
    }
    async validateFunction(rule, value2, data, allData, vt2) {
      let result = null;
      try {
        let callbackMessage = null;
        const res = await rule.validateFunction(rule, value2, allData || data, (message) => {
          callbackMessage = message;
        });
        if (callbackMessage || typeof res === "string" && res || res === false) {
          result = this._getMessage(rule, callbackMessage || res, vt2);
        }
      } catch (e) {
        result = this._getMessage(rule, e.message, vt2);
      }
      return result;
    }
    _getMessage(rule, message, vt2) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt2] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  }
  const RuleValidatorHelper = {
    required(rule, value2, message) {
      if (rule.required && isEmptyValue(value2, rule.format || typeof value2)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value2, message) {
      const {
        range,
        errorMessage
      } = rule;
      let list = new Array(range.length);
      for (let i2 = 0; i2 < range.length; i2++) {
        const item = range[i2];
        if (types.object(item) && item.value !== void 0) {
          list[i2] = item.value;
        } else {
          list[i2] = item;
        }
      }
      let result = false;
      if (Array.isArray(value2)) {
        result = new Set(value2.concat(list)).size === list.length;
      } else {
        if (list.indexOf(value2) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value2, message) {
      if (!types.number(value2)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min = exclusiveMinimum ? value2 <= minimum : value2 < minimum;
      let max = exclusiveMaximum ? value2 >= maximum : value2 > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value2, message) {
      if (!types.string(value2) && !types.array(value2)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value2.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value2, message) {
      if (!types["pattern"](rule.pattern, value2)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value2, message) {
      var customTypes = Object.keys(types);
      var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format) > -1) {
        if (!types[format](value2)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value2, message) {
      if (!Array.isArray(value2)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i2 = 0; i2 < value2.length; i2++) {
        const element = value2[i2];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  class SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    async validate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async validateAll(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, true, allData);
      }
      return result;
    }
    async validateUpdate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidateUpdate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async invokeValidate(data, all, allData) {
      let result = [];
      let schema = this._schema;
      for (let key in schema) {
        let value2 = schema[key];
        let errorMessage = await this.validateRule(key, value2, data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    async invokeValidateUpdate(data, all, allData) {
      let result = [];
      for (let key in data) {
        let errorMessage = await this.validateRule(key, this._schema[key], data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key) => {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  }
  function Message() {
    return {
      TAG: "",
      default: "验证错误",
      defaultInvalid: "提交的字段{field}在数据库中并不存在",
      validateFunction: "验证无效",
      required: "{label}必填",
      "enum": "{label}超出范围",
      timestamp: "{label}格式无效",
      whitespace: "{label}不能为空",
      typeError: "{label}类型无效",
      date: {
        format: "{label}日期{value}格式无效",
        parse: "{label}日期无法解析,{value}无效",
        invalid: "{label}日期{value}无效"
      },
      length: {
        minLength: "{label}长度不能少于{minLength}",
        maxLength: "{label}长度不能超过{maxLength}",
        range: "{label}必须介于{minLength}和{maxLength}之间"
      },
      number: {
        minimum: "{label}不能小于{minimum}",
        maximum: "{label}不能大于{maximum}",
        exclusiveMinimum: "{label}不能小于等于{minimum}",
        exclusiveMaximum: "{label}不能大于等于{maximum}",
        range: "{label}必须介于{minimum}and{maximum}之间"
      },
      pattern: {
        mismatch: "{label}格式不匹配"
      }
    };
  }
  SchemaValidator.message = new Message();
  const deepCopy = (val) => {
    return JSON.parse(JSON.stringify(val));
  };
  const typeFilter = (format) => {
    return format === "int" || format === "double" || format === "number" || format === "timestamp";
  };
  const getValue = (key, value2, rules) => {
    const isRuleNumType = rules.find((val) => val.format && typeFilter(val.format));
    const isRuleBoolType = rules.find((val) => val.format && val.format === "boolean" || val.format === "bool");
    if (!!isRuleNumType) {
      if (!value2 && value2 !== 0) {
        value2 = null;
      } else {
        value2 = isNumber(Number(value2)) ? Number(value2) : value2;
      }
    }
    if (!!isRuleBoolType) {
      value2 = isBoolean(value2) ? value2 : false;
    }
    return value2;
  };
  const setDataValue = (field, formdata, value2) => {
    formdata[field] = value2;
    return value2 || "";
  };
  const getDataValue = (field, data) => {
    return objGet(data, field);
  };
  const realName = (name, data = {}) => {
    const base_name = _basePath(name);
    if (typeof base_name === "object" && Array.isArray(base_name) && base_name.length > 1) {
      const realname = base_name.reduce((a2, b2) => a2 += `#${b2}`, "_formdata_");
      return realname;
    }
    return base_name[0] || name;
  };
  const isRealName = (name) => {
    const reg = /^_formdata_#*/;
    return reg.test(name);
  };
  const rawData = (object = {}, name) => {
    let newData = JSON.parse(JSON.stringify(object));
    let formData = {};
    for (let i2 in newData) {
      let path = name2arr(i2);
      objSet(formData, path, newData[i2]);
    }
    return formData;
  };
  const name2arr = (name) => {
    let field = name.replace("_formdata_#", "");
    field = field.split("#").map((v2) => isNumber(v2) ? Number(v2) : v2);
    return field;
  };
  const objSet = (object, path, value2) => {
    if (typeof object !== "object")
      return object;
    _basePath(path).reduce((o2, k2, i2, _2) => {
      if (i2 === _2.length - 1) {
        o2[k2] = value2;
        return null;
      } else if (k2 in o2) {
        return o2[k2];
      } else {
        o2[k2] = /^[0-9]{1,}$/.test(_2[i2 + 1]) ? [] : {};
        return o2[k2];
      }
    }, object);
    return object;
  };
  function _basePath(path) {
    if (Array.isArray(path))
      return path;
    return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  const objGet = (object, path, defaultVal = "undefined") => {
    let newPath = _basePath(path);
    let val = newPath.reduce((o2, k2) => {
      return (o2 || {})[k2];
    }, object);
    return !val || val !== void 0 ? val : defaultVal;
  };
  const isNumber = (num) => {
    return !isNaN(Number(num));
  };
  const isBoolean = (bool) => {
    return typeof bool === "boolean";
  };
  const isRequiredField = (rules) => {
    let isNoField = false;
    for (let i2 = 0; i2 < rules.length; i2++) {
      const ruleData = rules[i2];
      if (ruleData.required) {
        isNoField = true;
        break;
      }
    }
    return isNoField;
  };
  const isEqual = (a2, b2) => {
    if (a2 === b2) {
      return a2 !== 0 || 1 / a2 === 1 / b2;
    }
    if (a2 == null || b2 == null) {
      return a2 === b2;
    }
    var classNameA = toString.call(a2), classNameB = toString.call(b2);
    if (classNameA !== classNameB) {
      return false;
    }
    switch (classNameA) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a2 === "" + b2;
      case "[object Number]":
        if (+a2 !== +a2) {
          return +b2 !== +b2;
        }
        return +a2 === 0 ? 1 / +a2 === 1 / b2 : +a2 === +b2;
      case "[object Date]":
      case "[object Boolean]":
        return +a2 === +b2;
    }
    if (classNameA == "[object Object]") {
      var propsA = Object.getOwnPropertyNames(a2), propsB = Object.getOwnPropertyNames(b2);
      if (propsA.length != propsB.length) {
        return false;
      }
      for (var i2 = 0; i2 < propsA.length; i2++) {
        var propName = propsA[i2];
        if (a2[propName] !== b2[propName]) {
          return false;
        }
      }
      return true;
    }
    if (classNameA == "[object Array]") {
      if (a2.toString() == b2.toString()) {
        return true;
      }
      return false;
    }
  };
  const _sfc_main$H = {
    name: "uniForms",
    emits: ["validate", "submit"],
    options: {
      virtualHost: true
    },
    props: {
      // 即将弃用
      value: {
        type: Object,
        default() {
          return null;
        }
      },
      // vue3 替换 value 属性
      modelValue: {
        type: Object,
        default() {
          return null;
        }
      },
      // 1.4.0 开始将不支持 v-model ，且废弃 value 和 modelValue
      model: {
        type: Object,
        default() {
          return null;
        }
      },
      // 表单校验规则
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      //校验错误信息提示方式 默认 undertext 取值 [undertext|toast|modal]
      errShowType: {
        type: String,
        default: "undertext"
      },
      // 校验触发器方式 默认 bind 取值 [bind|submit]
      validateTrigger: {
        type: String,
        default: "submit"
      },
      // label 位置，默认 left 取值  top/left
      labelPosition: {
        type: String,
        default: "left"
      },
      // label 宽度
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: "left"
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    provide() {
      return {
        uniForm: this
      };
    },
    data() {
      return {
        // 表单本地值的记录，不应该与传如的值进行关联
        formData: {},
        formRules: {}
      };
    },
    computed: {
      // 计算数据源变化的
      localData() {
        const localVal = this.model || this.modelValue || this.value;
        if (localVal) {
          return deepCopy(localVal);
        }
        return {};
      }
    },
    watch: {
      // 监听数据变化 ,暂时不使用，需要单独赋值
      // localData: {},
      // 监听规则变化
      rules: {
        handler: function(val, oldVal) {
          this.setRules(val);
        },
        deep: true,
        immediate: true
      }
    },
    created() {
      let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
      if (!getbinddata) {
        getApp().$vm.$.appContext.config.globalProperties.binddata = function(name, value2, formName) {
          if (formName) {
            this.$refs[formName].setValue(name, value2);
          } else {
            let formVm;
            for (let i2 in this.$refs) {
              const vm = this.$refs[i2];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:182", "当前 uni-froms 组件缺少 ref 属性");
            formVm.setValue(name, value2);
          }
        };
      }
      this.childrens = [];
      this.inputChildrens = [];
      this.setRules(this.rules);
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules) {
        this.formRules = Object.assign({}, this.formRules, rules);
        this.validator = new SchemaValidator(rules);
      },
      /**
       * 外部调用方法
       * 设置数据，用于设置表单数据，公开给用户使用 ， 不支持在动态表单中使用
       * @param {Object} key
       * @param {Object} value
       */
      setValue(key, value2) {
        let example = this.childrens.find((child) => child.name === key);
        if (!example)
          return null;
        this.formData[key] = getValue(key, value2, this.formRules[key] && this.formRules[key].rules || []);
        return example.onFieldChange(this.formData[key]);
      },
      /**
       * 外部调用方法
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      validate(keepitem, callback) {
        return this.checkAll(this.formData, keepitem, callback);
      },
      /**
       * 外部调用方法
       * 部分表单校验
       * @param {Array|String} props 需要校验的字段
       * @param {Function} 回调函数
       */
      validateField(props = [], callback) {
        props = [].concat(props);
        let invalidFields = {};
        this.childrens.forEach((item) => {
          const name = realName(item.name);
          if (props.indexOf(name) !== -1) {
            invalidFields = Object.assign({}, invalidFields, {
              [name]: this.formData[name]
            });
          }
        });
        return this.checkAll(invalidFields, [], callback);
      },
      /**
       * 外部调用方法
       * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
       * @param {Array|String} props 需要移除校验的字段 ，不填为所有
       */
      clearValidate(props = []) {
        props = [].concat(props);
        this.childrens.forEach((item) => {
          if (props.length === 0) {
            item.errMsg = "";
          } else {
            const name = realName(item.name);
            if (props.indexOf(name) !== -1) {
              item.errMsg = "";
            }
          }
        });
      },
      /**
       * 外部调用方法 ，即将废弃
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      submit(keepitem, callback, type) {
        for (let i2 in this.dataValue) {
          const itemData = this.childrens.find((v2) => v2.name === i2);
          if (itemData) {
            if (this.formData[i2] === void 0) {
              this.formData[i2] = this._getValue(i2, this.dataValue[i2]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:289", "submit 方法即将废弃，请使用validate方法代替！");
        }
        return this.checkAll(this.formData, keepitem, callback, "submit");
      },
      // 校验所有
      async checkAll(invalidFields, keepitem, callback, type) {
        if (!this.validator)
          return;
        let childrens = [];
        for (let i2 in invalidFields) {
          const item = this.childrens.find((v2) => realName(v2.name) === i2);
          if (item) {
            childrens.push(item);
          }
        }
        if (!callback && typeof keepitem === "function") {
          callback = keepitem;
        }
        let promise;
        if (!callback && typeof callback !== "function" && Promise) {
          promise = new Promise((resolve, reject) => {
            callback = function(valid, invalidFields2) {
              !valid ? resolve(invalidFields2) : reject(valid);
            };
          });
        }
        let results = [];
        let tempFormData = JSON.parse(JSON.stringify(invalidFields));
        for (let i2 in childrens) {
          const child = childrens[i2];
          let name = realName(child.name);
          const result = await child.onFieldChange(tempFormData[name]);
          if (result) {
            results.push(result);
            if (this.errShowType === "toast" || this.errShowType === "modal")
              break;
          }
        }
        if (Array.isArray(results)) {
          if (results.length === 0)
            results = null;
        }
        if (Array.isArray(keepitem)) {
          keepitem.forEach((v2) => {
            let vName = realName(v2);
            let value2 = getDataValue(v2, this.localData);
            if (value2 !== void 0) {
              tempFormData[vName] = value2;
            }
          });
        }
        if (type === "submit") {
          this.$emit("submit", {
            detail: {
              value: tempFormData,
              errors: results
            }
          });
        } else {
          this.$emit("validate", results);
        }
        let resetFormData = {};
        resetFormData = rawData(tempFormData, this.name);
        callback && typeof callback === "function" && callback(results, resetFormData);
        if (promise && callback) {
          return promise;
        } else {
          return null;
        }
      },
      /**
       * 返回validate事件
       * @param {Object} result
       */
      validateCheck(result) {
        this.$emit("validate", result);
      },
      _getValue: getValue,
      _isRequiredField: isRequiredField,
      _setDataValue: setDataValue,
      _getDataValue: getDataValue,
      _realName: realName,
      _isRealName: isRealName,
      _isEqual: isEqual
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-forms" }, [
      vue.createElementVNode("form", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$h], ["__scopeId", "data-v-9a1e3c32"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  const __default__$3 = {
    options: {
      styleIsolation: "shared"
    }
  };
  const _sfc_main$G = /* @__PURE__ */ Object.assign(__default__$3, {
    __name: "password",
    setup(__props) {
      const userStore = useUserStore();
      const isAgree = vue.ref(false);
      const formRef = vue.ref();
      const formData = vue.ref({
        mobile: "",
        password: ""
      });
      const formRules = {
        mobile: {
          rules: [
            { required: true, errorMessage: "请填写手机号码" },
            { pattern: "^1\\d{10}$", errorMessage: "手机号码格式不正确" }
          ]
        },
        password: {
          rules: [
            { required: true, errorMessage: "请输入验证码" },
            { pattern: "^[a-zA-Z0-9]{8}$", errorMessage: "密码格式不正确" }
          ]
        }
      };
      function onAgreeClick() {
        isAgree.value = !isAgree.value;
      }
      async function onFormSubmit() {
        if (!isAgree.value)
          return uni.utils.toast("请先同意协议!");
        try {
          const formData2 = await formRef.value.validate();
          const { code, data, message } = await loginByPassword(formData2);
          if (code !== 1e4)
            return uni.utils.toast(message);
          userStore.token = data.token;
          userStore.userId = data.id;
          if (userStore.openType === "switchTab") {
            uni.switchTab({ url: userStore.redirectURL });
          } else {
            uni.redirectTo({ url: userStore.redirectURL });
          }
        } catch (error) {
          formatAppLog("log", "at pages/login/components/password.vue:72", error);
        }
      }
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$3);
        const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1$3);
        const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_3$1);
        return vue.openBlock(), vue.createBlock(_component_uni_forms, {
          class: "login-form",
          model: formData.value,
          rules: formRules,
          ref_key: "formRef",
          ref: formRef
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_forms_item, { name: "mobile" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_easyinput, {
                  modelValue: formData.value.mobile,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.mobile = $event),
                  "input-border": false,
                  clearable: false,
                  placeholder: "请输入手机号",
                  "placeholder-style": "color: #C3C3C5"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_uni_forms_item, { name: "password" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_easyinput, {
                  modelValue: formData.value.password,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.password = $event),
                  type: "password",
                  placeholder: "请输入密码",
                  "input-border": false,
                  "placeholder-style": "color: #C3C3C5"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createElementVNode("view", { class: "agreement" }, [
              vue.createElementVNode("radio", {
                onClick: onAgreeClick,
                checked: isAgree.value,
                color: "#16C2A3"
              }, null, 8, ["checked"]),
              vue.createTextVNode(" 我已同意 "),
              vue.createElementVNode("text", { class: "link" }, "用户协议"),
              vue.createTextVNode(" 及 "),
              vue.createElementVNode("text", { class: "link" }, "隐私协议")
            ]),
            vue.createElementVNode("button", {
              onClick: onFormSubmit,
              class: "uni-button"
            }, "登 录"),
            vue.createElementVNode("navigator", {
              "hover-class": "none",
              class: "uni-navigator",
              url: " "
            }, " 忘记密码？ ")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["model"]);
      };
    }
  });
  const customPassword = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-a8a36375"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/pages/login/components/password.vue"]]);
  const en$2 = {
    "uni-countdown.day": "day",
    "uni-countdown.h": "h",
    "uni-countdown.m": "m",
    "uni-countdown.s": "s"
  };
  const zhHans$2 = {
    "uni-countdown.day": "天",
    "uni-countdown.h": "时",
    "uni-countdown.m": "分",
    "uni-countdown.s": "秒"
  };
  const zhHant$2 = {
    "uni-countdown.day": "天",
    "uni-countdown.h": "時",
    "uni-countdown.m": "分",
    "uni-countdown.s": "秒"
  };
  const messages$2 = {
    en: en$2,
    "zh-Hans": zhHans$2,
    "zh-Hant": zhHant$2
  };
  const { t: t$2 } = initVueI18n(messages$2);
  const _sfc_main$F = {
    name: "UniCountdown",
    emits: ["timeup"],
    props: {
      showDay: {
        type: Boolean,
        default: true
      },
      showHour: {
        type: Boolean,
        default: true
      },
      showMiniute: {
        type: Boolean,
        default: true
      },
      showColon: {
        type: Boolean,
        default: true
      },
      start: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333"
      },
      fontSize: {
        type: Number,
        default: 14
      },
      splitorColor: {
        type: String,
        default: "#333"
      },
      day: {
        type: Number,
        default: 0
      },
      hour: {
        type: Number,
        default: 0
      },
      minute: {
        type: Number,
        default: 0
      },
      second: {
        type: Number,
        default: 0
      },
      timestamp: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        timer: null,
        syncFlag: false,
        d: "00",
        h: "00",
        i: "00",
        s: "00",
        leftTime: 0,
        seconds: 0
      };
    },
    computed: {
      dayText() {
        return t$2("uni-countdown.day");
      },
      hourText(val) {
        return t$2("uni-countdown.h");
      },
      minuteText(val) {
        return t$2("uni-countdown.m");
      },
      secondText(val) {
        return t$2("uni-countdown.s");
      },
      timeStyle() {
        const { color, backgroundColor, fontSize } = this;
        return {
          color,
          backgroundColor,
          fontSize: `${fontSize}px`,
          width: `${fontSize * 22 / 14}px`,
          // 按字体大小为 14px 时的比例缩放
          lineHeight: `${fontSize * 20 / 14}px`,
          borderRadius: `${fontSize * 3 / 14}px`
        };
      },
      splitorStyle() {
        const { splitorColor, fontSize, backgroundColor } = this;
        return {
          color: splitorColor,
          fontSize: `${fontSize * 12 / 14}px`,
          margin: backgroundColor ? `${fontSize * 4 / 14}px` : ""
        };
      }
    },
    watch: {
      day(val) {
        this.changeFlag();
      },
      hour(val) {
        this.changeFlag();
      },
      minute(val) {
        this.changeFlag();
      },
      second(val) {
        this.changeFlag();
      },
      start: {
        immediate: true,
        handler(newVal, oldVal) {
          if (newVal) {
            this.startData();
          } else {
            if (!oldVal)
              return;
            clearInterval(this.timer);
          }
        }
      }
    },
    created: function(e) {
      this.seconds = this.toSeconds(
        this.timestamp,
        this.day,
        this.hour,
        this.minute,
        this.second
      );
      this.countDown();
    },
    unmounted() {
      clearInterval(this.timer);
    },
    methods: {
      toSeconds(timestamp, day, hours, minutes, seconds) {
        if (timestamp) {
          return timestamp - parseInt((/* @__PURE__ */ new Date()).getTime() / 1e3, 10);
        }
        return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
      },
      timeUp() {
        clearInterval(this.timer);
        this.$emit("timeup");
      },
      countDown() {
        let seconds = this.seconds;
        let [day, hour, minute, second] = [0, 0, 0, 0];
        if (seconds > 0) {
          day = Math.floor(seconds / (60 * 60 * 24));
          hour = Math.floor(seconds / (60 * 60)) - day * 24;
          minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60;
          second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
        } else {
          this.timeUp();
        }
        if (day < 10) {
          day = "0" + day;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minute < 10) {
          minute = "0" + minute;
        }
        if (second < 10) {
          second = "0" + second;
        }
        this.d = day;
        this.h = hour;
        this.i = minute;
        this.s = second;
      },
      startData() {
        this.seconds = this.toSeconds(
          this.timestamp,
          this.day,
          this.hour,
          this.minute,
          this.second
        );
        if (this.seconds <= 0) {
          this.seconds = this.toSeconds(0, 0, 0, 0, 0);
          this.countDown();
          return;
        }
        clearInterval(this.timer);
        this.countDown();
        this.timer = setInterval(() => {
          this.seconds--;
          if (this.seconds < 0) {
            this.timeUp();
            return;
          }
          this.countDown();
        }, 1e3);
      },
      update() {
        this.startData();
      },
      changeFlag() {
        if (!this.syncFlag) {
          this.seconds = this.toSeconds(
            this.timestamp,
            this.day,
            this.hour,
            this.minute,
            this.second
          );
          this.startData();
          this.syncFlag = true;
        }
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-countdown" }, [
      $props.showDay ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          style: vue.normalizeStyle([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        vue.toDisplayString($data.d),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showDay ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 1,
          style: vue.normalizeStyle([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        vue.toDisplayString($options.dayText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showHour ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          style: vue.normalizeStyle([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        vue.toDisplayString($data.h),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showHour ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 3,
          style: vue.normalizeStyle([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        vue.toDisplayString($props.showColon ? ":" : $options.hourText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showMiniute ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 4,
          style: vue.normalizeStyle([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        vue.toDisplayString($data.i),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showMiniute ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 5,
          style: vue.normalizeStyle([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        vue.toDisplayString($props.showColon ? ":" : $options.minuteText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "text",
        {
          style: vue.normalizeStyle([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        vue.toDisplayString($data.s),
        5
        /* TEXT, STYLE */
      ),
      !$props.showColon ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 6,
          style: vue.normalizeStyle([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        vue.toDisplayString($options.secondText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$g], ["__scopeId", "data-v-80e91f2c"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/components/custom-countdown/custom-countdown.vue"]]);
  const __default__$2 = {
    options: {
      styleIsolation: "shared"
    }
  };
  const _sfc_main$E = /* @__PURE__ */ Object.assign(__default__$2, {
    __name: "mobile",
    setup(__props) {
      const userStore = useUserStore();
      const isAgree = vue.ref(false);
      const showCountdown = vue.ref(false);
      const buttonText = vue.ref("获取验证码");
      const formRef = vue.ref();
      const formData = vue.ref({
        mobile: "",
        code: ""
      });
      const formRules = {
        mobile: {
          rules: [
            { required: true, errorMessage: "请填写手机号码" },
            { pattern: "^1\\d{10}$", errorMessage: "手机号码格式不正确" }
          ]
        },
        code: {
          rules: [
            { required: true, errorMessage: "请输入验证码" },
            { pattern: "^\\d{6}$", errorMessage: "验证码格式不正确" }
          ]
        }
      };
      function onAgreeClick() {
        isAgree.value = !isAgree.value;
      }
      async function onFormSubmit() {
        if (!isAgree.value)
          return uni.utils.toast("请先同意协议!");
        try {
          const formData2 = await formRef.value.validate();
          const { code, data, message } = await loginByMobileApi(formData2);
          if (code !== 1e4)
            return uni.utils.toast(message);
          userStore.token = data.token;
          userStore.userId = data.id;
          if (userStore.openType === "switchTab") {
            uni.switchTab({ url: userStore.redirectURL });
          } else {
            uni.redirectTo({ url: userStore.redirectURL });
          }
        } catch (error) {
          formatAppLog("log", "at pages/login/components/mobile.vue:76", error);
        }
      }
      function onCountdownTimeup() {
        buttonText.value = "重新获取验证码";
        showCountdown.value = false;
      }
      async function onTextButtonClick() {
        try {
          await formRef.value.validateField(["mobile"]);
          const { code, message } = await verifyCodeApi({
            mobile: formData.value.mobile,
            type: "login"
          });
          if (code !== 1e4)
            return uni.utils.toast(message);
          uni.utils.toast("验证码已发送，请查收!");
          showCountdown.value = true;
        } catch (error) {
          formatAppLog("log", "at pages/login/components/mobile.vue:108", error);
        }
      }
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$3);
        const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1$3);
        const _component_custom_countdown = resolveEasycom(vue.resolveDynamicComponent("custom-countdown"), __easycom_2$3);
        const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_3$1);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(_component_uni_forms, {
            class: "login-form",
            model: formData.value,
            rules: formRules,
            ref_key: "formRef",
            ref: formRef
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_forms_item, { name: "mobile" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    modelValue: formData.value.mobile,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.mobile = $event),
                    "input-border": false,
                    clearable: false,
                    placeholder: "请输入手机号",
                    "placeholder-style": "color: #C3C3C5"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_forms_item, { name: "code" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    modelValue: formData.value.code,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.code = $event),
                    "input-border": false,
                    clearable: false,
                    placeholder: "请输入验证码",
                    "placeholder-style": "color: #C3C3C5"
                  }, null, 8, ["modelValue"]),
                  showCountdown.value ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "text-button"
                  }, [
                    vue.createVNode(_component_custom_countdown, {
                      second: 59,
                      "show-day": false,
                      "show-hour": false,
                      "show-miniute": false,
                      onTimeup: onCountdownTimeup,
                      color: "#16C2A3"
                    }),
                    vue.createTextVNode(" 秒后重新获取 ")
                  ])) : (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 1,
                      onClick: onTextButtonClick,
                      class: "text-button"
                    },
                    vue.toDisplayString(buttonText.value),
                    1
                    /* TEXT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createElementVNode("view", { class: "agreement" }, [
                vue.createElementVNode("radio", {
                  onClick: onAgreeClick,
                  checked: isAgree.value,
                  color: "#16C2A3"
                }, null, 8, ["checked"]),
                vue.createTextVNode(" 我已同意 "),
                vue.createElementVNode("text", { class: "link" }, "用户协议"),
                vue.createTextVNode(" 及 "),
                vue.createElementVNode("text", { class: "link" }, "隐私协议")
              ]),
              vue.createElementVNode("button", {
                onClick: onFormSubmit,
                class: "uni-button"
              }, "登 录")
            ]),
            _: 1
            /* STABLE */
          }, 8, ["model"])
        ]);
      };
    }
  });
  const customMobile = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-173d236c"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/pages/login/components/mobile.vue"]]);
  const _sfc_main$D = {
    __name: "index",
    setup(__props) {
      const tabMetas = [
        { title: "密码登录", subTitle: "验证码登录" },
        { title: "验证码登录", subTitle: "密码登录" }
      ];
      const tabIndex = vue.ref(1);
      const tabMeta = vue.computed(() => {
        return tabMetas[tabIndex.value];
      });
      function onSubTitleClick() {
        tabIndex.value = Math.abs(tabIndex.value - 1);
      }
      function onWeiboButtonClick() {
        uni.login({
          provider: "univerify",
          univerifyStyle: {
            fullScreen: true,
            icon: {
              path: "static/logo.png"
              // 自定义显示在授权框中的logo，仅支持本地图片 默认显示App logo
            },
            authButton: {
              normalColor: "#16c2a3",
              // 授权按钮正常状态背景颜色 默认值：#3479f5
              highlightColor: "#16c2a3"
              // 授权按钮按下状态背景颜色 默认值：#2861c5（仅ios支持）
            },
            privacyTerms: {
              defaultCheckBoxState: false,
              uncheckedImage: "static/images/uncheckedImage.png",
              checkedImage: "static/images/checkedImage.png",
              termsColor: "#16c2a3"
            }
          },
          success() {
            Ds.callFunction({
              name: "uni-login",
              success({ result }) {
                formatAppLog("log", "at pages/login/index.vue:58", result);
              }
            });
          }
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "user-login" }, [
              vue.createElementVNode("view", { class: "login-type" }, [
                vue.createElementVNode(
                  "view",
                  { class: "title" },
                  vue.toDisplayString(vue.unref(tabMeta).title),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "type" }, [
                  vue.createElementVNode(
                    "text",
                    { onClick: onSubTitleClick },
                    vue.toDisplayString(vue.unref(tabMeta).subTitle),
                    1
                    /* TEXT */
                  ),
                  vue.createVNode(_component_uni_icons, {
                    color: "#3c3e42",
                    type: "forward"
                  })
                ])
              ]),
              vue.createCommentVNode(" 用户名&密码方式 "),
              tabIndex.value === 0 ? (vue.openBlock(), vue.createBlock(customPassword, { key: 0 })) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" 短信验证码方式 "),
              tabIndex.value === 1 ? (vue.openBlock(), vue.createBlock(customMobile, { key: 1 })) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createCommentVNode(" 社交账号登录 "),
            vue.createElementVNode("view", { class: "social-login" }, [
              vue.createElementVNode("view", { class: "legend" }, [
                vue.createElementVNode("text", { class: "text" }, "其它方式登录")
              ]),
              vue.createElementVNode("view", { class: "social-account" }, [
                vue.createElementVNode("view", {
                  onClick: onWeiboButtonClick,
                  class: "icon"
                }, [
                  vue.createVNode(_component_uni_icons, {
                    color: "#fb6622",
                    size: "30",
                    type: "weibo"
                  })
                ]),
                vue.createElementVNode("view", { class: "icon" }, [
                  vue.createVNode(_component_uni_icons, {
                    color: "#07C160",
                    size: "30",
                    type: "weixin"
                  })
                ])
              ])
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesLoginIndex = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/pages/login/index.vue"]]);
  const _sfc_main$C = {};
  function _sfc_render$f(_ctx, _cache) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$3);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1$3);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_3$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "user-login" }, [
      vue.createElementVNode("view", { class: "welcome" }, [
        vue.createElementVNode("image", {
          class: "avatar",
          src: "/static/uploads/doctor-avatar-2.png"
        }),
        vue.createElementVNode("text", { class: "nickname" }, " Hi，lotjol 欢迎来优医咨询，完成绑定后可以QQ账号一键登录哦~ ")
      ]),
      vue.createVNode(
        _component_uni_forms,
        {
          class: "login-form",
          ref: "form"
        },
        {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_forms_item, { name: "name" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_easyinput, {
                  "input-border": false,
                  clearable: false,
                  placeholder: "请输入手机号",
                  "placeholder-style": "color: #C3C3C5"
                })
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_uni_forms_item, { name: "name" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_easyinput, {
                  "input-border": false,
                  clearable: false,
                  placeholder: "请输入验证码",
                  "placeholder-style": "color: #C3C3C5"
                }),
                vue.createElementVNode("text", { class: "text-button" }, "获取验证码")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createElementVNode("view", { class: "agreement" }, [
              (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                key: 0,
                size: "18",
                color: "#16C2A3",
                type: "checkbox-filled"
              })),
              vue.createTextVNode(" 我已同意 "),
              vue.createElementVNode("text", { class: "link" }, "用户协议"),
              vue.createTextVNode(" 及 "),
              vue.createElementVNode("text", { class: "link" }, "隐私协议")
            ]),
            vue.createElementVNode("button", { class: "uni-button" }, "绑定手机号"),
            vue.createElementVNode("button", { class: "uni-button secondary" }, "暂不绑定")
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const PagesLoginQq = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$f], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/pages/login/qq.vue"]]);
  const en$1 = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  const zhHans$1 = {
    "uni-load-more.contentdown": "上拉显示更多",
    "uni-load-more.contentrefresh": "正在加载...",
    "uni-load-more.contentnomore": "没有更多数据了"
  };
  const zhHant$1 = {
    "uni-load-more.contentdown": "上拉顯示更多",
    "uni-load-more.contentrefresh": "正在加載...",
    "uni-load-more.contentnomore": "沒有更多數據了"
  };
  const messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t: t$1
  } = initVueI18n(messages$1);
  const _sfc_main$B = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        // 上拉的状态：more-loading前；loading-loading中；noMore-没有更多了
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t$1("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t$1("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t$1("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--android-MP"
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "uni-load-more__img-icon",
              style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
            },
            null,
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
          class: "uni-load-more__img uni-load-more__img--ios-H5"
        },
        [
          vue.createElementVNode("image", {
            src: $data.imgBase64,
            mode: "widthFix"
          }, null, 8, ["src"])
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          class: "uni-load-more__text",
          style: vue.normalizeStyle({ color: $props.color })
        },
        vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$e], ["__scopeId", "data-v-9245e42c"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const _sfc_main$A = {
    name: "uniDataChecklist",
    mixins: [Ds.mixinDatacom || {}],
    emits: ["input", "update:modelValue", "change"],
    props: {
      mode: {
        type: String,
        default: "default"
      },
      multiple: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      // TODO vue3
      modelValue: {
        type: [Array, String, Number],
        default() {
          return "";
        }
      },
      localdata: {
        type: Array,
        default() {
          return [];
        }
      },
      min: {
        type: [Number, String],
        default: ""
      },
      max: {
        type: [Number, String],
        default: ""
      },
      wrap: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: "left"
      },
      selectedColor: {
        type: String,
        default: ""
      },
      selectedTextColor: {
        type: String,
        default: ""
      },
      emptyText: {
        type: String,
        default: "暂无数据"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    watch: {
      localdata: {
        handler(newVal) {
          this.range = newVal;
          this.dataList = this.getDataList(this.getSelectedValue(newVal));
        },
        deep: true
      },
      mixinDatacomResData(newVal) {
        this.range = newVal;
        this.dataList = this.getDataList(this.getSelectedValue(newVal));
      },
      value(newVal) {
        this.dataList = this.getDataList(newVal);
      },
      modelValue(newVal) {
        this.dataList = this.getDataList(newVal);
      }
    },
    data() {
      return {
        dataList: [],
        range: [],
        contentText: {
          contentdown: "查看更多",
          contentrefresh: "加载中",
          contentnomore: "没有更多"
        },
        isLocal: true,
        styles: {
          selectedColor: "#2979ff",
          selectedTextColor: "#666"
        },
        isTop: 0
      };
    },
    computed: {
      dataValue() {
        if (this.value === "")
          return this.modelValue;
        if (this.modelValue === "")
          return this.value;
        return this.value;
      }
    },
    created() {
      if (this.localdata && this.localdata.length !== 0) {
        this.isLocal = true;
        this.range = this.localdata;
        this.dataList = this.getDataList(this.getSelectedValue(this.range));
      } else {
        if (this.collection) {
          this.isLocal = false;
          this.loadData();
        }
      }
    },
    methods: {
      loadData() {
        this.mixinDatacomGet().then((res) => {
          this.mixinDatacomResData = res.result.data;
          if (this.mixinDatacomResData.length === 0) {
            this.isLocal = false;
            this.mixinDatacomErrorMessage = this.emptyText;
          } else {
            this.isLocal = true;
          }
        }).catch((err) => {
          this.mixinDatacomErrorMessage = err.message;
        });
      },
      /**
       * 获取父元素实例
       */
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      chagne(e) {
        const values = e.detail.value;
        let detail = {
          value: [],
          data: []
        };
        if (this.multiple) {
          this.range.forEach((item) => {
            if (values.includes(item[this.map.value] + "")) {
              detail.value.push(item[this.map.value]);
              detail.data.push(item);
            }
          });
        } else {
          const range = this.range.find((item) => item[this.map.value] + "" === values);
          if (range) {
            detail = {
              value: range[this.map.value],
              data: range
            };
          }
        }
        this.$emit("input", detail.value);
        this.$emit("update:modelValue", detail.value);
        this.$emit("change", {
          detail
        });
        if (this.multiple) {
          this.dataList = this.getDataList(detail.value, true);
        } else {
          this.dataList = this.getDataList(detail.value);
        }
      },
      /**
       * 获取渲染的新数组
       * @param {Object} value 选中内容
       */
      getDataList(value2) {
        let dataList = JSON.parse(JSON.stringify(this.range));
        let list = [];
        if (this.multiple) {
          if (!Array.isArray(value2)) {
            value2 = [];
          }
        }
        dataList.forEach((item, index) => {
          item.disabled = item.disable || item.disabled || false;
          if (this.multiple) {
            if (value2.length > 0) {
              let have = value2.find((val) => val === item[this.map.value]);
              item.selected = have !== void 0;
            } else {
              item.selected = false;
            }
          } else {
            item.selected = value2 === item[this.map.value];
          }
          list.push(item);
        });
        return this.setRange(list);
      },
      /**
       * 处理最大最小值
       * @param {Object} list
       */
      setRange(list) {
        let selectList = list.filter((item) => item.selected);
        let min = Number(this.min) || 0;
        let max = Number(this.max) || "";
        list.forEach((item, index) => {
          if (this.multiple) {
            if (selectList.length <= min) {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have !== void 0) {
                item.disabled = true;
              }
            }
            if (selectList.length >= max && max !== "") {
              let have = selectList.find((val) => val[this.map.value] === item[this.map.value]);
              if (have === void 0) {
                item.disabled = true;
              }
            }
          }
          this.setStyles(item, index);
          list[index] = item;
        });
        return list;
      },
      /**
       * 设置 class
       * @param {Object} item
       * @param {Object} index
       */
      setStyles(item, index) {
        item.styleBackgroud = this.setStyleBackgroud(item);
        item.styleIcon = this.setStyleIcon(item);
        item.styleIconText = this.setStyleIconText(item);
        item.styleRightIcon = this.setStyleRightIcon(item);
      },
      /**
       * 获取选中值
       * @param {Object} range
       */
      getSelectedValue(range) {
        if (!this.multiple)
          return this.dataValue;
        let selectedArr = [];
        range.forEach((item) => {
          if (item.selected) {
            selectedArr.push(item[this.map.value]);
          }
        });
        return this.dataValue.length > 0 ? this.dataValue : selectedArr;
      },
      /**
       * 设置背景样式
       */
      setStyleBackgroud(item) {
        let styles = {};
        let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
        if (this.selectedColor) {
          if (this.mode !== "list") {
            styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          }
          if (this.mode === "tag") {
            styles["background-color"] = item.selected ? selectedColor : "#f5f5f5";
          }
        }
        let classles = "";
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIcon(item) {
        let styles = {};
        let classles = "";
        if (this.selectedColor) {
          let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
          styles["background-color"] = item.selected ? selectedColor : "#fff";
          styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          if (!item.selected && item.disabled) {
            styles["background-color"] = "#F2F6FC";
            styles["border-color"] = item.selected ? selectedColor : "#DCDFE6";
          }
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleIconText(item) {
        let styles = {};
        let classles = "";
        if (this.selectedColor) {
          let selectedColor = this.selectedColor ? this.selectedColor : "#2979ff";
          if (this.mode === "tag") {
            styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : "#fff" : "#666";
          } else {
            styles.color = item.selected ? this.selectedTextColor ? this.selectedTextColor : selectedColor : "#666";
          }
          if (!item.selected && item.disabled) {
            styles.color = "#999";
          }
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      },
      setStyleRightIcon(item) {
        let styles = {};
        let classles = "";
        if (this.mode === "list") {
          styles["border-color"] = item.selected ? this.styles.selectedColor : "#DCDFE6";
        }
        for (let i2 in styles) {
          classles += `${i2}:${styles[i2]};`;
        }
        return classles;
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "uni-data-checklist",
        style: vue.normalizeStyle({ "margin-top": $data.isTop + "px" })
      },
      [
        !$data.isLocal ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-data-loading"
        }, [
          !_ctx.mixinDatacomErrorMessage ? (vue.openBlock(), vue.createBlock(_component_uni_load_more, {
            key: 0,
            status: "loading",
            iconType: "snow",
            iconSize: 18,
            "content-text": $data.contentText
          }, null, 8, ["content-text"])) : (vue.openBlock(), vue.createElementBlock(
            "text",
            { key: 1 },
            vue.toDisplayString(_ctx.mixinDatacomErrorMessage),
            1
            /* TEXT */
          ))
        ])) : (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 1 },
          [
            $props.multiple ? (vue.openBlock(), vue.createElementBlock(
              "checkbox-group",
              {
                key: 0,
                class: vue.normalizeClass(["checklist-group", { "is-list": $props.mode === "list" || $props.wrap }]),
                onChange: _cache[0] || (_cache[0] = (...args) => $options.chagne && $options.chagne(...args))
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.dataList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "label",
                      {
                        class: vue.normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                        style: vue.normalizeStyle(item.styleBackgroud),
                        key: index
                      },
                      [
                        vue.createElementVNode("checkbox", {
                          class: "hidden",
                          hidden: "",
                          disabled: $props.disabled || !!item.disabled,
                          value: item[$props.map.value] + "",
                          checked: item.selected
                        }, null, 8, ["disabled", "value", "checked"]),
                        $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: "checkbox__inner",
                            style: vue.normalizeStyle(item.styleIcon)
                          },
                          [
                            vue.createElementVNode("view", { class: "checkbox__inner-icon" })
                          ],
                          4
                          /* STYLE */
                        )) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode(
                          "view",
                          {
                            class: vue.normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                          },
                          [
                            vue.createElementVNode(
                              "text",
                              {
                                class: "checklist-text",
                                style: vue.normalizeStyle(item.styleIconText)
                              },
                              vue.toDisplayString(item[$props.map.text]),
                              5
                              /* TEXT, STYLE */
                            ),
                            $props.mode === "list" && $props.icon === "right" ? (vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: 0,
                                class: "checkobx__list",
                                style: vue.normalizeStyle(item.styleBackgroud)
                              },
                              null,
                              4
                              /* STYLE */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              34
              /* CLASS, HYDRATE_EVENTS */
            )) : (vue.openBlock(), vue.createElementBlock(
              "radio-group",
              {
                key: 1,
                class: vue.normalizeClass(["checklist-group", { "is-list": $props.mode === "list", "is-wrap": $props.wrap }]),
                onChange: _cache[1] || (_cache[1] = (...args) => $options.chagne && $options.chagne(...args))
              },
              [
                vue.createCommentVNode(" "),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.dataList, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "label",
                      {
                        class: vue.normalizeClass(["checklist-box", ["is--" + $props.mode, item.selected ? "is-checked" : "", $props.disabled || !!item.disabled ? "is-disable" : "", index !== 0 && $props.mode === "list" ? "is-list-border" : ""]]),
                        style: vue.normalizeStyle(item.styleBackgroud),
                        key: index
                      },
                      [
                        vue.createElementVNode("radio", {
                          class: "hidden",
                          hidden: "",
                          disabled: $props.disabled || item.disabled,
                          value: item[$props.map.value] + "",
                          checked: item.selected
                        }, null, 8, ["disabled", "value", "checked"]),
                        $props.mode !== "tag" && $props.mode !== "list" || $props.mode === "list" && $props.icon === "left" ? (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: "radio__inner",
                            style: vue.normalizeStyle(item.styleBackgroud)
                          },
                          [
                            vue.createElementVNode(
                              "view",
                              {
                                class: "radio__inner-icon",
                                style: vue.normalizeStyle(item.styleIcon)
                              },
                              null,
                              4
                              /* STYLE */
                            )
                          ],
                          4
                          /* STYLE */
                        )) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode(
                          "view",
                          {
                            class: vue.normalizeClass(["checklist-content", { "list-content": $props.mode === "list" && $props.icon === "left" }])
                          },
                          [
                            vue.createElementVNode(
                              "text",
                              {
                                class: "checklist-text",
                                style: vue.normalizeStyle(item.styleIconText)
                              },
                              vue.toDisplayString(item[$props.map.text]),
                              5
                              /* TEXT, STYLE */
                            ),
                            $props.mode === "list" && $props.icon === "right" ? (vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: 0,
                                style: vue.normalizeStyle(item.styleRightIcon),
                                class: "checkobx__list"
                              },
                              null,
                              4
                              /* STYLE */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              34
              /* CLASS, HYDRATE_EVENTS */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$d], ["__scopeId", "data-v-2f788efd"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.vue"]]);
  const addPatientApi = (data) => {
    return http.post("/patient/add", data);
  };
  const patientListApi = (data) => {
    return http.get("/patient/mylist");
  };
  const removePatientApi = (id) => {
    return http.delete(`/patient/del/${id}`);
  };
  const patientDetailApi = (id) => {
    return http.get(`/patient/info/${id}`);
  };
  const updatePatientApi = (data) => {
    return http.put(`/patient/update`, data);
  };
  const _sfc_main$z = {
    __name: "index",
    props: { id: String },
    setup(__props) {
      const props = __props;
      const formRef = vue.ref();
      const formData = vue.ref({
        name: "张三",
        idCard: "110101198702171378",
        gender: 1,
        defaultFlag: 0
      });
      const formRules = {
        name: {
          rules: [
            { required: true, errorMessage: "请填写患者姓名" },
            {
              pattern: "^[一-龥]{2,5}$",
              errorMessage: "患者姓名为2-5位中文"
            }
          ]
        },
        idCard: {
          rules: [
            { required: true, errorMessage: "请输入身份证号" },
            {
              pattern: "^[1-9]\\d{5}(?:18|19|20)\\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\\d|30|31)\\d{3}[\\dXx]$",
              errorMessage: "身份证号格式不正确"
            }
          ]
        },
        gender: {
          rules: [
            { required: true, errorMessage: "请勾选患者姓名" },
            {
              validateFunction(rule, value2, data, callback) {
                if (data.idCard.slice(16, 17) % 2 !== value2) {
                  callback("选择的性别与身份号中性别不一致");
                }
                return true;
              }
            }
          ]
        }
      };
      async function onFormSubmit() {
        try {
          const formData2 = await formRef.value.validate();
          const metaInfo = uni.getFacialRecognitionMetaInfo();
          Ds.callFunction({
            name: "uni-verify",
            data: {
              metaInfo,
              realName: formData2.name,
              idCard: formData2.idCard
            },
            success({ result }) {
              uni.startFacialRecognitionVerify({
                certifyId: result.certifyId,
                success() {
                  props.id ? updatePatient() : addPatient();
                },
                fail() {
                  uni.utils.toast("实人认证失败!");
                }
              });
            }
          });
        } catch (error) {
          formatAppLog("log", "at subpkg_archive/form/index.vue:96", error);
        }
      }
      function onSwitchChange(ev) {
        formData.value.defaultFlag = ev.detail.value ? 1 : 0;
      }
      async function addPatient() {
        const { code, message } = await addPatientApi(formData.value);
        if (code !== 1e4)
          return uni.utils.toast(message);
        uni.navigateBack();
      }
      async function updatePatient() {
        const { code, message } = await updatePatientApi(formData.value);
        if (code !== 1e4)
          return uni.utils.toast(message);
        uni.navigateBack();
      }
      async function getPatientDetail() {
        if (!props.id)
          return;
        uni.setNavigationBarTitle({ title: "编辑患者" });
        const {
          code,
          data: { genderValue, age, ...rest }
        } = await patientDetailApi(props.id);
        formData.value = rest;
      }
      getPatientDetail();
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$3);
        const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1$3);
        const _component_uni_data_checkbox = resolveEasycom(vue.resolveDynamicComponent("uni-data-checkbox"), __easycom_2$2);
        const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_3$1);
        const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_4$1);
        return vue.openBlock(), vue.createBlock(_component_scroll_page, null, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "archive-page" }, [
              vue.createVNode(_component_uni_forms, {
                border: "",
                "label-width": "220rpx",
                model: formData.value,
                rules: formRules,
                ref_key: "formRef",
                ref: formRef
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_forms_item, {
                    label: "患者姓名",
                    name: "name"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_easyinput, {
                        modelValue: formData.value.name,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.name = $event),
                        "placeholder-style": "color: #C3C3C5; font-size: 32rpx",
                        styles: { color: "#121826" },
                        "input-border": false,
                        clearable: false,
                        placeholder: "请填写真实姓名"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, {
                    label: "患者身份证号",
                    name: "idCard"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_easyinput, {
                        modelValue: formData.value.idCard,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.idCard = $event),
                        "placeholder-style": "color: #C3C3C5; font-size: 32rpx",
                        styles: { color: "#121826" },
                        "input-border": false,
                        clearable: false,
                        placeholder: "请填写身份证号"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, {
                    label: "患者性别",
                    name: "gender"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_data_checkbox, {
                        modelValue: formData.value.gender,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.gender = $event),
                        selectedColor: "#16C2A3",
                        localdata: [
                          { text: "男", value: 1 },
                          { text: "女", value: 0 }
                        ]
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createVNode(_component_uni_forms_item, { label: "默认就诊人" }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("view", { class: "uni-switch" }, [
                        vue.createElementVNode("switch", {
                          onChange: onSwitchChange,
                          checked: formData.value.defaultFlag === 1,
                          color: "#20c6b2",
                          style: { "transform": "scale(0.7)" }
                        }, null, 40, ["checked"])
                      ])
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createElementVNode("button", {
                    onClick: onFormSubmit,
                    class: "uni-button"
                  }, "保存")
                ]),
                _: 1
                /* STABLE */
              }, 8, ["model"])
            ])
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const Subpkg_archiveFormIndex = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_archive/form/index.vue"]]);
  let mpMixins = {};
  mpMixins = {
    data() {
      return {
        is_show: "none"
      };
    },
    watch: {
      show(newVal) {
        this.is_show = this.show;
      }
    },
    created() {
      this.swipeaction = this.getSwipeAction();
      if (this.swipeaction && Array.isArray(this.swipeaction.children)) {
        this.swipeaction.children.push(this);
      }
    },
    mounted() {
      this.is_show = this.show;
    },
    methods: {
      // wxs 中调用
      closeSwipe(e) {
        if (this.autoClose && this.swipeaction) {
          this.swipeaction.closeOther(this);
        }
      },
      change(e) {
        this.$emit("change", e.open);
        if (this.is_show !== e.open) {
          this.is_show = e.open;
        }
      },
      appTouchStart(e) {
        const {
          clientX
        } = e.changedTouches[0];
        this.clientX = clientX;
        this.timestamp = (/* @__PURE__ */ new Date()).getTime();
      },
      appTouchEnd(e, index, item, position) {
        const {
          clientX
        } = e.changedTouches[0];
        let diff = Math.abs(this.clientX - clientX);
        let time = (/* @__PURE__ */ new Date()).getTime() - this.timestamp;
        if (diff < 40 && time < 300) {
          this.$emit("click", {
            content: item,
            index,
            position
          });
        }
      },
      onClickForPC(index, item, position) {
        return;
      }
    }
  };
  const mpwxs = mpMixins;
  let bindIngXMixins = {};
  let otherMixins = {};
  const block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("wxsswipe");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["wxsswipe"] = "afd46426";
  };
  const block1 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("renderswipe");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["renderswipe"] = "5a1e922e";
  };
  const _sfc_main$y = {
    mixins: [mpwxs, bindIngXMixins, otherMixins],
    emits: ["click", "change"],
    props: {
      // 控制开关
      show: {
        type: String,
        default: "none"
      },
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否自动关闭
      autoClose: {
        type: Boolean,
        default: true
      },
      // 滑动缺省距离
      threshold: {
        type: Number,
        default: 20
      },
      // 左侧按钮内容
      leftOptions: {
        type: Array,
        default() {
          return [];
        }
      },
      // 右侧按钮内容
      rightOptions: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    // TODO vue3
    unmounted() {
      this.__isUnmounted = true;
      this.uninstall();
    },
    methods: {
      uninstall() {
        if (this.swipeaction) {
          this.swipeaction.children.forEach((item, index) => {
            if (item === this) {
              this.swipeaction.children.splice(index, 1);
            }
          });
        }
      },
      /**
       * 获取父元素实例
       */
      getSwipeAction(name = "uniSwipeAction") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createCommentVNode(" 在微信小程序 app vue端 h5 使用wxs 实现"),
        vue.createElementVNode("view", { class: "uni-swipe" }, [
          vue.createElementVNode("view", {
            class: "uni-swipe_box",
            "change:prop": _ctx.wxsswipe.showWatch,
            prop: vue.wp(_ctx.is_show),
            "data-threshold": $props.threshold,
            "data-disabled": $props.disabled,
            onTouchstart: _cache[2] || (_cache[2] = (...args) => _ctx.wxsswipe.touchstart && _ctx.wxsswipe.touchstart(...args)),
            onTouchmove: _cache[3] || (_cache[3] = (...args) => _ctx.wxsswipe.touchmove && _ctx.wxsswipe.touchmove(...args)),
            onTouchend: _cache[4] || (_cache[4] = (...args) => _ctx.wxsswipe.touchend && _ctx.wxsswipe.touchend(...args))
          }, [
            vue.createCommentVNode(" 在微信小程序 app vue端 h5 使用wxs 实现"),
            vue.createElementVNode("view", { class: "uni-swipe_button-group button-group--left" }, [
              vue.renderSlot(_ctx.$slots, "left", {}, () => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($props.leftOptions, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      style: vue.normalizeStyle({
                        backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                      }),
                      class: "uni-swipe_button button-hock",
                      onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args)),
                      onTouchend: ($event) => _ctx.appTouchEnd($event, index, item, "left"),
                      onClick: vue.withModifiers(($event) => _ctx.onClickForPC(index, item, "left"), ["stop"])
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-swipe_button-text",
                          style: vue.normalizeStyle({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                        },
                        vue.toDisplayString(item.text),
                        5
                        /* TEXT, STYLE */
                      )
                    ], 44, ["onTouchend", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], true)
            ]),
            vue.createElementVNode("view", { class: "uni-swipe_text--center" }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            vue.createElementVNode("view", { class: "uni-swipe_button-group button-group--right" }, [
              vue.renderSlot(_ctx.$slots, "right", {}, () => [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($props.rightOptions, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      style: vue.normalizeStyle({
                        backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD"
                      }),
                      class: "uni-swipe_button button-hock",
                      onTouchstart: _cache[1] || (_cache[1] = (...args) => _ctx.appTouchStart && _ctx.appTouchStart(...args)),
                      onTouchend: ($event) => _ctx.appTouchEnd($event, index, item, "right"),
                      onClick: vue.withModifiers(($event) => _ctx.onClickForPC(index, item, "right"), ["stop"])
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-swipe_button-text",
                          style: vue.normalizeStyle({ color: item.style && item.style.color ? item.style.color : "#FFFFFF", fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px" })
                        },
                        vue.toDisplayString(item.text),
                        5
                        /* TEXT, STYLE */
                      )
                    ], 44, ["onTouchend", "onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], true)
            ])
          ], 40, ["change:prop", "prop", "data-threshold", "data-disabled"])
        ]),
        vue.createCommentVNode(" app nvue端 使用 bindingx "),
        vue.createCommentVNode(" 其他平台使用 js ，长列表性能可能会有影响")
      ],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    );
  }
  if (typeof block0 === "function")
    block0(_sfc_main$y);
  if (typeof block1 === "function")
    block1(_sfc_main$y);
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$c], ["__scopeId", "data-v-8ff2a577"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue"]]);
  const _sfc_main$x = {
    name: "uniSwipeAction",
    data() {
      return {};
    },
    created() {
      this.children = [];
    },
    methods: {
      // 公开给用户使用，重制组件样式
      resize() {
      },
      // 公开给用户使用，关闭全部 已经打开的组件
      closeAll() {
        this.children.forEach((vm) => {
          vm.is_show = "none";
        });
      },
      closeOther(vm) {
        if (this.openItem && this.openItem !== vm) {
          this.openItem.is_show = "none";
        }
        this.openItem = vm;
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$b], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.vue"]]);
  const _sfc_main$w = {
    __name: "index",
    setup(__props) {
      const pageShow = vue.ref(false);
      const patinetList = vue.ref([]);
      const swipeOptions = vue.ref([
        {
          text: "删除",
          style: {
            backgroundColor: "#dd524d"
          }
        }
      ]);
      onShow(() => {
        getPatientList();
      });
      async function onSwipeActionClick(id, index) {
        const { code, message } = await removePatientApi(id);
        if (code !== 1e4)
          return uni.utils.toast(message);
        patinetList.value.splice(index, 1);
      }
      async function getPatientList() {
        const { code, data } = await patientListApi();
        if (code !== 1e4)
          return uni.utils.showToast("列表获取失败，稍后重试!");
        patinetList.value = data;
        pageShow.value = true;
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        const _component_uni_swipe_action_item = resolveEasycom(vue.resolveDynamicComponent("uni-swipe-action-item"), __easycom_1$1);
        const _component_uni_swipe_action = resolveEasycom(vue.resolveDynamicComponent("uni-swipe-action"), __easycom_2$1);
        const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_4$1);
        return vue.openBlock(), vue.createBlock(_component_scroll_page, null, {
          default: vue.withCtx(() => [
            pageShow.value ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "archive-page"
            }, [
              vue.createElementVNode("view", { class: "archive-tips" }, "最多可添加6人"),
              vue.createVNode(_component_uni_swipe_action, null, {
                default: vue.withCtx(() => [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(patinetList.value, (patient, index) => {
                      return vue.openBlock(), vue.createBlock(_component_uni_swipe_action_item, {
                        key: patient.id,
                        "right-options": swipeOptions.value,
                        onClick: ($event) => onSwipeActionClick(patient.id, index)
                      }, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode(
                            "view",
                            {
                              class: vue.normalizeClass([{ active: patient.defaultFlag === 1 }, "archive-card"])
                            },
                            [
                              vue.createElementVNode("view", { class: "archive-info" }, [
                                vue.createElementVNode(
                                  "text",
                                  { class: "name" },
                                  vue.toDisplayString(patient.name),
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode(
                                  "text",
                                  { class: "id-card" },
                                  vue.toDisplayString(patient.idCard.replace(/^(.{6}).+(.{4})$/, "$1********$2")),
                                  1
                                  /* TEXT */
                                ),
                                patient.defaultFlag === 1 ? (vue.openBlock(), vue.createElementBlock("text", {
                                  key: 0,
                                  class: "default"
                                }, "默认")) : vue.createCommentVNode("v-if", true)
                              ]),
                              vue.createElementVNode("view", { class: "archive-info" }, [
                                vue.createElementVNode(
                                  "text",
                                  { class: "gender" },
                                  vue.toDisplayString(patient.genderValue),
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode(
                                  "text",
                                  { class: "age" },
                                  vue.toDisplayString(patient.age) + "岁",
                                  1
                                  /* TEXT */
                                )
                              ]),
                              vue.createElementVNode("navigator", {
                                "hover-class": "none",
                                class: "edit-link",
                                url: `/subpkg_archive/form/index?id=${patient.id}`
                              }, [
                                vue.createVNode(_component_uni_icons, {
                                  type: "icon-edit",
                                  size: "20",
                                  color: "#16C2A3",
                                  "custom-prefix": "iconfont"
                                })
                              ], 8, ["url"])
                            ],
                            2
                            /* CLASS */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["right-options", "onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createCommentVNode(" 添加按钮 "),
              (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "archive-card"
              }, [
                vue.createElementVNode("navigator", {
                  class: "add-link",
                  "hover-class": "none",
                  url: "/subpkg_archive/form/index"
                }, [
                  vue.createVNode(_component_uni_icons, {
                    color: "#16C2A3",
                    size: "24",
                    type: "plusempty"
                  }),
                  vue.createElementVNode("text", { class: "label" }, "添加患者")
                ])
              ]))
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const Subpkg_archiveListIndex = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_archive/list/index.vue"]]);
  const _sfc_main$v = {
    __name: "index",
    props: {
      type: String
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$4);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$4);
        const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_4$1);
        return vue.openBlock(), vue.createBlock(_component_scroll_page, null, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "quickly-page" }, [
              vue.createElementVNode("image", {
                class: "quickly-banner",
                src: "/static/images/quickly-consult.png"
              }),
              vue.createElementVNode("view", { class: "quickly-tips" }, [
                vue.createElementVNode("text", { class: "highlight" }, "20s"),
                vue.createTextVNode(" 快速匹配专业医生 ")
              ]),
              vue.createVNode(_component_uni_list, {
                border: false,
                class: "consult-type"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_list_item, {
                    title: "三甲图文问诊",
                    note: "三甲主治及以上级别医生",
                    "show-arrow": "",
                    to: `/subpkg_consult/department/index?type=${props.type}&illnessType=1`,
                    thumb: "/static/images/consult-type-1.png",
                    "thumb-size": "lg"
                  }, null, 8, ["to"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_list, {
                border: false,
                class: "consult-type"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_list_item, {
                    title: "普通图文问诊",
                    note: "二甲主治及以上级别医生",
                    "show-arrow": "",
                    to: `/subpkg_consult/department/index?type=${__props.type}&illnessType=0`,
                    thumb: "/static/images/consult-type-2.png",
                    "thumb-size": "lg"
                  }, null, 8, ["to"])
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const Subpkg_consultQuicklyIndex = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/quickly/index.vue"]]);
  const departmentListApi = () => {
    return http.get("/dep/all");
  };
  const preOrderApi$1 = (type, options = {}) => {
    return http.get("/patient/consult/order/pre", {
      params: {
        type,
        ...options
      }
    });
  };
  const createOrderApi$1 = (data) => {
    return http.post("/patient/consult/order", data);
  };
  const orderDetailApi$1 = (orderId) => {
    return http.get("/patient/consult/order/detail", { params: { orderId } });
  };
  const orderListApi$1 = (data) => {
    return http.get("/patient/consult/order/list", { params: data });
  };
  const _sfc_main$u = {
    __name: "index",
    props: {
      type: String,
      illnessType: String
    },
    setup(__props) {
      const props = __props;
      const departmentList = vue.ref([]);
      const tabIndex = vue.ref(0);
      const childDepartmentList = vue.computed(() => {
        var _a;
        return (_a = departmentList.value[tabIndex.value]) == null ? void 0 : _a.child;
      });
      async function getDepartmentList() {
        const { code, data, message } = await departmentListApi();
        if (code !== 1e4)
          return uni.utils.toast(message);
        departmentList.value = data;
      }
      function onTopDeparmentClick(index) {
        tabIndex.value = index;
      }
      getDepartmentList();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "department-page" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-y": "",
            class: "department-primary"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(departmentList.value, (department, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: department.id,
                  onClick: ($event) => onTopDeparmentClick(index),
                  class: vue.normalizeClass([{ active: tabIndex.value === index }, "department-item"])
                }, vue.toDisplayString(department.name), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createElementVNode("view", { class: "department-item" })
          ]),
          vue.createElementVNode("scroll-view", { class: "department-secondary" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(vue.unref(childDepartmentList), (childDepartment) => {
                return vue.openBlock(), vue.createElementBlock("navigator", {
                  key: childDepartment.id,
                  "hover-class": "none",
                  url: `/subpkg_consult/description/index?type=${props.type}&illnessType=${props.illnessType}&depId=${childDepartment.id}`,
                  class: "department-item"
                }, vue.toDisplayString(childDepartment.name), 9, ["url"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const Subpkg_consultDepartmentIndex = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/department/index.vue"]]);
  const ERR_MSG_OK = "chooseAndUploadFile:ok";
  const ERR_MSG_FAIL = "chooseAndUploadFile:fail";
  function chooseImage(opts) {
    const {
      count,
      sizeType = ["original", "compressed"],
      sourceType,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseImage({
        count,
        sizeType,
        sourceType,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res, "image"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseImage:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseVideo(opts) {
    const {
      camera,
      compressed,
      maxDuration,
      sourceType,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      uni.chooseVideo({
        camera,
        compressed,
        maxDuration,
        sourceType,
        extension,
        success(res) {
          const {
            tempFilePath,
            duration,
            size,
            height,
            width
          } = res;
          resolve(normalizeChooseAndUploadFileRes({
            errMsg: "chooseVideo:ok",
            tempFilePaths: [tempFilePath],
            tempFiles: [
              {
                name: res.tempFile && res.tempFile.name || "",
                path: tempFilePath,
                size,
                type: res.tempFile && res.tempFile.type || "",
                width,
                height,
                duration,
                fileType: "video",
                cloudPath: ""
              }
            ]
          }, "video"));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseVideo:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function chooseAll(opts) {
    const {
      count,
      extension
    } = opts;
    return new Promise((resolve, reject) => {
      let chooseFile = uni.chooseFile;
      if (typeof wx !== "undefined" && typeof wx.chooseMessageFile === "function") {
        chooseFile = wx.chooseMessageFile;
      }
      if (typeof chooseFile !== "function") {
        return reject({
          errMsg: ERR_MSG_FAIL + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
        });
      }
      chooseFile({
        type: "all",
        count,
        extension,
        success(res) {
          resolve(normalizeChooseAndUploadFileRes(res));
        },
        fail(res) {
          reject({
            errMsg: res.errMsg.replace("chooseFile:fail", ERR_MSG_FAIL)
          });
        }
      });
    });
  }
  function normalizeChooseAndUploadFileRes(res, fileType) {
    res.tempFiles.forEach((item, index) => {
      if (!item.name) {
        item.name = item.path.substring(item.path.lastIndexOf("/") + 1);
      }
      if (fileType) {
        item.fileType = fileType;
      }
      item.cloudPath = Date.now() + "_" + index + item.name.substring(item.name.lastIndexOf("."));
    });
    if (!res.tempFilePaths) {
      res.tempFilePaths = res.tempFiles.map((file) => file.path);
    }
    return res;
  }
  function uploadCloudFiles(files, max = 5, onUploadProgress) {
    files = JSON.parse(JSON.stringify(files));
    const len = files.length;
    let count = 0;
    let self2 = this;
    return new Promise((resolve) => {
      while (count < max) {
        next();
      }
      function next() {
        let cur = count++;
        if (cur >= len) {
          !files.find((item) => !item.url && !item.errMsg) && resolve(files);
          return;
        }
        const fileItem = files[cur];
        const index = self2.files.findIndex((v2) => v2.uuid === fileItem.uuid);
        fileItem.url = "";
        delete fileItem.errMsg;
        Ds.uploadFile({
          filePath: fileItem.path,
          cloudPath: fileItem.cloudPath,
          fileType: fileItem.fileType,
          onUploadProgress: (res) => {
            res.index = index;
            onUploadProgress && onUploadProgress(res);
          }
        }).then((res) => {
          fileItem.url = res.fileID;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        }).catch((res) => {
          fileItem.errMsg = res.errMsg || res.message;
          fileItem.index = index;
          if (cur < len) {
            next();
          }
        });
      }
    });
  }
  function uploadFiles(choosePromise, {
    onChooseFile,
    onUploadProgress
  }) {
    return choosePromise.then((res) => {
      if (onChooseFile) {
        const customChooseRes = onChooseFile(res);
        if (typeof customChooseRes !== "undefined") {
          return Promise.resolve(customChooseRes).then((chooseRes) => typeof chooseRes === "undefined" ? res : chooseRes);
        }
      }
      return res;
    }).then((res) => {
      if (res === false) {
        return {
          errMsg: ERR_MSG_OK,
          tempFilePaths: [],
          tempFiles: []
        };
      }
      return res;
    });
  }
  function chooseAndUploadFile(opts = {
    type: "all"
  }) {
    if (opts.type === "image") {
      return uploadFiles(chooseImage(opts), opts);
    } else if (opts.type === "video") {
      return uploadFiles(chooseVideo(opts), opts);
    }
    return uploadFiles(chooseAll(opts), opts);
  }
  const get_file_ext = (name) => {
    const last_len = name.lastIndexOf(".");
    const len = name.length;
    return {
      name: name.substring(0, last_len),
      ext: name.substring(last_len + 1, len)
    };
  };
  const get_extname = (fileExtname) => {
    if (!Array.isArray(fileExtname)) {
      let extname = fileExtname.replace(/(\[|\])/g, "");
      return extname.split(",");
    } else {
      return fileExtname;
    }
  };
  const get_files_and_is_max = (res, _extname) => {
    let filePaths = [];
    let files = [];
    if (!_extname || _extname.length === 0) {
      return {
        filePaths,
        files
      };
    }
    res.tempFiles.forEach((v2) => {
      let fileFullName = get_file_ext(v2.name);
      const extname = fileFullName.ext.toLowerCase();
      if (_extname.indexOf(extname) !== -1) {
        files.push(v2);
        filePaths.push(v2.path);
      }
    });
    if (files.length !== res.tempFiles.length) {
      uni.showToast({
        title: `当前选择了${res.tempFiles.length}个文件 ，${res.tempFiles.length - files.length} 个文件格式不正确`,
        icon: "none",
        duration: 5e3
      });
    }
    return {
      filePaths,
      files
    };
  };
  const get_file_info = (filepath) => {
    return new Promise((resolve, reject) => {
      uni.getImageInfo({
        src: filepath,
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        }
      });
    });
  };
  const get_file_data = async (files, type = "image") => {
    let fileFullName = get_file_ext(files.name);
    const extname = fileFullName.ext.toLowerCase();
    let filedata = {
      name: files.name,
      uuid: files.uuid,
      extname: extname || "",
      cloudPath: files.cloudPath,
      fileType: files.fileType,
      url: files.path || files.path,
      size: files.size,
      //单位是字节
      image: {},
      path: files.path,
      video: {}
    };
    if (type === "image") {
      const imageinfo = await get_file_info(files.path);
      delete filedata.video;
      filedata.image.width = imageinfo.width;
      filedata.image.height = imageinfo.height;
      filedata.image.location = imageinfo.path;
    } else {
      delete filedata.image;
    }
    return filedata;
  };
  const _sfc_main$t = {
    name: "uploadImage",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto",
            border: {}
          };
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      styles() {
        let styles = {
          width: "auto",
          height: "auto",
          border: {}
        };
        return Object.assign(styles, this.imageStyles);
      },
      boxStyle() {
        const {
          width = "auto",
          height = "auto"
        } = this.styles;
        let obj = {};
        if (height === "auto") {
          if (width !== "auto") {
            obj.height = this.value2px(width);
            obj["padding-top"] = 0;
          } else {
            obj.height = 0;
          }
        } else {
          obj.height = this.value2px(height);
          obj["padding-top"] = 0;
        }
        if (width === "auto") {
          if (height !== "auto") {
            obj.width = this.value2px(height);
          } else {
            obj.width = "33.3%";
          }
        } else {
          obj.width = this.value2px(width);
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderStyle() {
        let {
          border
        } = this.styles;
        let obj = {};
        const widthDefaultValue = 1;
        const radiusDefaultValue = 3;
        if (typeof border === "boolean") {
          obj.border = border ? "1px #eee solid" : "none";
        } else {
          let width = border && border.width || widthDefaultValue;
          width = this.value2px(width);
          let radius = border && border.radius || radiusDefaultValue;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": border && border.style || "solid",
            "border-color": border && border.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", item);
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      prviewImage(img, index) {
        let urls = [];
        if (Number(this.limit) === 1 && this.disablePreview && !this.disabled) {
          this.$emit("choose");
        }
        if (this.disablePreview)
          return;
        this.filesList.forEach((i2) => {
          urls.push(i2.url);
        });
        uni.previewImage({
          urls,
          current: index
        });
      },
      value2px(value2) {
        if (typeof value2 === "number") {
          value2 += "px";
        } else {
          if (value2.indexOf("%") === -1) {
            value2 = value2.indexOf("px") !== -1 ? value2 : value2 + "px";
          }
        }
        return value2;
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__container" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.filesList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock(
            "view",
            {
              class: "file-picker__box",
              key: index,
              style: vue.normalizeStyle($options.boxStyle)
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "file-picker__box-content",
                  style: vue.normalizeStyle($options.borderStyle)
                },
                [
                  vue.createElementVNode("image", {
                    class: "file-image",
                    src: item.url,
                    mode: "aspectFill",
                    onClick: vue.withModifiers(($event) => $options.prviewImage(item, index), ["stop"])
                  }, null, 8, ["src", "onClick"]),
                  $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "icon-del-box",
                    onClick: vue.withModifiers(($event) => $options.delFile(index), ["stop"])
                  }, [
                    vue.createElementVNode("view", { class: "icon-del" }),
                    vue.createElementVNode("view", { class: "icon-del rotate" })
                  ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
                  item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "file-picker__progress"
                  }, [
                    vue.createElementVNode("progress", {
                      class: "file-picker__progress-item",
                      percent: item.progress === -1 ? 0 : item.progress,
                      "stroke-width": "4",
                      backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
                    }, null, 8, ["percent", "backgroundColor"])
                  ])) : vue.createCommentVNode("v-if", true),
                  item.errMsg ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 2,
                    class: "file-picker__mask",
                    onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
                  }, " 点击重试 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ],
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      $props.filesList.length < $props.limit && !$props.readonly ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "file-picker__box",
          style: vue.normalizeStyle($options.boxStyle)
        },
        [
          vue.createElementVNode(
            "view",
            {
              class: "file-picker__box-content is-add",
              style: vue.normalizeStyle($options.borderStyle),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
            },
            [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createElementVNode("view", { class: "icon-add" }),
                vue.createElementVNode("view", { class: "icon-add rotate" })
              ], true)
            ],
            4
            /* STYLE */
          )
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadImage = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$a], ["__scopeId", "data-v-bdfc07e0"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-file-picker/components/uni-file-picker/upload-image.vue"]]);
  const _sfc_main$s = {
    name: "uploadFile",
    emits: ["uploadFiles", "choose", "delFile"],
    props: {
      filesList: {
        type: Array,
        default() {
          return [];
        }
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      limit: {
        type: [Number, String],
        default: 9
      },
      showType: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            // 是否显示边框
            border: true,
            // 是否显示分隔线
            dividline: true,
            // 线条样式
            borderStyle: {}
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      list() {
        let files = [];
        this.filesList.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      styles() {
        let styles = {
          border: true,
          dividline: true,
          "border-style": {}
        };
        return Object.assign(styles, this.listStyles);
      },
      borderStyle() {
        let {
          borderStyle,
          border
        } = this.styles;
        let obj = {};
        if (!border) {
          obj.border = "none";
        } else {
          let width = borderStyle && borderStyle.width || 1;
          width = this.value2px(width);
          let radius = borderStyle && borderStyle.radius || 5;
          radius = this.value2px(radius);
          obj = {
            "border-width": width,
            "border-style": borderStyle && borderStyle.style || "solid",
            "border-color": borderStyle && borderStyle.color || "#eee",
            "border-radius": radius
          };
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      },
      borderLineStyle() {
        let obj = {};
        let {
          borderStyle
        } = this.styles;
        if (borderStyle && borderStyle.color) {
          obj["border-color"] = borderStyle.color;
        }
        if (borderStyle && borderStyle.width) {
          let width = borderStyle && borderStyle.width || 1;
          let style = borderStyle && borderStyle.style || 0;
          if (typeof width === "number") {
            width += "px";
          } else {
            width = width.indexOf("px") ? width : width + "px";
          }
          obj["border-width"] = width;
          if (typeof style === "number") {
            style += "px";
          } else {
            style = style.indexOf("px") ? style : style + "px";
          }
          obj["border-top-style"] = style;
        }
        let classles = "";
        for (let i2 in obj) {
          classles += `${i2}:${obj[i2]};`;
        }
        return classles;
      }
    },
    methods: {
      uploadFiles(item, index) {
        this.$emit("uploadFiles", {
          item,
          index
        });
      },
      choose() {
        this.$emit("choose");
      },
      delFile(index) {
        this.$emit("delFile", index);
      },
      value2px(value2) {
        if (typeof value2 === "number") {
          value2 += "px";
        } else {
          value2 = value2.indexOf("px") !== -1 ? value2 : value2 + "px";
        }
        return value2;
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker__files" }, [
      !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "files-button",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.choose && $options.choose(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(` :class="{'is-text-box':showType === 'list'}" `),
      $options.list.length > 0 ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: "uni-file-picker__lists is-text-box",
          style: vue.normalizeStyle($options.borderStyle)
        },
        [
          vue.createCommentVNode(" ,'is-list-card':showType === 'list-card' "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.list, (item, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["uni-file-picker__lists-box", {
                    "files-border": index !== 0 && $options.styles.dividline
                  }]),
                  key: index,
                  style: vue.normalizeStyle(index !== 0 && $options.styles.dividline && $options.borderLineStyle)
                },
                [
                  vue.createElementVNode("view", { class: "uni-file-picker__item" }, [
                    vue.createCommentVNode(` :class="{'is-text-image':showType === 'list'}" `),
                    vue.createCommentVNode(' 	<view class="files__image is-text-image">\r\n						<image class="header-image" :src="item.logo" mode="aspectFit"></image>\r\n					</view> '),
                    vue.createElementVNode(
                      "view",
                      { class: "files__name" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    $props.delIcon && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "icon-del-box icon-files",
                      onClick: ($event) => $options.delFile(index)
                    }, [
                      vue.createElementVNode("view", { class: "icon-del icon-files" }),
                      vue.createElementVNode("view", { class: "icon-del rotate" })
                    ], 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                  ]),
                  item.progress && item.progress !== 100 || item.progress === 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "file-picker__progress"
                  }, [
                    vue.createElementVNode("progress", {
                      class: "file-picker__progress-item",
                      percent: item.progress === -1 ? 0 : item.progress,
                      "stroke-width": "4",
                      backgroundColor: item.errMsg ? "#ff5a5f" : "#EBEBEB"
                    }, null, 8, ["percent", "backgroundColor"])
                  ])) : vue.createCommentVNode("v-if", true),
                  item.status === "error" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "file-picker__mask",
                    onClick: vue.withModifiers(($event) => $options.uploadFiles(item, index), ["stop"])
                  }, " 点击重试 ", 8, ["onClick"])) : vue.createCommentVNode("v-if", true)
                ],
                6
                /* CLASS, STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const uploadFile = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$9], ["__scopeId", "data-v-a54939c6"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-file-picker/components/uni-file-picker/upload-file.vue"]]);
  const _sfc_main$r = {
    name: "uniFilePicker",
    components: {
      uploadImage,
      uploadFile
    },
    options: {
      virtualHost: true
    },
    emits: ["select", "success", "fail", "progress", "delete", "update:modelValue", "input"],
    props: {
      modelValue: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      disablePreview: {
        type: Boolean,
        default: false
      },
      delIcon: {
        type: Boolean,
        default: true
      },
      // 自动上传
      autoUpload: {
        type: Boolean,
        default: true
      },
      // 最大选择个数 ，h5只能限制单选或是多选
      limit: {
        type: [Number, String],
        default: 9
      },
      // 列表样式 grid | list | list-card
      mode: {
        type: String,
        default: "grid"
      },
      // 选择文件类型  image/video/all
      fileMediatype: {
        type: String,
        default: "image"
      },
      // 文件类型筛选
      fileExtname: {
        type: [Array, String],
        default() {
          return [];
        }
      },
      title: {
        type: String,
        default: ""
      },
      listStyles: {
        type: Object,
        default() {
          return {
            // 是否显示边框
            border: true,
            // 是否显示分隔线
            dividline: true,
            // 线条样式
            borderStyle: {}
          };
        }
      },
      imageStyles: {
        type: Object,
        default() {
          return {
            width: "auto",
            height: "auto"
          };
        }
      },
      readonly: {
        type: Boolean,
        default: false
      },
      returnType: {
        type: String,
        default: "array"
      },
      sizeType: {
        type: Array,
        default() {
          return ["original", "compressed"];
        }
      },
      sourceType: {
        type: Array,
        default() {
          return ["album", "camera"];
        }
      }
    },
    data() {
      return {
        files: [],
        localValue: []
      };
    },
    watch: {
      modelValue: {
        handler(newVal, oldVal) {
          this.setValue(newVal, oldVal);
        },
        immediate: true
      }
    },
    computed: {
      filesList() {
        let files = [];
        this.files.forEach((v2) => {
          files.push(v2);
        });
        return files;
      },
      showType() {
        if (this.fileMediatype === "image") {
          return this.mode;
        }
        return "list";
      },
      limitLength() {
        if (this.returnType === "object") {
          return 1;
        }
        if (!this.limit) {
          return 1;
        }
        if (this.limit >= 9) {
          return 9;
        }
        return this.limit;
      }
    },
    created() {
      if (!(Ds.config && Ds.config.provider)) {
        this.noSpace = true;
        Ds.chooseAndUploadFile = chooseAndUploadFile;
      }
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.form && this.formItem) {
        if (this.formItem.name) {
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
    },
    methods: {
      /**
       * 公开用户使用，清空文件
       * @param {Object} index
       */
      clearFiles(index) {
        if (index !== 0 && !index) {
          this.files = [];
          this.$nextTick(() => {
            this.setEmit();
          });
        } else {
          this.files.splice(index, 1);
        }
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      /**
       * 公开用户使用，继续上传
       */
      upload() {
        let files = [];
        this.files.forEach((v2, index) => {
          if (v2.status === "ready" || v2.status === "error") {
            files.push(Object.assign({}, v2));
          }
        });
        return this.uploadFiles(files);
      },
      async setValue(newVal, oldVal) {
        const newData = async (v2) => {
          const reg = /cloud:\/\/([\w.]+\/?)\S*/;
          let url2 = "";
          if (v2.fileID) {
            url2 = v2.fileID;
          } else {
            url2 = v2.url;
          }
          if (reg.test(url2)) {
            v2.fileID = url2;
            v2.url = await this.getTempFileURL(url2);
          }
          if (v2.url)
            v2.path = v2.url;
          return v2;
        };
        if (this.returnType === "object") {
          if (newVal) {
            await newData(newVal);
          } else {
            newVal = {};
          }
        } else {
          if (!newVal)
            newVal = [];
          for (let i2 = 0; i2 < newVal.length; i2++) {
            let v2 = newVal[i2];
            await newData(v2);
          }
        }
        this.localValue = newVal;
        if (this.form && this.formItem && !this.is_reset) {
          this.is_reset = false;
          this.formItem.setValue(this.localValue);
        }
        let filesData = Object.keys(newVal).length > 0 ? newVal : [];
        this.files = [].concat(filesData);
      },
      /**
       * 选择文件
       */
      choose() {
        if (this.disabled)
          return;
        if (this.files.length >= Number(this.limitLength) && this.showType !== "grid" && this.returnType === "array") {
          uni.showToast({
            title: `您最多选择 ${this.limitLength} 个文件`,
            icon: "none"
          });
          return;
        }
        this.chooseFiles();
      },
      /**
       * 选择文件并上传
       */
      chooseFiles() {
        const _extname = get_extname(this.fileExtname);
        Ds.chooseAndUploadFile({
          type: this.fileMediatype,
          compressed: false,
          sizeType: this.sizeType,
          sourceType: this.sourceType,
          // TODO 如果为空，video 有问题
          extension: _extname.length > 0 ? _extname : void 0,
          count: this.limitLength - this.files.length,
          //默认9
          onChooseFile: this.chooseFileCallback,
          onUploadProgress: (progressEvent) => {
            this.setProgress(progressEvent, progressEvent.index);
          }
        }).then((result) => {
          this.setSuccessAndError(result.tempFiles);
        }).catch((err) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:371", "选择失败", err);
        });
      },
      /**
       * 选择文件回调
       * @param {Object} res
       */
      async chooseFileCallback(res) {
        const _extname = get_extname(this.fileExtname);
        const is_one = Number(this.limitLength) === 1 && this.disablePreview && !this.disabled || this.returnType === "object";
        if (is_one) {
          this.files = [];
        }
        let {
          filePaths,
          files
        } = get_files_and_is_max(res, _extname);
        if (!(_extname && _extname.length > 0)) {
          filePaths = res.tempFilePaths;
          files = res.tempFiles;
        }
        let currentData = [];
        for (let i2 = 0; i2 < files.length; i2++) {
          if (this.limitLength - this.files.length <= 0)
            break;
          files[i2].uuid = Date.now();
          let filedata = await get_file_data(files[i2], this.fileMediatype);
          filedata.progress = 0;
          filedata.status = "ready";
          this.files.push(filedata);
          currentData.push({
            ...filedata,
            file: files[i2]
          });
        }
        this.$emit("select", {
          tempFiles: currentData,
          tempFilePaths: filePaths
        });
        res.tempFiles = files;
        if (!this.autoUpload || this.noSpace) {
          res.tempFiles = [];
        }
      },
      /**
       * 批传
       * @param {Object} e
       */
      uploadFiles(files) {
        files = [].concat(files);
        return uploadCloudFiles.call(this, files, 5, (res) => {
          this.setProgress(res, res.index, true);
        }).then((result) => {
          this.setSuccessAndError(result);
          return result;
        }).catch((err) => {
          formatAppLog("log", "at uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue:437", err);
        });
      },
      /**
       * 成功或失败
       */
      async setSuccessAndError(res, fn) {
        let successData = [];
        let errorData = [];
        let tempFilePath = [];
        let errorTempFilePath = [];
        for (let i2 = 0; i2 < res.length; i2++) {
          const item = res[i2];
          const index = item.uuid ? this.files.findIndex((p2) => p2.uuid === item.uuid) : item.index;
          if (index === -1 || !this.files)
            break;
          if (item.errMsg === "request:fail") {
            this.files[index].url = item.path;
            this.files[index].status = "error";
            this.files[index].errMsg = item.errMsg;
            errorData.push(this.files[index]);
            errorTempFilePath.push(this.files[index].url);
          } else {
            this.files[index].errMsg = "";
            this.files[index].fileID = item.url;
            const reg = /cloud:\/\/([\w.]+\/?)\S*/;
            if (reg.test(item.url)) {
              this.files[index].url = await this.getTempFileURL(item.url);
            } else {
              this.files[index].url = item.url;
            }
            this.files[index].status = "success";
            this.files[index].progress += 1;
            successData.push(this.files[index]);
            tempFilePath.push(this.files[index].fileID);
          }
        }
        if (successData.length > 0) {
          this.setEmit();
          this.$emit("success", {
            tempFiles: this.backObject(successData),
            tempFilePaths: tempFilePath
          });
        }
        if (errorData.length > 0) {
          this.$emit("fail", {
            tempFiles: this.backObject(errorData),
            tempFilePaths: errorTempFilePath
          });
        }
      },
      /**
       * 获取进度
       * @param {Object} progressEvent
       * @param {Object} index
       * @param {Object} type
       */
      setProgress(progressEvent, index, type) {
        this.files.length;
        const percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
        let idx = index;
        if (!type) {
          idx = this.files.findIndex((p2) => p2.uuid === progressEvent.tempFile.uuid);
        }
        if (idx === -1 || !this.files[idx])
          return;
        this.files[idx].progress = percentCompleted - 1;
        this.$emit("progress", {
          index: idx,
          progress: parseInt(percentCompleted),
          tempFile: this.files[idx]
        });
      },
      /**
       * 删除文件
       * @param {Object} index
       */
      delFile(index) {
        this.$emit("delete", {
          tempFile: this.files[index],
          tempFilePath: this.files[index].url
        });
        this.files.splice(index, 1);
        this.$nextTick(() => {
          this.setEmit();
        });
      },
      /**
       * 获取文件名和后缀
       * @param {Object} name
       */
      getFileExt(name) {
        const last_len = name.lastIndexOf(".");
        const len = name.length;
        return {
          name: name.substring(0, last_len),
          ext: name.substring(last_len + 1, len)
        };
      },
      /**
       * 处理返回事件
       */
      setEmit() {
        let data = [];
        if (this.returnType === "object") {
          data = this.backObject(this.files)[0];
          this.localValue = data ? data : null;
        } else {
          data = this.backObject(this.files);
          if (!this.localValue) {
            this.localValue = [];
          }
          this.localValue = [...data];
        }
        this.$emit("update:modelValue", this.localValue);
      },
      /**
       * 处理返回参数
       * @param {Object} files
       */
      backObject(files) {
        let newFilesData = [];
        files.forEach((v2) => {
          newFilesData.push({
            extname: v2.extname,
            fileType: v2.fileType,
            image: v2.image,
            name: v2.name,
            path: v2.path,
            size: v2.size,
            fileID: v2.fileID,
            url: v2.url,
            // 修改删除一个文件后不能再上传的bug, #694
            uuid: v2.uuid,
            status: v2.status,
            cloudPath: v2.cloudPath
          });
        });
        return newFilesData;
      },
      async getTempFileURL(fileList) {
        fileList = {
          fileList: [].concat(fileList)
        };
        const urls = await Ds.getTempFileURL(fileList);
        return urls.fileList[0].tempFileURL || "";
      },
      /**
       * 获取父元素实例
       */
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_upload_image = vue.resolveComponent("upload-image");
    const _component_upload_file = vue.resolveComponent("upload-file");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-file-picker" }, [
      $props.title ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-file-picker__header"
      }, [
        vue.createElementVNode(
          "text",
          { class: "file-title" },
          vue.toDisplayString($props.title),
          1
          /* TEXT */
        ),
        vue.createElementVNode(
          "text",
          { class: "file-count" },
          vue.toDisplayString($options.filesList.length) + "/" + vue.toDisplayString($options.limitLength),
          1
          /* TEXT */
        )
      ])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype === "image" && $options.showType === "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_image, {
        key: 1,
        readonly: $props.readonly,
        "image-styles": $props.imageStyles,
        "files-list": $options.filesList,
        limit: $options.limitLength,
        disablePreview: $props.disablePreview,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("view", { class: "is-add" }, [
              vue.createElementVNode("view", { class: "icon-add" }),
              vue.createElementVNode("view", { class: "icon-add rotate" })
            ])
          ], true)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["readonly", "image-styles", "files-list", "limit", "disablePreview", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true),
      $props.fileMediatype !== "image" || $options.showType !== "grid" ? (vue.openBlock(), vue.createBlock(_component_upload_file, {
        key: 2,
        readonly: $props.readonly,
        "list-styles": $props.listStyles,
        "files-list": $options.filesList,
        showType: $options.showType,
        delIcon: $props.delIcon,
        onUploadFiles: $options.uploadFiles,
        onChoose: $options.choose,
        onDelFile: $options.delFile
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default", {}, () => [
            vue.createElementVNode("button", {
              type: "primary",
              size: "mini"
            }, "选择文件")
          ], true)
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["readonly", "list-styles", "files-list", "showType", "delIcon", "onUploadFiles", "onChoose", "onDelFile"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$8], ["__scopeId", "data-v-6223573f"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue"]]);
  const useConsultStore = defineStore(
    "consult",
    () => {
      const initalValue = vue.ref({
        illnessDesc: "",
        illnessTime: "",
        consultFlag: "",
        pictures: []
      });
      const illnessInfo = vue.ref({ ...initalValue.value });
      const type = vue.ref("");
      const illnessType = vue.ref("");
      const depId = vue.ref("");
      const patientId = vue.ref("");
      return { illnessInfo, initalValue, type, illnessType, depId, patientId };
    },
    {
      persist: {
        paths: ["illnessInfo", "type", "illnessType", "depId", "patientId"]
      }
    }
  );
  const _sfc_main$q = {
    __name: "index",
    props: {
      type: String,
      illnessType: String,
      depId: String
    },
    setup(__props) {
      const props = __props;
      const { illnessInfo, initalValue } = storeToRefs(useConsultStore());
      const illnessTimes = [
        { value: 1, text: "一周内" },
        { value: 2, text: "一月内" },
        { value: 3, text: "半年内" },
        { value: 4, text: "半年以上" }
      ];
      const consultFlags = [
        { value: 1, text: "就诊过" },
        { value: 0, text: "没有就诊过" }
      ];
      const nextStepEnable = vue.computed(() => {
        return illnessInfo.value.illnessDesc !== "" && illnessInfo.value.illnessTime !== "" && illnessInfo.value.consultFlag !== "";
      });
      function onTimeTagClick(value2) {
        illnessInfo.value.illnessTime = value2;
      }
      function onFlagTagClick(value2) {
        illnessInfo.value.consultFlag = value2;
      }
      function onNextStepClick() {
        const consultStore = useConsultStore();
        consultStore.type = props.type;
        consultStore.illnessType = props.illnessType;
        consultStore.depId = props.depId;
        const pictures = illnessInfo.value.pictures;
        consultStore.illnessInfo.pictures = pictures.map(({ url: url2, uuid }) => {
          return { id: uuid, url: url2 };
        });
        uni.navigateTo({ url: "/subpkg_consult/patient/index" });
      }
      if (illnessInfo.value.illnessDesc) {
        uni.showModal({
          title: "温馨提示",
          content: "是否恢复之前填写的病情信息？",
          confirmText: "确认",
          confirmColor: "#16C2A3",
          cancelColor: "#848484",
          success({ confirm }) {
            if (!confirm)
              illnessInfo.value = initalValue.value;
          }
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$3);
        const _component_uni_file_picker = resolveEasycom(vue.resolveDynamicComponent("uni-file-picker"), __easycom_1);
        const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_4$1);
        return vue.openBlock(), vue.createBlock(_component_scroll_page, null, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "description-page" }, [
              vue.createCommentVNode(" 在线医生 "),
              vue.createElementVNode("view", { class: "doctor-online" }, [
                vue.createElementVNode("image", {
                  src: "/static/uploads/doctor-avatar-2.png",
                  class: "doctor-avatar"
                }),
                vue.createElementVNode("view", { class: "doctor-info" }, [
                  vue.createElementVNode("view", { class: "name" }, "在线医生"),
                  vue.createElementVNode("view", { class: "message" }, " 请描述你的疾病或症状、是否用药、就诊经历，需要我听过什么样的帮助 "),
                  vue.createElementVNode("view", { class: "tips" }, [
                    vue.createElementVNode("text", { class: "iconfont icon-shield" }),
                    vue.createTextVNode(" 内容仅医生可见 ")
                  ])
                ])
              ]),
              vue.createCommentVNode(" 患者信息 "),
              vue.createElementVNode("view", { class: "patient-info" }, [
                vue.createElementVNode("view", { class: "description" }, [
                  vue.createVNode(_component_uni_easyinput, {
                    modelValue: vue.unref(illnessInfo).illnessDesc,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(illnessInfo).illnessDesc = $event),
                    type: "textarea",
                    styles: { backgroundColor: "#f6f6f6" },
                    "input-border": false,
                    "placeholder-style": "font-size: 30rpx; color: #979797",
                    placeholder: "请详细描述您的病情,病情描述不能为空"
                  }, null, 8, ["modelValue"])
                ]),
                vue.createElementVNode("view", { class: "title" }, "本次患病多久了？"),
                vue.createElementVNode("view", { class: "tags" }, [
                  (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(illnessTimes, (illnessTime) => {
                      return vue.createElementVNode("text", {
                        key: illnessTime.value,
                        onClick: ($event) => onTimeTagClick(illnessTime.value),
                        class: vue.normalizeClass([{ active: illnessTime.value === vue.unref(illnessInfo).illnessTime }, "tag"])
                      }, vue.toDisplayString(illnessTime.text), 11, ["onClick"]);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ]),
                vue.createElementVNode("view", { class: "title" }, "此次病情是否去医院就诊过？"),
                vue.createElementVNode("view", { class: "tags" }, [
                  (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(consultFlags, (consultFlag) => {
                      return vue.createElementVNode("text", {
                        key: consultFlag.value,
                        onClick: ($event) => onFlagTagClick(consultFlag.value),
                        class: vue.normalizeClass([{ active: consultFlag.value === vue.unref(illnessInfo).consultFlag }, "tag"])
                      }, vue.toDisplayString(consultFlag.text), 11, ["onClick"]);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ])
              ]),
              vue.createCommentVNode(" 上传图片 "),
              vue.createElementVNode("view", { class: "patient-picture" }, [
                vue.createVNode(_component_uni_file_picker, {
                  title: "上传病情相关图片 (仅医生可见)",
                  modelValue: vue.unref(illnessInfo).pictures,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(illnessInfo).pictures = $event),
                  limit: "8",
                  "image-styles": { width: "160rpx", height: "160rpx" },
                  "file-extname": "png,jpg,gif,webp"
                }, null, 8, ["modelValue"])
              ])
            ]),
            vue.createCommentVNode(" 下一步操作 "),
            vue.createElementVNode("view", { class: "next-step" }, [
              vue.createElementVNode("button", {
                onClick: onNextStepClick,
                disabled: !vue.unref(nextStepEnable),
                class: "uni-button"
              }, " 下一步 ", 8, ["disabled"])
            ])
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const Subpkg_consultDescriptionIndex = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/description/index.vue"]]);
  const _sfc_main$p = {
    __name: "index",
    setup(__props) {
      const consultStore = useConsultStore();
      const swipeOptions = vue.ref([
        {
          text: "删除",
          style: {
            backgroundColor: "#dd524d"
          }
        }
      ]);
      const patientList = vue.ref([]);
      const pageShow = vue.ref(false);
      const patientCardIndex = vue.ref(0);
      const patientId = vue.computed(() => {
        return patientList.value[patientCardIndex.value].id;
      });
      onShow(() => {
        getPatientList();
      });
      function onPatientCardClick(index) {
        patientCardIndex.value = index;
      }
      function onNextStepClick() {
        consultStore.patientId = patientId.value;
        uni.navigateTo({ url: "/subpkg_consult/payment/index" });
      }
      async function getPatientList() {
        const { code, data } = await patientListApi();
        if (code !== 1e4)
          return uni.utils.showToast("列表获取失败，稍后重试!");
        patientList.value = data;
        pageShow.value = true;
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        const _component_uni_swipe_action_item = resolveEasycom(vue.resolveDynamicComponent("uni-swipe-action-item"), __easycom_1$1);
        const _component_uni_swipe_action = resolveEasycom(vue.resolveDynamicComponent("uni-swipe-action"), __easycom_2$1);
        const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_4$1);
        return vue.openBlock(), vue.createBlock(_component_scroll_page, null, {
          default: vue.withCtx(() => [
            pageShow.value ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "patient-page"
            }, [
              vue.createElementVNode("view", { class: "page-header" }, [
                vue.createElementVNode("view", { class: "patient-title" }, " 请选择患者信息 "),
                vue.createElementVNode("view", { class: "patient-tips" }, " 以便医生给出更准确的治疗，信息仅医生可见 ")
              ]),
              vue.createVNode(_component_uni_swipe_action, null, {
                default: vue.withCtx(() => [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(patientList.value, (patient, index) => {
                      return vue.openBlock(), vue.createBlock(_component_uni_swipe_action_item, {
                        key: patient.id,
                        "right-options": swipeOptions.value
                      }, {
                        default: vue.withCtx(() => [
                          vue.createElementVNode("view", {
                            onClick: ($event) => onPatientCardClick(index),
                            class: vue.normalizeClass([{ active: patientCardIndex.value === index }, "archive-card"])
                          }, [
                            vue.createElementVNode("view", { class: "archive-info" }, [
                              vue.createElementVNode(
                                "text",
                                { class: "name" },
                                vue.toDisplayString(patient.name),
                                1
                                /* TEXT */
                              ),
                              vue.createElementVNode(
                                "text",
                                { class: "id-card" },
                                vue.toDisplayString(patient.idCard.replace(/^(.{6}).+(.{4})$/, "$1********$2")),
                                1
                                /* TEXT */
                              ),
                              patient.defaultFlag === 1 ? (vue.openBlock(), vue.createElementBlock("text", {
                                key: 0,
                                class: "default"
                              }, "默认")) : vue.createCommentVNode("v-if", true)
                            ]),
                            vue.createElementVNode("view", { class: "archive-info" }, [
                              vue.createElementVNode(
                                "text",
                                { class: "gender" },
                                vue.toDisplayString(patient.genderValue),
                                1
                                /* TEXT */
                              ),
                              vue.createElementVNode(
                                "text",
                                { class: "age" },
                                vue.toDisplayString(patient.age) + "岁",
                                1
                                /* TEXT */
                              )
                            ]),
                            vue.createElementVNode("navigator", {
                              class: "edit-link",
                              url: `/subpkg_archive/form/index?id=${patient.id}`
                            }, [
                              vue.createVNode(_component_uni_icons, {
                                type: "icon-edit",
                                size: "20",
                                color: "#16C2A3",
                                "custom-prefix": "iconfont"
                              })
                            ], 8, ["url"])
                          ], 10, ["onClick"])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["right-options"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createCommentVNode(" 添加按钮 "),
              patientList.value.length < 6 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "archive-card"
              }, [
                vue.createElementVNode("navigator", {
                  class: "add-link",
                  "hover-class": "none",
                  url: "/subpkg_archive/form/index"
                }, [
                  vue.createVNode(_component_uni_icons, {
                    color: "#16C2A3",
                    size: "24",
                    type: "plusempty"
                  }),
                  vue.createElementVNode("text", { class: "label" }, "添加患者")
                ])
              ])) : vue.createCommentVNode("v-if", true)
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 下一步操作 "),
            vue.createElementVNode("view", { class: "next-step" }, [
              vue.createElementVNode("button", {
                onClick: onNextStepClick,
                class: "uni-button"
              }, "下一步")
            ])
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const Subpkg_consultPatientIndex = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/patient/index.vue"]]);
  const _sfc_main$o = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-section" }, [
      vue.createElementVNode("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["uni-section-header__decoration", $props.type])
          },
          null,
          2
          /* CLASS */
        )) : vue.renderSlot(_ctx.$slots, "decoration", { key: 1 }, void 0, true),
        vue.createElementVNode("view", { class: "uni-section-header__content" }, [
          vue.createElementVNode(
            "text",
            {
              style: vue.normalizeStyle({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
              class: vue.normalizeClass(["uni-section__content-title", { "distraction": !$props.subTitle }])
            },
            vue.toDisplayString($props.title),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              style: vue.normalizeStyle({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
              class: "uni-section-header__content-sub"
            },
            vue.toDisplayString($props.subTitle),
            5
            /* TEXT, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "uni-section-header__slot-right" }, [
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ]),
      vue.createElementVNode(
        "view",
        {
          class: "uni-section-content",
          style: vue.normalizeStyle({ padding: $options._padding })
        },
        [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        4
        /* STYLE */
      )
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$7], ["__scopeId", "data-v-637fd36b"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
  const __default__$1 = {
    options: {
      styleIsolation: "shared"
    }
  };
  const _sfc_main$n = /* @__PURE__ */ Object.assign(__default__$1, {
    __name: "custom-payment",
    props: {
      // 待支付订单ID
      orderId: String,
      // 待支付金额
      amount: {
        type: [String, Number],
        default: 0
      }
    },
    emits: ["confirm", "change", "close"],
    setup(__props, { expose, emit: paymentEmits }) {
      const paymentProps = __props;
      const paymentPopup = vue.ref();
      const channelIndex = vue.ref(0);
      const paymentChannel = [
        {
          title: "微信支付",
          thumb: "/static/images/wechatpay-icon.png"
        },
        {
          title: "支付宝支付",
          thumb: "/static/images/alipay-icon.png"
        }
      ];
      function onChannelChange(index) {
        channelIndex.value = index;
        paymentEmits("change", { index });
      }
      function open2() {
        paymentPopup.value.open();
      }
      function close() {
        paymentPopup.value.close();
      }
      expose({ open: open2, close });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$4);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$4);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_3$2);
        return vue.openBlock(), vue.createBlock(
          _component_uni_popup,
          {
            onMaskClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("close")),
            "is-mask-click": false,
            ref_key: "paymentPopup",
            ref: paymentPopup,
            type: "bottom"
          },
          {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "payment-container" }, [
                vue.createElementVNode("view", { class: "payment-header" }, [
                  vue.createElementVNode("text", { class: "title" }, "选择支付方式"),
                  vue.createVNode(_component_uni_icons, {
                    class: "uni-icons-close",
                    size: "18",
                    color: "#333",
                    type: "closeempty",
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
                  })
                ]),
                vue.createElementVNode(
                  "view",
                  { class: "order-amount" },
                  "¥ " + vue.toDisplayString(paymentProps.amount),
                  1
                  /* TEXT */
                ),
                vue.createVNode(_component_uni_list, { border: false }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(paymentChannel, (channel, index) => {
                        return vue.createVNode(_component_uni_list_item, {
                          key: channel.title,
                          title: channel.title,
                          thumb: channel.thumb,
                          clickable: "",
                          onClick: ($event) => onChannelChange(index)
                        }, {
                          footer: vue.withCtx(() => [
                            channelIndex.value === index ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                              key: 0,
                              size: "26",
                              color: "#16C2A3",
                              type: "checkbox-filled"
                            })) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                              key: 1,
                              size: "26",
                              color: "#d1d1d1",
                              type: "circle"
                            }))
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["title", "thumb", "onClick"]);
                      }),
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createElementVNode("button", {
                  onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("confirm", { index: channelIndex.value })),
                  class: "uni-button"
                }, " 立即支付 ")
              ])
            ]),
            _: 1
            /* STABLE */
          },
          512
          /* NEED_PATCH */
        );
      };
    }
  });
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-5cb1d2a1"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/components/custom-payment/custom-payment.vue"]]);
  const paymentApi = (data) => {
    return http.post("/patient/consult/pay", data);
  };
  const _sfc_main$m = {
    __name: "index",
    setup(__props) {
      const { type, illnessType, patientId, illnessInfo, depId } = useConsultStore();
      const preOrderInfo = vue.ref({});
      const patientDetail = vue.ref({});
      const orderId = vue.ref("");
      const paymentRef = vue.ref();
      vue.ref();
      async function onPaymentButtonClick() {
        const { code, data, message } = await createOrderApi$1({
          type,
          illnessType,
          depId,
          patientId,
          ...illnessInfo
        });
        if (code !== 1e4)
          return uni.utils.toast(message);
        orderId.value = data.id;
        paymentRef.value.open();
      }
      async function onPaymentClose() {
        const { confirm } = await uni.showModal({
          title: "关闭支付",
          content: "取消支付将无法获得医生回复，医生接诊名额有限，是否确认关闭？",
          cancelText: "仍要关闭",
          cancelColor: "#848484",
          confirmText: "继续支付",
          confirmColor: "#16C2A3"
        });
        if (!confirm)
          paymentRef.value.close();
      }
      async function onPaymentConfirm({ index }) {
        if (index === 0)
          return uni.utils.toast("暂不支持微信支付!");
        const { code, data, message } = await paymentApi({
          orderId: orderId.value,
          paymentMethod: index,
          payCallback: "http://localhost:5173/#/subpkg_consult/room/index"
        });
        if (code !== 1e4)
          return uni.utils.toast(message);
        window.location.href = data.payUrl;
      }
      async function createPreOrder() {
        const { code, data, message } = await preOrderApi$1(type, {
          illnessType
        });
        if (code !== 1e4)
          return uni.utils.toast(message);
        preOrderInfo.value = data;
      }
      async function getPatientDetail() {
        const { code, data, message } = await patientDetailApi(patientId);
        if (code !== 1e4)
          return uni.utils.toast(message);
        patientDetail.value = data;
      }
      createPreOrder();
      getPatientDetail();
      return (_ctx, _cache) => {
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$4);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$4);
        const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_2);
        const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_4$1);
        const _component_custom_payment = resolveEasycom(vue.resolveDynamicComponent("custom-payment"), __easycom_4);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_scroll_page, null, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "payment-page" }, [
                  vue.createVNode(_component_uni_section, {
                    "title-font-size": "32rpx",
                    "title-color": "#121826",
                    padding: "30rpx",
                    title: `图文问诊 ${preOrderInfo.value.payment}元`
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_list, { border: false }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_uni_list_item, {
                            title: "极速问诊",
                            note: "自动分配医生",
                            thumb: "/static/uploads/doctor-avatar.jpg",
                            "thumb-size": "lg"
                          }),
                          vue.createVNode(_component_uni_list_item, {
                            title: "优惠券",
                            "show-arrow": "",
                            "right-text": `-¥${preOrderInfo.value.couponDeduction}`
                          }, null, 8, ["right-text"]),
                          vue.createVNode(_component_uni_list_item, { title: "积分抵扣" }, {
                            footer: vue.withCtx(() => [
                              vue.createElementVNode(
                                "view",
                                { class: "uni-list-text-red" },
                                " -¥" + vue.toDisplayString(preOrderInfo.value.pointDeduction),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          vue.createVNode(_component_uni_list_item, { title: "实付款" }, {
                            footer: vue.withCtx(() => [
                              vue.createElementVNode(
                                "view",
                                { class: "uni-list-text-red" },
                                " ¥" + vue.toDisplayString(preOrderInfo.value.actualPayment),
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          })
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["title"]),
                  vue.createElementVNode("view", { class: "dividing-line" }),
                  vue.createVNode(_component_uni_section, {
                    "title-font-size": "32rpx",
                    "title-color": "#121826",
                    padding: "30rpx",
                    title: "患者资料"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_list, { border: false }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_uni_list_item, { title: "患者信息" }, {
                            footer: vue.withCtx(() => [
                              vue.createElementVNode(
                                "view",
                                { class: "uni-list-text-gray" },
                                vue.toDisplayString(patientDetail.value.name) + " | " + vue.toDisplayString(patientDetail.value.genderValue) + " | " + vue.toDisplayString(patientDetail.value.age) + "岁 ",
                                1
                                /* TEXT */
                              )
                            ]),
                            _: 1
                            /* STABLE */
                          }),
                          vue.createVNode(_component_uni_list_item, {
                            border: "",
                            title: "病情描述",
                            note: vue.unref(illnessInfo).illnessDesc
                          }, null, 8, ["note"])
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  vue.createCommentVNode(' <view class="payment-agreement">\n        <radio color="#20c6b2" value="1" />\n        我已同意<text style="color: #20c6b2">支付协议</text>\n      </view> ')
                ]),
                vue.createCommentVNode(" 下一步操作 "),
                vue.createElementVNode("view", { class: "next-step" }, [
                  vue.createElementVNode("view", { class: "total-amount" }, [
                    vue.createTextVNode(" 合计: "),
                    vue.createElementVNode(
                      "text",
                      { class: "number" },
                      "¥" + vue.toDisplayString(preOrderInfo.value.actualPayment),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("button", {
                    onClick: onPaymentButtonClick,
                    class: "uni-button"
                  }, "立即支付")
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createCommentVNode(" 统一支付 uni-pay "),
            vue.createCommentVNode(' <uni-pay ref="uniPayRef"></uni-pay> '),
            vue.createCommentVNode(" 支付渠道 "),
            vue.createVNode(_component_custom_payment, {
              onClose: onPaymentClose,
              onConfirm: onPaymentConfirm,
              amount: preOrderInfo.value.actualPayment,
              "order-id": orderId.value,
              ref_key: "paymentRef",
              ref: paymentRef
            }, null, 8, ["amount", "order-id"])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const Subpkg_consultPaymentIndex = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/payment/index.vue"]]);
  const PACKET_TYPES = /* @__PURE__ */ Object.create(null);
  PACKET_TYPES["open"] = "0";
  PACKET_TYPES["close"] = "1";
  PACKET_TYPES["ping"] = "2";
  PACKET_TYPES["pong"] = "3";
  PACKET_TYPES["message"] = "4";
  PACKET_TYPES["upgrade"] = "5";
  PACKET_TYPES["noop"] = "6";
  const PACKET_TYPES_REVERSE = /* @__PURE__ */ Object.create(null);
  Object.keys(PACKET_TYPES).forEach((key) => {
    PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
  });
  const ERROR_PACKET = { type: "error", data: "parser error" };
  const withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
  const withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
  const isView$1 = (obj) => {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
  };
  const encodePacket = ({ type, data }, supportsBinary, callback) => {
    if (withNativeBlob$1 && data instanceof Blob) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(data, callback);
      }
    } else if (withNativeArrayBuffer$2 && (data instanceof ArrayBuffer || isView$1(data))) {
      if (supportsBinary) {
        return callback(data);
      } else {
        return encodeBlobAsBase64(new Blob([data]), callback);
      }
    }
    return callback(PACKET_TYPES[type] + (data || ""));
  };
  const encodeBlobAsBase64 = (data, callback) => {
    const fileReader = new FileReader();
    fileReader.onload = function() {
      const content = fileReader.result.split(",")[1];
      callback("b" + (content || ""));
    };
    return fileReader.readAsDataURL(data);
  };
  function toArray(data) {
    if (data instanceof Uint8Array) {
      return data;
    } else if (data instanceof ArrayBuffer) {
      return new Uint8Array(data);
    } else {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    }
  }
  let TEXT_ENCODER;
  function encodePacketToBinary(packet, callback) {
    if (withNativeBlob$1 && packet.data instanceof Blob) {
      return packet.data.arrayBuffer().then(toArray).then(callback);
    } else if (withNativeArrayBuffer$2 && (packet.data instanceof ArrayBuffer || isView$1(packet.data))) {
      return callback(toArray(packet.data));
    }
    encodePacket(packet, false, (encoded) => {
      if (!TEXT_ENCODER) {
        TEXT_ENCODER = new TextEncoder();
      }
      callback(TEXT_ENCODER.encode(encoded));
    });
  }
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  const lookup$1 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
  for (let i2 = 0; i2 < chars.length; i2++) {
    lookup$1[chars.charCodeAt(i2)] = i2;
  }
  const decode$1 = (base64) => {
    let bufferLength = base64.length * 0.75, len = base64.length, i2, p2 = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }
    const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
    for (i2 = 0; i2 < len; i2 += 4) {
      encoded1 = lookup$1[base64.charCodeAt(i2)];
      encoded2 = lookup$1[base64.charCodeAt(i2 + 1)];
      encoded3 = lookup$1[base64.charCodeAt(i2 + 2)];
      encoded4 = lookup$1[base64.charCodeAt(i2 + 3)];
      bytes[p2++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p2++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p2++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return arraybuffer;
  };
  const withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
  const decodePacket = (encodedPacket, binaryType) => {
    if (typeof encodedPacket !== "string") {
      return {
        type: "message",
        data: mapBinary(encodedPacket, binaryType)
      };
    }
    const type = encodedPacket.charAt(0);
    if (type === "b") {
      return {
        type: "message",
        data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
      };
    }
    const packetType = PACKET_TYPES_REVERSE[type];
    if (!packetType) {
      return ERROR_PACKET;
    }
    return encodedPacket.length > 1 ? {
      type: PACKET_TYPES_REVERSE[type],
      data: encodedPacket.substring(1)
    } : {
      type: PACKET_TYPES_REVERSE[type]
    };
  };
  const decodeBase64Packet = (data, binaryType) => {
    if (withNativeArrayBuffer$1) {
      const decoded = decode$1(data);
      return mapBinary(decoded, binaryType);
    } else {
      return { base64: true, data };
    }
  };
  const mapBinary = (data, binaryType) => {
    switch (binaryType) {
      case "blob":
        if (data instanceof Blob) {
          return data;
        } else {
          return new Blob([data]);
        }
      case "arraybuffer":
      default:
        if (data instanceof ArrayBuffer) {
          return data;
        } else {
          return data.buffer;
        }
    }
  };
  const SEPARATOR = String.fromCharCode(30);
  const encodePayload = (packets, callback) => {
    const length2 = packets.length;
    const encodedPackets = new Array(length2);
    let count = 0;
    packets.forEach((packet, i2) => {
      encodePacket(packet, false, (encodedPacket) => {
        encodedPackets[i2] = encodedPacket;
        if (++count === length2) {
          callback(encodedPackets.join(SEPARATOR));
        }
      });
    });
  };
  const decodePayload = (encodedPayload, binaryType) => {
    const encodedPackets = encodedPayload.split(SEPARATOR);
    const packets = [];
    for (let i2 = 0; i2 < encodedPackets.length; i2++) {
      const decodedPacket = decodePacket(encodedPackets[i2], binaryType);
      packets.push(decodedPacket);
      if (decodedPacket.type === "error") {
        break;
      }
    }
    return packets;
  };
  function createPacketEncoderStream() {
    return new TransformStream({
      transform(packet, controller) {
        encodePacketToBinary(packet, (encodedPacket) => {
          const payloadLength = encodedPacket.length;
          let header;
          if (payloadLength < 126) {
            header = new Uint8Array(1);
            new DataView(header.buffer).setUint8(0, payloadLength);
          } else if (payloadLength < 65536) {
            header = new Uint8Array(3);
            const view = new DataView(header.buffer);
            view.setUint8(0, 126);
            view.setUint16(1, payloadLength);
          } else {
            header = new Uint8Array(9);
            const view = new DataView(header.buffer);
            view.setUint8(0, 127);
            view.setBigUint64(1, BigInt(payloadLength));
          }
          if (packet.data && typeof packet.data !== "string") {
            header[0] |= 128;
          }
          controller.enqueue(header);
          controller.enqueue(encodedPacket);
        });
      }
    });
  }
  let TEXT_DECODER;
  function totalLength(chunks) {
    return chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  }
  function concatChunks(chunks, size) {
    if (chunks[0].length === size) {
      return chunks.shift();
    }
    const buffer = new Uint8Array(size);
    let j2 = 0;
    for (let i2 = 0; i2 < size; i2++) {
      buffer[i2] = chunks[0][j2++];
      if (j2 === chunks[0].length) {
        chunks.shift();
        j2 = 0;
      }
    }
    if (chunks.length && j2 < chunks[0].length) {
      chunks[0] = chunks[0].slice(j2);
    }
    return buffer;
  }
  function createPacketDecoderStream(maxPayload, binaryType) {
    if (!TEXT_DECODER) {
      TEXT_DECODER = new TextDecoder();
    }
    const chunks = [];
    let state = 0;
    let expectedLength = -1;
    let isBinary2 = false;
    return new TransformStream({
      transform(chunk, controller) {
        chunks.push(chunk);
        while (true) {
          if (state === 0) {
            if (totalLength(chunks) < 1) {
              break;
            }
            const header = concatChunks(chunks, 1);
            isBinary2 = (header[0] & 128) === 128;
            expectedLength = header[0] & 127;
            if (expectedLength < 126) {
              state = 3;
            } else if (expectedLength === 126) {
              state = 1;
            } else {
              state = 2;
            }
          } else if (state === 1) {
            if (totalLength(chunks) < 2) {
              break;
            }
            const headerArray = concatChunks(chunks, 2);
            expectedLength = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length).getUint16(0);
            state = 3;
          } else if (state === 2) {
            if (totalLength(chunks) < 8) {
              break;
            }
            const headerArray = concatChunks(chunks, 8);
            const view = new DataView(headerArray.buffer, headerArray.byteOffset, headerArray.length);
            const n2 = view.getUint32(0);
            if (n2 > Math.pow(2, 53 - 32) - 1) {
              controller.enqueue(ERROR_PACKET);
              break;
            }
            expectedLength = n2 * Math.pow(2, 32) + view.getUint32(4);
            state = 3;
          } else {
            if (totalLength(chunks) < expectedLength) {
              break;
            }
            const data = concatChunks(chunks, expectedLength);
            controller.enqueue(decodePacket(isBinary2 ? data : TEXT_DECODER.decode(data), binaryType));
            state = 0;
          }
          if (expectedLength === 0 || expectedLength > maxPayload) {
            controller.enqueue(ERROR_PACKET);
            break;
          }
        }
      }
    });
  }
  const protocol$1 = 4;
  function Emitter(obj) {
    if (obj)
      return mixin(obj);
  }
  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }
  Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
    return this;
  };
  Emitter.prototype.once = function(event, fn) {
    function on2() {
      this.off(event, on2);
      fn.apply(this, arguments);
    }
    on2.fn = fn;
    this.on(event, on2);
    return this;
  };
  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
    this._callbacks = this._callbacks || {};
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }
    var callbacks = this._callbacks["$" + event];
    if (!callbacks)
      return this;
    if (1 == arguments.length) {
      delete this._callbacks["$" + event];
      return this;
    }
    var cb;
    for (var i2 = 0; i2 < callbacks.length; i2++) {
      cb = callbacks[i2];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i2, 1);
        break;
      }
    }
    if (callbacks.length === 0) {
      delete this._callbacks["$" + event];
    }
    return this;
  };
  Emitter.prototype.emit = function(event) {
    this._callbacks = this._callbacks || {};
    var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
    for (var i2 = 1; i2 < arguments.length; i2++) {
      args[i2 - 1] = arguments[i2];
    }
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
        callbacks[i2].apply(this, args);
      }
    }
    return this;
  };
  Emitter.prototype.emitReserved = Emitter.prototype.emit;
  Emitter.prototype.listeners = function(event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks["$" + event] || [];
  };
  Emitter.prototype.hasListeners = function(event) {
    return !!this.listeners(event).length;
  };
  const globalThisShim = (() => {
    if (typeof self !== "undefined") {
      return self;
    } else if (typeof window !== "undefined") {
      return window;
    } else {
      return Function("return this")();
    }
  })();
  function pick$1(obj, ...attr) {
    return attr.reduce((acc, k2) => {
      if (obj.hasOwnProperty(k2)) {
        acc[k2] = obj[k2];
      }
      return acc;
    }, {});
  }
  const NATIVE_SET_TIMEOUT = globalThisShim.setTimeout;
  const NATIVE_CLEAR_TIMEOUT = globalThisShim.clearTimeout;
  function installTimerFunctions(obj, opts) {
    if (opts.useNativeTimers) {
      obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
      obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
    } else {
      obj.setTimeoutFn = globalThisShim.setTimeout.bind(globalThisShim);
      obj.clearTimeoutFn = globalThisShim.clearTimeout.bind(globalThisShim);
    }
  }
  const BASE64_OVERHEAD = 1.33;
  function byteLength(obj) {
    if (typeof obj === "string") {
      return utf8Length(obj);
    }
    return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
  }
  function utf8Length(str) {
    let c2 = 0, length2 = 0;
    for (let i2 = 0, l2 = str.length; i2 < l2; i2++) {
      c2 = str.charCodeAt(i2);
      if (c2 < 128) {
        length2 += 1;
      } else if (c2 < 2048) {
        length2 += 2;
      } else if (c2 < 55296 || c2 >= 57344) {
        length2 += 3;
      } else {
        i2++;
        length2 += 4;
      }
    }
    return length2;
  }
  function encode$1(obj) {
    let str = "";
    for (let i2 in obj) {
      if (obj.hasOwnProperty(i2)) {
        if (str.length)
          str += "&";
        str += encodeURIComponent(i2) + "=" + encodeURIComponent(obj[i2]);
      }
    }
    return str;
  }
  function decode(qs) {
    let qry = {};
    let pairs = qs.split("&");
    for (let i2 = 0, l2 = pairs.length; i2 < l2; i2++) {
      let pair = pairs[i2].split("=");
      qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return qry;
  }
  class TransportError extends Error {
    constructor(reason, description, context) {
      super(reason);
      this.description = description;
      this.context = context;
      this.type = "TransportError";
    }
  }
  class Transport extends Emitter {
    /**
     * Transport abstract constructor.
     *
     * @param {Object} opts - options
     * @protected
     */
    constructor(opts) {
      super();
      this.writable = false;
      installTimerFunctions(this, opts);
      this.opts = opts;
      this.query = opts.query;
      this.socket = opts.socket;
    }
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @protected
     */
    onError(reason, description, context) {
      super.emitReserved("error", new TransportError(reason, description, context));
      return this;
    }
    /**
     * Opens the transport.
     */
    open() {
      this.readyState = "opening";
      this.doOpen();
      return this;
    }
    /**
     * Closes the transport.
     */
    close() {
      if (this.readyState === "opening" || this.readyState === "open") {
        this.doClose();
        this.onClose();
      }
      return this;
    }
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     */
    send(packets) {
      if (this.readyState === "open") {
        this.write(packets);
      }
    }
    /**
     * Called upon open
     *
     * @protected
     */
    onOpen() {
      this.readyState = "open";
      this.writable = true;
      super.emitReserved("open");
    }
    /**
     * Called with data.
     *
     * @param {String} data
     * @protected
     */
    onData(data) {
      const packet = decodePacket(data, this.socket.binaryType);
      this.onPacket(packet);
    }
    /**
     * Called with a decoded packet.
     *
     * @protected
     */
    onPacket(packet) {
      super.emitReserved("packet", packet);
    }
    /**
     * Called upon close.
     *
     * @protected
     */
    onClose(details) {
      this.readyState = "closed";
      super.emitReserved("close", details);
    }
    /**
     * Pauses the transport, in order not to lose packets during an upgrade.
     *
     * @param onPause
     */
    pause(onPause) {
    }
    createUri(schema, query = {}) {
      return schema + "://" + this._hostname() + this._port() + this.opts.path + this._query(query);
    }
    _hostname() {
      const hostname = this.opts.hostname;
      return hostname.indexOf(":") === -1 ? hostname : "[" + hostname + "]";
    }
    _port() {
      if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
        return ":" + this.opts.port;
      } else {
        return "";
      }
    }
    _query(query) {
      const encodedQuery = encode$1(query);
      return encodedQuery.length ? "?" + encodedQuery : "";
    }
  }
  const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), length = 64, map = {};
  let seed = 0, i = 0, prev;
  function encode(num) {
    let encoded = "";
    do {
      encoded = alphabet[num % length] + encoded;
      num = Math.floor(num / length);
    } while (num > 0);
    return encoded;
  }
  function yeast() {
    const now2 = encode(+/* @__PURE__ */ new Date());
    if (now2 !== prev)
      return seed = 0, prev = now2;
    return now2 + "." + encode(seed++);
  }
  for (; i < length; i++)
    map[alphabet[i]] = i;
  let value = false;
  try {
    value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
  } catch (err) {
  }
  const hasCORS = value;
  function XHR(opts) {
    const xdomain = opts.xdomain;
    try {
      if ("undefined" !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
        return new XMLHttpRequest();
      }
    } catch (e) {
    }
    if (!xdomain) {
      try {
        return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (e) {
      }
    }
  }
  function createCookieJar() {
  }
  function empty() {
  }
  const hasXHR2 = function() {
    const xhr = new XHR({
      xdomain: false
    });
    return null != xhr.responseType;
  }();
  class Polling extends Transport {
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @package
     */
    constructor(opts) {
      super(opts);
      this.polling = false;
      if (typeof location !== "undefined") {
        const isSSL = "https:" === location.protocol;
        let port = location.port;
        if (!port) {
          port = isSSL ? "443" : "80";
        }
        this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      }
      const forceBase64 = opts && opts.forceBase64;
      this.supportsBinary = hasXHR2 && !forceBase64;
      if (this.opts.withCredentials) {
        this.cookieJar = createCookieJar();
      }
    }
    get name() {
      return "polling";
    }
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @protected
     */
    doOpen() {
      this.poll();
    }
    /**
     * Pauses polling.
     *
     * @param {Function} onPause - callback upon buffers are flushed and transport is paused
     * @package
     */
    pause(onPause) {
      this.readyState = "pausing";
      const pause = () => {
        this.readyState = "paused";
        onPause();
      };
      if (this.polling || !this.writable) {
        let total = 0;
        if (this.polling) {
          total++;
          this.once("pollComplete", function() {
            --total || pause();
          });
        }
        if (!this.writable) {
          total++;
          this.once("drain", function() {
            --total || pause();
          });
        }
      } else {
        pause();
      }
    }
    /**
     * Starts polling cycle.
     *
     * @private
     */
    poll() {
      this.polling = true;
      this.doPoll();
      this.emitReserved("poll");
    }
    /**
     * Overloads onData to detect payloads.
     *
     * @protected
     */
    onData(data) {
      const callback = (packet) => {
        if ("opening" === this.readyState && packet.type === "open") {
          this.onOpen();
        }
        if ("close" === packet.type) {
          this.onClose({ description: "transport closed by the server" });
          return false;
        }
        this.onPacket(packet);
      };
      decodePayload(data, this.socket.binaryType).forEach(callback);
      if ("closed" !== this.readyState) {
        this.polling = false;
        this.emitReserved("pollComplete");
        if ("open" === this.readyState) {
          this.poll();
        }
      }
    }
    /**
     * For polling, send a close packet.
     *
     * @protected
     */
    doClose() {
      const close = () => {
        this.write([{ type: "close" }]);
      };
      if ("open" === this.readyState) {
        close();
      } else {
        this.once("open", close);
      }
    }
    /**
     * Writes a packets payload.
     *
     * @param {Array} packets - data packets
     * @protected
     */
    write(packets) {
      this.writable = false;
      encodePayload(packets, (data) => {
        this.doWrite(data, () => {
          this.writable = true;
          this.emitReserved("drain");
        });
      });
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
      const schema = this.opts.secure ? "https" : "http";
      const query = this.query || {};
      if (false !== this.opts.timestampRequests) {
        query[this.opts.timestampParam] = yeast();
      }
      if (!this.supportsBinary && !query.sid) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    }
    /**
     * Creates a request.
     *
     * @param {String} method
     * @private
     */
    request(opts = {}) {
      Object.assign(opts, { xd: this.xd, cookieJar: this.cookieJar }, this.opts);
      return new Request(this.uri(), opts);
    }
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @private
     */
    doWrite(data, fn) {
      const req = this.request({
        method: "POST",
        data
      });
      req.on("success", fn);
      req.on("error", (xhrStatus, context) => {
        this.onError("xhr post error", xhrStatus, context);
      });
    }
    /**
     * Starts a poll cycle.
     *
     * @private
     */
    doPoll() {
      const req = this.request();
      req.on("data", this.onData.bind(this));
      req.on("error", (xhrStatus, context) => {
        this.onError("xhr poll error", xhrStatus, context);
      });
      this.pollXhr = req;
    }
  }
  class Request extends Emitter {
    /**
     * Request constructor
     *
     * @param {Object} options
     * @package
     */
    constructor(uri, opts) {
      super();
      installTimerFunctions(this, opts);
      this.opts = opts;
      this.method = opts.method || "GET";
      this.uri = uri;
      this.data = void 0 !== opts.data ? opts.data : null;
      this.create();
    }
    /**
     * Creates the XHR object and sends the request.
     *
     * @private
     */
    create() {
      var _a;
      const opts = pick$1(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      opts.xdomain = !!this.opts.xd;
      const xhr = this.xhr = new XHR(opts);
      try {
        xhr.open(this.method, this.uri, true);
        try {
          if (this.opts.extraHeaders) {
            xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
            for (let i2 in this.opts.extraHeaders) {
              if (this.opts.extraHeaders.hasOwnProperty(i2)) {
                xhr.setRequestHeader(i2, this.opts.extraHeaders[i2]);
              }
            }
          }
        } catch (e) {
        }
        if ("POST" === this.method) {
          try {
            xhr.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (e) {
          }
        }
        try {
          xhr.setRequestHeader("Accept", "*/*");
        } catch (e) {
        }
        (_a = this.opts.cookieJar) === null || _a === void 0 ? void 0 : _a.addCookies(xhr);
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this.opts.withCredentials;
        }
        if (this.opts.requestTimeout) {
          xhr.timeout = this.opts.requestTimeout;
        }
        xhr.onreadystatechange = () => {
          var _a2;
          if (xhr.readyState === 3) {
            (_a2 = this.opts.cookieJar) === null || _a2 === void 0 ? void 0 : _a2.parseCookies(xhr);
          }
          if (4 !== xhr.readyState)
            return;
          if (200 === xhr.status || 1223 === xhr.status) {
            this.onLoad();
          } else {
            this.setTimeoutFn(() => {
              this.onError(typeof xhr.status === "number" ? xhr.status : 0);
            }, 0);
          }
        };
        xhr.send(this.data);
      } catch (e) {
        this.setTimeoutFn(() => {
          this.onError(e);
        }, 0);
        return;
      }
      if (typeof document !== "undefined") {
        this.index = Request.requestsCount++;
        Request.requests[this.index] = this;
      }
    }
    /**
     * Called upon error.
     *
     * @private
     */
    onError(err) {
      this.emitReserved("error", err, this.xhr);
      this.cleanup(true);
    }
    /**
     * Cleans up house.
     *
     * @private
     */
    cleanup(fromError) {
      if ("undefined" === typeof this.xhr || null === this.xhr) {
        return;
      }
      this.xhr.onreadystatechange = empty;
      if (fromError) {
        try {
          this.xhr.abort();
        } catch (e) {
        }
      }
      if (typeof document !== "undefined") {
        delete Request.requests[this.index];
      }
      this.xhr = null;
    }
    /**
     * Called upon load.
     *
     * @private
     */
    onLoad() {
      const data = this.xhr.responseText;
      if (data !== null) {
        this.emitReserved("data", data);
        this.emitReserved("success");
        this.cleanup();
      }
    }
    /**
     * Aborts the request.
     *
     * @package
     */
    abort() {
      this.cleanup();
    }
  }
  Request.requestsCount = 0;
  Request.requests = {};
  if (typeof document !== "undefined") {
    if (typeof attachEvent === "function") {
      attachEvent("onunload", unloadHandler);
    } else if (typeof addEventListener === "function") {
      const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
      addEventListener(terminationEvent, unloadHandler, false);
    }
  }
  function unloadHandler() {
    for (let i2 in Request.requests) {
      if (Request.requests.hasOwnProperty(i2)) {
        Request.requests[i2].abort();
      }
    }
  }
  const nextTick = (() => {
    const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
    if (isPromiseAvailable) {
      return (cb) => Promise.resolve().then(cb);
    } else {
      return (cb, setTimeoutFn) => setTimeoutFn(cb, 0);
    }
  })();
  const WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
  const usingBrowserWebSocket = true;
  const defaultBinaryType = "arraybuffer";
  const isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
  class WS extends Transport {
    /**
     * WebSocket transport constructor.
     *
     * @param {Object} opts - connection options
     * @protected
     */
    constructor(opts) {
      super(opts);
      this.supportsBinary = !opts.forceBase64;
    }
    get name() {
      return "websocket";
    }
    doOpen() {
      if (!this.check()) {
        return;
      }
      const uri = this.uri();
      const protocols = this.opts.protocols;
      const opts = isReactNative ? {} : pick$1(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      if (this.opts.extraHeaders) {
        opts.headers = this.opts.extraHeaders;
      }
      try {
        this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
      } catch (err) {
        return this.emitReserved("error", err);
      }
      this.ws.binaryType = this.socket.binaryType;
      this.addEventListeners();
    }
    /**
     * Adds event listeners to the socket
     *
     * @private
     */
    addEventListeners() {
      this.ws.onopen = () => {
        if (this.opts.autoUnref) {
          this.ws._socket.unref();
        }
        this.onOpen();
      };
      this.ws.onclose = (closeEvent) => this.onClose({
        description: "websocket connection closed",
        context: closeEvent
      });
      this.ws.onmessage = (ev) => this.onData(ev.data);
      this.ws.onerror = (e) => this.onError("websocket error", e);
    }
    write(packets) {
      this.writable = false;
      for (let i2 = 0; i2 < packets.length; i2++) {
        const packet = packets[i2];
        const lastPacket = i2 === packets.length - 1;
        encodePacket(packet, this.supportsBinary, (data) => {
          const opts = {};
          try {
            if (usingBrowserWebSocket) {
              this.ws.send(data);
            }
          } catch (e) {
          }
          if (lastPacket) {
            nextTick(() => {
              this.writable = true;
              this.emitReserved("drain");
            }, this.setTimeoutFn);
          }
        });
      }
    }
    doClose() {
      if (typeof this.ws !== "undefined") {
        this.ws.close();
        this.ws = null;
      }
    }
    /**
     * Generates uri for connection.
     *
     * @private
     */
    uri() {
      const schema = this.opts.secure ? "wss" : "ws";
      const query = this.query || {};
      if (this.opts.timestampRequests) {
        query[this.opts.timestampParam] = yeast();
      }
      if (!this.supportsBinary) {
        query.b64 = 1;
      }
      return this.createUri(schema, query);
    }
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @private
     */
    check() {
      return !!WebSocket;
    }
  }
  class WT extends Transport {
    get name() {
      return "webtransport";
    }
    doOpen() {
      if (typeof WebTransport !== "function") {
        return;
      }
      this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
      this.transport.closed.then(() => {
        this.onClose();
      }).catch((err) => {
        this.onError("webtransport error", err);
      });
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((stream) => {
          const decoderStream = createPacketDecoderStream(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
          const reader = stream.readable.pipeThrough(decoderStream).getReader();
          const encoderStream = createPacketEncoderStream();
          encoderStream.readable.pipeTo(stream.writable);
          this.writer = encoderStream.writable.getWriter();
          const read = () => {
            reader.read().then(({ done, value: value2 }) => {
              if (done) {
                return;
              }
              this.onPacket(value2);
              read();
            }).catch((err) => {
            });
          };
          read();
          const packet = { type: "open" };
          if (this.query.sid) {
            packet.data = `{"sid":"${this.query.sid}"}`;
          }
          this.writer.write(packet).then(() => this.onOpen());
        });
      });
    }
    write(packets) {
      this.writable = false;
      for (let i2 = 0; i2 < packets.length; i2++) {
        const packet = packets[i2];
        const lastPacket = i2 === packets.length - 1;
        this.writer.write(packet).then(() => {
          if (lastPacket) {
            nextTick(() => {
              this.writable = true;
              this.emitReserved("drain");
            }, this.setTimeoutFn);
          }
        });
      }
    }
    doClose() {
      var _a;
      (_a = this.transport) === null || _a === void 0 ? void 0 : _a.close();
    }
  }
  const transports = {
    websocket: WS,
    webtransport: WT,
    polling: Polling
  };
  const re = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  const parts = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor"
  ];
  function parse(str) {
    const src = str, b2 = str.indexOf("["), e = str.indexOf("]");
    if (b2 != -1 && e != -1) {
      str = str.substring(0, b2) + str.substring(b2, e).replace(/:/g, ";") + str.substring(e, str.length);
    }
    let m2 = re.exec(str || ""), uri = {}, i2 = 14;
    while (i2--) {
      uri[parts[i2]] = m2[i2] || "";
    }
    if (b2 != -1 && e != -1) {
      uri.source = src;
      uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
      uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
      uri.ipv6uri = true;
    }
    uri.pathNames = pathNames(uri, uri["path"]);
    uri.queryKey = queryKey(uri, uri["query"]);
    return uri;
  }
  function pathNames(obj, path) {
    const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
    if (path.slice(0, 1) == "/" || path.length === 0) {
      names.splice(0, 1);
    }
    if (path.slice(-1) == "/") {
      names.splice(names.length - 1, 1);
    }
    return names;
  }
  function queryKey(uri, query) {
    const data = {};
    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
      if ($1) {
        data[$1] = $2;
      }
    });
    return data;
  }
  let Socket$1 = class Socket2 extends Emitter {
    /**
     * Socket constructor.
     *
     * @param {String|Object} uri - uri or options
     * @param {Object} opts - options
     */
    constructor(uri, opts = {}) {
      super();
      this.binaryType = defaultBinaryType;
      this.writeBuffer = [];
      if (uri && "object" === typeof uri) {
        opts = uri;
        uri = null;
      }
      if (uri) {
        uri = parse(uri);
        opts.hostname = uri.host;
        opts.secure = uri.protocol === "https" || uri.protocol === "wss";
        opts.port = uri.port;
        if (uri.query)
          opts.query = uri.query;
      } else if (opts.host) {
        opts.hostname = parse(opts.host).host;
      }
      installTimerFunctions(this, opts);
      this.secure = null != opts.secure ? opts.secure : typeof location !== "undefined" && "https:" === location.protocol;
      if (opts.hostname && !opts.port) {
        opts.port = this.secure ? "443" : "80";
      }
      this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
      this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
      this.transports = opts.transports || [
        "polling",
        "websocket",
        "webtransport"
      ];
      this.writeBuffer = [];
      this.prevBufferLen = 0;
      this.opts = Object.assign({
        path: "/engine.io",
        agent: false,
        withCredentials: false,
        upgrade: true,
        timestampParam: "t",
        rememberUpgrade: false,
        addTrailingSlash: true,
        rejectUnauthorized: true,
        perMessageDeflate: {
          threshold: 1024
        },
        transportOptions: {},
        closeOnBeforeunload: false
      }, opts);
      this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
      if (typeof this.opts.query === "string") {
        this.opts.query = decode(this.opts.query);
      }
      this.id = null;
      this.upgrades = null;
      this.pingInterval = null;
      this.pingTimeout = null;
      this.pingTimeoutTimer = null;
      if (typeof addEventListener === "function") {
        if (this.opts.closeOnBeforeunload) {
          this.beforeunloadEventListener = () => {
            if (this.transport) {
              this.transport.removeAllListeners();
              this.transport.close();
            }
          };
          addEventListener("beforeunload", this.beforeunloadEventListener, false);
        }
        if (this.hostname !== "localhost") {
          this.offlineEventListener = () => {
            this.onClose("transport close", {
              description: "network connection lost"
            });
          };
          addEventListener("offline", this.offlineEventListener, false);
        }
      }
      this.open();
    }
    /**
     * Creates transport of the given type.
     *
     * @param {String} name - transport name
     * @return {Transport}
     * @private
     */
    createTransport(name) {
      const query = Object.assign({}, this.opts.query);
      query.EIO = protocol$1;
      query.transport = name;
      if (this.id)
        query.sid = this.id;
      const opts = Object.assign({}, this.opts, {
        query,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port
      }, this.opts.transportOptions[name]);
      return new transports[name](opts);
    }
    /**
     * Initializes transport to use and starts probe.
     *
     * @private
     */
    open() {
      let transport;
      if (this.opts.rememberUpgrade && Socket2.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
        transport = "websocket";
      } else if (0 === this.transports.length) {
        this.setTimeoutFn(() => {
          this.emitReserved("error", "No transports available");
        }, 0);
        return;
      } else {
        transport = this.transports[0];
      }
      this.readyState = "opening";
      try {
        transport = this.createTransport(transport);
      } catch (e) {
        this.transports.shift();
        this.open();
        return;
      }
      transport.open();
      this.setTransport(transport);
    }
    /**
     * Sets the current transport. Disables the existing one (if any).
     *
     * @private
     */
    setTransport(transport) {
      if (this.transport) {
        this.transport.removeAllListeners();
      }
      this.transport = transport;
      transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (reason) => this.onClose("transport close", reason));
    }
    /**
     * Probes a transport.
     *
     * @param {String} name - transport name
     * @private
     */
    probe(name) {
      let transport = this.createTransport(name);
      let failed = false;
      Socket2.priorWebsocketSuccess = false;
      const onTransportOpen = () => {
        if (failed)
          return;
        transport.send([{ type: "ping", data: "probe" }]);
        transport.once("packet", (msg) => {
          if (failed)
            return;
          if ("pong" === msg.type && "probe" === msg.data) {
            this.upgrading = true;
            this.emitReserved("upgrading", transport);
            if (!transport)
              return;
            Socket2.priorWebsocketSuccess = "websocket" === transport.name;
            this.transport.pause(() => {
              if (failed)
                return;
              if ("closed" === this.readyState)
                return;
              cleanup();
              this.setTransport(transport);
              transport.send([{ type: "upgrade" }]);
              this.emitReserved("upgrade", transport);
              transport = null;
              this.upgrading = false;
              this.flush();
            });
          } else {
            const err = new Error("probe error");
            err.transport = transport.name;
            this.emitReserved("upgradeError", err);
          }
        });
      };
      function freezeTransport() {
        if (failed)
          return;
        failed = true;
        cleanup();
        transport.close();
        transport = null;
      }
      const onerror = (err) => {
        const error = new Error("probe error: " + err);
        error.transport = transport.name;
        freezeTransport();
        this.emitReserved("upgradeError", error);
      };
      function onTransportClose() {
        onerror("transport closed");
      }
      function onclose() {
        onerror("socket closed");
      }
      function onupgrade(to) {
        if (transport && to.name !== transport.name) {
          freezeTransport();
        }
      }
      const cleanup = () => {
        transport.removeListener("open", onTransportOpen);
        transport.removeListener("error", onerror);
        transport.removeListener("close", onTransportClose);
        this.off("close", onclose);
        this.off("upgrading", onupgrade);
      };
      transport.once("open", onTransportOpen);
      transport.once("error", onerror);
      transport.once("close", onTransportClose);
      this.once("close", onclose);
      this.once("upgrading", onupgrade);
      if (this.upgrades.indexOf("webtransport") !== -1 && name !== "webtransport") {
        this.setTimeoutFn(() => {
          if (!failed) {
            transport.open();
          }
        }, 200);
      } else {
        transport.open();
      }
    }
    /**
     * Called when connection is deemed open.
     *
     * @private
     */
    onOpen() {
      this.readyState = "open";
      Socket2.priorWebsocketSuccess = "websocket" === this.transport.name;
      this.emitReserved("open");
      this.flush();
      if ("open" === this.readyState && this.opts.upgrade) {
        let i2 = 0;
        const l2 = this.upgrades.length;
        for (; i2 < l2; i2++) {
          this.probe(this.upgrades[i2]);
        }
      }
    }
    /**
     * Handles a packet.
     *
     * @private
     */
    onPacket(packet) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        this.emitReserved("packet", packet);
        this.emitReserved("heartbeat");
        this.resetPingTimeout();
        switch (packet.type) {
          case "open":
            this.onHandshake(JSON.parse(packet.data));
            break;
          case "ping":
            this.sendPacket("pong");
            this.emitReserved("ping");
            this.emitReserved("pong");
            break;
          case "error":
            const err = new Error("server error");
            err.code = packet.data;
            this.onError(err);
            break;
          case "message":
            this.emitReserved("data", packet.data);
            this.emitReserved("message", packet.data);
            break;
        }
      }
    }
    /**
     * Called upon handshake completion.
     *
     * @param {Object} data - handshake obj
     * @private
     */
    onHandshake(data) {
      this.emitReserved("handshake", data);
      this.id = data.sid;
      this.transport.query.sid = data.sid;
      this.upgrades = this.filterUpgrades(data.upgrades);
      this.pingInterval = data.pingInterval;
      this.pingTimeout = data.pingTimeout;
      this.maxPayload = data.maxPayload;
      this.onOpen();
      if ("closed" === this.readyState)
        return;
      this.resetPingTimeout();
    }
    /**
     * Sets and resets ping timeout timer based on server pings.
     *
     * @private
     */
    resetPingTimeout() {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout);
      if (this.opts.autoUnref) {
        this.pingTimeoutTimer.unref();
      }
    }
    /**
     * Called on `drain` event
     *
     * @private
     */
    onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen);
      this.prevBufferLen = 0;
      if (0 === this.writeBuffer.length) {
        this.emitReserved("drain");
      } else {
        this.flush();
      }
    }
    /**
     * Flush write buffers.
     *
     * @private
     */
    flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        const packets = this.getWritablePackets();
        this.transport.send(packets);
        this.prevBufferLen = packets.length;
        this.emitReserved("flush");
      }
    }
    /**
     * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
     * long-polling)
     *
     * @private
     */
    getWritablePackets() {
      const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
      if (!shouldCheckPayloadSize) {
        return this.writeBuffer;
      }
      let payloadSize = 1;
      for (let i2 = 0; i2 < this.writeBuffer.length; i2++) {
        const data = this.writeBuffer[i2].data;
        if (data) {
          payloadSize += byteLength(data);
        }
        if (i2 > 0 && payloadSize > this.maxPayload) {
          return this.writeBuffer.slice(0, i2);
        }
        payloadSize += 2;
      }
      return this.writeBuffer;
    }
    /**
     * Sends a message.
     *
     * @param {String} msg - message.
     * @param {Object} options.
     * @param {Function} callback function.
     * @return {Socket} for chaining.
     */
    write(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    send(msg, options, fn) {
      this.sendPacket("message", msg, options, fn);
      return this;
    }
    /**
     * Sends a packet.
     *
     * @param {String} type: packet type.
     * @param {String} data.
     * @param {Object} options.
     * @param {Function} fn - callback function.
     * @private
     */
    sendPacket(type, data, options, fn) {
      if ("function" === typeof data) {
        fn = data;
        data = void 0;
      }
      if ("function" === typeof options) {
        fn = options;
        options = null;
      }
      if ("closing" === this.readyState || "closed" === this.readyState) {
        return;
      }
      options = options || {};
      options.compress = false !== options.compress;
      const packet = {
        type,
        data,
        options
      };
      this.emitReserved("packetCreate", packet);
      this.writeBuffer.push(packet);
      if (fn)
        this.once("flush", fn);
      this.flush();
    }
    /**
     * Closes the connection.
     */
    close() {
      const close = () => {
        this.onClose("forced close");
        this.transport.close();
      };
      const cleanupAndClose = () => {
        this.off("upgrade", cleanupAndClose);
        this.off("upgradeError", cleanupAndClose);
        close();
      };
      const waitForUpgrade = () => {
        this.once("upgrade", cleanupAndClose);
        this.once("upgradeError", cleanupAndClose);
      };
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";
        if (this.writeBuffer.length) {
          this.once("drain", () => {
            if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          });
        } else if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }
      return this;
    }
    /**
     * Called upon transport error
     *
     * @private
     */
    onError(err) {
      Socket2.priorWebsocketSuccess = false;
      this.emitReserved("error", err);
      this.onClose("transport error", err);
    }
    /**
     * Called upon transport close.
     *
     * @private
     */
    onClose(reason, description) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        this.clearTimeoutFn(this.pingTimeoutTimer);
        this.transport.removeAllListeners("close");
        this.transport.close();
        this.transport.removeAllListeners();
        if (typeof removeEventListener === "function") {
          removeEventListener("beforeunload", this.beforeunloadEventListener, false);
          removeEventListener("offline", this.offlineEventListener, false);
        }
        this.readyState = "closed";
        this.id = null;
        this.emitReserved("close", reason, description);
        this.writeBuffer = [];
        this.prevBufferLen = 0;
      }
    }
    /**
     * Filters upgrades, returning only those matching client transports.
     *
     * @param {Array} upgrades - server upgrades
     * @private
     */
    filterUpgrades(upgrades) {
      const filteredUpgrades = [];
      let i2 = 0;
      const j2 = upgrades.length;
      for (; i2 < j2; i2++) {
        if (~this.transports.indexOf(upgrades[i2]))
          filteredUpgrades.push(upgrades[i2]);
      }
      return filteredUpgrades;
    }
  };
  Socket$1.protocol = protocol$1;
  function url(uri, path = "", loc) {
    let obj = uri;
    loc = loc || typeof location !== "undefined" && location;
    if (null == uri)
      uri = loc.protocol + "//" + loc.host;
    if (typeof uri === "string") {
      if ("/" === uri.charAt(0)) {
        if ("/" === uri.charAt(1)) {
          uri = loc.protocol + uri;
        } else {
          uri = loc.host + uri;
        }
      }
      if (!/^(https?|wss?):\/\//.test(uri)) {
        if ("undefined" !== typeof loc) {
          uri = loc.protocol + "//" + uri;
        } else {
          uri = "https://" + uri;
        }
      }
      obj = parse(uri);
    }
    if (!obj.port) {
      if (/^(http|ws)$/.test(obj.protocol)) {
        obj.port = "80";
      } else if (/^(http|ws)s$/.test(obj.protocol)) {
        obj.port = "443";
      }
    }
    obj.path = obj.path || "/";
    const ipv6 = obj.host.indexOf(":") !== -1;
    const host = ipv6 ? "[" + obj.host + "]" : obj.host;
    obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
    obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
    return obj;
  }
  const withNativeArrayBuffer = typeof ArrayBuffer === "function";
  const isView = (obj) => {
    return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
  };
  const toString$1 = Object.prototype.toString;
  const withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString$1.call(Blob) === "[object BlobConstructor]";
  const withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString$1.call(File) === "[object FileConstructor]";
  function isBinary(obj) {
    return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
  }
  function hasBinary(obj, toJSON) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    if (Array.isArray(obj)) {
      for (let i2 = 0, l2 = obj.length; i2 < l2; i2++) {
        if (hasBinary(obj[i2])) {
          return true;
        }
      }
      return false;
    }
    if (isBinary(obj)) {
      return true;
    }
    if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
      return hasBinary(obj.toJSON(), true);
    }
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
        return true;
      }
    }
    return false;
  }
  function deconstructPacket(packet) {
    const buffers = [];
    const packetData = packet.data;
    const pack = packet;
    pack.data = _deconstructPacket(packetData, buffers);
    pack.attachments = buffers.length;
    return { packet: pack, buffers };
  }
  function _deconstructPacket(data, buffers) {
    if (!data)
      return data;
    if (isBinary(data)) {
      const placeholder = { _placeholder: true, num: buffers.length };
      buffers.push(data);
      return placeholder;
    } else if (Array.isArray(data)) {
      const newData = new Array(data.length);
      for (let i2 = 0; i2 < data.length; i2++) {
        newData[i2] = _deconstructPacket(data[i2], buffers);
      }
      return newData;
    } else if (typeof data === "object" && !(data instanceof Date)) {
      const newData = {};
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          newData[key] = _deconstructPacket(data[key], buffers);
        }
      }
      return newData;
    }
    return data;
  }
  function reconstructPacket(packet, buffers) {
    packet.data = _reconstructPacket(packet.data, buffers);
    delete packet.attachments;
    return packet;
  }
  function _reconstructPacket(data, buffers) {
    if (!data)
      return data;
    if (data && data._placeholder === true) {
      const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
      if (isIndexValid) {
        return buffers[data.num];
      } else {
        throw new Error("illegal attachments");
      }
    } else if (Array.isArray(data)) {
      for (let i2 = 0; i2 < data.length; i2++) {
        data[i2] = _reconstructPacket(data[i2], buffers);
      }
    } else if (typeof data === "object") {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          data[key] = _reconstructPacket(data[key], buffers);
        }
      }
    }
    return data;
  }
  const RESERVED_EVENTS$1 = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
    // used by the Node.js EventEmitter
  ];
  const protocol = 5;
  var PacketType;
  (function(PacketType2) {
    PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
    PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
    PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
    PacketType2[PacketType2["ACK"] = 3] = "ACK";
    PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
    PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
    PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
  })(PacketType || (PacketType = {}));
  class Encoder {
    /**
     * Encoder constructor
     *
     * @param {function} replacer - custom replacer to pass down to JSON.parse
     */
    constructor(replacer) {
      this.replacer = replacer;
    }
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    encode(obj) {
      if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
        if (hasBinary(obj)) {
          return this.encodeAsBinary({
            type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
            nsp: obj.nsp,
            data: obj.data,
            id: obj.id
          });
        }
      }
      return [this.encodeAsString(obj)];
    }
    /**
     * Encode packet as string.
     */
    encodeAsString(obj) {
      let str = "" + obj.type;
      if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
        str += obj.attachments + "-";
      }
      if (obj.nsp && "/" !== obj.nsp) {
        str += obj.nsp + ",";
      }
      if (null != obj.id) {
        str += obj.id;
      }
      if (null != obj.data) {
        str += JSON.stringify(obj.data, this.replacer);
      }
      return str;
    }
    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */
    encodeAsBinary(obj) {
      const deconstruction = deconstructPacket(obj);
      const pack = this.encodeAsString(deconstruction.packet);
      const buffers = deconstruction.buffers;
      buffers.unshift(pack);
      return buffers;
    }
  }
  function isObject$1(value2) {
    return Object.prototype.toString.call(value2) === "[object Object]";
  }
  class Decoder extends Emitter {
    /**
     * Decoder constructor
     *
     * @param {function} reviver - custom reviver to pass down to JSON.stringify
     */
    constructor(reviver) {
      super();
      this.reviver = reviver;
    }
    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */
    add(obj) {
      let packet;
      if (typeof obj === "string") {
        if (this.reconstructor) {
          throw new Error("got plaintext data when reconstructing a packet");
        }
        packet = this.decodeString(obj);
        const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
        if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
          packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
          this.reconstructor = new BinaryReconstructor(packet);
          if (packet.attachments === 0) {
            super.emitReserved("decoded", packet);
          }
        } else {
          super.emitReserved("decoded", packet);
        }
      } else if (isBinary(obj) || obj.base64) {
        if (!this.reconstructor) {
          throw new Error("got binary data when not reconstructing a packet");
        } else {
          packet = this.reconstructor.takeBinaryData(obj);
          if (packet) {
            this.reconstructor = null;
            super.emitReserved("decoded", packet);
          }
        }
      } else {
        throw new Error("Unknown type: " + obj);
      }
    }
    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    decodeString(str) {
      let i2 = 0;
      const p2 = {
        type: Number(str.charAt(0))
      };
      if (PacketType[p2.type] === void 0) {
        throw new Error("unknown packet type " + p2.type);
      }
      if (p2.type === PacketType.BINARY_EVENT || p2.type === PacketType.BINARY_ACK) {
        const start = i2 + 1;
        while (str.charAt(++i2) !== "-" && i2 != str.length) {
        }
        const buf = str.substring(start, i2);
        if (buf != Number(buf) || str.charAt(i2) !== "-") {
          throw new Error("Illegal attachments");
        }
        p2.attachments = Number(buf);
      }
      if ("/" === str.charAt(i2 + 1)) {
        const start = i2 + 1;
        while (++i2) {
          const c2 = str.charAt(i2);
          if ("," === c2)
            break;
          if (i2 === str.length)
            break;
        }
        p2.nsp = str.substring(start, i2);
      } else {
        p2.nsp = "/";
      }
      const next = str.charAt(i2 + 1);
      if ("" !== next && Number(next) == next) {
        const start = i2 + 1;
        while (++i2) {
          const c2 = str.charAt(i2);
          if (null == c2 || Number(c2) != c2) {
            --i2;
            break;
          }
          if (i2 === str.length)
            break;
        }
        p2.id = Number(str.substring(start, i2 + 1));
      }
      if (str.charAt(++i2)) {
        const payload = this.tryParse(str.substr(i2));
        if (Decoder.isPayloadValid(p2.type, payload)) {
          p2.data = payload;
        } else {
          throw new Error("invalid payload");
        }
      }
      return p2;
    }
    tryParse(str) {
      try {
        return JSON.parse(str, this.reviver);
      } catch (e) {
        return false;
      }
    }
    static isPayloadValid(type, payload) {
      switch (type) {
        case PacketType.CONNECT:
          return isObject$1(payload);
        case PacketType.DISCONNECT:
          return payload === void 0;
        case PacketType.CONNECT_ERROR:
          return typeof payload === "string" || isObject$1(payload);
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          return Array.isArray(payload) && (typeof payload[0] === "number" || typeof payload[0] === "string" && RESERVED_EVENTS$1.indexOf(payload[0]) === -1);
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          return Array.isArray(payload);
      }
    }
    /**
     * Deallocates a parser's resources
     */
    destroy() {
      if (this.reconstructor) {
        this.reconstructor.finishedReconstruction();
        this.reconstructor = null;
      }
    }
  }
  class BinaryReconstructor {
    constructor(packet) {
      this.packet = packet;
      this.buffers = [];
      this.reconPack = packet;
    }
    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    takeBinaryData(binData) {
      this.buffers.push(binData);
      if (this.buffers.length === this.reconPack.attachments) {
        const packet = reconstructPacket(this.reconPack, this.buffers);
        this.finishedReconstruction();
        return packet;
      }
      return null;
    }
    /**
     * Cleans up binary packet reconstruction variables.
     */
    finishedReconstruction() {
      this.reconPack = null;
      this.buffers = [];
    }
  }
  const parser = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    Decoder,
    Encoder,
    get PacketType() {
      return PacketType;
    },
    protocol
  }, Symbol.toStringTag, { value: "Module" }));
  function on(obj, ev, fn) {
    obj.on(ev, fn);
    return function subDestroy() {
      obj.off(ev, fn);
    };
  }
  const RESERVED_EVENTS = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
    newListener: 1,
    removeListener: 1
  });
  class Socket extends Emitter {
    /**
     * `Socket` constructor.
     */
    constructor(io, nsp, opts) {
      super();
      this.connected = false;
      this.recovered = false;
      this.receiveBuffer = [];
      this.sendBuffer = [];
      this._queue = [];
      this._queueSeq = 0;
      this.ids = 0;
      this.acks = {};
      this.flags = {};
      this.io = io;
      this.nsp = nsp;
      if (opts && opts.auth) {
        this.auth = opts.auth;
      }
      this._opts = Object.assign({}, opts);
      if (this.io._autoConnect)
        this.open();
    }
    /**
     * Whether the socket is currently disconnected
     *
     * @example
     * const socket = io();
     *
     * socket.on("connect", () => {
     *   __f__('log','at node_modules/socket.io-client/build/esm/socket.js:106',socket.disconnected); // false
     * });
     *
     * socket.on("disconnect", () => {
     *   __f__('log','at node_modules/socket.io-client/build/esm/socket.js:110',socket.disconnected); // true
     * });
     */
    get disconnected() {
      return !this.connected;
    }
    /**
     * Subscribe to open, close and packet events
     *
     * @private
     */
    subEvents() {
      if (this.subs)
        return;
      const io = this.io;
      this.subs = [
        on(io, "open", this.onopen.bind(this)),
        on(io, "packet", this.onpacket.bind(this)),
        on(io, "error", this.onerror.bind(this)),
        on(io, "close", this.onclose.bind(this))
      ];
    }
    /**
     * Whether the Socket will try to reconnect when its Manager connects or reconnects.
     *
     * @example
     * const socket = io();
     *
     * __f__('log','at node_modules/socket.io-client/build/esm/socket.js:138',socket.active); // true
     *
     * socket.on("disconnect", (reason) => {
     *   if (reason === "io server disconnect") {
     *     // the disconnection was initiated by the server, you need to manually reconnect
     *     __f__('log','at node_modules/socket.io-client/build/esm/socket.js:143',socket.active); // false
     *   }
     *   // else the socket will automatically try to reconnect
     *   __f__('log','at node_modules/socket.io-client/build/esm/socket.js:146',socket.active); // true
     * });
     */
    get active() {
      return !!this.subs;
    }
    /**
     * "Opens" the socket.
     *
     * @example
     * const socket = io({
     *   autoConnect: false
     * });
     *
     * socket.connect();
     */
    connect() {
      if (this.connected)
        return this;
      this.subEvents();
      if (!this.io["_reconnecting"])
        this.io.open();
      if ("open" === this.io._readyState)
        this.onopen();
      return this;
    }
    /**
     * Alias for {@link connect()}.
     */
    open() {
      return this.connect();
    }
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * socket.send("hello");
     *
     * // this is equivalent to
     * socket.emit("message", "hello");
     *
     * @return self
     */
    send(...args) {
      args.unshift("message");
      this.emit.apply(this, args);
      return this;
    }
    /**
     * Override `emit`.
     * If the event is in `events`, it's emitted normally.
     *
     * @example
     * socket.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the server
     * socket.emit("hello", "world", (val) => {
     *   // ...
     * });
     *
     * @return self
     */
    emit(ev, ...args) {
      if (RESERVED_EVENTS.hasOwnProperty(ev)) {
        throw new Error('"' + ev.toString() + '" is a reserved event name');
      }
      args.unshift(ev);
      if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
        this._addToQueue(args);
        return this;
      }
      const packet = {
        type: PacketType.EVENT,
        data: args
      };
      packet.options = {};
      packet.options.compress = this.flags.compress !== false;
      if ("function" === typeof args[args.length - 1]) {
        const id = this.ids++;
        const ack = args.pop();
        this._registerAckCallback(id, ack);
        packet.id = id;
      }
      const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
      if (discardPacket)
        ;
      else if (this.connected) {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      } else {
        this.sendBuffer.push(packet);
      }
      this.flags = {};
      return this;
    }
    /**
     * @private
     */
    _registerAckCallback(id, ack) {
      var _a;
      const timeout = (_a = this.flags.timeout) !== null && _a !== void 0 ? _a : this._opts.ackTimeout;
      if (timeout === void 0) {
        this.acks[id] = ack;
        return;
      }
      const timer = this.io.setTimeoutFn(() => {
        delete this.acks[id];
        for (let i2 = 0; i2 < this.sendBuffer.length; i2++) {
          if (this.sendBuffer[i2].id === id) {
            this.sendBuffer.splice(i2, 1);
          }
        }
        ack.call(this, new Error("operation has timed out"));
      }, timeout);
      this.acks[id] = (...args) => {
        this.io.clearTimeoutFn(timer);
        ack.apply(this, [null, ...args]);
      };
    }
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * // without timeout
     * const response = await socket.emitWithAck("hello", "world");
     *
     * // with a specific timeout
     * try {
     *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
     * } catch (err) {
     *   // the server did not acknowledge the event in the given delay
     * }
     *
     * @return a Promise that will be fulfilled when the server acknowledges the event
     */
    emitWithAck(ev, ...args) {
      const withErr = this.flags.timeout !== void 0 || this._opts.ackTimeout !== void 0;
      return new Promise((resolve, reject) => {
        args.push((arg1, arg2) => {
          if (withErr) {
            return arg1 ? reject(arg1) : resolve(arg2);
          } else {
            return resolve(arg1);
          }
        });
        this.emit(ev, ...args);
      });
    }
    /**
     * Add the packet to the queue.
     * @param args
     * @private
     */
    _addToQueue(args) {
      let ack;
      if (typeof args[args.length - 1] === "function") {
        ack = args.pop();
      }
      const packet = {
        id: this._queueSeq++,
        tryCount: 0,
        pending: false,
        args,
        flags: Object.assign({ fromQueue: true }, this.flags)
      };
      args.push((err, ...responseArgs) => {
        if (packet !== this._queue[0]) {
          return;
        }
        const hasError = err !== null;
        if (hasError) {
          if (packet.tryCount > this._opts.retries) {
            this._queue.shift();
            if (ack) {
              ack(err);
            }
          }
        } else {
          this._queue.shift();
          if (ack) {
            ack(null, ...responseArgs);
          }
        }
        packet.pending = false;
        return this._drainQueue();
      });
      this._queue.push(packet);
      this._drainQueue();
    }
    /**
     * Send the first packet of the queue, and wait for an acknowledgement from the server.
     * @param force - whether to resend a packet that has not been acknowledged yet
     *
     * @private
     */
    _drainQueue(force = false) {
      if (!this.connected || this._queue.length === 0) {
        return;
      }
      const packet = this._queue[0];
      if (packet.pending && !force) {
        return;
      }
      packet.pending = true;
      packet.tryCount++;
      this.flags = packet.flags;
      this.emit.apply(this, packet.args);
    }
    /**
     * Sends a packet.
     *
     * @param packet
     * @private
     */
    packet(packet) {
      packet.nsp = this.nsp;
      this.io._packet(packet);
    }
    /**
     * Called upon engine `open`.
     *
     * @private
     */
    onopen() {
      if (typeof this.auth == "function") {
        this.auth((data) => {
          this._sendConnectPacket(data);
        });
      } else {
        this._sendConnectPacket(this.auth);
      }
    }
    /**
     * Sends a CONNECT packet to initiate the Socket.IO session.
     *
     * @param data
     * @private
     */
    _sendConnectPacket(data) {
      this.packet({
        type: PacketType.CONNECT,
        data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, data) : data
      });
    }
    /**
     * Called upon engine or manager `error`.
     *
     * @param err
     * @private
     */
    onerror(err) {
      if (!this.connected) {
        this.emitReserved("connect_error", err);
      }
    }
    /**
     * Called upon engine `close`.
     *
     * @param reason
     * @param description
     * @private
     */
    onclose(reason, description) {
      this.connected = false;
      delete this.id;
      this.emitReserved("disconnect", reason, description);
    }
    /**
     * Called with socket packet.
     *
     * @param packet
     * @private
     */
    onpacket(packet) {
      const sameNamespace = packet.nsp === this.nsp;
      if (!sameNamespace)
        return;
      switch (packet.type) {
        case PacketType.CONNECT:
          if (packet.data && packet.data.sid) {
            this.onconnect(packet.data.sid, packet.data.pid);
          } else {
            this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          }
          break;
        case PacketType.EVENT:
        case PacketType.BINARY_EVENT:
          this.onevent(packet);
          break;
        case PacketType.ACK:
        case PacketType.BINARY_ACK:
          this.onack(packet);
          break;
        case PacketType.DISCONNECT:
          this.ondisconnect();
          break;
        case PacketType.CONNECT_ERROR:
          this.destroy();
          const err = new Error(packet.data.message);
          err.data = packet.data.data;
          this.emitReserved("connect_error", err);
          break;
      }
    }
    /**
     * Called upon a server event.
     *
     * @param packet
     * @private
     */
    onevent(packet) {
      const args = packet.data || [];
      if (null != packet.id) {
        args.push(this.ack(packet.id));
      }
      if (this.connected) {
        this.emitEvent(args);
      } else {
        this.receiveBuffer.push(Object.freeze(args));
      }
    }
    emitEvent(args) {
      if (this._anyListeners && this._anyListeners.length) {
        const listeners = this._anyListeners.slice();
        for (const listener of listeners) {
          listener.apply(this, args);
        }
      }
      super.emit.apply(this, args);
      if (this._pid && args.length && typeof args[args.length - 1] === "string") {
        this._lastOffset = args[args.length - 1];
      }
    }
    /**
     * Produces an ack callback to emit with an event.
     *
     * @private
     */
    ack(id) {
      const self2 = this;
      let sent = false;
      return function(...args) {
        if (sent)
          return;
        sent = true;
        self2.packet({
          type: PacketType.ACK,
          id,
          data: args
        });
      };
    }
    /**
     * Called upon a server acknowlegement.
     *
     * @param packet
     * @private
     */
    onack(packet) {
      const ack = this.acks[packet.id];
      if ("function" === typeof ack) {
        ack.apply(this, packet.data);
        delete this.acks[packet.id];
      }
    }
    /**
     * Called upon server connect.
     *
     * @private
     */
    onconnect(id, pid) {
      this.id = id;
      this.recovered = pid && this._pid === pid;
      this._pid = pid;
      this.connected = true;
      this.emitBuffered();
      this.emitReserved("connect");
      this._drainQueue(true);
    }
    /**
     * Emit buffered events (received and emitted).
     *
     * @private
     */
    emitBuffered() {
      this.receiveBuffer.forEach((args) => this.emitEvent(args));
      this.receiveBuffer = [];
      this.sendBuffer.forEach((packet) => {
        this.notifyOutgoingListeners(packet);
        this.packet(packet);
      });
      this.sendBuffer = [];
    }
    /**
     * Called upon server disconnect.
     *
     * @private
     */
    ondisconnect() {
      this.destroy();
      this.onclose("io server disconnect");
    }
    /**
     * Called upon forced client/server side disconnections,
     * this method ensures the manager stops tracking us and
     * that reconnections don't get triggered for this.
     *
     * @private
     */
    destroy() {
      if (this.subs) {
        this.subs.forEach((subDestroy) => subDestroy());
        this.subs = void 0;
      }
      this.io["_destroy"](this);
    }
    /**
     * Disconnects the socket manually. In that case, the socket will not try to reconnect.
     *
     * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
     *
     * @example
     * const socket = io();
     *
     * socket.on("disconnect", (reason) => {
     *   // __f__('log','at node_modules/socket.io-client/build/esm/socket.js:599',reason); prints "io client disconnect"
     * });
     *
     * socket.disconnect();
     *
     * @return self
     */
    disconnect() {
      if (this.connected) {
        this.packet({ type: PacketType.DISCONNECT });
      }
      this.destroy();
      if (this.connected) {
        this.onclose("io client disconnect");
      }
      return this;
    }
    /**
     * Alias for {@link disconnect()}.
     *
     * @return self
     */
    close() {
      return this.disconnect();
    }
    /**
     * Sets the compress flag.
     *
     * @example
     * socket.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress) {
      this.flags.compress = compress;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
     * ready to send messages.
     *
     * @example
     * socket.volatile.emit("hello"); // the server may or may not receive it
     *
     * @returns self
     */
    get volatile() {
      this.flags.volatile = true;
      return this;
    }
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the server:
     *
     * @example
     * socket.timeout(5000).emit("my-event", (err) => {
     *   if (err) {
     *     // the server did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @returns self
     */
    timeout(timeout) {
      this.flags.timeout = timeout;
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * @example
     * socket.onAny((event, ...args) => {
     *   __f__('log','at node_modules/socket.io-client/build/esm/socket.js:675',`got ${event}`);
     * });
     *
     * @param listener
     */
    onAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * socket.prependAny((event, ...args) => {
     *   __f__('log','at node_modules/socket.io-client/build/esm/socket.js:691',`got event ${event}`);
     * });
     *
     * @param listener
     */
    prependAny(listener) {
      this._anyListeners = this._anyListeners || [];
      this._anyListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   __f__('log','at node_modules/socket.io-client/build/esm/socket.js:706',`got event ${event}`);
     * }
     *
     * socket.onAny(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAny(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAny();
     *
     * @param listener
     */
    offAny(listener) {
      if (!this._anyListeners) {
        return this;
      }
      if (listener) {
        const listeners = this._anyListeners;
        for (let i2 = 0; i2 < listeners.length; i2++) {
          if (listener === listeners[i2]) {
            listeners.splice(i2, 1);
            return this;
          }
        }
      } else {
        this._anyListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny() {
      return this._anyListeners || [];
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.onAnyOutgoing((event, ...args) => {
     *   __f__('log','at node_modules/socket.io-client/build/esm/socket.js:752',`sent event ${event}`);
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.push(listener);
      return this;
    }
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * Note: acknowledgements sent to the server are not included.
     *
     * @example
     * socket.prependAnyOutgoing((event, ...args) => {
     *   __f__('log','at node_modules/socket.io-client/build/esm/socket.js:770',`sent event ${event}`);
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener) {
      this._anyOutgoingListeners = this._anyOutgoingListeners || [];
      this._anyOutgoingListeners.unshift(listener);
      return this;
    }
    /**
     * Removes the listener that will be fired when any event is emitted.
     *
     * @example
     * const catchAllListener = (event, ...args) => {
     *   __f__('log','at node_modules/socket.io-client/build/esm/socket.js:785',`sent event ${event}`);
     * }
     *
     * socket.onAnyOutgoing(catchAllListener);
     *
     * // remove a specific listener
     * socket.offAnyOutgoing(catchAllListener);
     *
     * // or remove all listeners
     * socket.offAnyOutgoing();
     *
     * @param [listener] - the catch-all listener (optional)
     */
    offAnyOutgoing(listener) {
      if (!this._anyOutgoingListeners) {
        return this;
      }
      if (listener) {
        const listeners = this._anyOutgoingListeners;
        for (let i2 = 0; i2 < listeners.length; i2++) {
          if (listener === listeners[i2]) {
            listeners.splice(i2, 1);
            return this;
          }
        }
      } else {
        this._anyOutgoingListeners = [];
      }
      return this;
    }
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    /**
     * Notify the listeners for each packet sent
     *
     * @param packet
     *
     * @private
     */
    notifyOutgoingListeners(packet) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const listeners = this._anyOutgoingListeners.slice();
        for (const listener of listeners) {
          listener.apply(this, packet.data);
        }
      }
    }
  }
  function Backoff(opts) {
    opts = opts || {};
    this.ms = opts.min || 100;
    this.max = opts.max || 1e4;
    this.factor = opts.factor || 2;
    this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
    this.attempts = 0;
  }
  Backoff.prototype.duration = function() {
    var ms2 = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var rand = Math.random();
      var deviation = Math.floor(rand * this.jitter * ms2);
      ms2 = (Math.floor(rand * 10) & 1) == 0 ? ms2 - deviation : ms2 + deviation;
    }
    return Math.min(ms2, this.max) | 0;
  };
  Backoff.prototype.reset = function() {
    this.attempts = 0;
  };
  Backoff.prototype.setMin = function(min) {
    this.ms = min;
  };
  Backoff.prototype.setMax = function(max) {
    this.max = max;
  };
  Backoff.prototype.setJitter = function(jitter) {
    this.jitter = jitter;
  };
  class Manager extends Emitter {
    constructor(uri, opts) {
      var _a;
      super();
      this.nsps = {};
      this.subs = [];
      if (uri && "object" === typeof uri) {
        opts = uri;
        uri = void 0;
      }
      opts = opts || {};
      opts.path = opts.path || "/socket.io";
      this.opts = opts;
      installTimerFunctions(this, opts);
      this.reconnection(opts.reconnection !== false);
      this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
      this.reconnectionDelay(opts.reconnectionDelay || 1e3);
      this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
      this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
      this.backoff = new Backoff({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      });
      this.timeout(null == opts.timeout ? 2e4 : opts.timeout);
      this._readyState = "closed";
      this.uri = uri;
      const _parser = opts.parser || parser;
      this.encoder = new _parser.Encoder();
      this.decoder = new _parser.Decoder();
      this._autoConnect = opts.autoConnect !== false;
      if (this._autoConnect)
        this.open();
    }
    reconnection(v2) {
      if (!arguments.length)
        return this._reconnection;
      this._reconnection = !!v2;
      return this;
    }
    reconnectionAttempts(v2) {
      if (v2 === void 0)
        return this._reconnectionAttempts;
      this._reconnectionAttempts = v2;
      return this;
    }
    reconnectionDelay(v2) {
      var _a;
      if (v2 === void 0)
        return this._reconnectionDelay;
      this._reconnectionDelay = v2;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v2);
      return this;
    }
    randomizationFactor(v2) {
      var _a;
      if (v2 === void 0)
        return this._randomizationFactor;
      this._randomizationFactor = v2;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v2);
      return this;
    }
    reconnectionDelayMax(v2) {
      var _a;
      if (v2 === void 0)
        return this._reconnectionDelayMax;
      this._reconnectionDelayMax = v2;
      (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v2);
      return this;
    }
    timeout(v2) {
      if (!arguments.length)
        return this._timeout;
      this._timeout = v2;
      return this;
    }
    /**
     * Starts trying to reconnect if reconnection is enabled and we have not
     * started reconnecting yet
     *
     * @private
     */
    maybeReconnectOnOpen() {
      if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
        this.reconnect();
      }
    }
    /**
     * Sets the current transport `socket`.
     *
     * @param {Function} fn - optional, callback
     * @return self
     * @public
     */
    open(fn) {
      if (~this._readyState.indexOf("open"))
        return this;
      this.engine = new Socket$1(this.uri, this.opts);
      const socket = this.engine;
      const self2 = this;
      this._readyState = "opening";
      this.skipReconnect = false;
      const openSubDestroy = on(socket, "open", function() {
        self2.onopen();
        fn && fn();
      });
      const onError = (err) => {
        this.cleanup();
        this._readyState = "closed";
        this.emitReserved("error", err);
        if (fn) {
          fn(err);
        } else {
          this.maybeReconnectOnOpen();
        }
      };
      const errorSub = on(socket, "error", onError);
      if (false !== this._timeout) {
        const timeout = this._timeout;
        const timer = this.setTimeoutFn(() => {
          openSubDestroy();
          onError(new Error("timeout"));
          socket.close();
        }, timeout);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(() => {
          this.clearTimeoutFn(timer);
        });
      }
      this.subs.push(openSubDestroy);
      this.subs.push(errorSub);
      return this;
    }
    /**
     * Alias for open()
     *
     * @return self
     * @public
     */
    connect(fn) {
      return this.open(fn);
    }
    /**
     * Called upon transport open.
     *
     * @private
     */
    onopen() {
      this.cleanup();
      this._readyState = "open";
      this.emitReserved("open");
      const socket = this.engine;
      this.subs.push(on(socket, "ping", this.onping.bind(this)), on(socket, "data", this.ondata.bind(this)), on(socket, "error", this.onerror.bind(this)), on(socket, "close", this.onclose.bind(this)), on(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    /**
     * Called upon a ping.
     *
     * @private
     */
    onping() {
      this.emitReserved("ping");
    }
    /**
     * Called with data.
     *
     * @private
     */
    ondata(data) {
      try {
        this.decoder.add(data);
      } catch (e) {
        this.onclose("parse error", e);
      }
    }
    /**
     * Called when parser fully decodes a packet.
     *
     * @private
     */
    ondecoded(packet) {
      nextTick(() => {
        this.emitReserved("packet", packet);
      }, this.setTimeoutFn);
    }
    /**
     * Called upon socket error.
     *
     * @private
     */
    onerror(err) {
      this.emitReserved("error", err);
    }
    /**
     * Creates a new socket for the given `nsp`.
     *
     * @return {Socket}
     * @public
     */
    socket(nsp, opts) {
      let socket = this.nsps[nsp];
      if (!socket) {
        socket = new Socket(this, nsp, opts);
        this.nsps[nsp] = socket;
      } else if (this._autoConnect && !socket.active) {
        socket.connect();
      }
      return socket;
    }
    /**
     * Called upon a socket close.
     *
     * @param socket
     * @private
     */
    _destroy(socket) {
      const nsps = Object.keys(this.nsps);
      for (const nsp of nsps) {
        const socket2 = this.nsps[nsp];
        if (socket2.active) {
          return;
        }
      }
      this._close();
    }
    /**
     * Writes a packet.
     *
     * @param packet
     * @private
     */
    _packet(packet) {
      const encodedPackets = this.encoder.encode(packet);
      for (let i2 = 0; i2 < encodedPackets.length; i2++) {
        this.engine.write(encodedPackets[i2], packet.options);
      }
    }
    /**
     * Clean up transport subscriptions and packet buffer.
     *
     * @private
     */
    cleanup() {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs.length = 0;
      this.decoder.destroy();
    }
    /**
     * Close the current socket.
     *
     * @private
     */
    _close() {
      this.skipReconnect = true;
      this._reconnecting = false;
      this.onclose("forced close");
      if (this.engine)
        this.engine.close();
    }
    /**
     * Alias for close()
     *
     * @private
     */
    disconnect() {
      return this._close();
    }
    /**
     * Called upon engine close.
     *
     * @private
     */
    onclose(reason, description) {
      this.cleanup();
      this.backoff.reset();
      this._readyState = "closed";
      this.emitReserved("close", reason, description);
      if (this._reconnection && !this.skipReconnect) {
        this.reconnect();
      }
    }
    /**
     * Attempt a reconnection.
     *
     * @private
     */
    reconnect() {
      if (this._reconnecting || this.skipReconnect)
        return this;
      const self2 = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) {
        this.backoff.reset();
        this.emitReserved("reconnect_failed");
        this._reconnecting = false;
      } else {
        const delay = this.backoff.duration();
        this._reconnecting = true;
        const timer = this.setTimeoutFn(() => {
          if (self2.skipReconnect)
            return;
          this.emitReserved("reconnect_attempt", self2.backoff.attempts);
          if (self2.skipReconnect)
            return;
          self2.open((err) => {
            if (err) {
              self2._reconnecting = false;
              self2.reconnect();
              this.emitReserved("reconnect_error", err);
            } else {
              self2.onreconnect();
            }
          });
        }, delay);
        if (this.opts.autoUnref) {
          timer.unref();
        }
        this.subs.push(() => {
          this.clearTimeoutFn(timer);
        });
      }
    }
    /**
     * Called upon successful reconnect.
     *
     * @private
     */
    onreconnect() {
      const attempt = this.backoff.attempts;
      this._reconnecting = false;
      this.backoff.reset();
      this.emitReserved("reconnect", attempt);
    }
  }
  const cache = {};
  function lookup(uri, opts) {
    if (typeof uri === "object") {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    const parsed = url(uri, opts.path || "/socket.io");
    const source = parsed.source;
    const id = parsed.id;
    const path = parsed.path;
    const sameNamespace = cache[id] && path in cache[id]["nsps"];
    const newConnection = opts.forceNew || opts["force new connection"] || false === opts.multiplex || sameNamespace;
    let io;
    if (newConnection) {
      io = new Manager(source, opts);
    } else {
      if (!cache[id]) {
        cache[id] = new Manager(source, opts);
      }
      io = cache[id];
    }
    if (parsed.query && !opts.query) {
      opts.query = parsed.queryKey;
    }
    return io.socket(parsed.path, opts);
  }
  Object.assign(lookup, {
    Manager,
    Socket,
    io: lookup,
    connect: lookup
  });
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var dayjs_minExports = {};
  var dayjs_min = {
    get exports() {
      return dayjs_minExports;
    },
    set exports(v2) {
      dayjs_minExports = v2;
    }
  };
  (function(module, exports) {
    !function(t2, e) {
      module.exports = e();
    }(commonjsGlobal, function() {
      var t2 = 1e3, e = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", u2 = "hour", a2 = "day", o2 = "week", c2 = "month", f2 = "quarter", h2 = "year", d2 = "date", l2 = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
        var e2 = ["th", "st", "nd", "rd"], n3 = t3 % 100;
        return "[" + t3 + (e2[(n3 - 20) % 10] || e2[n3] || e2[0]) + "]";
      } }, m2 = function(t3, e2, n3) {
        var r3 = String(t3);
        return !r3 || r3.length >= e2 ? t3 : "" + Array(e2 + 1 - r3.length).join(n3) + t3;
      }, v2 = { s: m2, z: function(t3) {
        var e2 = -t3.utcOffset(), n3 = Math.abs(e2), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
        return (e2 <= 0 ? "+" : "-") + m2(r3, 2, "0") + ":" + m2(i3, 2, "0");
      }, m: function t3(e2, n3) {
        if (e2.date() < n3.date())
          return -t3(n3, e2);
        var r3 = 12 * (n3.year() - e2.year()) + (n3.month() - e2.month()), i3 = e2.clone().add(r3, c2), s3 = n3 - i3 < 0, u3 = e2.clone().add(r3 + (s3 ? -1 : 1), c2);
        return +(-(r3 + (n3 - i3) / (s3 ? i3 - u3 : u3 - i3)) || 0);
      }, a: function(t3) {
        return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
      }, p: function(t3) {
        return { M: c2, y: h2, w: o2, d: a2, D: d2, h: u2, m: s2, s: i2, ms: r2, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t3) {
        return void 0 === t3;
      } }, g2 = "en", D2 = {};
      D2[g2] = M2;
      var p2 = "$isDayjsObject", S2 = function(t3) {
        return t3 instanceof _2 || !(!t3 || !t3[p2]);
      }, w2 = function t3(e2, n3, r3) {
        var i3;
        if (!e2)
          return g2;
        if ("string" == typeof e2) {
          var s3 = e2.toLowerCase();
          D2[s3] && (i3 = s3), n3 && (D2[s3] = n3, i3 = s3);
          var u3 = e2.split("-");
          if (!i3 && u3.length > 1)
            return t3(u3[0]);
        } else {
          var a3 = e2.name;
          D2[a3] = e2, i3 = a3;
        }
        return !r3 && i3 && (g2 = i3), i3 || !r3 && g2;
      }, O = function(t3, e2) {
        if (S2(t3))
          return t3.clone();
        var n3 = "object" == typeof e2 ? e2 : {};
        return n3.date = t3, n3.args = arguments, new _2(n3);
      }, b2 = v2;
      b2.l = w2, b2.i = S2, b2.w = function(t3, e2) {
        return O(t3, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _2 = function() {
        function M3(t3) {
          this.$L = w2(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p2] = true;
        }
        var m3 = M3.prototype;
        return m3.parse = function(t3) {
          this.$d = function(t4) {
            var e2 = t4.date, n3 = t4.utc;
            if (null === e2)
              return /* @__PURE__ */ new Date(NaN);
            if (b2.u(e2))
              return /* @__PURE__ */ new Date();
            if (e2 instanceof Date)
              return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r3 = e2.match($2);
              if (r3) {
                var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
                return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
              }
            }
            return new Date(e2);
          }(t3), this.init();
        }, m3.init = function() {
          var t3 = this.$d;
          this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
        }, m3.$utils = function() {
          return b2;
        }, m3.isValid = function() {
          return !(this.$d.toString() === l2);
        }, m3.isSame = function(t3, e2) {
          var n3 = O(t3);
          return this.startOf(e2) <= n3 && n3 <= this.endOf(e2);
        }, m3.isAfter = function(t3, e2) {
          return O(t3) < this.startOf(e2);
        }, m3.isBefore = function(t3, e2) {
          return this.endOf(e2) < O(t3);
        }, m3.$g = function(t3, e2, n3) {
          return b2.u(t3) ? this[e2] : this.set(n3, t3);
        }, m3.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m3.valueOf = function() {
          return this.$d.getTime();
        }, m3.startOf = function(t3, e2) {
          var n3 = this, r3 = !!b2.u(e2) || e2, f3 = b2.p(t3), l3 = function(t4, e3) {
            var i3 = b2.w(n3.$u ? Date.UTC(n3.$y, e3, t4) : new Date(n3.$y, e3, t4), n3);
            return r3 ? i3 : i3.endOf(a2);
          }, $3 = function(t4, e3) {
            return b2.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n3);
          }, y3 = this.$W, M4 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
          switch (f3) {
            case h2:
              return r3 ? l3(1, 0) : l3(31, 11);
            case c2:
              return r3 ? l3(1, M4) : l3(0, M4 + 1);
            case o2:
              var g3 = this.$locale().weekStart || 0, D3 = (y3 < g3 ? y3 + 7 : y3) - g3;
              return l3(r3 ? m4 - D3 : m4 + (6 - D3), M4);
            case a2:
            case d2:
              return $3(v3 + "Hours", 0);
            case u2:
              return $3(v3 + "Minutes", 1);
            case s2:
              return $3(v3 + "Seconds", 2);
            case i2:
              return $3(v3 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m3.endOf = function(t3) {
          return this.startOf(t3, false);
        }, m3.$set = function(t3, e2) {
          var n3, o3 = b2.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n3 = {}, n3[a2] = f3 + "Date", n3[d2] = f3 + "Date", n3[c2] = f3 + "Month", n3[h2] = f3 + "FullYear", n3[u2] = f3 + "Hours", n3[s2] = f3 + "Minutes", n3[i2] = f3 + "Seconds", n3[r2] = f3 + "Milliseconds", n3)[o3], $3 = o3 === a2 ? this.$D + (e2 - this.$W) : e2;
          if (o3 === c2 || o3 === h2) {
            var y3 = this.clone().set(d2, 1);
            y3.$d[l3]($3), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
          } else
            l3 && this.$d[l3]($3);
          return this.init(), this;
        }, m3.set = function(t3, e2) {
          return this.clone().$set(t3, e2);
        }, m3.get = function(t3) {
          return this[b2.p(t3)]();
        }, m3.add = function(r3, f3) {
          var d3, l3 = this;
          r3 = Number(r3);
          var $3 = b2.p(f3), y3 = function(t3) {
            var e2 = O(l3);
            return b2.w(e2.date(e2.date() + Math.round(t3 * r3)), l3);
          };
          if ($3 === c2)
            return this.set(c2, this.$M + r3);
          if ($3 === h2)
            return this.set(h2, this.$y + r3);
          if ($3 === a2)
            return y3(1);
          if ($3 === o2)
            return y3(7);
          var M4 = (d3 = {}, d3[s2] = e, d3[u2] = n2, d3[i2] = t2, d3)[$3] || 1, m4 = this.$d.getTime() + r3 * M4;
          return b2.w(m4, this);
        }, m3.subtract = function(t3, e2) {
          return this.add(-1 * t3, e2);
        }, m3.format = function(t3) {
          var e2 = this, n3 = this.$locale();
          if (!this.isValid())
            return n3.invalidDate || l2;
          var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = b2.z(this), s3 = this.$H, u3 = this.$m, a3 = this.$M, o3 = n3.weekdays, c3 = n3.months, f3 = n3.meridiem, h3 = function(t4, n4, i4, s4) {
            return t4 && (t4[n4] || t4(e2, r3)) || i4[n4].slice(0, s4);
          }, d3 = function(t4) {
            return b2.s(s3 % 12 || 12, t4, "0");
          }, $3 = f3 || function(t4, e3, n4) {
            var r4 = t4 < 12 ? "AM" : "PM";
            return n4 ? r4.toLowerCase() : r4;
          };
          return r3.replace(y2, function(t4, r4) {
            return r4 || function(t5) {
              switch (t5) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b2.s(e2.$y, 4, "0");
                case "M":
                  return a3 + 1;
                case "MM":
                  return b2.s(a3 + 1, 2, "0");
                case "MMM":
                  return h3(n3.monthsShort, a3, c3, 3);
                case "MMMM":
                  return h3(c3, a3);
                case "D":
                  return e2.$D;
                case "DD":
                  return b2.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h3(n3.weekdaysMin, e2.$W, o3, 2);
                case "ddd":
                  return h3(n3.weekdaysShort, e2.$W, o3, 3);
                case "dddd":
                  return o3[e2.$W];
                case "H":
                  return String(s3);
                case "HH":
                  return b2.s(s3, 2, "0");
                case "h":
                  return d3(1);
                case "hh":
                  return d3(2);
                case "a":
                  return $3(s3, u3, true);
                case "A":
                  return $3(s3, u3, false);
                case "m":
                  return String(u3);
                case "mm":
                  return b2.s(u3, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b2.s(e2.$s, 2, "0");
                case "SSS":
                  return b2.s(e2.$ms, 3, "0");
                case "Z":
                  return i3;
              }
              return null;
            }(t4) || i3.replace(":", "");
          });
        }, m3.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m3.diff = function(r3, d3, l3) {
          var $3, y3 = this, M4 = b2.p(d3), m4 = O(r3), v3 = (m4.utcOffset() - this.utcOffset()) * e, g3 = this - m4, D3 = function() {
            return b2.m(y3, m4);
          };
          switch (M4) {
            case h2:
              $3 = D3() / 12;
              break;
            case c2:
              $3 = D3();
              break;
            case f2:
              $3 = D3() / 3;
              break;
            case o2:
              $3 = (g3 - v3) / 6048e5;
              break;
            case a2:
              $3 = (g3 - v3) / 864e5;
              break;
            case u2:
              $3 = g3 / n2;
              break;
            case s2:
              $3 = g3 / e;
              break;
            case i2:
              $3 = g3 / t2;
              break;
            default:
              $3 = g3;
          }
          return l3 ? $3 : b2.a($3);
        }, m3.daysInMonth = function() {
          return this.endOf(c2).$D;
        }, m3.$locale = function() {
          return D2[this.$L];
        }, m3.locale = function(t3, e2) {
          if (!t3)
            return this.$L;
          var n3 = this.clone(), r3 = w2(t3, e2, true);
          return r3 && (n3.$L = r3), n3;
        }, m3.clone = function() {
          return b2.w(this.$d, this);
        }, m3.toDate = function() {
          return new Date(this.valueOf());
        }, m3.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m3.toISOString = function() {
          return this.$d.toISOString();
        }, m3.toString = function() {
          return this.$d.toUTCString();
        }, M3;
      }(), k2 = _2.prototype;
      return O.prototype = k2, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", u2], ["$W", a2], ["$M", c2], ["$y", h2], ["$D", d2]].forEach(function(t3) {
        k2[t3[1]] = function(e2) {
          return this.$g(e2, t3[0], t3[1]);
        };
      }), O.extend = function(t3, e2) {
        return t3.$i || (t3(e2, _2, O), t3.$i = true), O;
      }, O.locale = w2, O.isDayjs = S2, O.unix = function(t3) {
        return O(1e3 * t3);
      }, O.en = D2[g2], O.Ls = D2, O.p = {}, O;
    });
  })(dayjs_min);
  const dayjs = dayjs_minExports;
  const en = {
    "uni-countdown.day": "day",
    "uni-countdown.h": "h",
    "uni-countdown.m": "m",
    "uni-countdown.s": "s"
  };
  const zhHans = {
    "uni-countdown.day": "天",
    "uni-countdown.h": "时",
    "uni-countdown.m": "分",
    "uni-countdown.s": "秒"
  };
  const zhHant = {
    "uni-countdown.day": "天",
    "uni-countdown.h": "時",
    "uni-countdown.m": "分",
    "uni-countdown.s": "秒"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$l = {
    name: "UniCountdown",
    emits: ["timeup"],
    props: {
      showDay: {
        type: Boolean,
        default: true
      },
      showColon: {
        type: Boolean,
        default: true
      },
      start: {
        type: Boolean,
        default: true
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333"
      },
      fontSize: {
        type: Number,
        default: 14
      },
      splitorColor: {
        type: String,
        default: "#333"
      },
      day: {
        type: Number,
        default: 0
      },
      hour: {
        type: Number,
        default: 0
      },
      minute: {
        type: Number,
        default: 0
      },
      second: {
        type: Number,
        default: 0
      },
      timestamp: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        timer: null,
        syncFlag: false,
        d: "00",
        h: "00",
        i: "00",
        s: "00",
        leftTime: 0,
        seconds: 0
      };
    },
    computed: {
      dayText() {
        return t("uni-countdown.day");
      },
      hourText(val) {
        return t("uni-countdown.h");
      },
      minuteText(val) {
        return t("uni-countdown.m");
      },
      secondText(val) {
        return t("uni-countdown.s");
      },
      timeStyle() {
        const {
          color,
          backgroundColor,
          fontSize
        } = this;
        return {
          color,
          backgroundColor,
          fontSize: `${fontSize}px`,
          width: `${fontSize * 22 / 14}px`,
          // 按字体大小为 14px 时的比例缩放
          lineHeight: `${fontSize * 20 / 14}px`,
          borderRadius: `${fontSize * 3 / 14}px`
        };
      },
      splitorStyle() {
        const { splitorColor, fontSize, backgroundColor } = this;
        return {
          color: splitorColor,
          fontSize: `${fontSize * 12 / 14}px`,
          margin: backgroundColor ? `${fontSize * 4 / 14}px` : ""
        };
      }
    },
    watch: {
      day(val) {
        this.changeFlag();
      },
      hour(val) {
        this.changeFlag();
      },
      minute(val) {
        this.changeFlag();
      },
      second(val) {
        this.changeFlag();
      },
      start: {
        immediate: true,
        handler(newVal, oldVal) {
          if (newVal) {
            this.startData();
          } else {
            if (!oldVal)
              return;
            clearInterval(this.timer);
          }
        }
      }
    },
    created: function(e) {
      this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
      this.countDown();
    },
    unmounted() {
      clearInterval(this.timer);
    },
    methods: {
      toSeconds(timestamp, day, hours, minutes, seconds) {
        if (timestamp) {
          return timestamp - parseInt((/* @__PURE__ */ new Date()).getTime() / 1e3, 10);
        }
        return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
      },
      timeUp() {
        clearInterval(this.timer);
        this.$emit("timeup");
      },
      countDown() {
        let seconds = this.seconds;
        let [day, hour, minute, second] = [0, 0, 0, 0];
        if (seconds > 0) {
          day = Math.floor(seconds / (60 * 60 * 24));
          hour = Math.floor(seconds / (60 * 60)) - day * 24;
          minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60;
          second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
        } else {
          this.timeUp();
        }
        if (day < 10) {
          day = "0" + day;
        }
        if (hour < 10) {
          hour = "0" + hour;
        }
        if (minute < 10) {
          minute = "0" + minute;
        }
        if (second < 10) {
          second = "0" + second;
        }
        this.d = day;
        this.h = hour;
        this.i = minute;
        this.s = second;
      },
      startData() {
        this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
        if (this.seconds <= 0) {
          this.seconds = this.toSeconds(0, 0, 0, 0, 0);
          this.countDown();
          return;
        }
        clearInterval(this.timer);
        this.countDown();
        this.timer = setInterval(() => {
          this.seconds--;
          if (this.seconds < 0) {
            this.timeUp();
            return;
          }
          this.countDown();
        }, 1e3);
      },
      update() {
        this.startData();
      },
      changeFlag() {
        if (!this.syncFlag) {
          this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second);
          this.startData();
          this.syncFlag = true;
        }
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-countdown" }, [
      $props.showDay ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          style: vue.normalizeStyle([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        vue.toDisplayString($data.d),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.showDay ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 1,
          style: vue.normalizeStyle([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        vue.toDisplayString($options.dayText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode(
        "text",
        {
          style: vue.normalizeStyle([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        vue.toDisplayString($data.h),
        5
        /* TEXT, STYLE */
      ),
      vue.createElementVNode(
        "text",
        {
          style: vue.normalizeStyle([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        vue.toDisplayString($props.showColon ? ":" : $options.hourText),
        5
        /* TEXT, STYLE */
      ),
      vue.createElementVNode(
        "text",
        {
          style: vue.normalizeStyle([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        vue.toDisplayString($data.i),
        5
        /* TEXT, STYLE */
      ),
      vue.createElementVNode(
        "text",
        {
          style: vue.normalizeStyle([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        vue.toDisplayString($props.showColon ? ":" : $options.minuteText),
        5
        /* TEXT, STYLE */
      ),
      vue.createElementVNode(
        "text",
        {
          style: vue.normalizeStyle([$options.timeStyle]),
          class: "uni-countdown__number"
        },
        vue.toDisplayString($data.s),
        5
        /* TEXT, STYLE */
      ),
      !$props.showColon ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 2,
          style: vue.normalizeStyle([$options.splitorStyle]),
          class: "uni-countdown__splitor"
        },
        vue.toDisplayString($options.secondText),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$6], ["__scopeId", "data-v-c592f7f2"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.vue"]]);
  const _sfc_main$k = {
    __name: "room-status",
    props: {
      status: Number,
      statusValue: String,
      countdown: Number
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        const _component_uni_countdown = resolveEasycom(vue.resolveDynamicComponent("uni-countdown"), __easycom_0$2);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 咨询室状态 "),
            vue.createElementVNode("view", { class: "room-status" }, [
              vue.createCommentVNode(" 待接诊(status: 2) "),
              props.status === 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "status waiting"
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "label" },
                  vue.toDisplayString(props.statusValue),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" 咨询中(status: 3) "),
              props.status === 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "status countdown"
              }, [
                vue.createElementVNode(
                  "text",
                  { class: "label" },
                  vue.toDisplayString(props.statusValue),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "time" }, [
                  vue.createTextVNode(" 剩余时间: "),
                  vue.createVNode(_component_uni_countdown, {
                    color: "#3c3e42",
                    "font-size": 14,
                    "show-day": false,
                    second: props.countdown
                  }, null, 8, ["second"])
                ])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" 已完成(status: 4) "),
              props.status === 4 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "status"
              }, [
                vue.createVNode(_component_uni_icons, {
                  size: "20",
                  color: "#121826",
                  type: "checkbox-filled"
                }),
                vue.createTextVNode(
                  " " + vue.toDisplayString(props.statusValue),
                  1
                  /* TEXT */
                )
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const roomStatus = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-c65c99df"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/room/components/room-status.vue"]]);
  const _sfc_main$j = {
    __name: "patient-info",
    props: {
      info: {
        type: Object,
        default: {}
      }
    },
    setup(__props) {
      const props = __props;
      const illnessTimes = {
        1: "一周内",
        2: "一个月内",
        3: "半年内",
        4: "半年以上"
      };
      const consultFlags = {
        1: "就诊过",
        0: "没有就诊过"
      };
      async function onPreviewClick(urls) {
        uni.previewImage({
          urls: urls.map((item) => item.url)
        });
      }
      return (_ctx, _cache) => {
        var _a;
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 患者信息（21） "),
            vue.createElementVNode("view", { class: "patient-info" }, [
              vue.createElementVNode("view", { class: "header" }, [
                vue.createElementVNode(
                  "view",
                  { class: "title" },
                  vue.toDisplayString(props.info.patientInfo.name) + " " + vue.toDisplayString(props.info.patientInfo.genderValue) + " " + vue.toDisplayString(props.info.patientInfo.age) + "岁 ",
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "note" },
                  vue.toDisplayString(illnessTimes[props.info.illnessTime]) + " | " + vue.toDisplayString(consultFlags[props.info.illnessType]),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "content" }, [
                vue.createElementVNode("view", { class: "list-item" }, [
                  vue.createElementVNode("text", { class: "label" }, "病情描述"),
                  vue.createElementVNode(
                    "text",
                    { class: "note" },
                    vue.toDisplayString(props.info.illnessDesc),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "list-item" }, [
                  vue.createElementVNode("text", { class: "label" }, "图片"),
                  ((_a = props.info.pictures) == null ? void 0 : _a.length) ? (vue.openBlock(), vue.createElementBlock("text", {
                    key: 0,
                    onClick: _cache[0] || (_cache[0] = ($event) => onPreviewClick(props.info.pictures)),
                    class: "note"
                  }, " 点击查看 ")) : (vue.openBlock(), vue.createElementBlock("text", {
                    key: 1,
                    class: "note"
                  }, "暂无图片"))
                ])
              ])
            ])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const patientInfo = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-f6d3987a"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/room/components/patient-info.vue"]]);
  const _sfc_main$i = {
    __name: "notify-info",
    props: {
      type: {
        type: Number,
        default: 31
      }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "message-tips" }, [
          vue.createCommentVNode(" 温馨提示（32） "),
          vue.createElementVNode("view", { class: "wrapper" }, [
            props.type === 32 ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "label"
            }, "温馨提示: ")) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ]);
      };
    }
  };
  const notifyInfo = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-0438bb53"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/room/components/notify-info.vue"]]);
  const _sfc_main$h = {
    __name: "message-info",
    props: {
      info: {
        type: Object,
        default: {}
      },
      type: {
        type: Number,
        default: 1
      }
    },
    setup(__props) {
      const props = __props;
      const { userId } = useUserStore();
      function dateFormat(date) {
        return dayjs(date).format("hh:mm:ss");
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 文字/图片消息 "),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass([{ reverse: props.info.from === vue.unref(userId) }, "message-item"])
              },
              [
                vue.createElementVNode("image", {
                  class: "room-avatar",
                  src: props.info.fromAvatar
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "room-message" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "time" },
                    vue.toDisplayString(dateFormat(props.info.createTime)),
                    1
                    /* TEXT */
                  ),
                  props.type === 1 ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 0,
                      class: "text"
                    },
                    vue.toDisplayString(props.info.msg.content),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true),
                  props.type === 4 ? (vue.openBlock(), vue.createElementBlock("image", {
                    key: 1,
                    class: "image",
                    src: props.info.msg.picture.url,
                    mode: "widthFix"
                  }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
                ])
              ],
              2
              /* CLASS */
            )
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const messageInfo = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-46bc3d81"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/room/components/message-info.vue"]]);
  const _sfc_main$g = {
    __name: "prescription-info",
    props: {
      info: {
        type: Object,
        default: {}
      }
    },
    setup(__props) {
      const props = __props;
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 处方消息（22）"),
            vue.createElementVNode("view", { class: "e-prescription" }, [
              vue.createElementVNode("view", { class: "prescription-content" }, [
                vue.createElementVNode("view", { class: "list-title" }, [
                  vue.createElementVNode("view", { class: "label" }, "电子处方"),
                  vue.createElementVNode("view", { class: "extra" }, [
                    vue.createTextVNode(" 原始处方 "),
                    vue.createVNode(_component_uni_icons, {
                      size: "16",
                      color: "#848484",
                      type: "right"
                    })
                  ])
                ]),
                vue.createElementVNode(
                  "view",
                  { class: "list-item" },
                  vue.toDisplayString(props.info.name) + " " + vue.toDisplayString(props.info.genderValue) + " " + vue.toDisplayString(props.info.age) + "岁 " + vue.toDisplayString(props.info.diagnosis),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "list-item" },
                  "开方时间：" + vue.toDisplayString(props.info.createTime),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "dividing-line" }),
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(props.info.medicines, (medicine) => {
                    return vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      {
                        key: medicine.id
                      },
                      [
                        vue.createElementVNode("view", { class: "list-title" }, [
                          vue.createElementVNode("view", { class: "label" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "name" },
                              vue.toDisplayString(medicine.name),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode("text", { class: "unit" }, "85ml"),
                            vue.createElementVNode(
                              "text",
                              { class: "quantity" },
                              "x" + vue.toDisplayString(medicine.quantity),
                              1
                              /* TEXT */
                            )
                          ])
                        ]),
                        vue.createElementVNode(
                          "view",
                          { class: "list-item" },
                          vue.toDisplayString(medicine.usageDosag),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createElementVNode("navigator", {
                class: "uni-link",
                "hover-class": "none",
                url: `/subpkg_medicine/payment/index?id=${props.info.id}`
              }, " 购买药品 ", 8, ["url"])
            ])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const prescriptionInfo = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-b2e2b8fe"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/room/components/prescription-info.vue"]]);
  const _sfc_main$f = {
    name: "UniRate",
    props: {
      isFill: {
        // 星星的类型，是否镂空
        type: [Boolean, String],
        default: true
      },
      color: {
        // 星星未选中的颜色
        type: String,
        default: "#ececec"
      },
      activeColor: {
        // 星星选中状态颜色
        type: String,
        default: "#ffca3e"
      },
      disabledColor: {
        // 星星禁用状态颜色
        type: String,
        default: "#c0c0c0"
      },
      size: {
        // 星星的大小
        type: [Number, String],
        default: 24
      },
      value: {
        // 当前评分
        type: [Number, String],
        default: 0
      },
      modelValue: {
        // 当前评分
        type: [Number, String],
        default: 0
      },
      max: {
        // 最大评分
        type: [Number, String],
        default: 5
      },
      margin: {
        // 星星的间距
        type: [Number, String],
        default: 0
      },
      disabled: {
        // 是否可点击
        type: [Boolean, String],
        default: false
      },
      readonly: {
        // 是否只读
        type: [Boolean, String],
        default: false
      },
      allowHalf: {
        // 是否显示半星
        type: [Boolean, String],
        default: false
      },
      touchable: {
        // 是否支持滑动手势
        type: [Boolean, String],
        default: true
      }
    },
    data() {
      return {
        valueSync: "",
        userMouseFristMove: true,
        userRated: false,
        userLastRate: 1
      };
    },
    watch: {
      value(newVal) {
        this.valueSync = Number(newVal);
      },
      modelValue(newVal) {
        this.valueSync = Number(newVal);
      }
    },
    computed: {
      stars() {
        const value2 = this.valueSync ? this.valueSync : 0;
        const starList = [];
        const floorValue = Math.floor(value2);
        const ceilValue = Math.ceil(value2);
        for (let i2 = 0; i2 < this.max; i2++) {
          if (floorValue > i2) {
            starList.push({
              activeWitch: "100%"
            });
          } else if (ceilValue - 1 === i2) {
            starList.push({
              activeWitch: (value2 - floorValue) * 100 + "%"
            });
          } else {
            starList.push({
              activeWitch: "0"
            });
          }
        }
        return starList;
      },
      marginNumber() {
        return Number(this.margin);
      }
    },
    created() {
      this.valueSync = Number(this.value || this.modelValue);
      this._rateBoxLeft = 0;
      this._oldValue = null;
    },
    mounted() {
      setTimeout(() => {
        this._getSize();
      }, 100);
    },
    methods: {
      touchstart(e) {
        if (this.readonly || this.disabled)
          return;
        const {
          clientX,
          screenX
        } = e.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      touchmove(e) {
        if (this.readonly || this.disabled || !this.touchable)
          return;
        const {
          clientX,
          screenX
        } = e.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      /**
       * 兼容 PC @tian
       */
      mousedown(e) {
      },
      mousemove(e) {
      },
      mouseleave(e) {
      },
      /**
       * 获取星星个数
       */
      _getRateCount(clientX) {
        this._getSize();
        const size = Number(this.size);
        if (isNaN(size)) {
          return new Error("size 属性只能设置为数字");
        }
        const rateMoveRange = clientX - this._rateBoxLeft;
        let index = parseInt(rateMoveRange / (size + this.marginNumber));
        index = index < 0 ? 0 : index;
        index = index > this.max ? this.max : index;
        const range = parseInt(rateMoveRange - (size + this.marginNumber) * index);
        let value2 = 0;
        if (this._oldValue === index && !this.PC)
          return;
        this._oldValue = index;
        if (this.allowHalf) {
          if (range > size / 2) {
            value2 = index + 1;
          } else {
            value2 = index + 0.5;
          }
        } else {
          value2 = index + 1;
        }
        value2 = Math.max(0.5, Math.min(value2, this.max));
        this.valueSync = value2;
        this._onChange();
      },
      /**
       * 触发动态修改
       */
      _onChange() {
        this.$emit("input", this.valueSync);
        this.$emit("update:modelValue", this.valueSync);
        this.$emit("change", {
          value: this.valueSync
        });
      },
      /**
       * 获取星星距离屏幕左侧距离
       */
      _getSize() {
        uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((ret) => {
          if (ret) {
            this._rateBoxLeft = ret[0].left;
          }
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode(
        "view",
        {
          ref: "uni-rate",
          class: "uni-rate"
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.stars, (star, index) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: vue.normalizeClass(["uni-rate__icon", { "uni-cursor-not-allowed": $props.disabled }]),
                  style: vue.normalizeStyle({ "margin-right": $options.marginNumber + "px" }),
                  key: index,
                  onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchstart && $options.touchstart(...args), ["stop"])),
                  onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop"])),
                  onMousedown: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
                  onMousemove: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop"])),
                  onMouseleave: _cache[4] || (_cache[4] = (...args) => $options.mouseleave && $options.mouseleave(...args))
                },
                [
                  vue.createVNode(_component_uni_icons, {
                    color: $props.color,
                    size: $props.size,
                    type: $props.isFill ? "star-filled" : "star"
                  }, null, 8, ["color", "size", "type"]),
                  vue.createElementVNode(
                    "view",
                    {
                      style: vue.normalizeStyle({ width: star.activeWitch }),
                      class: "uni-rate__icon-on"
                    },
                    [
                      vue.createVNode(_component_uni_icons, {
                        color: $props.disabled ? $props.disabledColor : $props.activeColor,
                        size: $props.size,
                        type: "star-filled"
                      }, null, 8, ["color", "size"])
                    ],
                    4
                    /* STYLE */
                  )
                ],
                38
                /* CLASS, STYLE, HYDRATE_EVENTS */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        512
        /* NEED_PATCH */
      )
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$5], ["__scopeId", "data-v-5c8fbdf3"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-rate/components/uni-rate/uni-rate.vue"]]);
  const __default__ = {
    options: {
      styleIsolation: "shared"
    }
  };
  const _sfc_main$e = /* @__PURE__ */ Object.assign(__default__, {
    __name: "rate-info",
    props: {
      orderId: String,
      doctorId: String,
      // 是否已评价过
      hasEvaluate: {
        type: Boolean,
        default: false
      },
      // 评价的内容
      evaluateDoc: {
        type: Object,
        default: {}
      }
    },
    setup(__props) {
      const props = __props;
      const formData = vue.ref({
        score: props.evaluateDoc.score,
        content: props.evaluateDoc.content,
        anonymousFlag: props.evaluateDoc.anonymousFlag || 0
      });
      const hasEvaluate = vue.ref(props.hasEvaluate);
      const wordCount = vue.computed(() => {
        var _a;
        return ((_a = formData.value.content) == null ? void 0 : _a.length) || 0;
      });
      const buttonEnable = vue.computed(() => {
        return formData.value.score;
      });
      async function onFormSubmit() {
        const { code, data, message } = await evaluateDoctorApi({
          docId: props.doctorId,
          orderId: props.orderId,
          ...formData.value
        });
        if (code !== 1e4)
          return uni.utils.toast(message);
        uni.utils.toast("感谢您的评价！");
        hasEvaluate.value = true;
      }
      function onAnonymousClick() {
        formatAppLog("log", "at subpkg_consult/room/components/rate-info.vue:61", 1111);
        formData.value.anonymousFlag = Math.abs(formData.value.anonymousFlag - 1);
      }
      return (_ctx, _cache) => {
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$1);
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$3);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 医生评价 "),
            vue.createElementVNode("view", { class: "doctor-rating" }, [
              vue.createElementVNode("view", { class: "title" }, "医生服务评价"),
              vue.createElementVNode("view", { class: "subtitle" }, "本次在线问诊服务您还满意吗？"),
              vue.createElementVNode("view", { class: "rating" }, [
                vue.createVNode(_component_uni_rate, {
                  modelValue: formData.value.score,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.value.score = $event),
                  size: 28,
                  margin: "12"
                }, null, 8, ["modelValue"])
              ]),
              vue.createElementVNode("view", { class: "text" }, [
                vue.createVNode(_component_uni_easyinput, {
                  type: "textarea",
                  maxlength: "150",
                  modelValue: formData.value.content,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.content = $event),
                  "input-border": false,
                  styles: { backgroundColor: "#f6f6f6" },
                  "placeholder-style": "font-size: 28rpx; color: #979797",
                  placeholder: "请描述您对医生的评价或是在医生看诊过程中遇到的问题"
                }, null, 8, ["modelValue"]),
                vue.createElementVNode(
                  "text",
                  { class: "word-count" },
                  vue.toDisplayString(vue.unref(wordCount)) + "/150",
                  1
                  /* TEXT */
                )
              ]),
              !hasEvaluate.value ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                onClick: onAnonymousClick,
                class: "anonymous"
              }, [
                formData.value.anonymousFlag ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  size: "16",
                  color: "#16C2A3",
                  type: "checkbox-filled"
                })) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 1,
                  size: "16",
                  color: "#d1d1d1",
                  type: "circle"
                })),
                vue.createElementVNode("text", { class: "label" }, "匿名评价")
              ])) : vue.createCommentVNode("v-if", true),
              !hasEvaluate.value ? (vue.openBlock(), vue.createElementBlock("button", {
                key: 1,
                disabled: !vue.unref(buttonEnable),
                onClick: onFormSubmit,
                class: "uni-button"
              }, " 提交 ", 8, ["disabled"])) : vue.createCommentVNode("v-if", true)
            ])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  });
  const rateInfo = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-6a110098"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/room/components/rate-info.vue"]]);
  const _sfc_main$d = {
    __name: "index",
    props: {
      orderId: String
    },
    setup(__props) {
      const props = __props;
      const { token, userId } = useUserStore();
      const messageList = vue.ref([]);
      const orderDetail = vue.ref({});
      const textMessage = vue.ref("");
      const refreshTrigger = vue.ref(false);
      const lastTime = vue.ref(dayjs().format("YYYY-MM-DD HH:mm:ss"));
      const socket = lookup("https://consult-api.itheima.net", {
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
          return uni.utils.toast("没有更多聊天记录了");
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
          return uni.utils.toast("医生当前不在线!");
        }
        Ds.chooseAndUploadFile({
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
        const { code, data, message } = await orderDetailApi$1(props.orderId);
        if (code !== 1e4)
          return uni.utils.toast(message);
        orderDetail.value = data;
      }
      getOrderDetail();
      return (_ctx, _cache) => {
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$3);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock("view", { class: "room-page" }, [
          vue.createCommentVNode(" 问诊订单状态 "),
          vue.createVNode(roomStatus, {
            "status-value": orderDetail.value.statusValue,
            countdown: orderDetail.value.countdown,
            status: orderDetail.value.status
          }, null, 8, ["status-value", "countdown", "status"]),
          vue.createElementVNode("scroll-view", {
            onRefresherrefresh: onPullDownRefresh,
            "refresher-enabled": "",
            "refresher-triggered": refreshTrigger.value,
            "refresher-background": "#f2f2f2",
            "scroll-y": "",
            style: { "flex": "1", "overflow": "hidden", "padding-top": "30rpx" }
          }, [
            vue.createCommentVNode(" 消息列表 "),
            vue.createElementVNode("view", { class: "message-container" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(messageList.value, (message) => {
                  var _a;
                  return vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    {
                      key: message.id
                    },
                    [
                      vue.createCommentVNode(" 患者信息（21） "),
                      message.msgType === 21 ? (vue.openBlock(), vue.createBlock(patientInfo, {
                        key: 0,
                        info: message.msg.consultRecord
                      }, null, 8, ["info"])) : vue.createCommentVNode("v-if", true),
                      vue.createCommentVNode(" 消息通知 "),
                      message.msgType >= 31 ? (vue.openBlock(), vue.createBlock(notifyInfo, {
                        key: 1,
                        type: message.msgType
                      }, {
                        default: vue.withCtx(() => [
                          vue.createTextVNode(
                            vue.toDisplayString(message.msg.content),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["type"])) : vue.createCommentVNode("v-if", true),
                      vue.createCommentVNode(" 文字图片消息 "),
                      message.msgType <= 4 ? (vue.openBlock(), vue.createBlock(messageInfo, {
                        key: 2,
                        info: message,
                        type: message.msgType
                      }, null, 8, ["info", "type"])) : vue.createCommentVNode("v-if", true),
                      vue.createCommentVNode(" 电子处方 "),
                      message.msgType === 22 ? (vue.openBlock(), vue.createBlock(prescriptionInfo, {
                        key: 3,
                        info: message.msg.prescription
                      }, null, 8, ["info"])) : vue.createCommentVNode("v-if", true),
                      vue.createCommentVNode(" 医生评价（未评价） "),
                      message.msgType === 23 ? (vue.openBlock(), vue.createBlock(rateInfo, {
                        key: 4,
                        "order-id": props.orderId,
                        "doctor-id": (_a = orderDetail.value.docInfo) == null ? void 0 : _a.id
                      }, null, 8, ["order-id", "doctor-id"])) : vue.createCommentVNode("v-if", true),
                      vue.createCommentVNode(" 医生评价（已评价） "),
                      message.msgType === 24 ? (vue.openBlock(), vue.createBlock(rateInfo, {
                        key: 5,
                        evaluateDoc: message.msg.evaluateDoc,
                        "has-evaluate": ""
                      }, null, 8, ["evaluateDoc"])) : vue.createCommentVNode("v-if", true)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ], 40, ["refresher-triggered"]),
          vue.createCommentVNode(" 发送消息 "),
          vue.createElementVNode("view", { class: "message-bar" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              [
                vue.createVNode(_component_uni_easyinput, {
                  modelValue: textMessage.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => textMessage.value = $event),
                  onConfirm: onInputConfirm,
                  disabled: orderDetail.value.status !== 3,
                  clearable: false,
                  "input-border": false,
                  "placeholder-style": "font-size: 32rpx; color: #c3c3c5;",
                  placeholder: "问医生"
                }, null, 8, ["modelValue", "disabled"]),
                vue.createElementVNode("view", {
                  onClick: onImageButtonClick,
                  class: "image-button"
                }, [
                  vue.createVNode(_component_uni_icons, {
                    size: "40",
                    color: "#979797",
                    type: "image"
                  })
                ])
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const Subpkg_consultRoomIndex = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/room/index.vue"]]);
  function debounce(fn, delay = 500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }
  const _sfc_main$c = {
    __name: "order-list",
    props: {
      type: {
        type: Number,
        default: 1
      }
    },
    setup(__props) {
      const props = __props;
      const current = vue.ref(1);
      const pageSize = 5;
      const orderList2 = vue.ref([]);
      const loadingStatus = vue.ref("loading");
      const hasMore = vue.ref(true);
      const refresherTriggered = vue.ref(false);
      const onScrollToLower = debounce(() => {
        if (hasMore.value)
          getOrderList();
      }, 400);
      async function onScrollRefresh() {
        current.value = 1;
        orderList2.value = [];
        refresherTriggered.value = true;
        await getOrderList();
        refresherTriggered.value = false;
      }
      async function getOrderList() {
        loadingStatus.value = "loading";
        const { code, data, message } = await orderListApi$1({
          type: props.type,
          current: current.value,
          pageSize
        });
        if (code !== 1e4)
          return uni.utils.toast(message);
        orderList2.value = [...orderList2.value, ...data.rows];
        current.value++;
        hasMore.value = current.value <= data.pageTotal;
        loadingStatus.value = hasMore.value ? "more" : "noMore";
      }
      getOrderList();
      return (_ctx, _cache) => {
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$4);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$4);
        const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1$2);
        return vue.openBlock(), vue.createElementBlock("scroll-view", {
          "refresher-enabled": "",
          "refresher-triggered": refresherTriggered.value,
          onRefresherrefresh: onScrollRefresh,
          onScrolltolower: _cache[0] || (_cache[0] = (...args) => vue.unref(onScrollToLower) && vue.unref(onScrollToLower)(...args)),
          "refresher-background": "#f6f6f6",
          class: "uni-scroll-view",
          "scroll-y": ""
        }, [
          vue.createElementVNode("view", { class: "consult-list" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(orderList2.value, (order) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: order.id,
                  class: "consult-list-item"
                }, [
                  vue.createElementVNode("view", { class: "consult-header" }, [
                    vue.createElementVNode("view", { class: "label" }, [
                      vue.createElementVNode("image", {
                        class: "doctor-avatar",
                        src: order.docInfo.avatar
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(order.typeValue) + "（自动分配医生）",
                        1
                        /* TEXT */
                      )
                    ]),
                    order.status === 1 ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "status color-1"
                    }, "待支付")) : vue.createCommentVNode("v-if", true),
                    order.status === 2 ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 1,
                      class: "status color-2"
                    }, "待接诊")) : vue.createCommentVNode("v-if", true),
                    order.status === 3 ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 2,
                      class: "status color-2"
                    }, "咨询中")) : vue.createCommentVNode("v-if", true),
                    order.status === 4 ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 3,
                      class: "status color-3"
                    }, "已完成")) : vue.createCommentVNode("v-if", true),
                    order.status === 5 ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 4,
                      class: "status color-3"
                    }, "已取消")) : vue.createCommentVNode("v-if", true)
                  ]),
                  vue.createElementVNode("navigator", {
                    class: "consult-body",
                    "hover-class": "none",
                    url: `/subpkg_consult/order_detail/index?id=${order.id}`
                  }, [
                    vue.createVNode(
                      _component_uni_list,
                      { border: false },
                      {
                        default: vue.withCtx(() => [
                          vue.createVNode(_component_uni_list_item, {
                            border: false,
                            title: "病情描述",
                            "right-text": order.illnessDesc
                          }, null, 8, ["right-text"]),
                          vue.createVNode(_component_uni_list_item, {
                            border: false,
                            title: "价格",
                            "right-text": "¥" + order.payment
                          }, null, 8, ["right-text"]),
                          vue.createVNode(_component_uni_list_item, {
                            border: false,
                            title: "创建时间",
                            "right-text": order.createTime
                          }, null, 8, ["right-text"])
                        ]),
                        _: 2
                        /* DYNAMIC */
                      },
                      1024
                      /* DYNAMIC_SLOTS */
                    )
                  ], 8, ["url"]),
                  order.status === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "consult-footer"
                  }, [
                    vue.createElementVNode("button", { class: "uni-button minor" }, "取消订单"),
                    vue.createElementVNode("button", { class: "uni-button" }, "去支付")
                  ])) : vue.createCommentVNode("v-if", true),
                  order.status === 2 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "consult-footer"
                  }, [
                    vue.createElementVNode("button", { class: "uni-button minor" }, "取消订单"),
                    vue.createElementVNode("button", { class: "uni-button" }, "继续咨询")
                  ])) : vue.createCommentVNode("v-if", true),
                  order.status === 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 2,
                    class: "consult-footer"
                  }, [
                    vue.createElementVNode("button", { class: "uni-button" }, "继续咨询")
                  ])) : vue.createCommentVNode("v-if", true),
                  order.status === 4 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 3,
                    class: "consult-footer"
                  }, [
                    vue.createElementVNode("button", { class: "uni-button minor" }, "问诊记录"),
                    order.evaluateId ? (vue.openBlock(), vue.createElementBlock("button", {
                      key: 0,
                      class: "uni-button minor"
                    }, " 查看评价 ")) : (vue.openBlock(), vue.createElementBlock("button", {
                      key: 1,
                      class: "uni-button"
                    }, "去评价"))
                  ])) : vue.createCommentVNode("v-if", true),
                  order.status === 5 ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 4,
                    class: "consult-footer"
                  }, [
                    vue.createElementVNode("button", { class: "uni-button minor" }, "删除订单"),
                    vue.createElementVNode("button", { class: "uni-button" }, "咨询其它医生")
                  ])) : vue.createCommentVNode("v-if", true)
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            vue.createCommentVNode(" 加载状态 "),
            vue.createVNode(_component_uni_load_more, {
              status: loadingStatus.value,
              color: "#C3C3C5",
              "icon-size": 16,
              "content-text": {
                contentdown: "上拉显示更多",
                contentrefresh: "数据正在加载中...",
                contentnomore: "没有更多数据了"
              }
            }, null, 8, ["status", "content-text"])
          ])
        ], 40, ["refresher-triggered"]);
      };
    }
  };
  const orderList = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-fea25753"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/order_list/components/order-list.vue"]]);
  const _sfc_main$b = {
    __name: "index",
    setup(__props) {
      const tabIndex = vue.ref(0);
      const orderTabs = vue.reactive([
        { label: "问医生", type: 1, rendered: true },
        { label: "极速问诊", type: 2, rendered: false },
        { label: "开药问诊", type: 3, rendered: false }
      ]);
      function onOrderTabChange({ index }) {
        tabIndex.value = index;
        orderTabs[index].rendered = true;
      }
      return (_ctx, _cache) => {
        const _component_custom_tabs = resolveEasycom(vue.resolveDynamicComponent("custom-tabs"), __easycom_0$6);
        return vue.openBlock(), vue.createElementBlock("view", { class: "consult-page" }, [
          vue.createElementVNode("view", { class: "consult-status-tabs" }, [
            vue.createVNode(_component_custom_tabs, {
              onClick: onOrderTabChange,
              list: orderTabs
            }, null, 8, ["list"])
          ]),
          vue.createCommentVNode(" 订单列表 "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(orderTabs, (order, index) => {
              return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                key: order.type
              }, [
                order.rendered ? (vue.openBlock(), vue.createBlock(orderList, {
                  key: 0,
                  type: order.type
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ])), [
                [vue.vShow, tabIndex.value === index]
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const Subpkg_consultOrder_listIndex = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/order_list/index.vue"]]);
  const _sfc_main$a = {
    name: "UniNoticeBar",
    emits: ["click", "getmore", "close"],
    props: {
      text: {
        type: String,
        default: ""
      },
      moreText: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: "#FFF9EA"
      },
      speed: {
        // 默认1s滚动100px
        type: Number,
        default: 100
      },
      color: {
        type: String,
        default: "#FF9A43"
      },
      fontSize: {
        type: Number,
        default: 14
      },
      moreColor: {
        type: String,
        default: "#FF9A43"
      },
      single: {
        // 是否单行
        type: [Boolean, String],
        default: false
      },
      scrollable: {
        // 是否滚动，添加后控制单行效果取消
        type: [Boolean, String],
        default: false
      },
      showIcon: {
        // 是否显示左侧icon
        type: [Boolean, String],
        default: false
      },
      showGetMore: {
        // 是否显示右侧查看更多
        type: [Boolean, String],
        default: false
      },
      showClose: {
        // 是否显示左侧关闭按钮
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      const elIdBox = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        textWidth: 0,
        boxWidth: 0,
        wrapWidth: "",
        webviewHide: false,
        elId,
        elIdBox,
        show: true,
        animationDuration: "none",
        animationPlayState: "paused",
        animationDelay: "0s"
      };
    },
    computed: {
      isShowGetMore() {
        return this.showGetMore === true || this.showGetMore === "true";
      },
      isShowClose() {
        return (this.showClose === true || this.showClose === "true") && (this.showGetMore === false || this.showGetMore === "false");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
      this.$nextTick(() => {
        this.initSize();
      });
    },
    methods: {
      initSize() {
        if (this.scrollable) {
          let query = [];
          let textQuery = new Promise((resolve, reject) => {
            uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
              this.textWidth = ret[0].width;
              resolve();
            });
          });
          let boxQuery = new Promise((resolve, reject) => {
            uni.createSelectorQuery().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((ret) => {
              this.boxWidth = ret[0].width;
              resolve();
            });
          });
          query.push(textQuery);
          query.push(boxQuery);
          Promise.all(query).then(() => {
            this.animationDuration = `${this.textWidth / this.speed}s`;
            this.animationDelay = `-${this.boxWidth / this.speed}s`;
            setTimeout(() => {
              this.animationPlayState = "running";
            }, 1e3);
          });
        }
      },
      loopAnimation() {
      },
      clickMore() {
        this.$emit("getmore");
      },
      close() {
        this.show = false;
        this.$emit("close");
      },
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    return $data.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: "uni-noticebar",
        style: vue.normalizeStyle({ backgroundColor: $props.backgroundColor }),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
      },
      [
        $props.showIcon === true || $props.showIcon === "true" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 0,
          class: "uni-noticebar-icon",
          type: "sound",
          color: $props.color,
          size: $props.fontSize * 1.5
        }, null, 8, ["color", "size"])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            ref: "textBox",
            class: vue.normalizeClass(["uni-noticebar__content-wrapper", {
              "uni-noticebar__content-wrapper--scrollable": $props.scrollable,
              "uni-noticebar__content-wrapper--single": !$props.scrollable && ($props.single || $props.moreText)
            }]),
            style: vue.normalizeStyle({ height: $props.scrollable ? $props.fontSize * 1.5 + "px" : "auto" })
          },
          [
            vue.createElementVNode("view", {
              id: $data.elIdBox,
              class: vue.normalizeClass(["uni-noticebar__content", {
                "uni-noticebar__content--scrollable": $props.scrollable,
                "uni-noticebar__content--single": !$props.scrollable && ($props.single || $props.moreText)
              }])
            }, [
              vue.createElementVNode("text", {
                id: $data.elId,
                ref: "animationEle",
                class: vue.normalizeClass(["uni-noticebar__content-text", {
                  "uni-noticebar__content-text--scrollable": $props.scrollable,
                  "uni-noticebar__content-text--single": !$props.scrollable && ($props.single || $props.showGetMore)
                }]),
                style: vue.normalizeStyle({
                  color: $props.color,
                  fontSize: $props.fontSize + "px",
                  lineHeight: $props.fontSize * 1.5 + "px",
                  width: $data.wrapWidth + "px",
                  "animationDuration": $data.animationDuration,
                  "-webkit-animationDuration": $data.animationDuration,
                  animationPlayState: $data.webviewHide ? "paused" : $data.animationPlayState,
                  "-webkit-animationPlayState": $data.webviewHide ? "paused" : $data.animationPlayState,
                  animationDelay: $data.animationDelay,
                  "-webkit-animationDelay": $data.animationDelay
                })
              }, vue.toDisplayString($props.text), 15, ["id"])
            ], 10, ["id"])
          ],
          6
          /* CLASS, STYLE */
        ),
        $options.isShowGetMore ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "uni-noticebar__more uni-cursor-point",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clickMore && $options.clickMore(...args))
        }, [
          $props.moreText.length > 0 ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              style: vue.normalizeStyle({ color: $props.moreColor, fontSize: $props.fontSize + "px" })
            },
            vue.toDisplayString($props.moreText),
            5
            /* TEXT, STYLE */
          )) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 1,
            type: "right",
            color: $props.moreColor,
            size: $props.fontSize * 1.1
          }, null, 8, ["color", "size"]))
        ])) : vue.createCommentVNode("v-if", true),
        $options.isShowClose ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "uni-noticebar-close uni-cursor-point"
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "closeempty",
            color: $props.color,
            size: $props.fontSize * 1.1,
            onClick: $options.close
          }, null, 8, ["color", "size", "onClick"])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      4
      /* STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$4], ["__scopeId", "data-v-c3453ea3"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue"]]);
  const _sfc_main$9 = {};
  function _sfc_render$3(_ctx, _cache) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$4);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$4);
    const _component_uni_notice_bar = resolveEasycom(vue.resolveDynamicComponent("uni-notice-bar"), __easycom_3);
    const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_4$1);
    return vue.openBlock(), vue.createBlock(_component_scroll_page, { "background-color": "#f6f6f6" }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "consult-page" }, [
          vue.createElementVNode("view", { class: "page-header" }, [
            vue.createCommentVNode(" 订单状态 "),
            vue.createElementVNode("view", { class: "order-status" }, [
              vue.createElementVNode("view", { class: "label" }, [
                vue.createElementVNode("text", { class: "title" }, "图文问诊 39元"),
                vue.createElementVNode("text", { class: "tips" }, " 取消/退款进度：您的订单已取消，诊金将在1-7个工作日内退回原支付账户。 ")
              ]),
              vue.createElementVNode("text", { class: "status" }, "待支付")
            ]),
            vue.createCommentVNode("  医生信息 "),
            vue.createElementVNode("view", { class: "consult-doctor" }, [
              vue.createElementVNode("text", { class: "lable" }, "服务医生信息"),
              vue.createElementVNode("view", { class: "doctor" }, [
                vue.createElementVNode("image", {
                  class: "doctor-avatar",
                  src: "/static/uploads/doctor-avatar.jpg"
                }),
                vue.createElementVNode("view", { class: "doctor-info" }, [
                  vue.createElementVNode("view", { class: "meta" }, [
                    vue.createElementVNode("text", { class: "name" }, "王医生"),
                    vue.createElementVNode("text", { class: "title" }, "内分泌科 | 主任医师")
                  ]),
                  vue.createElementVNode("view", { class: "meta" }, [
                    vue.createElementVNode("text", { class: "tag" }, "三甲"),
                    vue.createElementVNode("text", { class: "hospital" }, "积水潭医院")
                  ])
                ]),
                vue.createElementVNode("view", { class: "arrow" }, [
                  vue.createVNode(_component_uni_icons, {
                    size: "18",
                    color: "#C3C3C5",
                    type: "forward"
                  })
                ])
              ])
            ])
          ]),
          vue.createCommentVNode(" 患者信息 "),
          vue.createElementVNode("view", { class: "consult-patient" }, [
            vue.createElementVNode("view", { class: "list-title" }, "患者资料"),
            vue.createVNode(_component_uni_list, { border: false }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_list_item, {
                  title: "患者信息",
                  "right-text": "李富贵 | 男 | 30岁"
                }),
                vue.createVNode(_component_uni_list_item, {
                  title: "病情描述",
                  note: "头痛，头晕，恶心"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          vue.createCommentVNode(" 订单信息 "),
          vue.createElementVNode("view", { class: "order-info" }, [
            vue.createElementVNode("view", { class: "list-title" }, "订单信息"),
            vue.createVNode(_component_uni_list, { border: false }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_uni_list_item, {
                  title: "订单编号",
                  "right-text": "202201127465"
                }),
                vue.createVNode(_component_uni_list_item, {
                  title: "创建时间",
                  "right-text": "2022-01-23 09:23:46"
                }),
                vue.createVNode(_component_uni_list_item, {
                  title: "取消时间",
                  "right-text": "2022-01-23 09:23:46"
                }),
                vue.createVNode(_component_uni_list_item, {
                  title: "应付款",
                  "right-text": "¥49"
                }),
                vue.createVNode(_component_uni_list_item, { title: "优惠券" }, {
                  footer: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "uni-list-text-red" }, "-¥10.00")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_uni_list_item, { title: "积分抵扣" }, {
                  footer: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "uni-list-text-red" }, "-¥1.00")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_uni_list_item, { title: "实付款" }, {
                  footer: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "uni-list-text-red" }, "¥39.00")
                  ]),
                  _: 1
                  /* STABLE */
                }),
                vue.createVNode(_component_uni_list_item, {
                  title: "支付时间",
                  "right-text": "2022-01-23 09:23:46"
                }),
                vue.createVNode(_component_uni_list_item, {
                  title: "支付方式",
                  "right-text": "微信支付"
                })
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          vue.createElementVNode("view", { class: "notice-bar" }, [
            vue.createVNode(_component_uni_notice_bar, { text: "请在 00:14:59 内完成支付，超时订单将取消" })
          ]),
          vue.createCommentVNode(" 底部 "),
          vue.createElementVNode("view", { class: "toolbar" }, [
            (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "buttons"
            }, [
              vue.createElementVNode("view", { class: "delete-botton" }, [
                vue.createVNode(_component_uni_icons, {
                  size: "24",
                  color: "#848484",
                  type: "trash"
                }),
                vue.createElementVNode("text", null, "删除订单")
              ]),
              vue.createElementVNode("button", { class: "uni-button" }, "再次购买")
            ]))
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  const Subpkg_consultOrder_detailIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$3], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_consult/order_detail/index.vue"]]);
  const AD_URL = "https://wxac1.dcloud.net.cn/openPage/acs";
  const AD_REPORT_URL = "https://wxac1.dcloud.net.cn/openPage/acs";
  const events = {
    load: "load",
    close: "close",
    error: "error"
  };
  const _sfc_main$8 = {
    name: "AdInteractive",
    props: {
      options: {
        type: [Object, Array],
        default() {
          return {};
        }
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      adpid: {
        type: [Number, String],
        default: ""
      },
      openType: {
        type: String,
        default: "interactive"
      },
      openPagePath: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        adData: null,
        loading: false,
        errorMessage: ""
      };
    },
    created() {
      this._interactiveUrl = null;
      if (this.openPagePath) {
        this.getAdData();
      }
    },
    methods: {
      getAdData() {
        if (!this.adpid) {
          this.$emit(events.error, {
            code: -5002,
            message: "invalid adpid"
          });
          return;
        }
        this.loading = true;
        uni.request({
          url: AD_URL,
          method: "POST",
          data: {
            adpid: this.adpid
          },
          timeout: 5e3,
          dataType: "json",
          success: (res) => {
            if (res.statusCode !== 200) {
              this.$emit(events.error, {
                errCode: res.statusCode,
                errMsg: res.statusCode
              });
              return;
            }
            const responseData = res.data;
            if (responseData.ret === 0) {
              this._interactiveUrl = responseData.data.adp_url;
              this.adData = {
                imgUrl: responseData.data.icon_url,
                openPath: this.openPagePath + "?url=" + encodeURIComponent(this._interactiveUrl)
              };
              this.$emit(events.load, this.adData);
            } else {
              const errMsg = {
                errCode: responseData.ret,
                errMsg: responseData.msg
              };
              this.errorMessage = errMsg;
              this.$emit(events.error, errMsg);
            }
          },
          fail: (err) => {
            this.$emit(events.error, {
              errCode: "",
              errMsg: err.errMsg
            });
          },
          complete: () => {
            this.loading = false;
          }
        });
      },
      onclick() {
        if (this.disabled) {
          return;
        }
        if (!this._interactiveUrl) {
          return;
        }
        uni.navigateTo({
          url: this.adData.openPath
        });
        this._report();
      },
      _report() {
        uni.request({
          url: AD_REPORT_URL,
          data: {
            adpid: this.adpid,
            t: "10019"
          },
          timeout: 5e3,
          dataType: "json"
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onclick && $options.onclick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {
        options: $props.options,
        data: $data.adData,
        loading: $data.loading,
        error: $data.errorMessage
      }, void 0, true)
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$2], ["__scopeId", "data-v-f3f1de87"], ["__file", "D:/Program Files/HBuilderX.3.8.12.20230817/HBuilderX/plugins/uniapp-cli-vite/node_modules/@dcloudio/uni-components/lib/ad-interactive/ad-interactive.vue"]]);
  var util = {};
  util.getWeixinCode = function() {
    return new Promise((resolve, reject) => {
      plus.oauth.getServices((services) => {
        let weixinAuthService = services.find((service) => {
          return service.id === "weixin";
        });
        if (weixinAuthService) {
          weixinAuthService.authorize(function(res) {
            resolve(res.code);
          }, function(err) {
            formatAppLog("log", "at uni_modules/uni-pay/js_sdk/js_sdk.js:30", err);
            reject(new Error("获取微信code失败"));
          });
        }
      });
    });
  };
  util.getAlipayCode = function() {
    return new Promise((resolve, reject) => {
      uni.login({
        provider: "alipay",
        success(res) {
          resolve(res.code);
        },
        fail(err) {
          reject(new Error("获取支付宝code失败，可能是没有关联appid或你的支付宝开发者工具还没有登录"));
        }
      });
    });
  };
  util.checkPlatform = function() {
  };
  util.getH5Env = function() {
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger" && ua.match(/miniprogram/i) == "miniprogram") {
      return "mp-weixin";
    }
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return "h5-weixin";
    }
    if (ua.match(/alipay/i) == "alipay" && ua.match(/miniprogram/i) == "miniprogram") {
      return "mp-alipay";
    }
    if (ua.match(/alipay/i) == "alipay") {
      return "h5-alipay";
    }
    return "h5";
  };
  util.timeFormat = function(time, fmt = "yyyy-MM-dd hh:mm:ss", targetTimezone = 8) {
    try {
      if (!time) {
        return "";
      }
      if (typeof time === "string" && !isNaN(time))
        time = Number(time);
      let date;
      if (typeof time === "number") {
        if (time.toString().length == 10)
          time *= 1e3;
        date = new Date(time);
      } else {
        date = time;
      }
      const dif = date.getTimezoneOffset();
      const timeDif = dif * 60 * 1e3 + targetTimezone * 60 * 60 * 1e3;
      const east8time = date.getTime() + timeDif;
      date = new Date(east8time);
      let opt = {
        "M+": date.getMonth() + 1,
        //月份
        "d+": date.getDate(),
        //日
        "h+": date.getHours(),
        //小时
        "m+": date.getMinutes(),
        //分
        "s+": date.getSeconds(),
        //秒
        "q+": Math.floor((date.getMonth() + 3) / 3),
        //季度
        "S": date.getMilliseconds()
        //毫秒
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let k2 in opt) {
        if (new RegExp("(" + k2 + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? opt[k2] : ("00" + opt[k2]).substr(("" + opt[k2]).length));
        }
      }
      return fmt;
    } catch (err) {
      return time;
    }
  };
  const _sfc_main$7 = {
    data() {
      return {
        options: {
          adpid: "",
          main_color: "",
          order_no: "",
          out_trade_no: "",
          total_fee: "",
          pay_date: "",
          return_url: ""
        },
        images: {
          success: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAYAAAD6+a2dAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAACAlJREFUeNrtnVlszF8Ux++d4B+JWhqERGJvlRJLJQ1RHsQeFEXFUmt5scWWiPVB2qKERIglSpEg9vJAYn8RQlRFI5ryYm+prbZ7/g/fOdPOtNPfdDrjzEx/n5dvf3fuTM895869v3t/997RKswhQ4ZM69a4SkpSWmmle/TAdbdu0JgYaIsW0ObNoU2auH/a16/QT5+gpaXQwkLos2fQggJFihTdvq0d2qEd795J+yHiQaD794dmZxMREeXnQ40hEfj/5ufDru3boQkJ0v4KW+DApk2hK1bAwU+fygS4rhQUuMphyJCJipL2b8gBR0VHQzdtgpaUSIcuOHC5Nm6EcpdUj0DBtcY3YuZMXL97Jx0aGT5+hC5ZAnU4pOMTvMAbMmS6dEFB796Vdn1ocucOtHNn6XgFLvBERJScDC0tlXZxeFBWBp06VTp+fgbc4YDu2CHtyrCHRxdEFNJdBAxt1AiGHj8u7bfI5Ngx+Llhw0DFTQcq8JiAOXsWqaNGyVXF+kBeHiaikpMxEfX7t7+f5HeTghqpNQK/fz9S7cD/G0aPht9zchAH/7uGOvYp2dnQmTOlXVI/SU1FS5CZ6e8n1LoLQJOfkoIaePKktAtsKjNtmtZaa33ihK/v8LkCoKnh8emDB9BmzaSLbFOZz5+hffuiIhQVWb3Dsgtw9fVKKaWOHIHagQ9NOC6HD7vHzTvW9wCkSNHcubgYMEC6iDa+MGgQ1PrezGsNQQ2KjkYFKCxEn9+ypXTRbGoDr1OIjUWXwOscKrBoAZYutQMfzvBCmcWLveWo0gLw83gEvrgYqfXwsWVEUVKClrxDB0wcffnCr3hpARYsgNqBjwyio/GFnj/f85WqFUArrfScOdIm1w/KyqA8hR5sZs/2THFVAF5zh6u4OGnXRDbfv0PHjoWmpEDPnQvu/42Px819nz6c4tECpKZKuyay+fEDOmYM7spv3oT+/Yv06dOhL18GzQRSpGjaNL6sqABaaaWHDZN2UWTy6xc0JQUBv369+ny8AKR9++DaM3Qo/6Vd6+q10kq/eeNMrvNjYhullOLHtJMmIfAXLnjmQJM8YgSuLl6ENmgQXLuI0BK0bu1sAZKSoHbgA8OfP9CpU2sOPPfF/FAt2IFn+DF+UpIDf8THS7ssMuC+PC0NgT9zxjMHWtx27XDFFUNqv0CPHs4WIDZWxoBIgZvURYsQ+GPHquQwZMg0a4Yv3OXLSOWKIEVsrLMCdO0qa0i4woFPT8cMG6+MqpTDkCHz338I/PnzSO3ZU9pyEBPj7HPsuf5aQ4oUrVrlNfBuj2MPHIAOHixttjstWzpbAM9dslIcOQLH8i7cUGXFCgR+27aa82VkQHl8H0KQIkVRUc6a+vOn7HLne/fcl5W3aIHr69dl7fJk7VpLvxoyZNLTpS31jfJy4QrAO4U6dqzekVwhcnNlHbV5s2+BHzMG+f/8kbXXV1wV4MMHGQNmzbJ0LBFVbCbdsuWfmWbIkMnK8s2+xETot28yfvS3fO/fOwtQXCxjxdOn7uNiH7ouIiKaMwf661dw7Nq1yzc7OnWCvn0r47+6UlTkLMj9+2I2GDJkXrzARadOtasII0dCv3wJjDF790K9z4jC3latkO/5czG/BYR795yODJW9fK9fw8G9evlcEQwZMj174v2vXvn3f3kVrfcdNni9cWNopGxvP3rUWWA+BEmaNm0wYXLjBgxMTLR6B4Zj+fm4SkzE8ObRI+uao0jRqVPQefMwg2dM9YF3OJAvNxepEbA6mhf7ooATJ0rXxerhffJDhvhcLueUK/Tateo/99QpvG798AX5d++W9kRwSE52HbOGBKnTtqwoL3cZXKuK0KAB3rdvH/TKFdfUrE+BX7VKuuTB4e9f+KHSDDBeePxY2rSa4bt+31cuIT8PI6331SP/lCkuR0UahgyZhw+5vBU3PaRI0bVrvjpWBg4gTwwtXGj1DvTtRFb76OEYXheRk+N0T+ieyFEnrl714oCEBOkK6h8bNvjrCrw/Lg4aqcfTedK7t4VD+ATOcCMjA2q9sgn52raFSk2E/WsKCjz9ULWJI0WKuAkMN1avhu7ZgwJXbcJdJ3aSIkV5eUgN9iLMUOHgQc8UL1vDoqIwHuflyeG6Q+jECQS60jMHrbTSvPhy+HBpC/8N3reGVRkHcwZ8g3hO3P8+VpbUVASc1zt8+ACtL4Fndu70DDxjsT2cv/k8U9iqlXRRbGrD27f45sfGogLwCSIVeB3mYPjE5+WvWSNdFJtaQooUrVzpLfCMj3fLfFd9+zZ04EDp8tnUxK1b0CFDeB7EW077kKiIgk8A6dcvYIdEMfjAFy/46Zl0UW2qY+5cXwPP1HqqE33K6dOoCHxQpI0sWVnediJZ4fdeQPd7g0OHoGlp0q6oXxw/Dp0xw9t6BisCdFh0w4YYb/MBB/aZwcHl0iW0wBMmiB0WzbgMIEWKxo2DcotgE1hycwMV+KDBXQNahq1bpR9/hDe8QCczExqG2/dh+Pjx0PryuLWufP4MnTxZOn4Brgi8jv7WLWkXhyY3b0Kr7pSKGFBAz5+NC9eNFXWFfzZuwQL2i3R8hCpE8+bQ9evdHRNp8Ba8detcB0bYuAPHNGkCRy1fDn3yRDp0/sErq5Yt43JJ+zdsgSP79HEfXTx6BJVavcvLqx8+5M2kSK9hzV2IEfZ9jmt9u/PUK4yTu3fHdVwcrvnn4/nM3Bp+Pp4UKeKHKiUlyF9Y6Dq4QiuttOfPx/NCk/Djf0hQD04eJaNOAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTEwLTI3VDE0OjAzOjAyKzA4OjAwisT1owAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0xMC0yN1QxNDowMzowMiswODowMPuZTR8AAABQdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX3ZwM212emVpcjcvemhpZnVjaGVuZ2dvbmcuc3ZntdPldAAAAABJRU5ErkJggg=="
        },
        // 默认颜色
        color: {
          wxpay: "#01be6e",
          alipay: "#108ee9"
        }
      };
    },
    // 监听 - 页面每次【加载时】执行(如：前进)
    onLoad(options = {}) {
      this.options = options;
    },
    // 监听 - 页面【首次渲染完成时】执行。注意如果渲染速度快，会在页面进入动画完成前触发
    onReady() {
    },
    // 监听 - 页面每次【显示时】执行(如：前进和返回) (页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面)
    onShow() {
    },
    // 监听 - 页面每次【隐藏时】执行(如：返回)
    onHide() {
    },
    // 函数
    methods: {
      timeFormat: util.timeFormat,
      queryOrder() {
        let url2 = this.options.return_url + `?out_trade_no=${this.options.out_trade_no}&order_no=${this.options.order_no}`;
        if (url2.indexOf("/") !== 0)
          url2 = `/${url2}`;
        uni.navigateTo({
          url: url2
        });
      },
      onaderror(e) {
        formatAppLog("log", "at uni_modules/uni-pay/pages/success/success.vue:88", "ad-error", e);
      }
    },
    // 监听器
    watch: {
      "mainColorCom": {
        immediate: true,
        handler(newVal, oldVal) {
          setTimeout(function() {
            uni.setNavigationBarColor({
              frontColor: "#ffffff",
              backgroundColor: newVal
            });
          }, 0);
        }
      }
    },
    // 计算属性
    computed: {
      mainColorCom() {
        let color = "";
        color = this.options.main_color || this.color.wxpay;
        return color;
      },
      styleCom() {
        return `--main:${this.mainColorCom};`;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ad_interactive = resolveEasycom(vue.resolveDynamicComponent("ad-interactive"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "app",
        style: vue.normalizeStyle($options.styleCom)
      },
      [
        vue.createElementVNode("view", { class: "header" }, [
          vue.createElementVNode("image", {
            src: $data.images.success,
            class: "success-image"
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "success-title" }, "支付成功"),
          vue.createElementVNode("view", { class: "hr" })
        ]),
        vue.createElementVNode("view", { class: "info-box" }, [
          vue.createElementVNode(
            "view",
            { class: "info-amount" },
            "¥ " + vue.toDisplayString(($data.options.total_fee / 100).toFixed(2)),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "left-circle" }),
          vue.createElementVNode("view", { class: "right-circle" }),
          vue.createElementVNode("view", { class: "info-main" }, [
            vue.createElementVNode("view", { class: "info-cell" }, [
              vue.createElementVNode("view", { class: "left" }, "订单编号"),
              vue.createElementVNode(
                "view",
                { class: "right" },
                vue.toDisplayString($data.options.order_no),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "info-cell" }, [
              vue.createElementVNode("view", { class: "left" }, "付款时间"),
              vue.createElementVNode(
                "view",
                { class: "right" },
                vue.toDisplayString($options.timeFormat($data.options.pay_date, "yyyy-MM-dd hh:mm:ss")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        vue.createCommentVNode(" 广告位开始 "),
        vue.createElementVNode("view", { class: "uni-ad" }, [
          vue.createCommentVNode(" 红包广告"),
          $data.options.adpid ? (vue.openBlock(), vue.createBlock(_component_ad_interactive, {
            key: 0,
            adpid: $data.options.adpid,
            "open-page-path": "/uni_modules/uni-pay/pages/ad-interactive-webview/ad-interactive-webview",
            onError: $options.onaderror
          }, {
            default: vue.withCtx(({ data, loading, error }) => [
              data ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "ad-interactive"
              }, [
                vue.createCommentVNode(" 可以自定义此图片，组件提供了默认素材，通过 uni-ad 后台配置 "),
                vue.createElementVNode("image", {
                  src: data.imgUrl,
                  mode: "widthFix"
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["adpid", "onError"])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" 注意：h5下的广告出来有延迟，后续要优化 "),
          vue.createCommentVNode(' <ad v-if="options.adpid" :adpid="options.adpid" type="banner" @error="onaderror"></ad> ')
        ]),
        vue.createCommentVNode(" 广告位结束 "),
        $data.options.return_url ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "button-query",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.queryOrder && $options.queryOrder(...args))
        }, "查看订单")) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "footer-hr" })
      ],
      4
      /* STYLE */
    );
  }
  const Uni_modulesUniPayPagesSuccessSuccess = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$1], ["__scopeId", "data-v-86597cd6"], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-pay/pages/success/success.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        url: ""
      };
    },
    onLoad(options) {
      if (options && options.url) {
        this.url = decodeURIComponent(options.url);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("web-view", { src: $data.url }, null, 8, ["src"]);
  }
  const Uni_modulesUniPayPagesAdInteractiveWebviewAdInteractiveWebview = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render], ["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/uni_modules/uni-pay/pages/ad-interactive-webview/ad-interactive-webview.vue"]]);
  const preOrderApi = (prescriptionId) => {
    return http.get("/patient/medicine/order/pre", { params: { prescriptionId } });
  };
  const createOrderApi = (id, addressId) => {
    return http.post("/patient/medicine/order", { id, addressId });
  };
  const orderDetailApi = (id) => {
    return http.get(`/patient/medicine/order/detail/${id}`);
  };
  const orderListApi = (status = 10, current = 1, pageSize = 10) => {
    return http.get("/patient/medicine/order/mylist", {
      params: { status, current, pageSize }
    });
  };
  const logisticsApi = (id) => {
    return http.get(`/patient/order/${id}/logistics`);
  };
  const addressListApi = () => {
    return http.get("/patient/order/address");
  };
  const _sfc_main$5 = {
    __name: "index",
    props: {
      id: String
    },
    setup(__props) {
      const props = __props;
      const preOrderInfo = vue.ref({});
      const addressInfo = vue.ref({});
      const orderId = vue.ref("");
      const paymentRef = vue.ref();
      function onPaymentClose() {
      }
      async function onPaymentConfirm({ index }) {
        if (index === 0)
          return uni.utils.toast("暂不支持微信支付!");
        const { code, data, message } = await paymentApi({
          orderId: orderId.value,
          paymentMethod: index,
          payCallback: "http://localhost:5173/#/subpkg_medicine/pay_result/index"
        });
        if (code !== 1e4)
          return uni.utils.toast(message);
        window.location.href = data.payUrl;
      }
      async function onPaymentButtonClick() {
        const { code, data, message } = await createOrderApi(
          props.id,
          addressInfo.value.id
        );
        if (code !== 1e4)
          return uni.utils.toast(message);
        orderId.value = data.id;
        paymentRef.value.open();
      }
      async function getAddressList() {
        const { code, data, message } = await addressListApi();
        if (code !== 1e4)
          return uni.utils.toast(message);
        addressInfo.value = data[0];
      }
      async function createPreOrder() {
        if (!props.id)
          return;
        const { code, data, message } = await preOrderApi(props.id);
        if (code !== 1e4)
          return uni.utils.toast(message);
        preOrderInfo.value = data;
      }
      getAddressList();
      createPreOrder();
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$4);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$4);
        const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_4$1);
        const _component_custom_payment = resolveEasycom(vue.resolveDynamicComponent("custom-payment"), __easycom_4);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(_component_scroll_page, { "background-color": "#f6f6f6" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "medicine-page" }, [
                  vue.createElementVNode("view", { class: "page-header" }, [
                    vue.createElementVNode("view", { class: "order-shippment" }, [
                      vue.createElementVNode("view", { class: "region" }, [
                        vue.createVNode(_component_uni_icons, {
                          size: "16",
                          color: "#FF7702",
                          type: "location-filled"
                        }),
                        vue.createTextVNode(
                          " " + vue.toDisplayString(addressInfo.value.city) + " " + vue.toDisplayString(addressInfo.value.county),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode(
                        "view",
                        { class: "detail" },
                        vue.toDisplayString(addressInfo.value.addressDetail),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "view",
                        { class: "receiver" },
                        vue.toDisplayString(addressInfo.value.receiver) + " " + vue.toDisplayString(addressInfo.value.mobile),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "order-shop" }, [
                    vue.createTextVNode(" 优医药房 "),
                    vue.createElementVNode("text", { class: "alt" }, "优医质保 假一赔十")
                  ]),
                  vue.createCommentVNode(" 药品列表 "),
                  vue.createElementVNode("view", { class: "medicine-list" }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(preOrderInfo.value.medicines, (medicine) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          key: medicine.id,
                          class: "medicine-list-item"
                        }, [
                          vue.createElementVNode("image", {
                            class: "medicine-cover",
                            src: medicine.avatar,
                            mode: "aspectFill"
                          }, null, 8, ["src"]),
                          vue.createElementVNode("view", { class: "medicine-info" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "name" },
                              vue.toDisplayString(medicine.name),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "text",
                              {
                                class: vue.normalizeClass([{ symbol: medicine.prescriptionFlag === 1 }, "symbol"])
                              },
                              vue.toDisplayString(medicine.specs),
                              3
                              /* TEXT, CLASS */
                            ),
                            vue.createElementVNode(
                              "text",
                              { class: "price" },
                              "¥" + vue.toDisplayString(medicine.amount),
                              1
                              /* TEXT */
                            )
                          ]),
                          vue.createElementVNode(
                            "view",
                            { class: "quantity" },
                            "x" + vue.toDisplayString(medicine.quantity),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "view",
                            { class: "guide" },
                            "用法用量：" + vue.toDisplayString(medicine.usageDosag),
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  vue.createCommentVNode(" 订单信息 "),
                  vue.createElementVNode("view", { class: "order-info" }, [
                    vue.createVNode(_component_uni_list, { border: false }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(_component_uni_list_item, {
                          title: "药品金额",
                          "right-text": "¥" + preOrderInfo.value.payment
                        }, null, 8, ["right-text"]),
                        vue.createVNode(_component_uni_list_item, {
                          title: "运费",
                          "right-text": "¥" + preOrderInfo.value.expressFee
                        }, null, 8, ["right-text"]),
                        vue.createVNode(_component_uni_list_item, {
                          title: "优惠券",
                          "show-arrow": "",
                          "right-text": "-¥" + preOrderInfo.value.couponDeduction
                        }, null, 8, ["right-text"]),
                        vue.createVNode(_component_uni_list_item, {
                          title: "实付款",
                          "right-text": "¥" + preOrderInfo.value.actualPayment
                        }, null, 8, ["right-text"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  vue.createCommentVNode(" 底部 "),
                  vue.createElementVNode("view", { class: "toolbar" }, [
                    vue.createElementVNode("view", { class: "total-amount" }, [
                      vue.createTextVNode(" 需付款: "),
                      vue.createElementVNode(
                        "text",
                        { class: "number" },
                        "¥" + vue.toDisplayString(preOrderInfo.value.actualPayment),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createElementVNode("view", { class: "buttons" }, [
                      vue.createElementVNode("button", {
                        onClick: onPaymentButtonClick,
                        class: "uni-button"
                      }, " 立即支付 ")
                    ])
                  ])
                ])
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createCommentVNode(" 支付渠道 "),
            vue.createVNode(_component_custom_payment, {
              onClose: onPaymentClose,
              onConfirm: onPaymentConfirm,
              amount: preOrderInfo.value.actualPayment,
              "order-id": orderId.value,
              ref_key: "paymentRef",
              ref: paymentRef
            }, null, 8, ["amount", "order-id"])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const Subpkg_medicinePaymentIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_medicine/payment/index.vue"]]);
  const _sfc_main$4 = {
    __name: "index",
    props: {
      orderId: String
    },
    setup(__props) {
      const props = __props;
      const orderDetail = vue.ref({});
      async function getOrderDetail(orderId) {
        const { code, data, message } = await orderDetailApi(props.orderId);
        if (code !== 1e4)
          return uni.utils.toast(message);
        orderDetail.value = data;
      }
      getOrderDetail();
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock("view", { class: "pay-result-page" }, [
          vue.createElementVNode("view", { class: "result" }, [
            vue.createVNode(_component_uni_icons, {
              size: "70",
              color: "#20c6b2",
              type: "checkbox-filled"
            }),
            vue.createElementVNode(
              "view",
              { class: "amount" },
              "¥ " + vue.toDisplayString(orderDetail.value.actualPayment),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "label" }, "支付成功"),
            vue.createElementVNode("view", { class: "tips" }, "订单支付成功，已通知药房尽快发出，请耐心等待~")
          ]),
          vue.createElementVNode("view", { class: "buttons" }, [
            vue.createElementVNode("navigator", {
              "hover-class": "none",
              url: `/subpkg_medicine/order_detail/index?id=${orderDetail.value.id}`,
              class: "uni-button"
            }, " 查看订单 ", 8, ["url"]),
            vue.createElementVNode("navigator", {
              "hover-class": "none",
              url: `/subpkg_consult/room/index?orderId=${orderDetail.value.roomId}`,
              "open-type": "redirect",
              class: "uni-button plain"
            }, " 返回诊室 ", 8, ["url"])
          ])
        ]);
      };
    }
  };
  const Subpkg_medicinePay_resultIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_medicine/pay_result/index.vue"]]);
  const _sfc_main$3 = {
    __name: "index",
    props: {
      id: String
    },
    setup(__props) {
      const props = __props;
      const orderDetail = vue.ref({});
      const paymentMethods = ["微信支付", "支付宝支付"];
      const orderStatus = vue.ref({
        10: "待支付",
        11: "待发货",
        12: "待收货",
        13: "已完成",
        14: "已取消"
      });
      async function getOrderDetail() {
        const { code, data, message } = await orderDetailApi(props.id);
        if (code !== 1e4)
          return uni.utils.toast(message);
        orderDetail.value = data;
      }
      getOrderDetail();
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_1$4);
        const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_2$4);
        const _component_uni_notice_bar = resolveEasycom(vue.resolveDynamicComponent("uni-notice-bar"), __easycom_3);
        const _component_scroll_page = resolveEasycom(vue.resolveDynamicComponent("scroll-page"), __easycom_4$1);
        return vue.openBlock(), vue.createBlock(_component_scroll_page, { "background-color": "#f6f6f6" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "medicine-page" }, [
              vue.createElementVNode("view", { class: "page-header" }, [
                vue.createElementVNode("view", { class: "order-status" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "label" },
                    "药品订单 " + vue.toDisplayString(orderDetail.value.payment) + "元",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "status" },
                    vue.toDisplayString(orderStatus.value[orderDetail.value.status]),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "order-shippment" }, [
                  orderDetail.value.status === 11 ? (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 0 },
                    [
                      vue.createElementVNode("view", { class: "region" }, [
                        vue.createElementVNode("text", { class: "iconfont icon-location" }),
                        vue.createTextVNode(
                          " " + vue.toDisplayString(orderDetail.value.addressInfo.province) + " " + vue.toDisplayString(orderDetail.value.addressInfo.city) + " " + vue.toDisplayString(orderDetail.value.addressInfo.county),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode(
                        "view",
                        { class: "detail" },
                        vue.toDisplayString(orderDetail.value.addressInfo.addressDetail),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "view",
                        { class: "receiver" },
                        vue.toDisplayString(orderDetail.value.addressInfo.receiver) + " " + vue.toDisplayString(orderDetail.value.addressInfo.mobile),
                        1
                        /* TEXT */
                      )
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : vue.createCommentVNode("v-if", true),
                  orderDetail.value.status === 12 ? (vue.openBlock(), vue.createElementBlock("navigator", {
                    key: 1,
                    "hover-class": "none",
                    url: `/subpkg_medicine/timeline/index?id=${orderDetail.value.id}`
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "marker" },
                      vue.toDisplayString(orderDetail.value.expressInfo.content),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "datetime" },
                      vue.toDisplayString(orderDetail.value.expressInfo.time),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "arrow" }, [
                      vue.createVNode(_component_uni_icons, {
                        size: "18",
                        color: "#C3C3C5",
                        type: "forward"
                      })
                    ])
                  ], 8, ["url"])) : vue.createCommentVNode("v-if", true)
                ])
              ]),
              vue.createElementVNode("view", { class: "order-shop" }, [
                vue.createTextVNode(" 优医药房 "),
                vue.createElementVNode("text", { class: "alt" }, "优医质保 假一赔十")
              ]),
              vue.createCommentVNode(" 药品列表 "),
              vue.createElementVNode("view", { class: "medicine-list" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(orderDetail.value.medicines, (medicine) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: medicine.id,
                      class: "medicine-list-item"
                    }, [
                      vue.createElementVNode("image", {
                        class: "medicine-cover",
                        src: medicine.avatar,
                        mode: "aspectFill"
                      }, null, 8, ["src"]),
                      vue.createElementVNode("view", { class: "medicine-info" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "name" },
                          vue.toDisplayString(medicine.name),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("text", { class: "unit symbol" }, "24片"),
                        vue.createElementVNode(
                          "text",
                          { class: "price" },
                          "¥" + vue.toDisplayString(medicine.amount),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode(
                        "view",
                        { class: "quantity" },
                        "x" + vue.toDisplayString(medicine.quantity),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode(
                        "view",
                        { class: "guide" },
                        "用法用量：" + vue.toDisplayString(medicine.usageDosag),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createCommentVNode(" 订单信息 "),
              vue.createElementVNode("view", { class: "order-info" }, [
                vue.createVNode(_component_uni_list, { border: false }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_uni_list_item, {
                      title: "药品金额",
                      "right-text": "¥" + orderDetail.value.payment
                    }, null, 8, ["right-text"]),
                    vue.createVNode(_component_uni_list_item, {
                      title: "运费",
                      "right-text": "¥" + orderDetail.value.expressFee
                    }, null, 8, ["right-text"]),
                    vue.createVNode(_component_uni_list_item, {
                      title: "优惠券",
                      "show-arrow": "",
                      "right-text": "-¥" + orderDetail.value.couponDeduction
                    }, null, 8, ["right-text"]),
                    vue.createVNode(_component_uni_list_item, {
                      title: "实付款",
                      "right-text": "¥" + orderDetail.value.actualPayment
                    }, null, 8, ["right-text"]),
                    vue.createVNode(_component_uni_list_item, {
                      title: "订单编号",
                      "right-text": orderDetail.value.orderNo
                    }, null, 8, ["right-text"]),
                    vue.createVNode(_component_uni_list_item, {
                      title: "创建时间",
                      "right-text": orderDetail.value.createTime
                    }, null, 8, ["right-text"]),
                    vue.createVNode(_component_uni_list_item, {
                      title: "支付方式",
                      "right-text": paymentMethods[orderDetail.value.paymentMethod]
                    }, null, 8, ["right-text"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              vue.createElementVNode("view", { class: "notice-bar" }, [
                vue.createVNode(_component_uni_notice_bar, { text: "请在 00:14:59 内完成支付，超时订单将取消" })
              ]),
              vue.createCommentVNode(" 底部 "),
              vue.createElementVNode("view", { class: "toolbar" }, [
                (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "buttons"
                }, [
                  vue.createElementVNode("view", { class: "delete-botton" }, [
                    vue.createVNode(_component_uni_icons, {
                      size: "24",
                      color: "#848484",
                      type: "trash"
                    }),
                    vue.createElementVNode("text", null, "删除订单")
                  ]),
                  vue.createElementVNode("button", { class: "uni-button" }, "再次购买")
                ]))
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        });
      };
    }
  };
  const Subpkg_medicineOrder_detailIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_medicine/order_detail/index.vue"]]);
  const _sfc_main$2 = {
    __name: "index",
    setup(__props) {
      const feedTabs = vue.ref([
        { label: "待支付", status: 10, rendered: false },
        { label: "待发货", status: 11, rendered: false },
        { label: "待收货", status: 12, rendered: false },
        { label: "已完成", status: 13, rendered: false },
        { label: "已取消", status: 14, rendered: true }
      ]);
      const loading = vue.ref(true);
      const isEmpty = vue.ref(false);
      const orderList2 = vue.ref([]);
      function onTabClick({ index, status }) {
        getOrderList(status);
      }
      async function getOrderList(status) {
        loading.value = true;
        isEmpty.value = false;
        const { code, data, message } = await orderListApi(status);
        if (code !== 1e4)
          return uni.utils.toast(message);
        orderList2.value = data.rows;
        loading.value = false;
        isEmpty.value = orderList2.value.length === 0;
      }
      getOrderList();
      return (_ctx, _cache) => {
        const _component_custom_tabs = resolveEasycom(vue.resolveDynamicComponent("custom-tabs"), __easycom_0$6);
        const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_1$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "medicine-page" }, [
          vue.createElementVNode("view", { class: "order-status-tabs" }, [
            vue.createVNode(_component_custom_tabs, {
              onClick: onTabClick,
              list: feedTabs.value
            }, null, 8, ["list"])
          ]),
          vue.createElementVNode("scroll-view", {
            "refresher-enabled": "",
            "refresher-background": "#f6f6f6",
            class: "uni-scroll-view",
            "scroll-y": ""
          }, [
            vue.createElementVNode("view", { class: "order-list" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(orderList2.value, (order) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: order.id,
                    class: "order-list-item"
                  }, [
                    vue.createElementVNode("view", { class: "order-header" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "number" },
                        "订单编号: " + vue.toDisplayString(order.id),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("text", { class: "status" }, "待支付")
                    ]),
                    vue.createElementVNode("navigator", {
                      url: `/subpkg_medicine/order_detail/index?id=${order.id}`,
                      "hover-class": "none",
                      class: "order-body"
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(order.medicines, (medicine) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            key: medicine.id,
                            class: "medicine"
                          }, [
                            vue.createElementVNode("image", {
                              class: "medicine-cover",
                              src: medicine.avatar,
                              mode: "aspectFill"
                            }, null, 8, ["src"]),
                            vue.createElementVNode("view", { class: "medicine-info" }, [
                              vue.createElementVNode(
                                "text",
                                { class: "name" },
                                vue.toDisplayString(medicine.name),
                                1
                                /* TEXT */
                              ),
                              vue.createElementVNode(
                                "text",
                                {
                                  class: vue.normalizeClass([{ symbol: medicine.prescriptionFlag === 1 }, "unit"])
                                },
                                vue.toDisplayString(medicine.specs),
                                3
                                /* TEXT, CLASS */
                              ),
                              vue.createElementVNode(
                                "text",
                                { class: "price" },
                                "¥" + vue.toDisplayString(medicine.amount),
                                1
                                /* TEXT */
                              )
                            ]),
                            vue.createElementVNode(
                              "view",
                              { class: "quantity" },
                              "x" + vue.toDisplayString(medicine.quantity),
                              1
                              /* TEXT */
                            )
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 8, ["url"]),
                    vue.createElementVNode("view", { class: "order-footer" }, [
                      vue.createElementVNode(
                        "view",
                        { class: "total" },
                        " 共2件商品 合计：¥" + vue.toDisplayString(order.actualPayment) + "（运费¥0.00） ",
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "buttons" }, [
                        vue.createElementVNode("button", { class: "uni-button minor" }, "取消订单"),
                        vue.createElementVNode("button", { class: "uni-button" }, "继续支付")
                      ])
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              vue.createCommentVNode(" 列表数据为空 "),
              isEmpty.value ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "empty-tips"
              }, "没有更多数据了")) : vue.createCommentVNode("v-if", true),
              vue.createCommentVNode(" 加载状态 "),
              vue.withDirectives(vue.createVNode(
                _component_uni_load_more,
                {
                  status: "loading",
                  color: "#C3C3C5",
                  "icon-size": 16,
                  "content-text": {
                    contentdown: "上拉显示更多",
                    contentrefresh: "数据正在加载中",
                    contentnomore: "没有更多数据了"
                  }
                },
                null,
                512
                /* NEED_PATCH */
              ), [
                [vue.vShow, loading.value]
              ])
            ])
          ])
        ]);
      };
    }
  };
  const Subpkg_medicineOrder_listIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_medicine/order_list/index.vue"]]);
  const _sfc_main$1 = {
    __name: "index",
    props: {
      id: String
    },
    setup(__props) {
      const props = __props;
      const polyline = vue.ref([]);
      const markers = vue.ref([]);
      const center = vue.ref({});
      const logisticsInfo = vue.ref({});
      let top = 0;
      async function getLogistics() {
        const { code, data, message } = await logisticsApi(props.id);
        if (code !== 1e4)
          return uni.utils.toast(message);
        logisticsInfo.value = data;
        const from = data.logisticsInfo[0];
        const to = data.logisticsInfo[data.logisticsInfo.length - 1];
        markers.value = [
          {
            id: 1,
            latitude: from.latitude,
            longitude: from.longitude,
            iconPath: "/static/images/start.png",
            width: 25,
            height: 30
          },
          {
            id: 2,
            latitude: to.latitude,
            longitude: to.longitude,
            iconPath: "/static/images/end.png",
            width: 25,
            height: 30
          }
        ];
        Ds.callFunction({
          name: "qq-maps",
          data: {
            from: Object.values(from).join(","),
            to: Object.values(to).join(",")
          },
          success({ result }) {
            const coords = result.result.routes[0].polyline;
            const points = [];
            for (let i2 = 2; i2 < coords.length; i2++) {
              coords[i2] = Number(coords[i2 - 2]) + Number(coords[i2]) / 1e6;
            }
            for (let i2 = 0; i2 < coords.length; i2 += 2) {
              points.push({ latitude: coords[i2], longitude: coords[i2 + 1] });
            }
            const current = points[100];
            center.value = current;
            markers.value.push({
              id: 3,
              latitude: current.latitude,
              longitude: current.longitude,
              iconPath: "/static/images/car.png",
              width: 50,
              height: 30
            });
            polyline.value.push({
              points,
              color: "#16c2a3",
              width: 5
            });
          },
          fail(error) {
            formatAppLog("log", "at subpkg_medicine/timeline/index.vue:105", error);
          }
        });
      }
      function onBackClick() {
        uni.navigateBack({ delta: 1 });
      }
      getLogistics();
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$7);
        return vue.openBlock(), vue.createElementBlock("view", { class: "timeline-page" }, [
          vue.createElementVNode("map", {
            polyline: polyline.value,
            markers: markers.value,
            latitude: center.value.latitude,
            longitude: center.value.longitude,
            scale: "12",
            class: "uni-map"
          }, null, 8, ["polyline", "markers", "latitude", "longitude"]),
          vue.createElementVNode(
            "cover-view",
            {
              style: vue.normalizeStyle({ paddingTop: vue.unref(top) }),
              class: "navigator-bar"
            },
            [
              vue.createElementVNode("cover-view", {
                onClick: onBackClick,
                class: "icon-back"
              }, [
                vue.createElementVNode("cover-image", { src: "/static/images/icon-back.png" })
              ]),
              vue.createElementVNode(
                "cover-view",
                { class: "title" },
                vue.toDisplayString(logisticsInfo.value.statusValue),
                1
                /* TEXT */
              )
            ],
            4
            /* STYLE */
          ),
          vue.createElementVNode("cover-view", { class: "timeline-meta" }, [
            vue.createElementVNode(
              "cover-view",
              { class: "status" },
              vue.toDisplayString(logisticsInfo.value.statusValue),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "cover-view",
              { class: "extra" },
              " 预计 " + vue.toDisplayString(logisticsInfo.value.estimatedTime) + " 送达 " + vue.toDisplayString(logisticsInfo.value.name) + " " + vue.toDisplayString(logisticsInfo.value.awbNo),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "timeline-detail" }, [
            vue.createElementVNode("view", { class: "title" }, "物流详情"),
            vue.createElementVNode("view", { class: "timeline" }, [
              vue.createElementVNode("view", { class: "line" }, [
                vue.createElementVNode("view", { class: "badge text" }, "收"),
                vue.createElementVNode("view", { class: "content" }, " 收货地址：广东省广州市大华区明离路科技园880号 ")
              ]),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(logisticsInfo.value.list, (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: item.id,
                    class: "line"
                  }, [
                    item.status <= 3 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "badge dot"
                    })) : vue.createCommentVNode("v-if", true),
                    item.status === 4 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: "badge icon"
                    }, [
                      vue.createVNode(_component_uni_icons, {
                        color: "#2cb5a5",
                        "custom-prefix": "iconfont",
                        type: "icon-truck"
                      })
                    ])) : vue.createCommentVNode("v-if", true),
                    item.status === 5 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 2,
                      class: "badge icon"
                    }, [
                      vue.createVNode(_component_uni_icons, {
                        color: "#2cb5a5",
                        "custom-prefix": "iconfont",
                        type: "icon-checked"
                      })
                    ])) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode(
                      "view",
                      { class: "label" },
                      vue.toDisplayString(item.statusValue),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "content" },
                      vue.toDisplayString(item.content),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "time" },
                      vue.toDisplayString(item.createTime),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ]);
      };
    }
  };
  const Subpkg_medicineTimelineIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/subpkg_medicine/timeline/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/my/index", PagesMyIndex);
  __definePage("pages/notify/index", PagesNotifyIndex);
  __definePage("pages/wiki/index", PagesWikiIndex);
  __definePage("pages/test/index", PagesTestIndex);
  __definePage("pages/login/index", PagesLoginIndex);
  __definePage("pages/login/qq", PagesLoginQq);
  __definePage("subpkg_archive/form/index", Subpkg_archiveFormIndex);
  __definePage("subpkg_archive/list/index", Subpkg_archiveListIndex);
  __definePage("subpkg_consult/quickly/index", Subpkg_consultQuicklyIndex);
  __definePage("subpkg_consult/department/index", Subpkg_consultDepartmentIndex);
  __definePage("subpkg_consult/description/index", Subpkg_consultDescriptionIndex);
  __definePage("subpkg_consult/patient/index", Subpkg_consultPatientIndex);
  __definePage("subpkg_consult/payment/index", Subpkg_consultPaymentIndex);
  __definePage("subpkg_consult/room/index", Subpkg_consultRoomIndex);
  __definePage("subpkg_consult/order_list/index", Subpkg_consultOrder_listIndex);
  __definePage("subpkg_consult/order_detail/index", Subpkg_consultOrder_detailIndex);
  __definePage("uni_modules/uni-pay/pages/success/success", Uni_modulesUniPayPagesSuccessSuccess);
  __definePage("uni_modules/uni-pay/pages/ad-interactive-webview/ad-interactive-webview", Uni_modulesUniPayPagesAdInteractiveWebviewAdInteractiveWebview);
  __definePage("subpkg_medicine/payment/index", Subpkg_medicinePaymentIndex);
  __definePage("subpkg_medicine/pay_result/index", Subpkg_medicinePay_resultIndex);
  __definePage("subpkg_medicine/order_detail/index", Subpkg_medicineOrder_detailIndex);
  __definePage("subpkg_medicine/order_list/index", Subpkg_medicineOrder_listIndex);
  __definePage("subpkg_medicine/timeline/index", Subpkg_medicineTimelineIndex);
  function isObject(v2) {
    return typeof v2 === "object" && v2 !== null;
  }
  function normalizeOptions(options, factoryOptions) {
    options = isObject(options) ? options : /* @__PURE__ */ Object.create(null);
    return new Proxy(options, {
      get(target, key, receiver) {
        if (key === "key")
          return Reflect.get(target, key, receiver);
        return Reflect.get(target, key, receiver) || Reflect.get(factoryOptions, key, receiver);
      }
    });
  }
  function get(state, path) {
    return path.reduce((obj, p2) => {
      return obj == null ? void 0 : obj[p2];
    }, state);
  }
  function set(state, path, val) {
    return path.slice(0, -1).reduce((obj, p2) => {
      if (/^(__proto__)$/.test(p2))
        return {};
      else
        return obj[p2] = obj[p2] || {};
    }, state)[path[path.length - 1]] = val, state;
  }
  function pick(baseState, paths) {
    return paths.reduce((substate, path) => {
      const pathArray = path.split(".");
      return set(substate, pathArray, get(baseState, pathArray));
    }, {});
  }
  function hydrateStore(store, { storage, serializer, key, debug }) {
    try {
      const fromStorage = storage == null ? void 0 : storage.getItem(key);
      if (fromStorage)
        store.$patch(serializer == null ? void 0 : serializer.deserialize(fromStorage));
    } catch (error) {
      if (debug)
        formatAppLog("error", "at node_modules/pinia-plugin-persistedstate/dist/index.mjs:45", error);
    }
  }
  function persistState(state, { storage, serializer, key, paths, debug }) {
    try {
      const toStore = Array.isArray(paths) ? pick(state, paths) : state;
      storage.setItem(key, serializer.serialize(toStore));
    } catch (error) {
      if (debug)
        formatAppLog("error", "at node_modules/pinia-plugin-persistedstate/dist/index.mjs:54", error);
    }
  }
  function createPersistedState(factoryOptions = {}) {
    return (context) => {
      const { auto = false } = factoryOptions;
      const {
        options: { persist = auto },
        store,
        pinia
      } = context;
      if (!persist)
        return;
      if (!(store.$id in pinia.state.value)) {
        const original_store = pinia._s.get(store.$id.replace("__hot:", ""));
        if (original_store)
          Promise.resolve().then(() => original_store.$persist());
        return;
      }
      const persistences = (Array.isArray(persist) ? persist.map((p2) => normalizeOptions(p2, factoryOptions)) : [normalizeOptions(persist, factoryOptions)]).map(
        ({
          storage = localStorage,
          beforeRestore = null,
          afterRestore = null,
          serializer = {
            serialize: JSON.stringify,
            deserialize: JSON.parse
          },
          key = store.$id,
          paths = null,
          debug = false
        }) => {
          var _a;
          return {
            storage,
            beforeRestore,
            afterRestore,
            serializer,
            key: ((_a = factoryOptions.key) != null ? _a : (k2) => k2)(typeof key == "string" ? key : key(store.$id)),
            paths,
            debug
          };
        }
      );
      store.$persist = () => {
        persistences.forEach((persistence) => {
          persistState(store.$state, persistence);
        });
      };
      store.$hydrate = ({ runHooks = true } = {}) => {
        persistences.forEach((persistence) => {
          const { beforeRestore, afterRestore } = persistence;
          if (runHooks)
            beforeRestore == null ? void 0 : beforeRestore(context);
          hydrateStore(store, persistence);
          if (runHooks)
            afterRestore == null ? void 0 : afterRestore(context);
        });
      };
      persistences.forEach((persistence) => {
        const { beforeRestore, afterRestore } = persistence;
        beforeRestore == null ? void 0 : beforeRestore(context);
        hydrateStore(store, persistence);
        afterRestore == null ? void 0 : afterRestore(context);
        store.$subscribe(
          (_mutation, state) => {
            persistState(state, persistence);
          },
          {
            detached: true
          }
        );
      });
    };
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/优医咨询（uni-app）/day09/03-code/优医咨询/App.vue"]]);
  uni.utils = {
    /**
     * 用户反馈（轻提示）
     * @param {string} title 提示文字内容
     * @param {string} icon 提示图标类型
     */
    toast(title = "数据加载失败！", icon = "none") {
      uni.showToast({
        title,
        icon,
        mask: true
      });
    }
  };
  function createApp() {
    const app = vue.createVueApp(App);
    const pinia = createPinia();
    pinia.use(
      createPersistedState({
        key: (id) => `__persisted__${id}`,
        storage: {
          setItem(key, value2) {
            uni.setStorageSync(key, value2);
          },
          getItem(key) {
            return uni.getStorageSync(key);
          }
        }
      })
    );
    app.use(pinia);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
