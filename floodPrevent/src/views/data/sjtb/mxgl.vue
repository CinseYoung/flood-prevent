<template>
  <div style="height:100%;">
    <!-- <search @searchSubmit="searchSubmit" @funx="seeYjclAdd"  /> -->
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">同步模型管理</span>
        <el-button type="primary" size="mini" @click="seeYjclAdd">添加模型</el-button>
      </div>
      <datagrid ref="dataGrid"   @funx="seeYjcl"  />
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show"/>
    </div>
  </div>
</template>

<script>
import datagrid from '@/components/datacom/grid/sj-mxgl/index.vue'
import search from '@/components/datacom/search/sj-mxgl/index.vue'
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
    this.$emit('update:menuName', '同步模型管理')
  },
  methods: {
    seeYjcl(data) {
      this.dialogOptions = { width: '680px', title: '修改', saveBtn: '提交' }
      this.data = data
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/sj-mxgl/index.vue')
    },
    seeYjclAdd() {
      this.dialogOptions = { width: '680px', title: '添加', saveBtn: '提交' }
      this.data = { }
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/sj-mxgl/index.vue')
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