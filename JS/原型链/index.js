/**
 *  1.原型可以解决什么问题
 *    对象共享属性和方法
 *
 *  2.谁有原型
 *    函数拥有：prototype
 *    对象拥有：__proto__
 *
 *
 *
 **/

function Fun(param) {}

var obj = new Fun();

console.log(Fun.prototype, obj.__proto__);
