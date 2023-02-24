function foo() {
  console.log(1);
  return undefined;
}
//1.执行前  2.执行
//new的流程
//执行前
//1.绑定this为空对象
//2.让空对象[[Prototype]] -> 函数的 prototype 属性
//（1）所有对象都有 [[Prototype]]  （__proto__） //隐式属性
//    所有的对象，本质都 new 出来
//（2）所有的函数对象 -> prototype //显式属性

//3.正常执行函数

//4.如果函数返回的基本类型，返回this的值，否则返回原函数的返回值

var a = new foo(); //返回值： this指向的对象的引用
console.log(a);

//访问对象属性的本质，底层帮忙调用函数
//默认是
//[[GET]]
//1.判断对象里面有没有
//2.判断他的__proto__指向的对象里面有没有

console.log("---------------------------");
// 面试题

//实例方法

Object.prototype.a = function () {
  console.log("a");
};

//实例方法
Function.prototype.b = function () {
  console.log("b");
};

//只要涉及到对象就思考
//1.__proto__ -> 构造函数 的 prototype
//2.如果他是函数对象，prototype

var F = function () {};

var f = new F();

f.a();
// f.b();
F.a();
F.b();
