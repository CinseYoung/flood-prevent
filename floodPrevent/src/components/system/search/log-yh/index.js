export default {
  data() {
    return {
      formInline: {
        gjc: '',
        sj: [],
        yh: ''
      },
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      restaurants: []
    }
  },
  mounted() {
    this.onSubmit()
    this.restaurants = this.loadAll()
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      // if (this.formInline.createTime !== '') {
      //   data.st_createTime = this.formInline.createTime[0]
      //   data.et_createTime = this.formInline.createTime[1]
      // }
      // delete data.createTime
      this.$emit('searchSubmit', data)
    },
    exportExcel() {
      this.utils.excel()
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value
            .toLowerCase()
            .indexOf(queryString.toLowerCase()) !== -1
        )
      }
    },
    loadAll() {
      return [
        { value: '码头镇' },
        { value: '九江' },
        { value: '马鞍山' },
        { value: '南京' },
        { value: '总管田' },
        { value: '鹤庆' }
      ]
    }
  }
}
