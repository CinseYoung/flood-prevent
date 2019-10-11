<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">站点分析列表</span>
      </div>
      <data-grid ref="dataGrid" />
    </div>
  </div>
</template>
<script>
import search from '@/components/analyze/search/zd/index.vue'
import datagrid from '@/components/analyze/grid/zd/index.vue'
export default {
  data() {
    return {
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid },
  created() {
    this.$emit('update:menuName', '站点分析')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    }
  }
}
</script>
<style >
 @import "../../../style/css/general-content.css";
</style>