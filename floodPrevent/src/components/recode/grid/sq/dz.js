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
    handleSee(index, row) {
      this.$router.push({ name: 'record-jy-sq', params: { row: row }})
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
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
