/**
 * 合并对象
 *  1.Object.assign(obj1,obj2)
 *  2.扩展运算符 ...
 *  3.
 *
 *
 */

let a = {
  a: 1,
  b: 4,
};

let b = {
  b: 2,
  c: 3,
};

// let obj1 = Object.assign(a, b);

let obj1 = { ...a, ...b };

console.log("obj1", obj1);

extend(a, b);

console.log(a);

function extend(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }
}
