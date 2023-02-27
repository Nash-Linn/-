/**
 *
 *
 * slice是用来截取的，不改变原数组，返回新数组
 *
 * splice会改变原数组 可以 添加 修改 删除
 */

var arr1 = ["a", "b", "c", "d", "e", "f", "g"];
var arr2 = arr1.slice(1, 3);
console.log("arr1", arr1);
console.log("arr2", arr2);

var arr3 = ["a", "b", "c", "d", "e", "f", "g"];
var arr4 = arr3.splice(1, 3);
console.log("arr3", arr3);
console.log("arr4", arr4);
