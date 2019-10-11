import moment from 'moment'
export default {
  data() {
    return {
      formInline: {
        record_name: '',
        recordTypeId: '',
        createTime: ''
      }
    }
  },
  props: {
    selectData: { type: Array, default: [] }
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      if (this.formInline.createTime !== '' && this.formInline.createTime !== null) {
        data.st = moment(this.formInline.createTime[0]).format('YYYY-MM-DD HH:mm:ss')
        data.et = moment(this.formInline.createTime[1]).format('YYYY-MM-DD HH:mm:ss')
      }
      delete data.createTime
      this.$emit('searchSubmit', data)
    }
  }
}
