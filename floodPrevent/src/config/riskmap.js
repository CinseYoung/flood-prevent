export default [{
  path: '/riskmap',
  name: 'riskmap',
  redirect: '/riskmap/result',
  component: () =>
    import('@/views/riskmap/Index.vue'),
  children: [{
    path: '/riskmap/result',
    name: 'riskmap-result',
    component: () =>
      import('@/views/riskmap/result/Index.vue')
  }, {
    path: '/riskmap/process',
    name: 'riskmap-process',
    component: () =>
      import('@/views/riskmap/process/Index.vue')
  }, {
    path: '/riskmap/analysis',
    name: 'riskmap-analysis',
    component: () =>
      import('@/views/riskmap/analysis/Index.vue')
  },
  {
    path: '/riskmap/transfer',
    name: 'riskmap-transfer',
    component: () =>
      import('@/views/riskmap/transfer/Index.vue')
  },
  {
    path: '/riskmap/county',
    name: 'riskmap-county',
    component: () =>
      import('@/views/riskmap/county/Index.vue')
  }
  ]
}]
