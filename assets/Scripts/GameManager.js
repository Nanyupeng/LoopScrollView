cc.Class({
    extends: cc.Component,

    properties: {
        node_scrollView: { type: cc.Node, default: null },
        node_content: { type: cc.Node, default: null },
        label_nodeCount: { type: cc.Label, default: null },
    },

    start () {
        let comp = this.node_scrollView.getComponent("MyScrollView");

        // 生成数据列表
        let list = [];
        for(let i = 0; i <= 30; i++){
            list.push({
                id: i,
                name: "道具" + i,
                price: "￥ " + parseInt(Math.random() * 1000) / 10,
                icon: "shop/Item__" + (i < 10 ? "0" : "") + i
            });
        }
        comp.setData(list);
    },

    update (dt) {
        this.label_nodeCount.string = this.node_content.childrenCount;
    },
});
