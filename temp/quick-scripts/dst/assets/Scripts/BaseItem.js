
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BaseItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03ff2PSR41PgqL8qUgmKcdf', 'BaseItem');
// Scripts/BaseItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(eventListener) {
    this.data = null;
    this.eventListener = eventListener;
  },
  setItem: function setItem(data) {
    this.data = data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQmFzZUl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJldmVudExpc3RlbmVyIiwiZGF0YSIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLGFBSEEsRUFHYztBQUNmLFNBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBS0QsYUFBTCxHQUFxQkEsYUFBckI7QUFFSCxHQVBJO0FBU0xFLEVBQUFBLE9BVEssbUJBU0dELElBVEgsRUFTUTtBQUNULFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNIO0FBWEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGluaXQoZXZlbnRMaXN0ZW5lcil7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbnVsbDtcclxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXIgPSBldmVudExpc3RlbmVyO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc2V0SXRlbShkYXRhKXtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==