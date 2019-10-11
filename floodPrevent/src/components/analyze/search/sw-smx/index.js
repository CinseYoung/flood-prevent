export default {
  data() {
    return {
      formInline: {
        createTime: [],
        hour: 6,
        value: '汉口至大通'
      },
      name: [],
      speed: 500,
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      options_time: [{
        value: 100,
        label: '0.1s'
      }, {
        value: 200,
        label: '0.2s'
      }, {
        value: 500,
        label: '0.5s'
      }, {
        value: 1000,
        label: '1s'
      }, {
        value: 2000,
        label: '2s'
      }]
    }
  },
  props: {
    cities: { type: Array, default: [] },
    options: { type: Array, default: [] }
  },
  mounted() {
    var st = this.moment()
    var et = this.moment()
    var hour = et.hours()
    var date = et.dates()
    st.hours(8)
    st.dates(date - 3)
    this.formInline.createTime.push(st.format('YYYY-MM-DD HH'))
    if (hour <= 8) {
      et.dates(date - 1)
    }
    et.hours(8)
    this.formInline.createTime.push(et.format('YYYY-MM-DD HH'))
    this.searchSubmit()
  },
  methods: {
    searchSubmit() {
      var data = Object.assign({}, this.formInline)
      if (this.formInline.createTime !== '') {
        data.st = this.formInline.createTime[0]
        data.et = this.formInline.createTime[1]
      }
      delete data.createTime
      this.$emit('searchSubmit', data)
      //console.log(data)
    },
    changeSpeed(val) {
      this.$emit('update:playTime', val)
    }
  }
}
