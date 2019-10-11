import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* eslint-disable */
export default new Vuex.Store({
  state: {
    // username: '',
    // 风险图
    mapOpName: '', // 地图工具栏操作名称
    isPlot: false, // 标绘显示与否
    isShowDetail: false, //  是否显示左侧列表详情弹窗
    pageName: '成果查询', //当前所属页
    showLeft: true, // 是否显示左侧列表
    type: 'LineString', //地图测量类型
    isMeasure: 'false', //是否激活地图测量
    yztPanel: false, //一张图的搜索面板显示与否
    currentRow: '', // 表格当前选中行
    yztPanel: false, //一张图的搜索面板显示与否
    layerMenu: false, //一张图 图层面板显示与否
    yztSearch: '', //一张图 图层列表
    discForm: [] // 容器云 创建卷表单内容
  },
  mutations: {
    register: function(state, data) {
      // state.username = data.yhzh
      // state.token = data.key
      // localStorage.setItem('kpst-token', data.key)
      // localStorage.setItem('kpst-username', data.yhzh)
      // localStorage.setItem('kpst-msg', JSON.stringify(data))
      // Vue.http.headers.common['sessionId'] = data.key
    },
    destroy: function(state) {
      state.name = ''
      state.token = ''

      // localStorage.removeItem('kpst-msg')
      // Vue.http.headers.common['sessionId'] = ''
    },
    // 改变当前选中行
    changeRow(state, data) {
      state.currentRow = data
    },
    // 清空当前选中行
    clearRow(state) {
      state.currentRow = ''
    },
    // 创建卷
    saveDisc(state, data) {
      state.discForm.push(data)
    }
  },
  actions: {}
})
