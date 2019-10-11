export default {
  data() {
    return {
      formInline: {
        yhmc: ''
      }
    }
  },
  mounted() {
    this.onSubmit()
  },
  methods: {
    load(param) {
      this.api.get(this, 'get_area_list', this.areaResult, param)
    },
    areaResult(data) {
      this.areaList = data.map(area => {
        return { value: area.xzqhmc, id: area.dxid }
      })
    },
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      this.$emit('searchSubmit', data)
      this.load()
    },
    exportExcel() {
      this.utils.excel()
    }
  }
}
