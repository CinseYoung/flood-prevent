<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">多媒体基本信息表</span>
        <el-button type="success" size="mini" @click="seeYjclAdd">添加</el-button>
        <el-button  type="primary" size="mini" @click="exportFiles">导出</el-button>
        <el-upload
          class="upload-demo inline-block"
          ref="upload"
          action=""
          accept="xls,xlsx"
          :auto-upload="false">
          <el-button size="mini" type="warning">导入</el-button>
        </el-upload>
      </div>
      <data-grid ref="dataGrid" @updata='seeYjcl'/>
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show"/>
    </div>
  </div>
</template>
<script>
import search from '@/components/datacom/search/sjgl-hxsj/DMT/DMT_DMTJBXXB_E.vue'
import datagrid from '@/components/datacom/grid/sjgl-hxsj/DMT/DMT_DMTJBXXB_E.vue'
import _dialog from '@/components/common/dialog/index.vue'

export default {
  data() {
    return {
      dialogOptions: { },
      dialogVisible: false,
      dialogContentComponent: null,
      data: {},
      show: true
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid, 'gr-dialog': _dialog },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    seeYjcl(data) {
      this.dialogOptions = { width: '720px', title: '修改', saveBtn: '提交' }
      this.data = data
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/sjgl-hxsj/DMT/DMT_DMTJBXXB_E.vue')
    },
    seeYjclAdd() {
      this.dialogOptions = { width: '720px', title: '添加', saveBtn: '提交' }
      this.data = { }
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/sjgl-hxsj/DMT/DMT_DMTJBXXB_E.vue')
    },
    exportFiles() {
      // window.location.href = window.URL.createObjectURL(new Blob([response.data], { type:     'application/vnd.ms-excel' }))
      this.utils.excel()
    }
  }
}
</script>

<style scoped>
@import '../css/basic.css';
</style>