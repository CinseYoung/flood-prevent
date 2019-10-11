export default {
  name: 'center',
  data() {
    return {
      warningInfo: [],
      thstyle: {
        'background-color': '#f2f2f2',
        height: '30px'
      }
    }
  },

  created() {
    var me = this
    me.getWarningInfo()
  },
  mounted() {
    this.map.init()
  },
  methods: {
    getWarningInfo: function() {
      var me = this
      this.api.get(this, 'mh_warn', (data) => {
        me.warningInfo = data
      })
    }, toYzt: function() {
      this.$router.push({ path: '/base/jb/xzqh' })
    }
  }
}
