<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">河道站超警信息列表</span>
        <span v-if="show">{{"("+time+"数据"+")"}}</span>
      </div>
      <data-grid ref="dataGrid" />
    </div>
  </div>
</template>
<script>
import search from '@/components/analyze/search/hd-cj/index.vue'
import datagrid from '@/components/analyze/grid/hd-cj/index.vue'
export default {
  data() {
    return {
      time: '',
      show: false
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid },
  created() {
    this.$emit('update:menuName', '河道站超警信息')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    }
  }
}
</script>
<style >
   @import "../../../style/css/general-content.css";;
</style>