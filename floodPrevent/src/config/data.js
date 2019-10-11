export default [{
  path: '/data',
  name: 'data',
  redirect: '/data/zy/zylx',
  component: () => import('@/views/data/Index.vue'),
  children: [
    {
      path: '/data/zy/zylx',
      name: 'data-zy-zylx',
      component: () =>
        import('@/views/data/zy/zylx.vue')
    },
    {
      path: '/data/zy/zyfw',
      name: 'data-zy-zyfw',
      component: () =>
        import('@/views/data/zy/zyfw.vue')
    },
    {
      path: '/data/zy/zysh',
      name: 'data-zy-zysh',
      component: () =>
        import('@/views/data/zy/zysh.vue')
    },
    {
      path: '/data/sjgl/sjbs',
      name: 'data-sjgl-sjbs',
      component: () =>
        import('@/views/data/sjgl/sjbs.vue')
    },
    {
      path: '/data/sjgl/hxsj',
      name: 'data-sjgl-hxsj',
      component: () =>
        import('@/views/data/sjgl/hxsj.vue')
    },
    {
      path: '/data/sjgl/sjbf',
      name: 'data-sjgl-sjbf',
      component: () =>
        import('@/views/data/sjgl/sjbf.vue')
    },
    {
      path: '/data/sjtb/sjgl',
      name: 'data-sjtb-sjgl',
      component: () =>
        import('@/views/data/sjtb/sjgl.vue')
    },
    {
      path: '/data/sjtb/mxgl',
      name: 'data-sjtb-mxgl',
      component: () =>
        import('@/views/data/sjtb/mxgl.vue')
    },
    {
      path: '/data/sjtb/rwgj',
      name: 'data-sjtb-rwgj',
      component: () =>
        import('@/views/data/sjtb/rwgj.vue')
    },
    {
      path: '/data/zd/gl',
      name: 'data-zd-gl',
      component: () =>
        import('@/views/data/zd/gl.vue')
    },
    {
      path: '/data/zd/xx',
      name: 'data-zd-xx',
      component: () =>
        import('@/views/data/zd/xx.vue')
    }
  ]
}]
