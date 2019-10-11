export default {
  data() {
    return {
      currentPage: 1,
      pagePize: 15,
      tableData: [],
      height: 500,
      total: 0,
      canshu: {},
      multipleSelection: []
    }
  },
  created() {
    this.height = document.body.clientHeight - 275
  },
  methods: {
    load(param) {
      this.api.get(this, 'system_xq_page', this.result, param)
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
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    showEacherts(row, event) {
      this.$emit('chuangkou', row)
    },
    startYjxy() {
      if (this.multipleSelection.length === 0) {
        this.$message.error('请选择需要启动应急响应的数据')
        return
      } else {
        this.$emit('funx', this.multipleSelection)
      }
    }
  }
}
