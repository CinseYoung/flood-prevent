export default {
  data() {
    return {
      formInline: {
        createTime: [],
        title: ''
      },
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      title_bg: []
    }
  },
  mounted() {
    this.title_bg = this.loadAll()
    this.onSubmit()
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      // if (this.formInline.createTime !== '') {
      //   data.st = this.formInline.createTime[0]
      //   data.et = this.formInline.createTime[1]
      // }
      // delete data.createTime
      this.$emit('searchBg', data)
    },
    exportExcel() {
      this.utils.excel()
    },
    querySearch(queryString, cb) {
      var title_bg = this.title_bg
      var results = queryString ? title_bg.filter(this.createFilter(queryString)) : title_bg
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (item) => {
        return (item.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1)
      }
    },
    loadAll() {
      return [
        { 'value': '码头镇' },
        { 'value': '九江' },
        { 'value': '马鞍山' },
        { 'value': '南京' },
        { 'value': '总管田' },
        { 'value': '鹤庆' }
      ]
    }
  }
}
