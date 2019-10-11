<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">重要站水情报表</span>
        <span>{{"("+time+":00数据"+")"}}</span>
      </div>
      <data-grid ref="dataGrid" />
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :show="show"/>
  </div>
</template>
<script>
import search from '@/components/analyze/search/hd-zyz/index.vue'
import datagrid from '@/components/analyze/grid/hd-zyz/index.vue'
import _dialog from '@/components/common/dialog/index.vue'
export default {
  data() {
    return {
      time: '',
      show: false,
      dialogOptions: { width: '800px', title: '设置重要站', saveBtn: '提交' },
      dialogVisible: false,
      dialogContentComponent: null
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid, 'gr-dialog': _dialog },
  created() {
    this.$emit('update:menuName', '重要站水情表')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
      this.time = data.time
    },
    setZyz() {
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/analyze/dialog/analyze-zyz/zyz.vue')
    }
  }
}
</script>
<style >
   @import "../../../style/css/general-content.css";;
</style>