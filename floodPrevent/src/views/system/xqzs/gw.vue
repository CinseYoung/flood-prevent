<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">公文管理</span>
        <el-button type="primary" size="mini" @click="publishReport">发布公文</el-button>
      </div>
      <data-grid ref="dataGrid" @funx="seeReport"/>
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :show="show"/>
  </div>
</template>
<script>
import search from '@/components/system/search/xqzs-gw/index.vue'
import datagrid from '@/components/system/grid/xqzs-gw/index.vue'
import _dialog from '@/components/common/dialog/index.vue'
export default {
  data() {
    return {
      dialogOptions: {},
      dialogVisible: false,
      dialogContentComponent: null,
      show: true
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid, 'gr-dialog': _dialog },
  created() {
    this.$emit('update:menuName', '公文管理')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    publishReport() {
      this.show = true
      this.dialogVisible = true
      this.dialogOptions = { width: '680px', title: '发布公文', saveBtn: '提交' }
      this.dialogContentComponent = () => import('@/components/system/dialog/xqzs-gw/fbgw.vue')
    },
    seeReport(row) {
      this.show = false
      this.dialogVisible = true
      this.dialogOptions = { width: '1200px', title: '查看附件', saveBtn: '提交' }
      this.dialogContentComponent = () => import('@/components/system/dialog/xqzs-gw/ckfj.vue')
    }
  }
}
</script>
<style >
 @import "../../../style/css/general-content.css";
</style>