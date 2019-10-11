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
      },
      radio: '重要站当日水情'
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
      var data = this.getData()
      this.$emit('searchSubmit', data)
    },
    getData() {
      var data = Object.assign({}, this.formInline)
      if (this.formInline.createTime !== '') {
        data.time = this.formInline.createTime
      }
      delete data.createTime
      return data;
    },
    changeLabel(val) {
      this.$emit('changeGrid', val, this.getData())
    },
    exportExcel() {
      this.utils.excel()
    }
  }
}
