<template>
  <div style="height:60%;">
    <zz-search @searchSubmit="zzSearchSubmit" :selectData="selectData"/>
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">纸质档案列表</span>
      </div>
      <zz-data-grid ref="zzDataGrid" :selectData.sync="selectData"/>
    </div>
  </div>
</template>
<script>
import zzSearch from '@/components/recode/search/jy/zz.vue'
import zzDatagrid from '@/components/recode/grid/jy/zz.vue'
export default {
  data() {
    return {
      selectData: []
    }
  },
  components: { 'zz-search': zzSearch, 'zz-data-grid': zzDatagrid },
  created() {
    this.$emit('update:menuName', '档案借阅')
  },
  methods: {
    zzSearchSubmit(data) {
      this.$refs.zzDataGrid.searchSubmit(data)
    }
  }
}
</script>