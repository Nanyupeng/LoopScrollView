
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MyScrollView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2be1b44ZDlAX42sE2wYSK4k', 'MyScrollView');
// Scripts/MyScrollView.js

"use strict";

var _BaseItem = _interopRequireDefault(require("./BaseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cc.Class({
  "extends": cc.Component,
  properties: {
    // 子节点预制件
    pfb_item: {
      type: cc.Prefab,
      "default": null
    },
    // 父节点
    node_content: {
      type: cc.Node,
      "default": null
    },
    // 子节点间距
    itemSpace: 20,
    // 上间距
    topSpace: 10,
    // 下间距
    downSpace: 10
  },
  // 初始化数据
  onLoad: function onLoad() {
    this.dataSet = []; // 当前活跃节点数组 是从头到尾排的

    this.activeNodes = []; // 计算

    this.itemHeight = this.pfb_item.data.height; // 单行高度 一个子节点+一个间距

    this.lineHeight = this.itemHeight + this.itemSpace; // 可视的节点数量（屏幕可以显示的）

    this.visitedItemCount = parseInt(this.node.height / this.lineHeight); // 额外的节点数量

    this.extraItemCount = parseInt((this.visitedItemCount + 1) / 2); // 活跃的节点数量 = 可视节点 + 2*额外节点

    this.activeItemCount = this.visitedItemCount + this.extraItemCount; // 安全区域高度

    this.safeAreaHeight = this.extraItemCount * (this.lineHeight + this.itemHeight / 2); // 活跃区域高度

    this.activeAreaHeight = this.activeItemCount * this.lineHeight; // 父节点上一次的y，用于计算是上滑还是下滑

    this.contentNodeLastY = 0; // 父节点高度

    this.contentHeight = 500; // 活跃的头节点的下标

    this.activeHeadIndex = 0; // 活跃的尾节点的下标

    this.activeTailIndex = 0; // 监听滚动事件

    this.node.on('scrolling', this.onScrolling, this);
  },
  init: function init(eventListener) {
    // 传递事件监听器
    this.eventListener = eventListener;
  },
  setData: function setData(dataSet) {
    this.dataSet = dataSet; // 计算父节点的高度

    this.contentHeight = this.dataSet.length * this.lineHeight; // 设置高度

    this.node_content.height = this.contentHeight + this.downSpace; // 清空父节点

    this.node_content.removeAllChildren(true); // 有可能数据比活跃节点少... 那就用小的那个

    var number = Math.min(this.dataSet.length, this.activeItemCount);

    for (var i = 0; i < number; i++) {
      // 实例化节点 并初始化、设置内容
      var node = cc.instantiate(this.pfb_item);
      node.getComponent(_BaseItem["default"]).init(this.eventListener);
      this.setItemNode(node, i);
      this.node_content.addChild(node);
      this.activeNodes.push(node);
    } // 设置活跃的首尾节点下标


    this.activeHeadIndex = 0;
    this.activeTailIndex = number - 1;
  },
  // 设置节点内容
  setItemNode: function setItemNode(node, index) {
    var data = this.dataSet[index];
    var comp = node.getComponent(_BaseItem["default"]);
    comp.setItem(data); // 根据下标计算并修改y

    node.y = -this.lineHeight * index + -this.topSpace;
  },
  // 滚动监听
  onScrolling: function onScrolling() {
    // 判断上滑/下滑
    var scrollUp = this.node_content.y > this.contentNodeLastY;
    this.contentNodeLastY = this.node_content.y; // 头节点

    var headNode = this.activeNodes[0]; // 头节点距离屏幕顶端的距离

    var dis_head = this.node_content.y + headNode.y;

    if (scrollUp) {
      // 上滑 判断是否需要把头节点移动到尾部
      // 头节点超出安全区 且 后面还有数据可以加载（避免下标超出数组长度）
      if (dis_head > this.safeAreaHeight && this.activeTailIndex + 1 < this.dataSet.length) {
        // console.log("移除头部节点");
        headNode = this.activeNodes.shift();
        this.activeNodes.push(headNode); // 修改活跃下标

        this.activeTailIndex++;
        this.activeHeadIndex++; // 设置节点内容

        this.setItemNode(headNode, this.activeTailIndex);
      }
    } else {
      // 下滑 判断是否需要把尾节点移动到头部
      // 头节点在安全区内 且 前面还有数据
      if (dis_head < this.safeAreaHeight && this.activeHeadIndex > 0) {
        // console.log("移除尾节点");
        tailNode = this.activeNodes.pop();
        this.activeNodes.unshift(tailNode);
        this.activeTailIndex--;
        this.activeHeadIndex--;
        this.setItemNode(tailNode, this.activeHeadIndex);
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTXlTY3JvbGxWaWV3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGZiX2l0ZW0iLCJ0eXBlIiwiUHJlZmFiIiwibm9kZV9jb250ZW50IiwiTm9kZSIsIml0ZW1TcGFjZSIsInRvcFNwYWNlIiwiZG93blNwYWNlIiwib25Mb2FkIiwiZGF0YVNldCIsImFjdGl2ZU5vZGVzIiwiaXRlbUhlaWdodCIsImRhdGEiLCJoZWlnaHQiLCJsaW5lSGVpZ2h0IiwidmlzaXRlZEl0ZW1Db3VudCIsInBhcnNlSW50Iiwibm9kZSIsImV4dHJhSXRlbUNvdW50IiwiYWN0aXZlSXRlbUNvdW50Iiwic2FmZUFyZWFIZWlnaHQiLCJhY3RpdmVBcmVhSGVpZ2h0IiwiY29udGVudE5vZGVMYXN0WSIsImNvbnRlbnRIZWlnaHQiLCJhY3RpdmVIZWFkSW5kZXgiLCJhY3RpdmVUYWlsSW5kZXgiLCJvbiIsIm9uU2Nyb2xsaW5nIiwiaW5pdCIsImV2ZW50TGlzdGVuZXIiLCJzZXREYXRhIiwibGVuZ3RoIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJudW1iZXIiLCJNYXRoIiwibWluIiwiaSIsImluc3RhbnRpYXRlIiwiZ2V0Q29tcG9uZW50IiwiQmFzZUl0ZW0iLCJzZXRJdGVtTm9kZSIsImFkZENoaWxkIiwicHVzaCIsImluZGV4IiwiY29tcCIsInNldEl0ZW0iLCJ5Iiwic2Nyb2xsVXAiLCJoZWFkTm9kZSIsImRpc19oZWFkIiwic2hpZnQiLCJ0YWlsTm9kZSIsInBvcCIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsUUFBUSxFQUFFO0FBQUVDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxNQUFY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QUFoQixJQUFrQyxLQUFLSyxlQUFMLEdBQXVCLENBQXZCLEdBQTJCLEtBQUtoQixPQUFMLENBQWFzQixNQUE5RSxFQUFzRjtBQUNsRjtBQUNBaUIsUUFBQUEsUUFBUSxHQUFHLEtBQUt0QyxXQUFMLENBQWlCd0MsS0FBakIsRUFBWDtBQUNBLGFBQUt4QyxXQUFMLENBQWlCZ0MsSUFBakIsQ0FBc0JNLFFBQXRCLEVBSGtGLENBS2xGOztBQUNBLGFBQUt2QixlQUFMO0FBQ0EsYUFBS0QsZUFBTCxHQVBrRixDQVNsRjs7QUFDQSxhQUFLZ0IsV0FBTCxDQUFpQlEsUUFBakIsRUFBMkIsS0FBS3ZCLGVBQWhDO0FBQ0g7QUFDSixLQWZELE1BZU87QUFDSDtBQUNBO0FBQ0EsVUFBSXdCLFFBQVEsR0FBRyxLQUFLN0IsY0FBaEIsSUFBa0MsS0FBS0ksZUFBTCxHQUF1QixDQUE3RCxFQUFnRTtBQUM1RDtBQUNBMkIsUUFBQUEsUUFBUSxHQUFHLEtBQUt6QyxXQUFMLENBQWlCMEMsR0FBakIsRUFBWDtBQUNBLGFBQUsxQyxXQUFMLENBQWlCMkMsT0FBakIsQ0FBeUJGLFFBQXpCO0FBRUEsYUFBSzFCLGVBQUw7QUFDQSxhQUFLRCxlQUFMO0FBRUEsYUFBS2dCLFdBQUwsQ0FBaUJXLFFBQWpCLEVBQTJCLEtBQUszQixlQUFoQztBQUNIO0FBQ0o7QUFDSjtBQXhJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZUl0ZW0gZnJvbSAnLi9CYXNlSXRlbSc7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g5a2Q6IqC54K56aKE5Yi25Lu2XHJcbiAgICAgICAgcGZiX2l0ZW06IHsgdHlwZTogY2MuUHJlZmFiLCBkZWZhdWx0OiBudWxsIH0sXHJcbiAgICAgICAgLy8g54i26IqC54K5XHJcbiAgICAgICAgbm9kZV9jb250ZW50OiB7IHR5cGU6IGNjLk5vZGUsIGRlZmF1bHQ6IG51bGwgfSxcclxuXHJcbiAgICAgICAgLy8g5a2Q6IqC54K56Ze06LedXHJcbiAgICAgICAgaXRlbVNwYWNlOiAyMCxcclxuXHJcbiAgICAgICAgLy8g5LiK6Ze06LedXHJcbiAgICAgICAgdG9wU3BhY2U6IDEwLFxyXG5cclxuICAgICAgICAvLyDkuIvpl7Tot51cclxuICAgICAgICBkb3duU3BhY2U6IDEwXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOWIneWni+WMluaVsOaNrlxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZGF0YVNldCA9IFtdO1xyXG4gICAgICAgIC8vIOW9k+WJjea0u+i3g+iKgueCueaVsOe7hCDmmK/ku47lpLTliLDlsL7mjpLnmoRcclxuICAgICAgICB0aGlzLmFjdGl2ZU5vZGVzID0gW107XHJcblxyXG4gICAgICAgIC8vIOiuoeeul1xyXG4gICAgICAgIHRoaXMuaXRlbUhlaWdodCA9IHRoaXMucGZiX2l0ZW0uZGF0YS5oZWlnaHQ7XHJcbiAgICAgICAgLy8g5Y2V6KGM6auY5bqmIOS4gOS4quWtkOiKgueCuSvkuIDkuKrpl7Tot51cclxuICAgICAgICB0aGlzLmxpbmVIZWlnaHQgPSB0aGlzLml0ZW1IZWlnaHQgKyB0aGlzLml0ZW1TcGFjZTtcclxuICAgICAgICAvLyDlj6/op4bnmoToioLngrnmlbDph4/vvIjlsY/luZXlj6/ku6XmmL7npLrnmoTvvIlcclxuICAgICAgICB0aGlzLnZpc2l0ZWRJdGVtQ291bnQgPSBwYXJzZUludCh0aGlzLm5vZGUuaGVpZ2h0IC8gKHRoaXMubGluZUhlaWdodCkpO1xyXG4gICAgICAgIC8vIOmineWklueahOiKgueCueaVsOmHj1xyXG4gICAgICAgIHRoaXMuZXh0cmFJdGVtQ291bnQgPSBwYXJzZUludCgodGhpcy52aXNpdGVkSXRlbUNvdW50ICsgMSkgLyAyKTtcclxuICAgICAgICAvLyDmtLvot4PnmoToioLngrnmlbDph48gPSDlj6/op4boioLngrkgKyAyKumineWkluiKgueCuVxyXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbUNvdW50ID0gdGhpcy52aXNpdGVkSXRlbUNvdW50ICsgdGhpcy5leHRyYUl0ZW1Db3VudDtcclxuXHJcbiAgICAgICAgLy8g5a6J5YWo5Yy65Z+f6auY5bqmXHJcbiAgICAgICAgdGhpcy5zYWZlQXJlYUhlaWdodCA9IHRoaXMuZXh0cmFJdGVtQ291bnQgKiAodGhpcy5saW5lSGVpZ2h0ICsgdGhpcy5pdGVtSGVpZ2h0IC8gMik7XHJcbiAgICAgICAgLy8g5rS76LeD5Yy65Z+f6auY5bqmXHJcbiAgICAgICAgdGhpcy5hY3RpdmVBcmVhSGVpZ2h0ID0gdGhpcy5hY3RpdmVJdGVtQ291bnQgKiB0aGlzLmxpbmVIZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIOeItuiKgueCueS4iuS4gOasoeeahHnvvIznlKjkuo7orqHnrpfmmK/kuIrmu5Hov5jmmK/kuIvmu5FcclxuICAgICAgICB0aGlzLmNvbnRlbnROb2RlTGFzdFkgPSAwO1xyXG4gICAgICAgIC8vIOeItuiKgueCuemrmOW6plxyXG4gICAgICAgIHRoaXMuY29udGVudEhlaWdodCA9IDUwMDtcclxuXHJcbiAgICAgICAgLy8g5rS76LeD55qE5aS06IqC54K555qE5LiL5qCHXHJcbiAgICAgICAgdGhpcy5hY3RpdmVIZWFkSW5kZXggPSAwO1xyXG4gICAgICAgIC8vIOa0u+i3g+eahOWwvuiKgueCueeahOS4i+agh1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGFpbEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgLy8g55uR5ZCs5rua5Yqo5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdzY3JvbGxpbmcnLCB0aGlzLm9uU2Nyb2xsaW5nLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdChldmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgLy8g5Lyg6YCS5LqL5Lu255uR5ZCs5ZmoXHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyID0gZXZlbnRMaXN0ZW5lcjtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0RGF0YShkYXRhU2V0KSB7XHJcbiAgICAgICAgdGhpcy5kYXRhU2V0ID0gZGF0YVNldDtcclxuICAgICAgICAvLyDorqHnrpfniLboioLngrnnmoTpq5jluqZcclxuICAgICAgICB0aGlzLmNvbnRlbnRIZWlnaHQgPSB0aGlzLmRhdGFTZXQubGVuZ3RoICogKHRoaXMubGluZUhlaWdodCk7XHJcbiAgICAgICAgLy8g6K6+572u6auY5bqmXHJcbiAgICAgICAgdGhpcy5ub2RlX2NvbnRlbnQuaGVpZ2h0ID0gdGhpcy5jb250ZW50SGVpZ2h0ICsgdGhpcy5kb3duU3BhY2U7XHJcbiAgICAgICAgLy8g5riF56m654i26IqC54K5XHJcbiAgICAgICAgdGhpcy5ub2RlX2NvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIOacieWPr+iDveaVsOaNruavlOa0u+i3g+iKgueCueWwkS4uLiDpgqPlsLHnlKjlsI/nmoTpgqPkuKpcclxuICAgICAgICBsZXQgbnVtYmVyID0gTWF0aC5taW4odGhpcy5kYXRhU2V0Lmxlbmd0aCwgdGhpcy5hY3RpdmVJdGVtQ291bnQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcclxuICAgICAgICAgICAgLy8g5a6e5L6L5YyW6IqC54K5IOW5tuWIneWni+WMluOAgeiuvue9ruWGheWuuVxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGZiX2l0ZW0pO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChCYXNlSXRlbSkuaW5pdCh0aGlzLmV2ZW50TGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEl0ZW1Ob2RlKG5vZGUsIGkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlX2NvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTm9kZXMucHVzaChub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOiuvue9rua0u+i3g+eahOmmluWwvuiKgueCueS4i+agh1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSGVhZEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmFjdGl2ZVRhaWxJbmRleCA9IG51bWJlciAtIDE7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOiuvue9ruiKgueCueWGheWuuVxyXG4gICAgc2V0SXRlbU5vZGUobm9kZSwgaW5kZXgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZGF0YVNldFtpbmRleF07XHJcbiAgICAgICAgbGV0IGNvbXAgPSBub2RlLmdldENvbXBvbmVudChCYXNlSXRlbSk7XHJcbiAgICAgICAgY29tcC5zZXRJdGVtKGRhdGEpO1xyXG5cclxuICAgICAgICAvLyDmoLnmja7kuIvmoIforqHnrpflubbkv67mlLl5XHJcbiAgICAgICAgbm9kZS55ID0gLXRoaXMubGluZUhlaWdodCAqIGluZGV4ICsgKC10aGlzLnRvcFNwYWNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g5rua5Yqo55uR5ZCsXHJcbiAgICBvblNjcm9sbGluZygpIHtcclxuICAgICAgICAvLyDliKTmlq3kuIrmu5Ev5LiL5ruRXHJcbiAgICAgICAgbGV0IHNjcm9sbFVwID0gdGhpcy5ub2RlX2NvbnRlbnQueSA+IHRoaXMuY29udGVudE5vZGVMYXN0WTtcclxuICAgICAgICB0aGlzLmNvbnRlbnROb2RlTGFzdFkgPSB0aGlzLm5vZGVfY29udGVudC55O1xyXG5cclxuICAgICAgICAvLyDlpLToioLngrlcclxuICAgICAgICBsZXQgaGVhZE5vZGUgPSB0aGlzLmFjdGl2ZU5vZGVzWzBdO1xyXG4gICAgICAgIC8vIOWktOiKgueCuei3neemu+Wxj+W5lemhtuerr+eahOi3neemu1xyXG4gICAgICAgIGxldCBkaXNfaGVhZCA9IHRoaXMubm9kZV9jb250ZW50LnkgKyBoZWFkTm9kZS55O1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsVXApIHtcclxuICAgICAgICAgICAgLy8g5LiK5ruRIOWIpOaWreaYr+WQpumcgOimgeaKiuWktOiKgueCueenu+WKqOWIsOWwvumDqFxyXG4gICAgICAgICAgICAvLyDlpLToioLngrnotoXlh7rlronlhajljLog5LiUIOWQjumdoui/mOacieaVsOaNruWPr+S7peWKoOi9ve+8iOmBv+WFjeS4i+agh+i2heWHuuaVsOe7hOmVv+W6pu+8iVxyXG4gICAgICAgICAgICBpZiAoZGlzX2hlYWQgPiB0aGlzLnNhZmVBcmVhSGVpZ2h0ICYmIHRoaXMuYWN0aXZlVGFpbEluZGV4ICsgMSA8IHRoaXMuZGF0YVNldC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi56e76Zmk5aS06YOo6IqC54K5XCIpO1xyXG4gICAgICAgICAgICAgICAgaGVhZE5vZGUgPSB0aGlzLmFjdGl2ZU5vZGVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU5vZGVzLnB1c2goaGVhZE5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIOS/ruaUuea0u+i3g+S4i+agh1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWlsSW5kZXgrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSGVhZEluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u6IqC54K55YaF5a65XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1Ob2RlKGhlYWROb2RlLCB0aGlzLmFjdGl2ZVRhaWxJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDkuIvmu5Eg5Yik5pat5piv5ZCm6ZyA6KaB5oqK5bC+6IqC54K556e75Yqo5Yiw5aS06YOoXHJcbiAgICAgICAgICAgIC8vIOWktOiKgueCueWcqOWuieWFqOWMuuWGhSDkuJQg5YmN6Z2i6L+Y5pyJ5pWw5o2uXHJcbiAgICAgICAgICAgIGlmIChkaXNfaGVhZCA8IHRoaXMuc2FmZUFyZWFIZWlnaHQgJiYgdGhpcy5hY3RpdmVIZWFkSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuenu+mZpOWwvuiKgueCuVwiKTtcclxuICAgICAgICAgICAgICAgIHRhaWxOb2RlID0gdGhpcy5hY3RpdmVOb2Rlcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTm9kZXMudW5zaGlmdCh0YWlsTm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWlsSW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSGVhZEluZGV4LS07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJdGVtTm9kZSh0YWlsTm9kZSwgdGhpcy5hY3RpdmVIZWFkSW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==