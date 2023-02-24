/**
 *  JS作用域
 *  1.除函数外，JS没有块级作用域
 *
 *  2.作用域链：内部可以访问外部的变量，但是外部不能访问内部的变量
 *    注意：如果内部有，优先查找到内部的，如果内部没有就查找外部
 *
 *  3.注意声明变量是用var，还是没有写（window），没有写相当于在在window下声明了一个，window.x
 *
 *  4.JS有变量提升机制
 *
 *  5.优先级：变量声明 > 声明普通函数 > 参数 > 变量提升
 *
 *
 */

// 1;

// console.log(a); //打印undefined 变量提升
// var a = 2;

// 2.

// console.log(a); //报错  不存在变量提升
// let a = 2;

// 3.

// function fun() {
//   var a = 10;
// }
// fun();
// console.log(a); //报错  a在函数作用域里 全局找不到

// 4.

// for (var i = 0; i < 10; i++) {}

// console.log(i, "--->i");

// if (true) {
//   var a = 10;
// }
// console.log(a, "--->a");

// 5.

// function fun() {
//   var a = 10;
//   function foo() {
//     console.log(a, "---->a");
//   }
//   foo();
// }
// fun();

// var b = 20;
// function fun1() {
//   console.log(b, "----b");
// }
// fun1();

//6

// c = 20; // 相当于 window.c = 20
// (function () {
//   var a = (b = 10); //-->  a = window.b = 10
// })();
// // console.log(a);
// console.log(b);
// console.log(c);

// function c() {
//   var b = 1;
//   function a() {
//     //由于函数内部声明了 b 又由于b使用var 定义 变量提升了
//     console.log(b);
//     var b = 2;
//     console.log(b);
//   }
//   a();
//   console.log(b);
// }
// c();

/**
 * 相当于：
 * var b
 * console.log(b)   //undefined
 * b = 2;
 * console.log(b)   //2
 */

/**
 * 本层作用域有没有此变量，注意变量提升
 */

// 7

// var name = "a";
// (function () {
//   if (typeof name == "undefined") {
//     var name = "b";
//     console.log("111" + name);
//   } else {
//     console.log("222" + name);
//   }
// })();

// function fun() {
//   var a = 10;
//   function a() {}
//   console.log(a);
// }
// fun(); // 10

function fun(a) {
  //参数高于变量提升
  console.log(a);
  var a = 10;
}
fun(100); // 100
