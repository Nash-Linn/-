//保证原有函数功能不变的同时，增加一个新的功能（AOP面向切面编程）

// 场景：
// ES 和 TS 的 Decorator语法
// Nest.js 框架

//类装饰器 ， 函数（方法）装饰器 ， 属性装饰器

function deco(){
  return function(){
    console.log('给fn函数增加新的功能！')
  }
}

@deco()
function fn(){
  console.log('这是我正常的功能函数')
}


fn()