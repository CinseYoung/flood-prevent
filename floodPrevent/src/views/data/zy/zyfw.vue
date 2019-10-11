<template>
  <div style="height:100%;">
    <search @searchSubmit="searchSubmit"  @funx="seeYjclAdd"  />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">资源服务</span>
        <el-button type="primary" size="mini" @click="seeYjclAdd">添加</el-button>
        <!-- <el-button  type="primary" size="mini" @click="exportFiles">导出</el-button> -->
        <!-- <el-upload
          class="upload-demo inline-block"
          ref="upload"
          action=""
          accept="xls,xlsx"
          :auto-upload="false">
          <el-button size="mini" type="primary">批量导入</el-button>
        </el-upload> -->
      </div>
      <datagrid ref="dataGrid"  @funx="seeYjcl" />
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show"/>
    </div>
  </div>
</template>

<script>
import datagrid from '@/components/datacom/grid/zyfw/index.vue'
import search from '@/components/datacom/search/zyfw/index.vue'
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
  created() {
    this.$emit('update:menuName', '资源服务接口')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    seeYjcl(data) {
      this.dialogOptions = { width: '680px', title: '修改', saveBtn: '提交' }
      this.data = data
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/zy-zyfw/index.vue')
    },
    seeYjclAdd() {
      this.dialogOptions = { width: '680px', title: '添加', saveBtn: '提交' }
      this.data = { }
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/zy-zyfw/index.vue')
    },
    exportFiles() {
      // window.location.href = window.URL.createObjectURL(new Blob([response.data], { type:     'application/vnd.ms-excel' }))
      this.utils.excel()
    }
  },
  components: {
    datagrid,
    search,
    'gr-dialog': _dialog
  }
}
</script>
<style >
 @import "../../../style/css/general-content.css";
</style>