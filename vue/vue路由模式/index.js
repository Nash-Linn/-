/**
 *  路由模式有两种：hash 和 history 模式
 *
 *  区别：
 *    1.表现形态不同
 *      hash模式带有 #
 *      history不带
 *
 *     2.跳转请求
 *       history：http://localhost:8080/id  如果id不存在 你那就会发送请求
 *       hash 不会发送请求
 *
 *     3.打包后前端自测用hash，如果使用history会出现空白页
 *
 *
 */
