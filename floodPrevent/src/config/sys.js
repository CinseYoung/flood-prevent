export default [
  {
    path: '/system',
    name: 'system',
    redirect: '/system/xqzs/xq',
    component: () => import('@/views/system/Index.vue'),
    children: [
      {
        path: '/system/xqzs/xq',
        name: 'system-xqzs-xq',
        component: () => import('@/views/system/xqzs/xq.vue')
      },
      {
        path: '/system/xqzs/yj',
        name: 'system-xqzs-yj',
        component: () => import('@/views/system/xqzs/yj.vue')
      },
      {
        path: '/system/xqzs/dx',
        name: 'system-xqzs-dx',
        component: () => import('@/views/system/xqzs/dx.vue')
      },
      {
        path: '/system/xqzs/dh',
        name: 'system-xqzs-dh',
        component: () => import('@/views/system/xqzs/dh.vue')
      },
      {
        path: '/system/xqzs/zbgl',
        name: 'system-xqzs-zbgl',
        component: () => import('@/views/system/xqzs/zbgl.vue')
      },
      {
        path: '/system/xqzs/gw',
        name: 'system-xqzs-gw',
        component: () => import('@/views/system/xqzs/gw.vue')
      },
      {
        path: '/system/zjqx/yh',
        name: 'system-zjqx-yh',
        component: () => import('@/views/system/zzqx/yh.vue')
      },
      {
        path: '/system/zjqx/zzjg',
        name: 'system-zjqx-zzjg',
        component: () => import('@/views/system/zzqx/zzjg.vue')
      },
      {
        path: '/system/zjqx/qx',
        name: 'system-zjqx-qx',
        component: () => import('@/views/system/zzqx/qx.vue')
      },
      {
        path: '/system/zjqx/gn',
        name: 'system-zjqx-gn',
        component: () => import('@/views/system/zzqx/gn.vue')
      },
      {
        path: '/system/zjqx/zxt',
        name: 'system-zjqx-zxt',
        component: () => import('@/views/system/zzqx/zxt.vue')
      },
      {
        path: '/system/rz/xt',
        name: 'system-rz-xt',
        component: () => import('@/views/system/log/xt.vue')
      },
      {
        path: '/system/rz/yh',
        name: 'system-rz-yh',
        component: () => import('@/views/system/log/yh.vue')
      }
    ]
  }
]
