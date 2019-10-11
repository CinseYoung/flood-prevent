export default {
  data() {
    return {
      formInline: {
        lender: '',
        createTime: ''
      }
    }
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
