export default {
  name: 'right',
  data() {
    return {
      yqInfo: [],
      waterInfo: [],
      thstyle: {
        'background-color': '#f2f2f2',
        height: '30px'
      }
    }
  },
  created() {
    var me = this
    me.getYqInfo()
    me.getWaterInfo()
  },
  methods: {
    getYqInfo: function() {
      var me = this
      this.api.get(this, 'mh_yqInfo', (data) => {
        me.yqInfo = data
      })
    },
    getWaterInfo: function() {
      var me = this
      this.api.get(this, 'mh_waterInfo', (data) => {
        me.waterInfo = data
      })
    }
  }
}
