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
      radio: '上游供蓄'
    }
  },
  mounted() {
    var data = this.moment()
    var hour = data.hours()
    var date = data.dates()
    if (hour >= 0 && hour < 2) {
      data.dates(date - 1)
      data.hours(20)
    } else if (hour >= 2 && hour < 8) {
      data.hours(2)
    } else if (hour >= 8 && hour < 14) {
      data.hours(8)
    } else if (hour >= 14 && hour < 20) {
      data.hours(14)
    } else {
      data.hours(20)
    }
    data.minutes(0)
    data.seconds(0)
    this.formInline.createTime = data.format('YYYY-MM-DD HH')
    this.onSubmit()
  },
  methods: {
    onSubmit() {
      var data = this.getData()
      this.$emit('searchSubmit', data)
    },
    getData() {
      var data = Object.assign({}, this.formInline)
      if (this.formInline.createTime !== '') {
        data.time = this.formInline.createTime
      }
      delete data.createTime
      return data
    },
    changeLabel(val) {
      this.$emit('changeGrid', val, this.getData())
    },
    exportExcel() {
      this.utils.excel()
    }
  }
}
