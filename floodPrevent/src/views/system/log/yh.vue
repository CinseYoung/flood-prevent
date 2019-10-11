<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">用户日志</span>
      </div>
      <data-grid ref="dataGrid" />
    </div>
  </div>
</template>
<script>
import search from '@/components/system/search/log-yh/index.vue'
import datagrid from '@/components/system/grid/log-yh/index.vue'
export default {
  data() {
    return {
      data: {}
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid },
  created() {
    this.$emit('update:menuName', '用户日志')
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