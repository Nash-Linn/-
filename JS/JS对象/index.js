/**
 * new 创建一个新对象
 *
 * JS对象注意点：
 *
 * 1.对象是通过new操作符构建出来的，所以对象之间不相等
 * 2.对象注意：引用类型
 * 3.对象的key都是字符串类型
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
var a = {};
var b = {
  key: "a",
};

var c = {
  key: "c",
};

a[b] = "123";
a[c] = "456";

console.log(a[b]);
