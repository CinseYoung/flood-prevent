export default {
  data() {
    return {
      formInline: {
        dwmc: '',
        sjdwmc: '',
        xzqhmc: '',
        lx: ''
      },
      areaList: [],
      companyList: [],
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
    load(param) {
      this.api.get(this, 'get_area_list', this.areaResult, param)
      this.api.get(this, 'get_company_list', this.companyResult, param)
    },
    areaResult(data) {
      this.areaList = data.map(area => {
        return { value: area.xzqhmc, id: area.dxid }
      })
    },
    companyResult(data) {
      this.companyList = data.map(area => {
        return { value: area.dwmc, id: area.dxid }
      })
    },
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      this.$emit('searchZzjg', data)
      this.load()
    },
    queryArea(queryString, cb) {
      var areaList = this.areaList
      var results = queryString
        ? areaList.filter(this.createFilter(queryString))
        : areaList
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    queryCompany(queryString, cb) {
      var companyList = this.companyList
      var results = queryString
        ? companyList.filter(this.createFilter(queryString))
        : companyList
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    exportExcel() {
      this.utils.excel()
    },
    getCity(city) {
      const tempXian = []
      this.xian = []
      this.formInline.selectXian = ''
      const allXian = [
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
