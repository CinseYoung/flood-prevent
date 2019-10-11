export default [{
  path: '/base',
  name: 'base',
  redirect: '/base/jb/xzqh',
  component: () => import('@/views/base/Index.vue'),
  children: [{
    path: '/base/jb/xzqh',
    name: 'base-jb-xzqh',
    component: () =>
            import('@/views/base/jb/xzqh.vue')
  }, {
    path: '/base/jb/fzq',
    name: 'base-jb-fzq',
    component: () =>
            import('@/views/base/jb/fzq.vue')
  }, {
    path: '/base/jb/wxq',
    name: 'base-jb-wxq',
    component: () =>
            import('@/views/base/jb/wxq.vue')
  }, {
    path: '/base/jb/fzqdw',
    name: 'base-jb-fzqdw',
    component: () =>
            import('@/views/base/jb/fzqdw.vue')
  }
  ]
}]
