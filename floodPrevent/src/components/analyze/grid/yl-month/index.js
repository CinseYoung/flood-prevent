export default {
  data() {
    return {
      currentPage: 1,
      pagePize: 15,
      tableData: [],
      height: 500,
      total: 0
    }
  },
  // computed:{
  //   colorStyle(){
  //     this.tableData.forEach(function(item){
  //       if(item.ss == "落"){
  //         return {
  //           lvse:true
  //         }
  //       }else if(item.ss == "涨"){
  //         return {
  //           hongse:true
  //         }
  //       }
  //     })
  //   }
  // },
  created() {
    this.height = document.body.clientHeight - 267
  },
  mounted() {
    this.load({ pagesize: this.pagePize, page: this.currentPage })
  },
  methods: {
    load(param) {
      this.api.get(this, 'analyze_ylmonth_page', this.result, param)
    },
    result(data) {
      this.total = data.length
      this.tableData = data
    },
    handleSizeChange(val) {
      this.pagePize = val
      this.load({ pagesize: this.pagePize, page: this.currentPage })
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
