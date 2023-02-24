/**
 * 宏任务和微任务
 *
 * 1.为什么JavaScript是单线程的？
 *
 * JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。那么，
 * 为什么JavaScript不能有多个线程呢？这样能提高效率啊。
 * JavaScript的单线程，与它的用途有关。作为浏览器脚本语言，JavaScript 的主要用途
 * 是与用户互动，以及操作 DOM。 这决定了它只能是单线程，否则会带来很复杂的同步问题。
 * 比如，假定 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，
 * 另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？
 * 所以，为了避免复杂性，从一诞生，JavaScript 就是单线程，这已经成了这门语言的核心特征，
 * 将来也不会改变。
 *
 * 2.JavaScript是单线程，怎么执行异步的代码
 *
 * JS代码执行流程：同步代码执行完 --> 事件循环
 *
 * 事件循环（宏任务、微任务）
 *
 * 进入事件循环：请求、定时器、事件...
 *
 *
 * 微任务：promise.then,process.nextTick、Object.observe、MutationObserver
 * 宏任务：script、setTimeOut、setInterval、setImmediate
 *
 * 注意：Promise是同步任务
 * 宏任务和微任务的执行顺序：
 * 执行宏任务script，
 * 进入script后，所有的同步任务主线程执行
 * 所有宏任务放入宏任务执行队列
 * 所有微任务放入微任务执行队列
 * 先清空微任务队列，
 * 再取一个宏任务，执行，再清空微任务队列
 * 依次循环
 *
 * 要执行宏任务的前提是清空所有的微任务
 *
 * 流程：同步任务-->事件循环【宏任务和微任务】-->微任务-->宏任务
 *
 */

setTimeout(function () {
  console.log("1");
});

new Promise((resolve) => {
  console.log("promise 1");
  resolve();
})
  .then(() => {
    console.log("微1");
  })
  .then(() => {
    console.log("微2");
  });

console.log(2);
