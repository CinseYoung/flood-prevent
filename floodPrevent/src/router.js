import Vue from 'vue'
import Router from 'vue-router'

import sys from './config/sys'
import record from './config/record'
import riskmap from './config/riskmap'
import analyze from './config/analyze'
import base from './config/base'
import data from './config/data'
import rqy from './config/rqy'

Vue.use(Router)

const home = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '西藏自治区水利厅统一身份认证'
    }
  }
]

const routes = home
  .concat(sys)
  .concat(record)
  .concat(riskmap)
  .concat(analyze)
  .concat(base)
  .concat(data)
  .concat(rqy)

const instance = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

// 添加登录拦截
instance.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '西藏智慧水利综合信息服务平台'
  }

  if (to.name === 'login') {
    next()
    return
  }
  if (window.localStorage.getItem('kpst-token')) {
    next()
    return
  }
  next('/login')
})

export default instance
