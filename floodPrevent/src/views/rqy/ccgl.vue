<template>
  <div style="height:100%">
    <div class="gr-datagrid-notitle">
      <div class="gr-tag">
        <span class="data-title">存储管理</span>
      </div>
      <data-grid ref="dataGrid" />
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show" />
    </div>
  </div>
</template>
<script>
import dataGrid from '@/components/system/grid/rqy-cc/index.vue'
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
    createServer(data) {
      this.show = true
      this.dialogVisible = true
      this.dialogOptions = {
        width: '680px',
        title: '创建仓库',
        saveBtn: '提交'
      }
      this.dialogContentComponent = () =>
        import('@/components/system/dialog/rqy-jxck/create.vue')
    }
  },
  components: {
    dataGrid,
    grDialog
  },
  created() {
    this.$emit('update:menuName', '存储管理')
  }
}
</script>
<style>
@import "~@/style/css/general-content.css";
</style>
<style lang="scss">
.gr-datagrid-notitle {
  height: 90%;
  height: calc(100% - 45px);
  background: #fff;
  margin: 3px 0 3px 5px;
  padding: 0 17px;
  border-bottom: solid 1px #d9d9d9;
  .gr-tag {
    line-height: 46px;
    .data-title {
      background: url("~@/assets/data-title.png") no-repeat center left;
      padding-left: 20px;
      font-size: 14px;
    }
    .el-button--primary {
      color: #fff;
      background: #409eff;
      border-color: #409eff;
      margin-left: 15px;
    }
    .el-button--primary:hover {
      background-color: rgb(193, 218, 243);
      border-color: rgb(121, 184, 248);
      color: #000;
    }
  }
}
</style>