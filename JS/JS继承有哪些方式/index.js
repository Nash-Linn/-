/**
 * JS继承有哪些
 *
 * 1.ES6
 *
 * 2.原型链继承
 *
 * 3.借用构造函数
 *
 * 4.组合式继承
 */

//----------------------------------------------
//1.ES6 extends
class Parent {
  constructor() {
    this.age = 18;
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.name = "张三";
  }
}

let o1 = new Child();
console.log(o1);

//----------------------------------------
// 2.原型链继承
console.log("--------------------------------------------");
function Parent1() {
  this.age = 20;
}

function Child1() {
  this.name = "李四";
}

Child1.prototype = new Parent1();

let o2 = new Child1();
console.log("o2", o2, o2.name, o2.age);

//---------------------------------------------
//3.借用构造函数
console.log("--------------------------------------------");
function Parent3() {
  this.age = 20;
}

function Child3() {
  this.name = "王五";
  Parent3.call(this);
}

let o3 = new Child3();
console.log("o3", o3, o3.name, o3.age);

//---------------------------------------------
//4.组合式继承
console.log("--------------------------------------------");
function Parent4() {
  this.age = 20;
}

function Child4() {
  Parent4.call(this);
  this.name = "赵六";
}

Child4.prototype = new Parent4();

let o4 = new Child4();
console.log("o4", o4, o4.name, o4.age);
