export default {
  data() {
    return {
      height: 500
    }
  },
  props: {
    echartsHeight: { type: Number, default: 0 },
    tableData: { type: Array, default: [] }
  },
  created() {
    this.height = document.body.clientHeight - 260 - this.echartsHeight
  }
}
