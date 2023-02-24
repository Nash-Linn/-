/***
 * vuex的响应式处理
 *
 *  vuex是vue的状态管理工具
 *  vue中可以直接触发method中的方法，vuex是不可以的。为了处理异步，当触发事件的时候，
 *  会通过dispath来访问actions中的方法，actions中的commit会触发mutations中的方法从而
 *  修改state里的值，然后通过getter把数据更新到视图
 *
 *  vue.use(vuex),调用install方法，通过applyMixin(vue)在任意组件内，执行this.$store
 *  就可以访问到store对象
 *
 *  vuex的state是响应式的，借助的就是vue的data，把state存到vue实例组件的data中
 *
 *
 *
 *
 */
