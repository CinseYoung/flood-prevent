export default {
  data() {
    return {
      formInline: {
        name: '',
        name_dw: ''
      },
      station: []
    }
  },
  mounted() {
    this.station = this.loadAll()
    this.onSubmit()
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
      var station = this.station;
      var results = queryString ? station.filter(this.createFilter(queryString)) : station;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (station) => {
        return (station.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1)
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
