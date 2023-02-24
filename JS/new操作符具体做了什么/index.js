/***
 * new操作符做了什么
 *
 * 1.先创建一个空对象
 * 2.把空对象和构造函数通过原型链进行链接
 * 3.把构造函数的this绑定到新的空对象身上
 * 4.根据构建函数返回的类型判断，如果是值类型，则返回对象
 *   如果是引用类型，就要返回引用类型
 */

function myNew(Func, ...args) {
  let newObj = {};
  newObj._proto_ = Func.prototype;
  let result = Func.apply(newObj, args);
  return result instanceof Object ? result : newObj;
}

function Person(name) {
  this.name = name;
}

let zhangsan = myNew(Person, "张三");
console.log("zhangsan", zhangsan.name);
