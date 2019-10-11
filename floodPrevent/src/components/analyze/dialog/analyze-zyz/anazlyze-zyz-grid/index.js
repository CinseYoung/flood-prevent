export default {
  data() {
    return {
      currentPage: 1,
      pagePize: 15,
      tableData: [],
      height: 500,
      total: 0,
      canshu: {},
      row: {},
      multipleSelection: []
    }
  },
  created() {
    this.height = document.body.clientHeight - 430
  },
  watch: {
    multipleSelection(newVal, oldVal) {
      if (newVal.length > oldVal.length) {
        // console.log('新增')
      } else {
        // console.log('删除')
      }
    }
  },
  methods: {
    load(param) {
      this.api.get(this, 'analyze_szzyz_page', this.result, param)
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
    handleSelectionChange(selection, row) {
      this.multipleSelection = selection
      this.row = row
    }
  }
}
