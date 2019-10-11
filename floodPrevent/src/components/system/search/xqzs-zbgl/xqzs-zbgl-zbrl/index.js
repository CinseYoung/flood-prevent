export default {
  data() {
    return {
      formInline: {
        createTime: ''
      },
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      options: []
    }
  },
  mounted() {
    var data = this.moment()
    var month = data.months()
    data.months(month)
    this.formInline.createTime = data.format('YYYY-MM')
    this.onSubmit()
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      if (this.formInline.createTime !== '') {
        data.time = this.formInline.createTime
      }
      delete data.createTime
      this.$emit('searchSubmit', data)
    }
  }
}
