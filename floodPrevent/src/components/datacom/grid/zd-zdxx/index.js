
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
    this.height = document.body.clientHeight - 267
  },
  methods: {
    load(param) {
      this.api.get(this, 'data_zdxx', this.result, param)
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
    handleDelete(index, row) {

    },
    handleDownload(index, row) {

    },
    handleUpdate(index, row) {
      this.$emit('funx', row)
    },
    async reindex(arr) {
      var index = 0
      await this.tableData.forEach((v, i) => {
        if (arr.sup_id) {
          if (v.id === arr.sup_id) {
            index = i
          }
        } else {
          if (v.id === arr.id) {
            index = i
          }
        }
      })
      return index
    },
    handleDele(index, row) {
      this.$confirm('是否确定删除该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        if (row.sup_id) {
          this.reindex(row).then((ind) => {
            this.tableData[ind].children.forEach((val, index) => {
              if (val.id === row.id) {
                this.tableData[ind].children.splice(index, 1)
              }
            })
          })
        } else {
          this.reindex(row).then((ind) => {
            this.tableData.splice(ind, 1)
            this.total = this.tableData.length
          })
        }
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
