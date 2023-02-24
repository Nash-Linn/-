/**
 * keep-alive是什么？怎么使用？
 *
 *    vue的一个内置组件，包裹组件的时候，会缓存不活跃的组件实例，并不是销毁他们
 *
 *    作用：把组件切换的状态保存在内存里，防止重复渲染DOM节点，减少加载时间和性能消耗，提高用户体验
 *
 *
 *
 *
 *
 *
 *  1.缓存所有页面
 *    在App.vue 里
 *  <template>
 *    <div id='app'>
 *      <keep-alive>
 *        <router-view/>
 *      </keep-alive>
 *    </div>
 *  </template>
 *
 *
 *
 *  2.根据条件缓存页面
 *    在App.vue 里
 *  <template>
 *    <div id='app'>
 *
 *
 *       1.缓存name为test的组件
 *      <keep-alive include='test'>
 *        <router-view/>
 *      </keep-alive>
 *
 *       2.将缓存name为 a 或者 b 的组件，结合动态组件使用
 *      <keep-alive include='a,b'>
 *        <router-view/>
 *      </keep-alive>
 *
 *       3.使用正则表达式，需使用 v-bind
 *      <keep-alive :include='/a|b/'>
 *        <router-view/>
 *      </keep-alive>
 *
 *       4.动态判断
 *      <keep-alive :include='includedComponents'>
 *        <router-view/>
 *      </keep-alive>
 *
 *       5.将不缓存name为test的组件
 *      <keep-alive exclude='test'>
 *        <router-view/>
 *      </keep-alive>
 *
 *      5.结合路由
 *      <keep-alive>
 *        <router-view v-if='$route.meta.keepAlive'/>
 *      </keep-alive>
 *         <router-view v-if='!$route.meta.keepAlive'/>
 *    </div>
 *  </template>
 *
 *
 *
 *
 *
 *
 */
