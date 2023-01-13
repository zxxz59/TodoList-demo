// vue3环境中, 提倡函数式编程 => 干啥事, 都是调用函数
// 1. 创建实例 createApp(xx)
// 2. 创建路由 createRouter(xx)
// 3. 创建仓库 createStore(xx)
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
const router = createRouter({
  // 路由模式
  // 1. createWebHashHistory() hash模式   带#
  // 2. createWebHistory()     历史模式   不带#
  history: createWebHashHistory(),
  // 配置规则, 和之前一模一样
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: () => import('../pages/Home.vue') },
    { path: '/login', component: () => import('../pages/Login.vue') },
  ],
})

export default router
