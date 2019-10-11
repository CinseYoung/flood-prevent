export default {
  data() {
    return {
      formInline: {
        name: '',
        type: '',
        allunit: '',
        unit: '',
        examine: ''
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
    }
  }
}
