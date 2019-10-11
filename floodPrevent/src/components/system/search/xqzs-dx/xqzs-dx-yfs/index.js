export default {
  data() {
    return {
      formInline: {
        createTime: [],
        sub_person: ''
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
    var st = this.moment()
    var et = this.moment()
    var hour = et.hours()
    var date = et.dates()
    st.hours(8)
    st.dates(date - 15)
    this.formInline.createTime.push(st.format('YYYY-MM-DD HH'))
    if (hour <= 8) {
      et.dates(date - 1)
    }
    et.hours(8)
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
    },
    exportExcel() {
      this.utils.excel()
    }
  }
}
