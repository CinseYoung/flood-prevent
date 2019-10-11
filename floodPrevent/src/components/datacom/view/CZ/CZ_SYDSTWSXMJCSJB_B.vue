<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">水源地水体卫生项目监测数据表</span>
      </div>
      <data-grid ref="dataGrid"/>
    </div>
  </div>
</template>
<script>
import search from '@/components/datacom/search/hxsj-sydstws/index.vue'
import datagrid from '@/components/datacom/grid/hxsj-sydstws/index.vue'
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