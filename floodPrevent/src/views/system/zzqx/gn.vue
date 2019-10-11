<template>
  <div style="height:100%">
    <div class="gr-datagrid-notitle">
      <div class="gr-tag">
        <span class="data-title">功能管理</span>
        <el-button type="primary" size="mini" @click="addFun">增加</el-button>
        <el-button type="warning" size="mini" @click="editFun">编辑</el-button>
        <el-button type="danger" size="mini" @click="deleteFun">删除</el-button>
      </div>
      <data-grid ref="dataGrid" @rowClick="rowClick" />
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="dialogData" :show="show" />
  </div>
</template>
<script>
import dataGrid from '@/components/system/grid/zzqx-gn/index.vue'
import grDialog from '@/components/common/dialog/index.vue'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      dialogOptions: {},
      dialogVisible: false,
      dialogContentComponent: null,
      dialogData: {},
      show: true
    }
  },
  components: {
    dataGrid,
    grDialog
  },
  computed: mapState(['currentRow']),
  created() {
    this.$emit('update:menuName', '功能管理')
  },
  methods: {
    reload() {
      this.$refs.dataGrid.load()
    },
    rowClick(row) {
      this.dialogData = row
    },
    addFun(data) {
      this.show = true
      this.dialogVisible = true
      this.dialogOptions = {
        width: '700px',
        title: '增加功能',
        saveBtn: '提交'
      }
      this.dialogContentComponent = () =>
        import('@/components/system/dialog/zzqx-gn/add-gn.vue')
    },
    editFun(data) {
      if (!this.currentRow) {
        this.$message.error('请选择一个功能菜单后操作')
        return
      }
      this.data = data
      this.show = true
      this.dialogVisible = true
      this.dialogOptions = {
        width: '700px',
        title: '修改功能',
        saveBtn: '提交'
      }
      this.dialogContentComponent = () =>
        import('@/components/system/dialog/zzqx-gn/edit-gn.vue')
    },
    deleteFun(node, data) {
      let params = {
        dxid: this.currentRow.dxid
      }
      if (!this.currentRow) {
        this.$message.error('请选择一个功能菜单后操作')
        return
      }
      this.$confirm('是否确定删除该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          // 删除
          this.api.post(this, 'delete_gn', () => {
          this.$message.success('删除成功')
          this.dialogVisible = false// 关闭弹窗
          this.reload() // 刷新数据
          this.$store.commit('clearRow') // 重置表格选中状态
        }, params)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>
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
.box {
  width: 400px;

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
}
</style>