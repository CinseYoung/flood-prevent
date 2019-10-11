import header from '@/components/common/header/general/index.vue'
import leftMenuNode from '@/components/common/leftMenu/general/index.vue'
import breadCrumb from '@/components/common/breadcrumb/index.vue'
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
    'left-menu': leftMenuNode,
    'bread-crumb': breadCrumb
  },
  watch: {
    menuName: function() {
      this.$refs.breadCrumb.load()
    }
  },
  methods: {
    cjyy() {
      this.$refs.breadCrumb.load()
    },
    updateObject(data) {
      this.menuData = data.children
      var url = this.$route.path
      var item = this.utils.getJSON(data.children, 'children', 'url', url)
      if (item.title === undefined) {
        item = this.menuData[0]
      }
      this.menuName = item.title
    }
  }
}
