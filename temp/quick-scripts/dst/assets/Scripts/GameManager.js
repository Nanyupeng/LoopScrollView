
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94328m0NzdDqaEnAd4jn0OY', 'GameManager');
// Scripts/GameManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    node_scrollView: {
      type: cc.Node,
      "default": null
    },
    node_content: {
      type: cc.Node,
      "default": null
    },
    label_nodeCount: {
      type: cc.Label,
      "default": null
    }
  },
  start: function start() {
    var comp = this.node_scrollView.getComponent("MyScrollView"); // 生成数据列表

    var list = [];

    for (var i = 0; i <= 30; i++) {
      list.push({
        id: i,
        name: "道具" + i,
        price: "￥ " + parseInt(Math.random() * 1000) / 10,
        icon: "shop/Item__" + (i < 10 ? "0" : "") + i
      });
    }

    comp.setData(list);
  },
  update: function update(dt) {
    this.label_nodeCount.string = this.node_content.childrenCount;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZU1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJub2RlX3Njcm9sbFZpZXciLCJ0eXBlIiwiTm9kZSIsIm5vZGVfY29udGVudCIsImxhYmVsX25vZGVDb3VudCIsIkxhYmVsIiwic3RhcnQiLCJjb21wIiwiZ2V0Q29tcG9uZW50IiwibGlzdCIsImkiLCJwdXNoIiwiaWQiLCJuYW1lIiwicHJpY2UiLCJwYXJzZUludCIsIk1hdGgiLCJyYW5kb20iLCJpY29uIiwic2V0RGF0YSIsInVwZGF0ZSIsImR0Iiwic3RyaW5nIiwiY2hpbGRyZW5Db3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGVBQWUsRUFBRTtBQUFFQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sSUFBWDtBQUFpQixpQkFBUztBQUExQixLQURUO0FBRVJDLElBQUFBLFlBQVksRUFBRTtBQUFFRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sSUFBWDtBQUFpQixpQkFBUztBQUExQixLQUZOO0FBR1JFLElBQUFBLGVBQWUsRUFBRTtBQUFFSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1MsS0FBWDtBQUFrQixpQkFBUztBQUEzQjtBQUhULEdBSFA7QUFTTEMsRUFBQUEsS0FUSyxtQkFTSTtBQUNMLFFBQUlDLElBQUksR0FBRyxLQUFLUCxlQUFMLENBQXFCUSxZQUFyQixDQUFrQyxjQUFsQyxDQUFYLENBREssQ0FHTDs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsSUFBSSxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE0QjtBQUN4QkQsTUFBQUEsSUFBSSxDQUFDRSxJQUFMLENBQVU7QUFDTkMsUUFBQUEsRUFBRSxFQUFFRixDQURFO0FBRU5HLFFBQUFBLElBQUksRUFBRSxPQUFPSCxDQUZQO0FBR05JLFFBQUFBLEtBQUssRUFBRSxPQUFPQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixJQUFqQixDQUFSLEdBQWlDLEVBSHpDO0FBSU5DLFFBQUFBLElBQUksRUFBRSxpQkFBaUJSLENBQUMsR0FBRyxFQUFKLEdBQVMsR0FBVCxHQUFlLEVBQWhDLElBQXNDQTtBQUp0QyxPQUFWO0FBTUg7O0FBQ0RILElBQUFBLElBQUksQ0FBQ1ksT0FBTCxDQUFhVixJQUFiO0FBQ0gsR0F2Qkk7QUF5QkxXLEVBQUFBLE1BekJLLGtCQXlCR0MsRUF6QkgsRUF5Qk87QUFDUixTQUFLakIsZUFBTCxDQUFxQmtCLE1BQXJCLEdBQThCLEtBQUtuQixZQUFMLENBQWtCb0IsYUFBaEQ7QUFDSDtBQTNCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG5vZGVfc2Nyb2xsVmlldzogeyB0eXBlOiBjYy5Ob2RlLCBkZWZhdWx0OiBudWxsIH0sXHJcbiAgICAgICAgbm9kZV9jb250ZW50OiB7IHR5cGU6IGNjLk5vZGUsIGRlZmF1bHQ6IG51bGwgfSxcclxuICAgICAgICBsYWJlbF9ub2RlQ291bnQ6IHsgdHlwZTogY2MuTGFiZWwsIGRlZmF1bHQ6IG51bGwgfSxcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBjb21wID0gdGhpcy5ub2RlX3Njcm9sbFZpZXcuZ2V0Q29tcG9uZW50KFwiTXlTY3JvbGxWaWV3XCIpO1xyXG5cclxuICAgICAgICAvLyDnlJ/miJDmlbDmja7liJfooahcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMzA7IGkrKyl7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwi6YGT5YW3XCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IFwi77+lIFwiICsgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMDApIC8gMTAsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBcInNob3AvSXRlbV9fXCIgKyAoaSA8IDEwID8gXCIwXCIgOiBcIlwiKSArIGlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbXAuc2V0RGF0YShsaXN0KTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMubGFiZWxfbm9kZUNvdW50LnN0cmluZyA9IHRoaXMubm9kZV9jb250ZW50LmNoaWxkcmVuQ291bnQ7XHJcbiAgICB9LFxyXG59KTtcclxuIl19