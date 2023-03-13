/**
 * let、var、const 都能声明变量
 *
 * var 有变量提升，let 和 const 没有
 *
 * var 可以重复声明变量，let 和 const 不行
 *
 * let 和 var 可以修改 变量的值，const 不行
 *
 * let 和 var 在声明时可以不赋值，const 不行
 *
 * var声明的变量没有自身的作用域，let 和 const 有自身作用域
 *
 */

function fn(params) {
  if (true) {
    var num = 123;
    // let num = 123;
    // const num = 123;
  }
  console.log("num", num);
}

fn();
