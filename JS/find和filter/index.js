/**
 *  find和filter的区别
 *
 *  区别一：返回的内容不同
 *
 *    filter 返回是新数组
 *    find  返回具体的内容，第一个匹配的结果
 *
 *
 */

let arr = [1, 5, 6, 7, 123, 634, 3, 221];

let a = arr.find((item) => item > 100);
console.log("a", a);
let b = arr.filter((item) => item > 100);
console.log("b", b);
