<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">档案日志列表</span>
      </div>
      <data-grid ref="dataGrid"/>
    </div>
  </div>
</template>
<script>
import search from '@/components/recode/search/rz/index.vue'
import datagrid from '@/components/recode/grid/rz/index.vue'
export default {
  components: { 'dz-search': search, 'data-grid': datagrid },
  created() {
    this.$emit('update:menuName', '日志管理')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    }
  }
}
</script>