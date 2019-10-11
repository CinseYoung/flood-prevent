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
    this.getRoomSelectData()
  },
  methods: {
    load(param) {
      param.recordtype = 1
      this.api.get(this, 'record_page', this.result, param)
    },
    result(data) {
      //console.log(data)
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
    handleEdit(index, row) {
      //console.log(row)
    },
    handleSee(index, row) {
      this.$emit('funx', row)
    },
    handleDelete(index, row) {
      this.$confirm('是否确定删除该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        var param = { 'id': row.id }
        this.api.post(this, 'record_deleted', (data) => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.load({ pagesize: this.pagePize, page: this.currentPage })
        }, param)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    getSelectData() {
      var param = { recordtype: 1 }
      this.api.get(this, 'record_type_list', (data) => {
        // console.log(data)
        this.$emit('update:selectData', data)
        this.$emit('update:typeSelectData', data)
      }, param)
    },
    getRoomSelectData() {
      var param = { recordtype: 0 }
      this.api.get(this, 'record_room_list', (data) => {
        // console.log(data)
        this.$emit('update:roomSelectData', data)
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
