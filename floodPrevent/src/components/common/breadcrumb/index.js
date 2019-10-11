import zh from '@/config/charset/zh.js'
export default {
  name: 'breadcrumb',
  data() {
    return { replace: true, data: [] }
  },
  methods: {
    load() {
      const key = this.$route.path.substring(1)
      const keys = key.split('/')
      this.data = []
      var k = null
      var that = this
      keys.forEach(element => {
        if (k == null) {
          k = element
        } else {
          k = k + '_' + element
        }
        // const to = '/' + k.replace(/_/g, '/')
        that.data.push({ name: zh[k] })
      })
    }
  }
}
