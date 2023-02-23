/**
 *
 *  ==和===有什么不同？
 *
 *  ==：比较的是值
 *
 *  string == number || boolean || number ... 都会隐式转换
 *  通过 valueOf转换（valueOf()方法通常由 JavaScript 在后台自动调用
 *
 *
 *
 *
 *  ===：除了比较值，还比较类型
 *
 *
 *
 *
 */

console.log(1 == "1"); //true  string --> number
console.log(true == 1); //true  boolean --> number
console.log(null == undefined); //true  object转成基本类型
console.log([1, 2] == "1,2"); //true   array-->string 以逗号分隔每个数组形成的字符串，约等于调用.join()

var s = "2";
if (s == 2) {
  console.log(typeof s, "------>typeof s");
}

// Object.prototype.valueOf = function () {
//   alert(123);
// };

// var arr = [1, 2];
// var str = "1,2";
// console.log(arr == str); //由于重写了隐式转换的方法 valueOf失效 所以为 false

console.log(NaN == NaN); //false
console.log(undefined == null); //true
console.log(null == null); //true
console.log(null == undefined); //true
