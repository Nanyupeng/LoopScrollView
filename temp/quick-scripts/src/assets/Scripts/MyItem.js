"use strict";
cc._RF.push(module, '13828UaGFhPFIsVAx8NmaFb', 'MyItem');
// Scripts/MyItem.js

"use strict";

var _BaseItem = _interopRequireDefault(require("./BaseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": _BaseItem["default"],
  properties: {
    label: cc.Label
  },
  init: function init(eventListener) {
    this._super(eventListener);
  },
  // 设置内容
  setItem: function setItem(data) {
    this._super(data);

    this.label.string = data.id;
  }
});

cc._RF.pop();