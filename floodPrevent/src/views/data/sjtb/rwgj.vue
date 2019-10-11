<template>
  <div style="height:100%;">
    <search @searchSubmit="searchSubmit" @funx="seeYjclAdd"  />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">同步任务构建</span>
        <el-button type="primary" size="mini" @click="seeYjclAdd">添加</el-button>
      </div>
      <datagrid ref="dataGrid"   @funx="seeYjcl" @journal_funx="journal_seeYjcl" />
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show"/>
      <gr-dialog :dialogVisible.sync="journal_dialogVisible" :dialogOptions="journal_dialogOptions" :dialogContentComponent="journal_dialogContentComponent" :data="journal_data" :show="journal_show"/>
    </div>
  </div>
</template>

<script>
import datagrid from '@/components/datacom/grid/sj-rwgj/index.vue'
import search from '@/components/datacom/search/sj-rwgj/index.vue'
import _dialog from '@/components/common/dialog/index.vue'

export default {
  data() {
    return {
      dialogOptions: { },
      dialogVisible: false,
      dialogContentComponent: null,
      data: {},
      show: true,

      journal_dialogOptions: { },
      journal_dialogVisible: false,
      journal_dialogContentComponent: null,
      journal_data: {},
      journal_show: false
    }
  },
  created() {
    this.$emit('update:menuName', '同步任务构建')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    seeYjcl(data) {
      this.dialogOptions = { width: '680px', title: '修改', saveBtn: '提交' }
      this.data = data
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/sj-rwgj/index.vue')
    },
    seeYjclAdd() {
      this.dialogOptions = { width: '680px', title: '添加', saveBtn: '提交' }
      this.data = { }
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/sj-rwgj/index.vue')
    },
    journal_seeYjcl(data) {
      this.journal_dialogOptions = { width: '680px', title: '日志', saveBtn: '关闭' }
      this.journal_data = data
      this.journal_dialogVisible = true
      this.journal_dialogContentComponent = () => import('@/components/datacom/dialog/sj-rwgj-journal/index.vue')
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