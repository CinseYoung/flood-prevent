<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">月雨量统计表</span>
        <span v-if="show">{{"("+time+"数据"+")"}}</span>
      </div>
      <data-grid ref="dataGrid" />
    </div>
  </div>
</template>
<script>
import search from '@/components/analyze/search/yl-month/index.vue'
import datagrid from '@/components/analyze/grid/yl-month/index.vue'
export default {
  data() {
    return {
      time: '',
      show: false
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid },
  created() {
    this.$emit('update:menuName', '各区月雨量统计表')
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