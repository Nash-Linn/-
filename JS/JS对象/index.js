/**
 * new 创建一个新对象
 *
 * JS对象注意点：
 *
 * 1.对象是通过new操作符构建出来的，所以对象之间不相等(除了引用外)
 * 2.对象注意：引用类型
 * 3.对象的key都是字符串类型
 * 4.对象如何找属性|方法
 *
 *
 *
 *
 */

// console.log([1, 2, 3] == [1, 2, 3], "----->[1, 2, 3] == [1, 2, 3]"); //false

//--------------------------------------
// var obj1 = {
//   a: 1,
// };
// var obj2 = obj1;
// obj1.a = "aaa";
// console.log(obj1, obj2);

// var obj1 = {
//   a: "hellow",
// };
// var obj2 = obj1;

// obj2.a = "world";

// console.log(obj1); //{ a: 'world' }
// (function () {
//   console.log(a); //undefined
//   var a = 1;
// })();

//--------------------------------------
// var o = {
//   b: "b",
// };

// var obj1 = {
//   a: 1,
// };

// console.log(obj1);

// obj1[o] = "123";

// for (var k in obj1) {
//   console.log(k); //a     [object Object]
//   console.log(typeof k); //string string
// }

//--------------------------------------
// var a = {};
// var b = {
//   key: "a",
// };

// var c = {
//   key: "c",
// };

// a[b] = "123";
// a[c] = "456";

// console.log(a[b]);

//--------------------------------------
/**
 * 1.每一个函数都自带一个prototype【原型】
 *   注意：对象拥有_proto_
 *
 * 2.new Fun 该Fun构造函数的原型指向于对象(new Fun)的原型
 *   先在对象本身找=>构造函数中找=>对象原型中找=>构造函数原型中找=>对象上一层原型找
 *
 */
//找 a 的顺序
// function Fun() {
//   this.a = "在Fun函数中添加的"; //2
// }

// Fun.prototype.a = "这是Fun原型添加的"; //4

// let obj = new Fun();
// obj.a = "对象本身"; //1
// obj.__proto__.a = "这是对象原型添加的"; //3

// Object.prototype.a = "这是Object的原型添加的"; //5

// console.log(obj.a);

//--------------------------------------
