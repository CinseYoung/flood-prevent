export default {
  data() {
    return {
      formInline: {
        createTime: [],
        hour: 6,
        name: ['宜昌'],
        length: 12
      },
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      cities: ['宜昌', '枝城', '沙市', '河溶', '高坝洲']
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
    this.getNum()
  },
  methods: {
    getNum() {
      var data = Object.assign({}, this.formInline)
      if (this.formInline.createTime !== '') {
        data.st = this.formInline.createTime[0]
        data.et = this.formInline.createTime[1]
      }
      delete data.createTime
      this.$emit('searchSubmit', data)
      // console.log(data)
    },
    changeArray(val) {
     // console.log(val)
    },
    calFenliu() {

    },
    forcal() {

    }
  }
}
