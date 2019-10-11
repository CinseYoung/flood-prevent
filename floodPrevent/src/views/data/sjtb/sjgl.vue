<template>
  <div style="height:100%;">
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">数据源管理</span>
        <el-button type="primary" size="mini" @click="seeYjclAdd">添加</el-button>
      </div>
      <datagrid ref="dataGrid"   @funx="seeYjcl"  />
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show"/>
    </div>
  </div>
</template>

<script>
import datagrid from '@/components/datacom/grid/sj-sjgl/index.vue'
import search from '@/components/datacom/search/sj-sjgl/index.vue'
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
    this.$emit('update:menuName', '数据源管理')
  },
  methods: {
    seeYjcl(data) {
      this.dialogOptions = { width: '680px', title: '修改', saveBtn: '提交' }
      this.data = data
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/sj-sjgl/index.vue')
    },
    seeYjclAdd() {
      this.dialogOptions = { width: '680px', title: '添加', saveBtn: '提交' }
      this.data = { }
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/sj-sjgl/index.vue')
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