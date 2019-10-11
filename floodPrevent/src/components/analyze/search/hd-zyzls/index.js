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
      }
    }
  },
  mounted() {
    var data = this.moment()
    this.formInline.createTime = data.format('YYYY-MM-DD')
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
    },

    exportExcel() {
      this.utils.excel()
    }
  }
}
