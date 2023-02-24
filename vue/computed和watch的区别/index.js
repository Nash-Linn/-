/**
 * computed和watch的区别
 *
 * 1.computed是计算属性，watch是监听，监听的是data中数据的变化
 * 2.computed支持缓存，依赖的属性值发生变化，计算属性才会重新计算，否则用缓存。watch不支持缓存
 * 3.computed不支持异步，watch支持异步
 * 4.computed是第一次加载就监听，watch可配置
 * 5.computed函数中必须有return，watch不用
 *
 */
