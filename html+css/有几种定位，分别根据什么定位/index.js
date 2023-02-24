/**
 * position有哪些？根据什么定位的
 *
 * static：（默认）没有定位
 * fixed：绝对定位，相对于浏览器窗口进行定位
 * relative：相对定位，相对于自身定位，不脱离文档流
 * absolute：觉得定位，相对于第一个有relative的父元素定位，脱离文档流
 *
 * relative和absolute区别
 * 1.relative不脱离文档流，absolute脱离文档咯
 * 2.relative相对于自身，absolute相对于第一个relative的父元素
 * 3.relative如果有left，right，top，bottom ==> left，top
 *   absolute如果有left，right，top，bottom ==> left，right，top，bottom
 */
