<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">电话记录</span>
        <el-button type="primary" size="mini" @click="addDhjl">添加电话记录</el-button>
      </div>
      <data-grid ref="dataGrid"/>
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show"/>
  </div>
</template>
<script>
import search from '@/components/system/search/xqzs-dh/index.vue'
import datagrid from '@/components/system/grid/xqzs-dh/index.vue'
import _dialog from '@/components/common/dialog/index.vue'
export default {
  data() {
    return {
      dialogOptions: { width: '680px', title: '添加电话记录', saveBtn: '提交' },
      dialogVisible: false,
      dialogContentComponent: null,
      data: {},
      show: true
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid, 'gr-dialog': _dialog },
  created() {
    this.$emit('update:menuName', '电话记录')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    addDhjl() {
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/system/dialog/xqzs-dh/dhjl.vue')
    }
  }
}
</script>
<style >
 @import "../../../style/css/general-content.css";
</style>