<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">档案类别列表</span>
        <el-button type="primary" size="mini" @click="add">新建</el-button>
      </div>
      <data-grid ref="dataGrid"/>
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent"/>
  </div>
</template>
<script>
import search from '@/components/recode/search/dlx/index.vue'
import datagrid from '@/components/recode/grid/dlx/index.vue'
import _dialog from '@/components/common/dialog/index.vue'
export default {
  data() {
    return {
      dialogOptions: { width: '680px', title: '新增档案类别', saveBtn: '保存' },
      dialogVisible: false,
      dialogContentComponent: null
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid, 'gr-dialog': _dialog },
  created() {
    this.$emit('update:menuName', '档案类别')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    }, add() {
      this.handleCommand()
    }, handleCommand(data) {
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/recode/dialog/dlx/add.vue')
    }
  }
}
</script>