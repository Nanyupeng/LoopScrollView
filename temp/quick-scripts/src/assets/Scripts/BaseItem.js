"use strict";
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