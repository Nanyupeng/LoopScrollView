import BaseItem from './BaseItem';
cc.Class({
    extends: cc.Component,

    properties: {
        // 子节点预制件
        pfb_item: { type: cc.Prefab, default: null },
        // 父节点
        node_content: { type: cc.Node, default: null },

        // 子节点间距
        itemSpace: 20,

        // 上间距
        topSpace: 10,

        // 下间距
        downSpace: 10
    },

    // 初始化数据
    onLoad() {
        this.dataSet = [];
        // 当前活跃节点数组 是从头到尾排的
        this.activeNodes = [];

        // 计算
        this.itemHeight = this.pfb_item.data.height;
        // 单行高度 一个子节点+一个间距
        this.lineHeight = this.itemHeight + this.itemSpace;
        // 可视的节点数量（屏幕可以显示的）
        this.visitedItemCount = parseInt(this.node.height / (this.lineHeight));
        // 额外的节点数量
        this.extraItemCount = parseInt((this.visitedItemCount + 1) / 2);
        // 活跃的节点数量 = 可视节点 + 2*额外节点
        this.activeItemCount = this.visitedItemCount + this.extraItemCount;

        // 安全区域高度
        this.safeAreaHeight = this.extraItemCount * (this.lineHeight + this.itemHeight / 2);
        // 活跃区域高度
        this.activeAreaHeight = this.activeItemCount * this.lineHeight;

        // 父节点上一次的y，用于计算是上滑还是下滑
        this.contentNodeLastY = 0;
        // 父节点高度
        this.contentHeight = 500;

        // 活跃的头节点的下标
        this.activeHeadIndex = 0;
        // 活跃的尾节点的下标
        this.activeTailIndex = 0;

        // 监听滚动事件
        this.node.on('scrolling', this.onScrolling, this);
    },

    init(eventListener) {
        // 传递事件监听器
        this.eventListener = eventListener;
    },

    setData(dataSet) {
        this.dataSet = dataSet;
        // 计算父节点的高度
        this.contentHeight = this.dataSet.length * (this.lineHeight);
        // 设置高度
        this.node_content.height = this.contentHeight + this.downSpace;
        // 清空父节点
        this.node_content.removeAllChildren(true);

        // 有可能数据比活跃节点少... 那就用小的那个
        let number = Math.min(this.dataSet.length, this.activeItemCount);
        for (let i = 0; i < number; i++) {
            // 实例化节点 并初始化、设置内容
            let node = cc.instantiate(this.pfb_item);
            node.getComponent(BaseItem).init(this.eventListener);
            this.setItemNode(node, i);

            this.node_content.addChild(node);
            this.activeNodes.push(node);
        }

        // 设置活跃的首尾节点下标
        this.activeHeadIndex = 0;
        this.activeTailIndex = number - 1;
    },

    // 设置节点内容
    setItemNode(node, index) {
        let data = this.dataSet[index];
        let comp = node.getComponent(BaseItem);
        comp.setItem(data);

        // 根据下标计算并修改y
        node.y = -this.lineHeight * index + (-this.topSpace);
    },

    // 滚动监听
    onScrolling() {
        // 判断上滑/下滑
        let scrollUp = this.node_content.y > this.contentNodeLastY;
        this.contentNodeLastY = this.node_content.y;

        // 头节点
        let headNode = this.activeNodes[0];
        // 头节点距离屏幕顶端的距离
        let dis_head = this.node_content.y + headNode.y;

        if (scrollUp) {
            // 上滑 判断是否需要把头节点移动到尾部
            // 头节点超出安全区 且 后面还有数据可以加载（避免下标超出数组长度）
            if (dis_head > this.safeAreaHeight && this.activeTailIndex + 1 < this.dataSet.length) {
                // console.log("移除头部节点");
                headNode = this.activeNodes.shift();
                this.activeNodes.push(headNode);

                // 修改活跃下标
                this.activeTailIndex++;
                this.activeHeadIndex++;

                // 设置节点内容
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
    },
});
