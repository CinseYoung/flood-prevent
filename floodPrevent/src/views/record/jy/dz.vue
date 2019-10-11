<template>
  <div style="height:60%;">
    <dz-search @searchSubmit="dzSearchSubmit" :selectData="selectData"/>
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">电子档案列表</span>
      </div>
      <dz-data-grid ref="dzDataGrid" :selectData.sync="selectData"/>
    </div>
  </div>
</template>
<script>
import dzSearch from '@/components/recode/search/sq/dz.vue'
import dzDatagrid from '@/components/recode/grid/sq/dz.vue'
export default {
  data() {
    return {
      selectData: []
    }
  },
  components: { 'dz-search': dzSearch, 'dz-data-grid': dzDatagrid },
  created() {
    this.$emit('update:menuName', '档案授权')
  },
  methods: {
    dzSearchSubmit(data) {
      this.$refs.dzDataGrid.searchSubmit(data)
    }
  }
}
</script>