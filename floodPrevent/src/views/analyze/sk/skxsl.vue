<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">主要水库蓄水量变化表</span>
        <span v-if="show">{{"("+time+":00数据"+")"}}</span>
      </div>
      <data-grid ref="dataGrid"/>
    </div>
  </div>
</template>
<script>
import search from '@/components/analyze/search/sk-skxsl/index.vue'
import datagrid from '@/components/analyze/grid/sk-skxsl/index.vue'
export default {
  data() {
    return {
      time: '',
      show: false
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid },
  created() {
    this.$emit('update:menuName', '主要水库蓄水量变化表')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
      this.time = data.time
      this.show = true
    }
  }
}
</script>
<style >
   @import "../../../style/css/general-content.css";;
</style>