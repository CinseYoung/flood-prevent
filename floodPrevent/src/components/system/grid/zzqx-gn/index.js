import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      currentPage: 1,
      pagePize: 15,
      tableData: [],
      height: 500,
      total: 0,
      canshu: {},
      currentRow: []
    }
  },
  created() {
    this.height = document.body.clientHeight - 200
    this.load()
  },
  methods: {
    ...mapMutations([
      'changeRow',
      'clearRow'
    ]),
    handleCurrentChange(val) {
      this.changeRow(val)
    },
    rowClick(row, column, event) {
      this.$emit('rowClick', row)
    },
    load(param) {
      this.api.get(this, 'system_gn_page', this.result, param)
    },
    result(data) {
      this.total = data.length
      this.tableData = this.gettree(data)
    },
    gettree(data) {
      var dataList = data
      function fn(data, sjdxid) {
        var result = []
        var temp
        for (var i in data) {
          if (data[i].sjdxid === sjdxid) {
            result.push(data[i])
            temp = fn(data, data[i].dxid)
            if (temp.length > 0) {
              data[i].children = temp
            }
          }
        }
        return result
      }
      return fn(dataList, '0')
    },
    searchSubmit(data) {
      if (data === undefined) data = {}
      data.pagesize = this.pagePize
      data.page = this.currentPage
      this.canshu = data
      this.load(data)
    },
    handleDelete(index, row) {
      this.$confirm('是否确定删除该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.tableData.splice(index, 1)
          this.total = this.tableData.length
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  },
  beforeDestroy() {
    this.clearRow()
  }
}
