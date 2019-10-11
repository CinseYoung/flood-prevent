export default {
  data() {
    return {
      formInline: {
        createTime: [],
        hour: 6,
        value: '狮子滩水库'
      },
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      options: [{
        value: '狮子滩水库',
        label: '狮子滩水库'
      }, {
        value: '白毛以上',
        label: '白毛以上'
      }, {
        value: '重阳以上',
        label: '重阳以上'
      }, {
        value: '武侯镇',
        label: '武侯镇'
      }, {
        value: '石门水库',
        label: '石门水库'
      }]
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
    handleChange(value) {
      //console.log(value)
    }
  }
}
