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
    this.height = document.body.clientHeight - 270
  },
  methods: {
    load(param) {
      this.api.get(this, 'system_gw_page', this.result, param)
    },
    result(data) {
      this.total = data.length
      this.tableData = data
    },
    handleSizeChange(val) {
      this.canshu.pagesize = val
      this.load(this.canshu)
    },
    handleCurrentChange(val) {
      this.canshu.page = val
      this.load(this.canshu)
    },
    searchSubmit(data) {
      if (data === undefined) data = {}
      data.pagesize = this.pagePize
      data.page = this.currentPage
      this.canshu = data
      this.load(data)
    },
    handleSee(index, row) {
      if (window.navigator.userAgent.indexOf('Trident') > -1 || window.navigator.userAgent.indexOf('MSIE') > -1) {
        this.$message({
          message: 'IE浏览器不支持在线预览，推荐使用Google Chrome',
          type: 'error'
        })
      } else {
        this.$emit('funx', row)
      }
    }
  }
}
