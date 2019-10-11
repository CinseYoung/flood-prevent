export default {
  data() {
    return {
      currentPage: 1,
      pagePize: 15,
      tableData: [],
      // tableData2: [],
      height: 500,
      total: 0,
      canshu: {}
    }
  },
  props: {
    changeGrid: { type: String, default: '' }
  },
  created() {
    this.height = document.body.clientHeight - 267
  },
  methods: {
    load(param) {
      this.api.get(this, 'analyze_station_page', this.result, param)
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
    changeRadio(data) {
      this.searchSubmit(data)
    },
    handleEdit(index, row) {

    },
    handleDelete(index, row) {

    },
    handleDownload(index, row) {

    },
    indexMethod(index) {
      return index + 1
    }
  }
}
