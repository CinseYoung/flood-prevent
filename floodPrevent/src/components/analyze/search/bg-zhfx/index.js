export default {
  data() {
    return {
      formInline: {
        createTime: []
      },
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  mounted() {
    var st = this.moment()
    var et = this.moment()
    var hour = et.hours()
    var date = et.dates()
    st.hours(8)
    st.dates(date - 7)
    this.formInline.createTime.push(st.format('YYYY-MM-DD HH'))
    if (hour >= 0 && hour < 2) {
      et.dates(date - 1)
      et.hours(20)
    } else if (hour >= 2 && hour < 8) {
      et.hours(2)
    } else if (hour >= 8 && hour < 14) {
      et.hours(8)
    } else if (hour >= 14 && hour < 20) {
      et.hours(14)
    } else {
      et.hours(20)
    }
    this.formInline.createTime.push(et.format('YYYY-MM-DD HH'))
    this.onSubmit()
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      if (this.formInline.createTime !== '') {
        data.st = this.formInline.createTime[0]
        data.et = this.formInline.createTime[1]
      }
      delete data.createTime
      this.$emit('searchSubmit', data)
    }
  }
}
