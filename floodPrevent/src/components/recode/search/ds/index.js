export default {
  data() {
    return {
      formInline: {
        name: '',
        manager: ''
      }
    }
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      this.$emit('searchSubmit', data)
    }
  }
}
