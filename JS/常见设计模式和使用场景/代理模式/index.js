// Proxy 访问一个对象属性之前先做一个拦截（做一些额外的操作）

// Vue3响应式原理

let obj = {
  name: "Vue",
  age: 9,
};

let obj2 = new Proxy(obj, {
  get(target, property) {
    //这个get函数  什么时候执行？   访问obj2的某个属性的时候执行
    //target 就是obj这个对象
    //property 就是访问的这个属性

    return target[property] + "!!!!";
  },
  set(target, property, newValue) {
    target[property] = newValue;
  },
});

console.log("obj2.name", obj2.name); //触发get
obj2.msg = "hello"; //触发set
console.log("obj2.msg", obj2.msg); //触发get
