<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" :selectData="selectData"/>
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">电子档案列表</span>
        <el-button type="primary" size="mini" @click="add">新增</el-button>
        <el-button  type="primary" size="mini" @click="exportFiles">导出</el-button>
        <el-upload
          class="upload-demo inline-block"
          ref="upload"
          action=""
          accept="xls,xlsx"
          :auto-upload="false">
          <el-button size="mini" type="primary">批量导入</el-button>
        </el-upload>
      </div>
      <data-grid ref="dataGrid" :selectData.sync="selectData" :typeSelectData.sync="typeSelectData"/>
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :typeSelectData="typeSelectData"/>
    <div id="map_container" style="height:100%;width:100%"></div>
  </div>
</template>
<script>
import search from '@/components/recode/search/gl-dz/index.vue'
import datagrid from '@/components/recode/grid/gl-dz/index.vue'
import _dialog from '@/components/common/dialog/index.vue'
export default {
  data() {
    return {
      dialogOptions: { width: '680px', title: '新增电子档案', saveBtn: '保存' },
      dialogVisible: false,
      dialogContentComponent: null,
      selectData: [],
      typeSelectData: [],
      option: {}
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid, 'gr-dialog': _dialog },
  created() {
    this.$emit('update:menuName', '电子档案')
  },
  methods: {
    reload() {
      this.searchSubmit(this.option)
    },
    searchSubmit(data) {
      this.option = data
      this.$refs.dataGrid.searchSubmit(data)
    }, add() {
      this.handleCommand()
    }, exportFiles() {
      this.$refs.dataGrid.handleExport()
    }, handleCommand(data) {
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/recode/dialog/gl-dz/add.vue')
    }
  }
}
</script>
<style lang="scss">
@import url('../style.scss');
</style>
