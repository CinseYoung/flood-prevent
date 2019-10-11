<template>
  <div style="height:100%;">
    <search @searchSubmit="searchSubmit" @funx="seeYjcl"  />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">字典内容信息</span>
        <el-button type="primary" size="mini" @click="seeYjclAdd">添加</el-button>
      </div>
      <datagrid ref="dataGrid"   @funx="seeYjcl"  />
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show" />
    </div>
  </div>
</template>

<script>
import datagrid from '@/components/datacom/grid/zd-zdxx/index.vue'
import search from '@/components/datacom/search/zd-zdxx/index.vue'
import _dialog from '@/components/common/dialog/index.vue'

export default {
  data() {
    return {
      dialogOptions: { },
      dialogVisible: false,
      dialogContentComponent: null,
      data: {},
      show: true,
      tableData: {}
    }
  },
  created() {
    this.$emit('update:menuName', '字典内容信息')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    seeYjcl(data) {
      this.dialogOptions = { width: '680px', title: '修改', saveBtn: '提交' }
      this.data = data
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/zd-zdxx/index.vue')
    },
    seeYjclAdd() {
      this.dialogOptions = { width: '680px', title: '修改', saveBtn: '提交' }
      this.data = { }
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/zd-zdxx/index.vue')
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
