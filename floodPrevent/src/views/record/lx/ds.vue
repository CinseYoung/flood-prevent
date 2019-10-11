<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">档案室列表</span>
        <el-button type="primary" size="mini" @click="add">新建</el-button>
      </div>
      <data-grid ref="dataGrid" @funx="see"/>
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent"/>
    <see-dialog :dialogVisible.sync="seeDialogVisible" :dialogOptions="seeDialogOptions" :dialogContentComponent="seeDialogContentComponent" :data="data" :show="false"/>
  </div>
</template>
<script>
import search from '@/components/recode/search/ds/index.vue'
import datagrid from '@/components/recode/grid/ds/index.vue'
import _dialog from '@/components/common/dialog/index.vue'
import seeDialog from '@/components/common/dialog/index.vue'
export default {
  data() {
    return {
      dialogOptions: { width: '680px', title: '新增档案室', saveBtn: '保存' },
      seeDialogOptions: { width: '680px', title: '查看档案室信息', saveBtn: '保存' },
      dialogVisible: false,
      seeDialogVisible: false,
      dialogContentComponent: null,
      seeDialogContentComponent: null,
      data: {}
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid, 'gr-dialog': _dialog, 'see-dialog': seeDialog },
  created() {
    this.$emit('update:menuName', '档案室管理')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    }, add() {
      this.handleCommand()
    }, handleCommand(data) {
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/recode/dialog/ds/add.vue')
    }, see(data) {
      this.seeDialogVisible = true
      this.data = data
      this.seeDialogContentComponent = () => import('@/components/recode/dialog/ds/see.vue')
    }
  }
}
</script>
<style lang="scss">
@import url('../style.scss');
</style>
