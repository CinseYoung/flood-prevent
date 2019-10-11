export default {
  data() {
    return {
      formInline: {
        name: '',
        type: '',
        selectCity: '',
        selectXian: '',
        grade: '',
        checked: false
      },
      restaurants: [],
      citys: [
        { label: '拉萨市', value: '拉萨市' },
        { label: '山南市', value: '山南市' }
      ],
      xian: []
    }
  },
  mounted() {
    this.onSubmit()
    this.restaurants = this.loadAll()
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      var reNumber = /^\d+$/
      if (reNumber.test(data.name)) {
        data.num = data.name
        delete data.name
      }
      console.log(data)
      this.$emit('searchSubmit', data)
    },
    exportExcel() {
      this.utils.excel()
    },
    getCity(city) {
      var tempXian = []
      this.xian = []
      this.formInline.selectXian = ''
      var allXian = [
        { city: '拉萨市', label: '林周' },
        { city: '拉萨市', label: '达孜' },
        { city: '拉萨市', label: '当雄' },
        { city: '山南市', label: '桑日' },
        { city: '山南市', label: '加查' },
        { city: '山南市', label: '朗县' }
      ]
      for (var item of allXian) {
        if (city === item.city) {
          tempXian.push({ label: item.label, value: item.label })
        }
      }
      this.xian = tempXian
    },
    getXian(xian) {
      console.log(xian)
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1)
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
