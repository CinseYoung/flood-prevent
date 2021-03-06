export default {
  data() {
    return {
      slearr: [],
      currentPage: 1,
      pagePize: 15,
      tableData: [],
      height: 500,
      total: 0,
      canshu: {}
    }
  },
  created() {
    this.height = document.body.clientHeight - 310
  },
  methods: {
    load(param) {
      this.api.get(this, 'data_zysh', this.result, param)
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
    handleDownload(index, row) {

    },
    // 审核
    toExamine(index, row) {
      this.$emit('funx', row)
    },
    unExamine(index, row) {
      this.$confirm('是否确定取消审核?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '取消审核成功!'
        })
        // this.tableData.splice(index,1)
        // this.total = this.tableData.length
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消审核'
        })
      })
    }
  }
}
