<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" :selectData="selectData"/>
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">纸质档案列表</span>
        <el-button type="primary" size="mini" @click="add">登记</el-button>
      </div>
      <data-grid ref="dataGrid" @funx="see" :selectData.sync="selectData" :typeSelectData.sync="typeSelectData" :roomSelectData.sync="roomSelectData"/>
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :typeSelectData="typeSelectData" :roomSelectData="roomSelectData"/>
    <gr-dialog :dialogVisible.sync="seeDialogVisible" :dialogOptions="seeDialogOptions" :dialogContentComponent="seeDialogContentComponent" :data="data" :show="false"/>
  </div>
</template>
<script>
import search from '@/components/recode/search/gl-zz/index.vue'
import datagrid from '@/components/recode/grid/gl-zz/index.vue'
import _dialog from '@/components/common/dialog/index.vue'
import seeDialog from '@/components/common/dialog/index.vue'
export default {
  data() {
    return {
      dialogOptions: { width: '680px', title: '新增纸质档案', saveBtn: '保存' },
      dialogVisible: false,
      dialogContentComponent: null,
      seeDialogOptions: { width: '680px', title: '查看档案信息', saveBtn: '保存' },
      seeDialogVisible: false,
      seeDialogContentComponent: null,
      selectData: [],
      typeSelectData: [],
      roomSelectData: [],
      data: {},
      option: {}
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid, 'gr-dialog': _dialog, 'see-dialog': seeDialog },
  created() {
    this.$emit('update:menuName', '纸质档案')
  },
  methods: {
    reload() {
      this.searchSubmit(this.option)
    }, searchSubmit(data) {
      this.option = data
      this.$refs.dataGrid.searchSubmit(data)
    }, add() {
      this.handleCommand()
    }, handleCommand(data) {
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/recode/dialog/gl-zz/add.vue')
    }, see(data) {
      this.seeDialogVisible = true
      this.data = data
      this.seeDialogContentComponent = () => import('@/components/recode/dialog/gl-zz/see.vue')
    }
  }
}
</script>
<style lang="scss">
@import url('../style.scss');
</style>
