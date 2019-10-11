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
      param.recordtype = 1
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
      this.$router.push({ name: 'record-jy-index', params: { row: row }})
      // this.utils.clickUrl(this, { 'tp': '1', 'url': '/record/jy/index' })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    getSelectData() {
      var param = { recordtype: 1 }
      this.api.get(this, 'record_type_list', (data) => {
        console.log(data)
        this.$emit('update:selectData', data)
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
        return '完好'
      } else {
        return '损坏'
      }
    }
  }
}
