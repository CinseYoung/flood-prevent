export default {
  data() {
    return {
      formInline: {
        name: '',
        type: '',
        examine: '',
        provide: ''
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
    add() {
      this.$emit('funx')
    },
    exportExcel() {
      // window.location.href = window.URL.createObjectURL(new Blob([response.data], { type:     'application/vnd.ms-excel' }))
      this.utils.excel()
    }
  }
}
