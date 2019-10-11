export default {
  data() {
    return {
      formInline: {
        typeName: '',
        recordtype: '0'
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
