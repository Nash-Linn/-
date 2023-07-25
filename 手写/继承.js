//原型链继承
/**
 * 问题1：原型中包含的引用类型属性将被所有实例共享
 * 问题2：子类在实例化的时候不能给父类构造函数传参
 */

function Animal() {
  this.colors = ["black", "white"];
}
Animal.prototype.getColor = function () {
  return this.colors;
};

function Dog() {}
Dog.prototype = new Animal();

let dog1 = new Dog();
dog1.colors.push("brown");
let dog2 = new Dog();
console.log(dog2.colors); // ["black", "white", "brown"]

//借用构造函数实现继承
/**
 * 借用构造函数实现继承解决了原型链继承的2个问题：
 * 引用类型共享问题以及传参问题，但是由于方法必须定义在构造函数中，
 * 所以会导致每次创建之类实例都会创建一遍方法
 *
 */
function Animal1(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

function Cat(name) {
  Animal1.call(this, name);
}

Cat.prototype = new Animal1();

const cat1 = new Cat("lala");
console.log(cat1.name); //lala

//组合继承
/**
 * 组合继承结合了原型链和调用构造函数，将两者的优点集中起来。
 * 基本思路是使用原型链继承原型上的属性和方法，而通过调用构造函数继承实例属性
 * 这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性
 *
 */
function Animal2(name) {
  this.name = name;
  this.colors = ["black", "white"];
}
Animal2.prototype.getName = function () {
  return this.name;
};
function Pig(name, age) {
  Animal2.call(this, name);
  this.age = age;
}
Pig.prototype = new Animal2();

const pig1 = new Pig("pipi", 5);
pig1.colors.push("brown");
console.log("pig1", pig1); // pig1 Animal2 { name: 'pipi', colors: [ 'black', 'white', 'brown' ], age: 5 }
const pig2 = new Pig("qiqi", 3);
console.log("pig2", pig2); // pig2 Animal2 { name: 'qiqi', colors: [ 'black', 'white' ], age: 3 }

//寄生式组合继承
/**
 * 组合继承已经相对完善了，但还是存在问题，它的问题就是调用了2次父类构造函数，
 * 第一次是在 new Animal2(),第二次是在 Animal2.call()
 * 所以解决方案就是不直接调用父类构造函数给子类原型复制，而是通过创建空函数 F 获取父类
 * 原型的副本
 *
 * 寄生式组合继承写法上和组合继承基本类似，区别如下
 */

/**
 * 对传入的对象进行一次浅复制
 * （将被传入的对象复制给这个构造函数的原型）
 */
function foo(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function inheritPrototype(child, parent) {
  // 创建父类原型的副本
  let prototype = foo(parent.prototype);
  // 将副本的原型的构造器指向子类
  prototype.constructor = child;
  // 将子类的原型指向父类的副本
  child.prototype = prototype;
}

function Animal3(name) {
  this.name = name;
  this.colors = ["black", "white"];
}
Animal3.prototype.getName = function () {
  return this.name;
};

function Lion(name, age) {
  Animal3.call(this, name);
  this.age = age;
}
inheritPrototype(Lion, Animal3);

const lion1 = new Lion("hoho", "2");
console.log("lion1", lion1);
