export default {
  data() {
    return {
      currentPage: 1,
      pagePize: 15,
      tableData: [],
      height: 500,
      total: 0,
      canshu: {}
    }
  },
  created() {
    this.height = document.body.clientHeight - 320
  },
  methods: {
    load(param) {
      this.api.get(this, 'data_sjgl_sjbf', this.result, param)
    },
    result(data) {
      this.total = data.length
      this.tableData = data
    },
    handleSizeChange(val) {
      // this.pagePize = val
      this.canshu.pagesize = val
      this.load(this.canshu)
    },
    handleCurrentChange(val) {
      // this.currentPage = val
      this.canshu.page = val
      // this.load({ pagesize: this.pagePize, page: this.currentPage })
      this.load(this.canshu)
    },
    searchSubmit(data) {
      if (data === undefined) data = {}
      data.pagesize = this.pagePize
      data.page = this.currentPage
      this.canshu = data
      this.load(data)
    },
    handleEdit(index, row) {

    },
    handleDelete(index, row) {

    },
    handleDownload(index, row) {

    },
    reduction(index, row) {
      this.$message({
        type: 'success',
        message: '还原!'
      })
    },
    upload_backup(index, row) {
      row.SFSC = row.SFSC === '是' ? '否' : '是'
      this.$message({
        type: 'info',
        message: '正在上传备份空间站!'
      })
    },
    handleDele(index, row) {
      this.$confirm('是否确定删除该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.tableData.splice(index, 1)
        this.total = this.tableData.length
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
