<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">项目列表</span>
        <el-button type="primary" size="mini" @click="add">新建</el-button>
      </div>
      <data-grid ref="dataGrid"/>
    </div>
  </div>
</template>
<script>
import search from '@/components/recode/search/xm/index.vue'
import datagrid from '@/components/recode/grid/xm/index.vue'
export default {
  components: { 'dz-search': search, 'data-grid': datagrid },
  created() {
    this.$emit('update:menuName', '项目名称管理')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    }, add() {
      this.handleCommand()
    }, handleCommand(data) {
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/recode/dialog/gl-zz/add.vue')
    }
  }
}
</script>