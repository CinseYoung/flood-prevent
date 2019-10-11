export default {
  data() {
    return {
      currentPage: 1,
      pagePize: 15,
      multipleSelection: [],
      tableData: [],
      height: 500,
      total: 0
    }
  },
  created() {
    this.height = document.body.clientHeight - 300
  },
  mounted() {
    this.load({ pagesize: this.pagePize, page: this.currentPage })
  },
  methods: {
    load(param) {
      if (param.recordtype === undefined) param.recordtype = 0
      this.api.get(this, 'record_type', this.result, param)
    },
    result(data) {
      console.log(data)
      this.tableData = data.list
      this.total = data.pageInfo.tcount
    },
    handleSizeChange(val) {
      this.pagePize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.load({ pagesize: this.pagePize, page: this.currentPage })
    },
    searchSubmit(data) {
      if (data === undefined) data = {}
      data.pagesize = this.pagePize
      data.page = this.currentPage
      this.load(data)
    },
    handleEdit(index, row) {

    },
    handleDelete(index, row) {
      this.$confirm('是否确定删除该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        var param = { 'id': row.id }
        this.api.post(this, 'record_type_deleted', (data) => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.load({ pagesize: this.pagePize, page: this.currentPage, recordtype: row.type })
        }, param)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleStart(index, row) {
      this.$confirm('是否确定启用该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        var param = { 'id': row.id, 'is_enabled': 1 }
        this.api.post(this, 'record_type_update', (data) => {
          this.$message({
            type: 'success',
            message: '启用成功!'
          })
          this.load({ pagesize: this.pagePize, page: this.currentPage, recordtype: row.type })
        }, param)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消启用'
        })
      })
    },
    handleStop(index, row) {
      this.$confirm('是否确定停用该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        var param = { 'id': row.id, 'is_enabled': 0 }
        this.api.post(this, 'record_type_update', (data) => {
          this.$message({
            type: 'success',
            message: '停用成功!'
          })
          this.load({ pagesize: this.pagePize, page: this.currentPage, recordtype: row.type })
        }, param)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消停用'
        })
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleDownload(index, row) {
      if (this.multipleSelection.length === 0) {
        this.$message.error('请选择要下载的电子文档')
        return
      } else {
        console.log()
      }
    }, getStatus(status) {
      if (status) {
        return 'dot dot_play'
      } else {
        return 'dot dot_pause'
      }
    }
  }, filters: {
    formatterStatusForDoc(value) {
      if (value) {
        return '启用'
      } else {
        return '停用'
      }
    }
  }
}
