/**
 * 路由导航守卫有哪些
 *
 *  全局、路由独享、组件内
 *
 *   1.全局
 *    beforeEach(to,from,next)
 *    beforeResolve(to,from,next)
 *    afterEach(to,from)
 *
 *
 *   2.路由独享
 *    beforeEnter
 *
 *   3.组件内
 *    beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave
 *
 *
 *  使用场景：判断是否登录，如果登录就next 否则就跳转到登录页面
 *
 */
