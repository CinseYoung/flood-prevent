export default {
  data() {
    return {
      currentPage: 1,
      pagePize: 15,
      tableData: [],
      height: 500,
      total: 0,
      canshu: {},
      defaultProps: {
        children: 'children',
        label: 'label',
        height: 500
      }
    }
  },
  created() {
    this.height = document.body.clientHeight - 260
    this.load()
  },
  mounted() {
    window.onresize = () => {
      this.height = document.body.clientHeight - 260
    }
  },
  methods: {
    edit(data) {
      this.$emit('setOrganize', data)
      // 新增数据
      // const newChild = { id: id++, label: 'testtest', children: [] };
      // if (!data.children) {
      //   this.$set(data, 'children', []);
      // }
      // data.children.push(newChild);
    },

    load(param) {
      this.api.get(this, 'system_qx_page', this.result, param)
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
    indexMethod(index) {
      return index + 1
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
  }
}
