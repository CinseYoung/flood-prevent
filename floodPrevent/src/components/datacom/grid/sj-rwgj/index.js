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
    this.height = document.body.clientHeight - 267
  },
  methods: {
    load(param) {
      this.api.get(this, 'data_sjtb_rwgj', this.result, param)
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
    runstart(index, row) {
      row.state = '启动'
      this.$message({
        type: 'success',
        message: '启动!'
      })
    },
    runend(index, row) {
      row.state = '关闭'
      this.$message({
        type: 'info',
        message: '关闭!'
      })
    },
    viewlog(index, row) {
      this.$emit('journal_funx', row)
    },
    handleUpdate(index, row) {
      this.$emit('funx', row)
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
