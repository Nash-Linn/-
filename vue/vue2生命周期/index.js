/**
 *  vue2生命周期
 *
 *  beforeCreate
 *
 *  created
 *
 *  beforeMount
 *
 *  mounted
 *
 *  beforeUpdate
 *
 *  updated
 *
 *  beforeDestory
 *
 *  destoryed
 *
 *
 *  一进入页面或者组件会执行哪些
 *    beforeCreate
 *    created
 *    beforeMount
 *    mounted
 *
 *  在哪个阶段有 $el,在哪个阶段有$data
 *     beforeCreate 都没有
 *     created 中有$data没有$el
 *     beforeMount 中有$data没有$el
 *     mounted 中有$data 和 $el
 *
 *
 *  如果加入 keep-alive 会增加两个生命周期
 *      activated、deactivated
 *
 *  如果加入 keep-alive，第一次组件会执行哪些生命周期
 *    beforeCreate
 *    created
 *    beforeMount
 *    mounted
 *    activated
 *
 *  如果加入 keep-alive，第n次进入组件会执行哪些生命周期
 *    只执行  activated
 *
 */
