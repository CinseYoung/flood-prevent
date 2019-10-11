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
        selectableRange: ['02:00:00 - 02:00:00', '08:00:00 - 08:00:00', '14:00:00 - 14:00:00', '20:00:00 - 20:00:00']
      }
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
      var data = Object.assign({}, this.formInline)
      if (this.formInline.createTime !== '') {
        data.time = this.formInline.createTime
      }
      delete data.createTime
      this.$emit('searchSubmit', data)
      //console.log(data.time)
    },

    exportExcel() {
      this.utils.excel()
    }
  }
}
