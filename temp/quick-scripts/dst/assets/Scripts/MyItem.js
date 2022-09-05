
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MyItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTXlJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJCYXNlSXRlbSIsInByb3BlcnRpZXMiLCJsYWJlbCIsIkxhYmVsIiwiaW5pdCIsImV2ZW50TGlzdGVuZXIiLCJfc3VwZXIiLCJzZXRJdGVtIiwiZGF0YSIsInN0cmluZyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0Msb0JBREo7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSztBQURGLEdBSFA7QUFPTEMsRUFBQUEsSUFQSyxnQkFPQUMsYUFQQSxFQU9jO0FBQ2YsU0FBS0MsTUFBTCxDQUFZRCxhQUFaO0FBQ0gsR0FUSTtBQVdMO0FBQ0FFLEVBQUFBLE9BWkssbUJBWUdDLElBWkgsRUFZUTtBQUNULFNBQUtGLE1BQUwsQ0FBWUUsSUFBWjs7QUFDQSxTQUFLTixLQUFMLENBQVdPLE1BQVgsR0FBb0JELElBQUksQ0FBQ0UsRUFBekI7QUFDSDtBQWZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlSXRlbSBmcm9tICcuL0Jhc2VJdGVtJztcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IEJhc2VJdGVtLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYWJlbDogY2MuTGFiZWxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdChldmVudExpc3RlbmVyKXtcclxuICAgICAgICB0aGlzLl9zdXBlcihldmVudExpc3RlbmVyKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g6K6+572u5YaF5a65XHJcbiAgICBzZXRJdGVtKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKGRhdGEpO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gZGF0YS5pZDtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19