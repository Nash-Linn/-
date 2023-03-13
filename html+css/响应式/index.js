/**
 *  响应式是什么
 *
 *    一个URL可以响应多端
 *
 *  语法结构
 *  @media only sceen and (max-width:1000px){
 *    ul li:last-child{
 *    display:none
 *  }
 * }
 *
 *   only:可以排除 不支持媒体查询的浏览器
 *   screen：设备类型
 *   max-width|max-height
 *   min-width|min-height
 *
 *
 *
 *  响应式图片
 *
 * <picture>
 *  <source srcset='1.jpg' media='(min-width:1000px)'>
 *  <source srcset='2.jpg' media='(min-width:700px)'>
 *  <img srcset='3.jpg'>
 * </picture>
 *
 *
 *
 *
 *  布局方案
 *
 *  一、什么情况下采用响应式布局
 *    数据不是特别多，用户量不是特别大，纯展示类的项目适合响应式布局
 *
 *    例如：公司的官网、专题页面
 *
 *    特别追求性能的项目，不太适合响应式，因为如果添加了很多的响应式就很造成加载速度变慢
 *
 *  二、pc + 移动端应该做什么样的布局方案
 *    注意：访问量还可以或者比较大，类似与淘宝网
 *
 *    pc端是一套，会加入一点点响应式
 *    移动端是一套，会使用自适应布局方式
 *
 *  三、pc的设计图
 *    ui:1980,
 *    笔记本电脑：1280
 *    ui图的宽度和电脑的宽度不对应
 *      1.把ui图进行等比缩放，缩放成和电脑一样的尺寸
 *      2.换1980的电脑
 *
 *  四、移动端的设计图
 *    宽度：750
 *    因为750设计图/2 就是375，正好是iPhone6的尺寸做为基准点
 *
 *
 *
 */
