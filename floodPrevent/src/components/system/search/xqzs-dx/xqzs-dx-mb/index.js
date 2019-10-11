export default {
  data() {
    return {
      formInline: {
        name: '',
        qianming: '',
        type: ''
      },
      options_name: [],
      options_qianming: [],
      options_type: []
    }
  },
  mounted() {
    this.onSubmit()
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      this.$emit('searchMb', data)
    },
    exportExcel() {
      this.utils.excel()
    }
  }
}
