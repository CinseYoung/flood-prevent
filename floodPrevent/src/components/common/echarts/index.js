export default {
  props: {
    id: { type: String, default: '' },
    // width: { type: Number, default: '' },
    height: { type: Number, default: 0 },
    option: { type: Object, default: {}}
  },
  computed: {
    getOptions() {
      return this.option
    }
  },
  watch: {
    getOptions: {
      deep: true,
      handler(val) {
        this.create()
      }
    }
  },
  methods: {
    create() {
     // console.log(this.option)
      var myChart = this.echarts.init(document.getElementById(this.id))
      myChart.setOption(this.option)
    }
  }
}
