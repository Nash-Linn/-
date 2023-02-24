// 用一个函数来创建实例，返回new创建的实例（隐藏new关键字）

// 场景

// jQuery 的 $ 函数
// React createElement函数 （jsx语法的底层函数）
function $(...rest) {
  return new Foo(...rest);
}
$("xxx", "xxx2", "xxx3");
