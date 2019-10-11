<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">全国水功能区水质评价成果表</span>
      </div>
      <data-grid ref="dataGrid"/>
    </div>
  </div>
</template>
<script>
import search from '@/components/datacom/search/sjgl-hxsj/SGNQ/SGNQ_QGSGNQSZPJCGB_B.vue'
import datagrid from '@/components/datacom/grid/sjgl-hxsj/SGNQ/SGNQ_QGSGNQSZPJCGB_B.vue'
export default {
  data() {
    return {
      data: {},
      show: true
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    }
  }
}
</script>