import BaseItem from './BaseItem';

cc.Class({
    extends: BaseItem,

    properties: {
        label: cc.Label
    },

    init(eventListener){
        this._super(eventListener);
    },

    // 设置内容
    setItem(data){
        this._super(data);
        this.label.string = data.id;
    },

});
