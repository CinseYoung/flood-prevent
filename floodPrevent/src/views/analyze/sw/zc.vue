<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">{{value}}涨差分析</span>
        <span v-if="show">{{"("+st+":00至"+et+":00"+")"}}</span>
      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="流量涨差" name="first">
          <gr-echarts :option="option" :id="id" :height="height"/>
        </el-tab-pane>
        <el-tab-pane label="水位涨差" name="second">
          <gr-echarts :option="option" :id="id" :height="height"/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import search from '@/components/analyze/search/sw-zc/index.vue'
import _echrats from '@/components/common/echarts/index.vue'
export default {
  data() {
    return {
      activeName: 'first',
      st: '',
      et: '',
      show: false,
      option: {},
      id: 'yhdz',
      value: '',
      height: 600
    }
  },
  components: { 'dz-search': search, 'gr-echarts': _echrats },
  created() {
    this.$emit('update:menuName', '涨差分析')
    this.height = document.body.clientHeight - 215
  },
  methods: {
    searchSubmit(data) {
      this.st = data.st
      this.et = data.et
      this.value = data.value
      this.show = true
      this.api.get(this, 'analyze_swdz_page', this.result, data)
    },
    result(data) {
      console.log(data)
      this.load()
    },
    load() {
    }
  }
}
</script>
<style >
   @import "../../../style/css/general-content.css";;
</style>