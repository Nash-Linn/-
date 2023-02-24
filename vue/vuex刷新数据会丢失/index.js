/**
 *  vuex刷新数据会丢失么？怎么解决
 *    vuex肯定会重新获取数据，页面也会丢失数据
 *
 *    1.把数据直接保存在浏览器缓存里（cookie  localstorage sessionstorage）
 *    2.页面刷新的时候，再次请求数据，达到可以动态更新的方法
 *        监听浏览器的刷新，在刷新前把数据保存到sessionstorage里，
 *        刷新后请求数据，请求到了用vuex，如果没有那就用sessionstorage里的数据
 *
 *
 */
