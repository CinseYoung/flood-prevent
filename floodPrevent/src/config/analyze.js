export default [{
  path: '/analyze',
  name: 'analyze',
  redirect: '/analyze/zd',
  component: () =>
    import('@/views/analyze/index.vue'),
  children: [{
    path: '/analyze/zd',
    name: 'analyze-zd',
    component: () =>
      import('@/views/analyze/zd/index.vue')
  }, {
    path: '/analyze/hd/gb',
    name: 'analyze-hd-gb',
    component: () =>
      import('@/views/analyze/hd/gb.vue')
  }, {
    path: '/analyze/hd/zyz',
    name: 'analyze-hd-zyz',
    component: () =>
      import('@/views/analyze/hd/zyz.vue')
  }, {
    path: '/analyze/hd/jb',
    name: 'analyze-hd-jb',
    component: () =>
      import('@/views/analyze/hd/jb.vue')
  }, {
    path: '/analyze/hd/cj',
    name: 'analyze-hd-cj',
    component: () =>
      import('@/views/analyze/hd/cj.vue')
  }, {
    path: '/analyze/hd/zyzdr',
    name: 'analyze-hd-zyzdr',
    component: () =>
      import('@/views/analyze/hd/zyzdr.vue')
  }, {
    path: '/analyze/hd/zyzdb',
    name: 'analyze-hd-zyzdb',
    component: () =>
      import('@/views/analyze/hd/zyzdb.vue')
  }, {
    path: '/analyze/hd/lstzz',
    name: 'analyze-hd-lstzz',
    component: () =>
      import('@/views/analyze/hd/lstzz.vue')
  }, {
    path: '/analyze/hd/zyzsw',
    name: 'analyze-hd-zyzsw',
    component: () =>
      import('@/views/analyze/hd/zyzsw.vue')
  }, {
    path: '/analyze/hd/zyzls',
    name: 'analyze-hd-zyzls',
    component: () =>
      import('@/views/analyze/hd/zyzls.vue')
  }, {
    path: '/analyze/sk/sksq',
    name: 'analyze-sk-sksq',
    component: () =>
      import('@/views/analyze/sk/sksq.vue')
  },
  // {
  // path: '/analyze/sk/sksq',
  // name: 'analyze-sk-sksq',
  // component: () =>
  //           import('@/views/analyze/sk/sksq.vue')
  // },
  {
    path: '/analyze/sk/skxsl',
    name: 'analyze-sk-skxsl',
    component: () =>
      import('@/views/analyze/sk/skxsl.vue')
  }, {
    path: '/analyze/sk/sktzz',
    name: 'analyze-sk-sktzz',
    component: () =>
      import('@/views/analyze/sk/sktzz.vue')
  }, {
    path: '/analyze/yl/month',
    name: 'analyze-yl-month',
    component: () =>
      import('@/views/analyze/yl/month.vue')
  }, {
    path: '/analyze/yl/day',
    name: 'analyze-yl-day',
    component: () =>
      import('@/views/analyze/yl/day.vue')
  }, {
    path: '/analyze/yl/hour',
    name: 'analyze-yl-hour',
    component: () =>
      import('@/views/analyze/yl/hour.vue')
  }, {
    path: '/analyze/sw/dz',
    name: 'analyze-sw-dz',
    component: () =>
      import('@/views/analyze/sw/dz.vue')
  }, {
    path: '/analyze/sw/zc',
    name: 'analyze-sw-zc',
    component: () =>
      import('@/views/analyze/sw/zc.vue')
  }, {
    path: '/analyze/sw/flb',
    name: 'analyze-sw-flb',
    component: () =>
      import('@/views/analyze/sw/flb.vue')
  }, {
    path: '/analyze/sw/smx',
    name: 'analyze-sw-smx',
    component: () =>
      import('@/views/analyze/sw/smx.vue')
  }, {
    path: '/analyze/bg/gb',
    name: 'analyze-bg-gb',
    component: () =>
      import('@/views/analyze/bg/gb.vue')
  }, {
    path: '/analyze/bg/xqjb',
    name: 'analyze-bg-xqjb',
    component: () =>
      import('@/views/analyze/bg/xqjb.vue')
  }, {
    path: '/analyze/bg/zhfx',
    name: 'analyze-bg-zhfx',
    component: () =>
      import('@/views/analyze/bg/zhfx.vue')
  }, {
    path: '/analyze/bg/zs',
    name: 'analyze-bg-zs',
    component: () =>
      import('@/views/analyze/bg/zs.vue')
  }, {
    path: '/analyze/bg/sqjb',
    name: 'analyze-bg-sqjb',
    component: () =>
      import('@/views/analyze/bg/sqjb.vue')
  }]
}]

