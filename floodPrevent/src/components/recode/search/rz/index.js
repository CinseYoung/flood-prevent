import moment from 'moment'
export default {
  data() {
    return {
      formInline: {
        record_name: '',
        operator: '',
        operation_type: '',
        operationTime: ''
      }
    }
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      if (this.formInline.operationTime !== '' && this.formInline.operationTime !== null) {
        data.st_tm = moment(this.formInline.operationTime[0]).format('YYYY-MM-DD HH:mm:ss')
        data.et_tm = moment(this.formInline.operationTime[1]).format('YYYY-MM-DD HH:mm:ss')
      }
      delete data.operationTime
      this.$emit('searchSubmit', data)
    }
  }
}
