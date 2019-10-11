<template>
  <div style="height:100%">
    <div class="gr-datagrid-notitle">
      <div class="gr-tag">
        <span class="data-title">子系统管理</span>
        <el-button type="primary" size="mini" @click="addUser">增加</el-button>
      </div>
      <data-grid ref="dataGrid" @setZxt="setZxt" />
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show" />
    </div>
  </div>
</template>
<script>
import dataGrid from '@/components/system/grid/zzqx-zxt/index.vue'
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
    addUser(data) {
      this.show = true
      this.dialogVisible = true
      this.dialogOptions = {
        width: '680px',
        title: '增加子系统',
        saveBtn: '提交'
      }
      this.dialogContentComponent = () =>
        import('@/components/system/dialog/zzqx-zxt/add.vue')
    },
    setZxt(data) {
      this.data = data
      this.show = true
      this.dialogVisible = true
      this.dialogOptions = {
        width: '680px',
        title: '修改资料',
        saveBtn: '提交'
      }
      this.dialogContentComponent = () =>
        import('@/components/system/dialog/zzqx-zxt/add.vue')
    }
  },
  components: {
    dataGrid,
    grDialog
  },
  created() {
    this.$emit('update:menuName', '子系统管理')
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
      background: url("../../../assets/data-title.png") no-repeat center left;
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