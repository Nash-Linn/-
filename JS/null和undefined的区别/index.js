/**
 * null和undefined的区别
 *
 * 1.作者在设计JS的时候先设计了null（为什么设计了null：最初设计JS的时候借鉴了java的语言）
 * 2.null会被隐式转换成0
 * 3.先有null后有undefined，出来 undefined是为了填写之前的坑
 *
 * 具体区别：javascript的最初版本是这样区分的：null是一个表示‘无’的对象（空对象指针），
 *          转为数值时为0；undefined是一个表示‘无’的原始值，转为数值时为NaN
 *
 *
 */
