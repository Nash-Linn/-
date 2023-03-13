/**
 *  箭头函数和普通函数区别
 *
 *  1.this指向问题
 *     箭头函数中的this只在箭头函数定义时就决定的，而且不可修改（call，apply，bind）
 *     ****箭头函数的this指向在定义时外层第一个普通函数的this
 *  2.箭头函数不能new（不能当作构造函数）
 *  3.箭头函数没有prototype
 *  4.箭头函数没有arguments
 */

// let obj = {
//   a: function () {
//     console.log(this);
//   },
//   b: () => {
//     console.log(this);
//   },
// };

// obj.a();
// obj.b();

let obj = {
  run: function () {
    // return function () {
    //   console.log(this);
    // };   //  ----------> window

    return () => {
      console.log(this);
    }; //  ----------> obj
  },
};

obj.run()();
