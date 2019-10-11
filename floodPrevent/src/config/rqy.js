export default [
  {
    path: '/rqy',
    name: 'rqy',
    redirect: '/rqy/yygl',
    component: () => import('@/views/rqy/Index.vue'),
    children: [
      {
        path: '/rqy/yygl',
        name: 'rqy-yygl',
        component: () => import('@/views/rqy/yygl.vue')
      },
      {
        path: '/rqy/yygl/cjyy',
        name: 'rqy-yygl-cjyy',
        component: () => import('@/views/rqy/cjyy.vue')
      },
      {
        path: '/rqy/fwgl',
        name: 'rqy-fwgl',
        component: () => import('@/views/rqy/fwgl.vue')
      },
      {
        path: '/rqy/jxck',
        name: 'rqy-jxck',
        component: () => import('@/views/rqy/jxck.vue')
      },
      {
        path: '/rqy/ccgl',
        name: 'rqy-ccgl',
        component: () => import('@/views/rqy/ccgl.vue')
      },
      {
        path: '/rqy/ptrz',
        name: 'rqy-ptrz',
        component: () => import('@/views/rqy/ptrz.vue')
      },
      {
        path: '/rqy/jkbj',
        name: 'rqy-jkbj',
        component: () => import('@/views/rqy/jkbj.vue')
      },
      {
        path: '/rqy/dzhgl',
        name: 'rqy-dzhgl',
        component: () => import('@/views/rqy/dzhgl.vue')
      }
    ]
  }
]
