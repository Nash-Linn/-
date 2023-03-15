/**
 *  some和every区别
 *
 *  some    只要有一项匹配就返回 true
 *  every   需要全部满足才返回true
 *
 */

let arr = [1, 5, 32, 22, 333, 41, 54];

var a = arr.some((val) => {
  return val > 30;
});

console.log("a", a);

var b = arr.every((val) => {
  return val > 30;
});

console.log("b", b);
