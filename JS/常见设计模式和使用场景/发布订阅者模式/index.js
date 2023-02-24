//发布者 订阅者 第三方

function fn1() {
  //事件函数1
}

// 第三方 eventBus
// 开启自定义事件监听

eventBus.on("eventName", fn1); //订阅者

//触发自定义事件 eventName ， 从而执行fn1函数
eventBus.$emit("eventName"); //发布者

//删除自定义事件  反正 内存泄漏, 在 生命周期中的销毁阶段

eventBus.off("eventName", fn1);
