/*eslint-disable*/
import header from '@/components/common/header/yzt/index.vue'
import mapModel from './components/map-model.vue'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      menuData: [],
      menuName: '',
      isPop: false,
    }
  },
  props: {
    type: { type: String, default: '' },
    thisTitle: { type: String, default: '' },
    name: { type: String, default: '' }
  },
  components: {
    'gr-header': header,
    'map-model': mapModel,
  },
  computed: { ...mapState(['yztPanel']) },
  mounted() {
    this.map.init()
  },
  methods: {
    showPop: function () {
      this.isPop = !this.isPop
    },
    mapClick: function (e) {
      // this.$store.state.yztPanel = false
      // this.$store.state.layerMenu = false
    },
    move: function () { }
  }
}
