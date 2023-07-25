// 数据类型判断
/**
 * typeof 可以正确识别：Undefined、Boolean、Number、String、Symbol、Function等
 * 类型的数据，但是对于其他的都会认为是object，比如Null、Date等，所以通过typeof来判断数据类型并不是一种可靠的方式。
 * 但是可以使用Object.prototype.toString来判断，因为内置的toString方法被所有的对象继承，当其他类型的数据调用这个方法时，
 * 都会返回一个[Object NativeConstructorName]格式的字符串，而对于Object对象，则会返回[Object Object]。
 */

function myTypeOf(obj) {
  let res = Object.prototype.toString.call(obj).split(" ")[1];
  res = res.substring(0, res.length - 1).toLowerCase();
  return res;
}
console.log(myTypeOf([]));
console.log(myTypeOf({}));
console.log(myTypeOf(new Date()));
