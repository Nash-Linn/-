/**
 * primise有几种状态
 *    三种状态：
 *            pending（进行中）
 *            fulfilled（已成功）
 *            reject（已失败）
 *
 *
 *
 */

// Promise.resolve("foo")
//   .then((res) => {
//     console.log("res", res);
//   })
//   .then((res) => {
//     console.log("1");
//   });

function* asyncFn() {
  yield setTimeout(() => {
    console.log("1秒延迟");
  }, 1000);
  yield setTimeout(() => {
    console.log("2秒延迟");
  }, 2000);
  yield setTimeout(() => {
    console.log("3秒延迟");
  }, 3000);
}

let fn = asyncFn();

fn.next().value;
fn.next().value;
fn.next().value;
