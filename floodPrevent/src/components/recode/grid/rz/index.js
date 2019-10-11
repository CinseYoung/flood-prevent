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
  },
  methods: {
    load(param) {
      this.api.get(this, 'record_log', this.result, param)
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
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    formaterType(row) {
      if (row.operation_type === '1') {
        return '添加'
      } else if (row.operation_type === '2') {
        return '删除'
      } else if (row.operation_type === '3') {
        return '修改'
      } else if (row.operation_type === '4') {
        return '查看'
      }
    },
    getStatus(status) {
      if (status === '1') {
        return 'dot dot_success'
      } else {
        return 'dot dot_fail'
      }
    }
  },
  filters: {
    formatterStatus(value) {
      if (value === '1') {
        return '成功'
      } else {
        return '失败'
      }
    }
  }
}
