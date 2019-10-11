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
    this.getSelectData()
  },
  methods: {
    load(param) {
      param.type = 0
      this.api.get(this, 'record_bin', this.result, param)
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
    handleRecovery(index, row) {
      this.$confirm('是否确定恢复该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        var param = JSON.stringify({ id: row.id, is_del: '0' })
        this.api.post(this, 'record_recovery', (data) => {
          this.$message({
            type: 'success',
            message: '恢复成功!'
          })
          this.load({ pagesize: this.pagePize, page: this.currentPage })
        }, param)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消恢复'
        })
      })
    },
    handleDelete(index, row) {
      this.$confirm('是否确定删除该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        var param = { 'id': row.id }
        this.api.post(this, 'record_deleted', (data) => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.load({ pagesize: this.pagePize, page: this.currentPage })
        }, param)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleSee(index, row) {
      this.$emit('funx', row)
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    recovery(index, row) {
      if (this.multipleSelection.length === 0) {
        this.$message.error('请选择要恢复的电子文档')
        return
      } else {
        this.$confirm('是否确定恢复数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          var datas = []
          this.multipleSelection.forEach(function(row, index) {
            datas.push({ id: row.id, is_del: '0' })
          })
          var param = { 'batchUpdate': datas }
          this.api.post(this, 'record_batch_update', (data) => {
            this.$message({
              type: 'success',
              message: '恢复成功!'
            })
            this.load({ pagesize: this.pagePize, page: this.currentPage })
          }, param)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消恢复'
          })
        })
      }
    },
    deleted(index, row) {
      if (this.multipleSelection.length === 0) {
        this.$message.error('请选择要删除的电子文档')
        return
      } else {
        this.$confirm('是否确定删除该数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          var ids = []
          this.multipleSelection.forEach(function(row, index) {
            ids.push({ id: row.id })
          })
          var param = { 'recordBatch': ids }
          this.api.post(this, 'record_batch_deleted', (data) => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.load({ pagesize: this.pagePize, page: this.currentPage })
          }, param)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }, handleDownload(index, row) {
      if (!row.record_file) {
        this.$message({
          type: 'error',
          message: '文件不存在!'
        })
        return false
      }
      var param = { 'id': row.record_file }
      this.api.get(this, 'file_path', (data) => {
        if (data.length !== 0) {
          location.href = encodeURI('/api/da/business/common/download?filepath=' + data[0].file_path + '&filename=' + data[0].file_name)
        } else {
          this.$message({
            type: 'error',
            message: '文件不存在!'
          })
          return false
        }
      }, param)
    },
    getSelectData() {
      var param = { recordtype: 0 }
      this.api.get(this, 'record_type_list', (data) => {
        // console.log(data)
        this.$emit('update:selectData', data)
      }, param)
    }
  }
}
