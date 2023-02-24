// 深拷贝就是完全拷贝一份新的对象，会在堆内存中开辟新的空间，拷贝的对象被修改后，原对象不受影响
//主要针对的是引用数据类型
// 1.扩展运算符
// 2.JSON.parse(JSON.stringify())
// 3.利用递归函数实现

// 1.扩展运算符  缺点：只能实现第一层  当有多层的时候还是浅拷贝
let obj = {
  name: "张三",
  age: 12,
  say() {
    console("hello");
  },
  children: {
    name: "张1",
    age: 1,
  },
  arr: [1, 2, 2, 5, [3, 2], [2, [3, 7, [8]]]],
};

let obj1 = {
  ...obj,
};

obj1.name = "wangwu";
console.log("obj", obj);
console.log("obj1", obj1);

//2.JSON.parse(JSON.stringify())   缺点：无法拷贝函数

let obj2 = JSON.parse(JSON.stringify(obj));
obj2.children.name = "zhang2";

console.log("obj2", obj2);

// 3.利用递归函数实现
function exten(origin, deep) {
  let obj = {};
  if (origin instanceof Array) {
    obj = [];
  }
  for (let key in origin) {
    let value = origin[key];

    obj[key] =
      !!deep && typeof value === "object" && value !== null
        ? exten(value, deep)
        : value;
  }
  return obj;
}

let obj3 = exten(obj, true);

obj3.children.age = 5;
console.log("obj3", obj3);
