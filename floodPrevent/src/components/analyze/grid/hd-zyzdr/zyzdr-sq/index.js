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
  props: {
    changeGrid: { type: String, default: '' }
  },
  // computed: {
  //   getChangeGrid: function() {
  //     return this.changeGrid
  //   }
  // },
  created() {
    this.height = document.body.clientHeight - 267
  },
  mounted() {
    var data = this.$parent.getOption()
    this.searchSubmit(data)
  },
  methods: {
    load(param) {
      // if (this.changeGrid === '重要站当日水情') {
      // this.api.get(this, 'analyze_zyzdr1_page', this.result, param)
      // }else if (this.changeGrid === '水雨情综合分析重要站水情表') {
      this.api.get(this, 'analyze_zyzdr2_page', this.result, param)
      // }
    },
    result(data) {
      this.total = data.length
      this.tableData = data
    },
    // result2(data) {
    //   this.tableData2 = data
    // },
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
     // console.log(this.changeGrid)
      this.load(data)
    },
    handleEdit(index, row) {

    },
    handleDelete(index, row) {

    },
    handleDownload(index, row) {

    },
    indexMethod(index) {
      return index + 1
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
    }
  }
}
