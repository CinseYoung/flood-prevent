<template>
  <div style="height:100%;">
    <search @searchSubmit="searchSubmit" @funx="seeYjclAdd"  />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">数据备份还原</span>
        <el-button type="success" size="mini" @click="seeYjclAdd">备份</el-button>
      </div>
      <datagrid ref="dataGrid" />
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show"/>
    </div>
  </div>
</template>

<script>
import datagrid from '@/components/datacom/grid/sjgl-sjbf/index.vue'
import search from '@/components/datacom/search/sjgl-sjbf/index.vue'
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
    this.$emit('update:menuName', '数据备份还原')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    seeYjclAdd() {
      this.dialogOptions = { width: '680px', title: '添加', saveBtn: '提交' }
      this.data = { }
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/sjgl-sjbf/index.vue')
    }
  },
  components: {
    datagrid,
    search,
    'gr-dialog': _dialog
  }
}
</script>

<style scoped>
 @import "../../../style/css/general-content.css";
 .el-button{
   margin-left: 15px;
 }
</style>