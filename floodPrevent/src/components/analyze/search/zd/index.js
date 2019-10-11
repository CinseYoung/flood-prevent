export default {
  data() {
    return {
      formInline: {
        id: '',
        name: '',
        type: '',
        grade: ''
      }
    }
  },
  mounted() {
    this.onSubmit()
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      this.$emit('searchSubmit', data)
    },
    exportExcel() {
      this.utils.excel()
    }
  }
}
