/**
 *  display none 和 visibility hidden
 *
 *  1.占用位置的区别
 *    display:none      不占用位置
 *    visibility:hidden 虽然隐藏了，但是占用位置
 *
 *  2.重绘和回流的问题
 *    display:none visibility:hidden 都会产生重绘
 *    display:none 还会产生回流
 *
 *    产生回流一定会造成重绘，但是重绘不一定产生回流
 *
 *    产生回流的情况：改变元素的位置（left、top...),显示隐藏元素
 *    产生重绘的情况：样式改变（background、color...)
 *
 */
