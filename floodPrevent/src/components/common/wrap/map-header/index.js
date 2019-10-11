import header from '@/components/common/header/general/index.vue'
import mapTool from '@/components/common/mapTool/index.vue'
export default {
  data() {
    return {
      menuData: [],
      menuName: ''
    }
  },
  props: {
    type: { type: String, default: '' },
    thisTitle: { type: String, default: '' },
    name: { type: String, default: '' }
  },
  components: {
    'gr-header': header,
    'map-tool': mapTool
  },
  mounted() {
    this.map.init()
  },
  methods: {
    setSourceData(data) {
      this.$refs.mapTool.setSourceData(data)
    }
  }
}
