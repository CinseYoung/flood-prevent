export default {
  data() {
    return {
      formInline: {
        name: ''
      },
      liebiao: []
    }
  },
  mounted() {
    this.onSubmit()
    this.liebiao = this.loadAll()
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      this.$emit('searchSubmit', data)
    },
    exportExcel() {
      this.utils.excel()
    },
    querySearch(queryString, cb) {
      var liebiao = this.liebiao;
      var results = queryString ? liebiao.filter(this.createFilter(queryString)) : liebiao;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (liebiao) => {
        return (liebiao.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
      }
    },
    loadAll() {
      return [
        { 'value': "码头镇" },
        { 'value': "九江" },
        { 'value': "马鞍山" },
        { 'value': "南京" },
        { 'value': "总管田" },
        { 'value': "鹤庆" }
      ]
    }
  }
}
