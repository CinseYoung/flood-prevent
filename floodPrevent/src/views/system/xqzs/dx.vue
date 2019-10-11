<template>
  <div style="height:100%">
    <el-tabs v-model="activeName2" type="border-card" class="table">
      <el-tab-pane label="已发送" name="first">
        <dz-search @searchSubmit="searchSubmit" />
        <div class="gr-datagrid2">
          <div class="gr-tag">
            <span class="data-title">短信管理</span>
            <el-button type="primary" size="mini" @click="submitDx">发送短信</el-button>
          </div>
          <data-grid ref="dataGrid"/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="短信模板" name="second">
        <mb-search @searchMb="searchMb"/>
        <div class="gr-datagrid2">
          <div class="gr-tag">
            <span class="data-title">模板管理</span>
            <el-button type="primary" size="mini" @click="addSms">添加短信模板</el-button>
          </div>
          <mb-grid ref="dataGrid2" @changeMb="changeMb"/>
        </div>
      </el-tab-pane>
    </el-tabs>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="row" :show="show"/>
  </div>
</template>
<script>
import search from '@/components/system/search/xqzs-dx/xqzs-dx-yfs/index.vue'
import search1 from '@/components/system/search/xqzs-dx/xqzs-dx-mb/index.vue'
import datagrid from '@/components/system/grid/xqzs-dx/xqzs-dx-yfs/index.vue'
import datagrid1 from '@/components/system/grid/xqzs-dx/xqzs-dx-mb/index.vue'
import _dialog from '@/components/common/dialog/index.vue'
export default {
  data() {
    return {
      activeName2: 'first',
      dialogOptions: {},
      dialogVisible: false,
      dialogContentComponent: null,
      show: true,
      row: {}
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid, 'mb-search': search1, 'mb-grid': datagrid1, 'gr-dialog': _dialog },
  created() {
    this.$emit('update:menuName', '短信管理')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    searchMb(data) {
      this.$refs.dataGrid2.searchSubmit(data)
    },
    addSms() {
      this.dialogVisible = true
      this.dialogOptions = { width: '680px', title: '添加短信模板', saveBtn: '提交' }
      this.dialogContentComponent = () => import('@/components/system/dialog/xqzs-dx/xgmb_add.vue')
    },
    changeMb(row) {
      this.row = row
      this.dialogVisible = true
      this.dialogOptions = { width: '680px', title: '修改短信模板', saveBtn: '提交' }
      this.dialogContentComponent = () => import('@/components/system/dialog/xqzs-dx/xgmb.vue')
    },
    submitDx() {
      this.dialogVisible = true
      this.dialogOptions = { width: '680px', title: '发送短信', saveBtn: '提交' }
      this.dialogContentComponent = () => import('@/components/system/dialog/xqzs-dx/yfs.vue')
    }
  }
}
</script>
<style >
 @import "../../../style/css/general-content.css";
</style>