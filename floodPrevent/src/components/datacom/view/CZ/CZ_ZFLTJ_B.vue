<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">蒸发量统计表</span>
      </div>
      <data-grid ref="dataGrid"/>
    </div>
  </div>
</template>
<script>
import search from '@/components/datacom/search/hxsj-zfltj/index.vue'
import datagrid from '@/components/datacom/grid/hxsj-zfltj/index.vue'
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