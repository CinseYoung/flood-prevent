export default [{
  path: '/record',
  name: 'record',
  redirect: '/record/gl/dz',
  component: () =>
    import('@/views/record/Index.vue'),
  children: [{
    path: '/record/gl/dz',
    name: 'record-gl-dz',
    component: () =>
      import('@/views/record/gl/dz.vue')
  }, {
    path: '/record/gl/zz',
    name: 'record-gl-zz',
    component: () =>
      import('@/views/record/gl/zz.vue')
  }, {
    path: '/record/tj/dz',
    name: 'record-tj-dz',
    component: () =>
      import('@/views/record/tj/dz.vue')
  }, {
    path: '/record/tj/zz',
    name: 'record-tj-zz',
    component: () =>
      import('@/views/record/tj/zz.vue')
  }, {
    path: '/record/jy/zz',
    name: 'record-jy-zz',
    component: () =>
      import('@/views/record/jy/zz.vue')
  }, {
    path: '/record/jy/index',
    name: 'record-jy-index',
    component: () =>
      import('@/views/record/jy/index.vue')
  }, {
    path: '/record/jy/sq',
    name: 'record-jy-sq',
    component: () =>
      import('@/views/record/jy/sq.vue')
  }, {
    path: '/record/jy/dz',
    name: 'record-jy-dz',
    component: () =>
      import('@/views/record/jy/dz.vue')
  }, {
    path: '/record/lx/dlx',
    name: 'record-lx-dlx',
    component: () =>
      import('@/views/record/lx/dlx.vue')
  }, {
    path: '/record/lx/ds',
    name: 'record-lx-ds',
    component: () =>
      import('@/views/record/lx/ds.vue')
  }, {
    path: '/record/lx/xm',
    name: 'record-lx-xm',
    component: () =>
      import('@/views/record/lx/xm.vue')
  }, {
    path: '/record/sys/rz',
    name: 'record-sys-rz',
    component: () =>
      import('@/views/record/sys/rz.vue')
  }, {
    path: '/record/sys/dzhsz',
    name: 'record-sys-dzhsz',
    component: () =>
      import('@/views/record/sys/dzhsz.vue')
  }, {
    path: '/record/sys/zzhsz',
    name: 'record-sys-zzhsz',
    component: () =>
      import('@/views/record/sys/zzhsz.vue')
  }]
}]
