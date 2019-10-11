export default {
  data() {
    return {
      formInline: {
        createTime: ''
      },
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        selectableRange: ['08:00:00 - 08:00:00']
      }
    }
  },
  mounted() {
    var data = this.moment()
    data.hours(8)
    data.minutes(0)
    data.seconds(0)
    this.formInline.createTime = data.format('YYYY-MM-DD HH')
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
