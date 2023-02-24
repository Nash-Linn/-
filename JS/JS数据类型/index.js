/**
 * JS数据类型
 *  基本类型：string，number，boolean，undefined，null，symbol，bigint
 *  引用类型：object，array，function
 *
 *  数据类型隐式转换
 *
 */

console.log(true + 1); // 2
//字符串和其他类型 相加，变成连接形式
console.log("name" + true); //nametrue

console.log(undefined + 1); //NaN
console.log(typeof (undefined + 1)); //number   NaN是数字类型，但不是一个具体数字

console.log(typeof null); //object

console.log(typeof undefined); //undefined
