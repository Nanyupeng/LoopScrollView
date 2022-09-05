cc.Class({
    extends: cc.Component,

    init(eventListener){
        this.data = null;
        this.eventListener = eventListener;

    },

    setItem(data){
        this.data = data;
    },
});
