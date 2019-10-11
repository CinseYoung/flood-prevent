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
      param.recordtype = 0
      this.api.get(this, 'record_page', this.result, param)
    },
    result(data) {
      // console.log(data)
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
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleDownload(index, row) {
      console.log(row)
      var param = { fileId: row.record_file }
      this.$http({
        method: 'get',
        url: '/api/da/business/common/download',
        params: param,
        responseType: 'arraybuffer'
      }).then((res) => {
        console.log('response: ', res)
        // new Blob([data])用来创建URL的file对象或者blob对象
        const url = window.URL.createObjectURL(new Blob([res.data]))
        // 生成一个a标签
        const link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        // 生成时间戳
        const timestamp = new Date().getTime()
        link.download = timestamp + '.pdf'
        document.body.appendChild(link)
        link.click()
      })
    },
    handleExport() {
      if (this.multipleSelection.length === 0) {
        this.$message.error('请选择要导出的电子文档')
        return
      } else {
        console.log()
      }
    }, handleStop(index, row) {
      this.$confirm('是否确定停用该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        var param = { 'id': row.id, 'is_enabled': '0' }
        this.api.post(this, 'record_recovery', (data) => {
          this.$message({
            type: 'success',
            message: '停用成功!'
          })
          this.load({ pagesize: this.pagePize, page: this.currentPage })
        }, param)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消停用'
        })
      })
    }, handleStart(index, row) {
      this.$confirm('是否确定启用该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        var param = { 'id': row.id, 'is_enabled': '1' }
        this.api.post(this, 'record_recovery', (data) => {
          this.$message({
            type: 'success',
            message: '启用成功!'
          })
          this.load({ pagesize: this.pagePize, page: this.currentPage })
        }, param)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消启用'
        })
      })
    },
    getSelectData() {
      var param = { recordtype: 0 }
      this.api.get(this, 'record_type_list', (data) => {
        // console.log(data)
        this.$emit('update:selectData', data)
        this.$emit('update:typeSelectData', data)
      }, param)
    }, getStatus(status) {
      if (status === '1') {
        return 'dot dot_play'
      } else {
        return 'dot dot_pause'
      }
    }
  }, filters: {
    formatterStatusForDoc(value) {
      if (value === '1') {
        return '启用'
      } else {
        return '停用'
      }
    }
  }
}
