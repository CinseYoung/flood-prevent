<template>
  <div style="height:100%">
    <yy-search @searchSubmit="searchSubmit"></yy-search>
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">应用管理</span>
        <el-button type="primary" size="mini" @click="addUser">创建</el-button>
        <el-button type="warning" size="mini">刷新</el-button>
      </div>
      <data-grid ref="dataGrid" />
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show" />
    </div>
  </div>
</template>
<script>
import yySearch from '@/components/system/search/rqy-yy/index.vue'
import dataGrid from '@/components/system/grid/rqy-yy/index.vue'
import grDialog from '@/components/common/dialog/index.vue'
export default {
  data() {
    return {
      dialogOptions: {},
      dialogVisible: false,
      dialogContentComponent: null,
      data: {},
      show: true
    }
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    addUser(data) {
      this.$router.push('yygl/cjyy')
      this.$emit('cjyy')
      //   this.show = true
      //   this.dialogVisible = true
      //   this.dialogOptions = {
      //     width: '680px',
      //     title: '创建应用',
      //     saveBtn: '提交'
      //   }
      //   this.dialogContentComponent = () =>
      //     import('@/components/system/dialog/rqy-yygl/create.vue')
    }
  },
  components: {
    yySearch,
    dataGrid,
    grDialog
  },
  created() {
    this.$emit('update:menuName', '应用管理')
  }
}
</script>
<style>
@import "~@/style/css/general-content.css";
</style>
<style>
.gr-datagrid .gr-tag /deep/ .el-collapse {
  margin: 0 22px 0 18px !important;
}
</style>