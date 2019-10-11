/*eslint-disable */
import { mapState } from 'vuex'

export default {
  data() {
    return { parentMenu: [], menus: [], asTitle: '', thisUrl: '' }
  },
  props: {
    name: { type: String, default: '' },
    type: { type: String, default: '' },
    thisTitle: { type: String, default: '' }
  },

  components: {},
  computed: { ...mapState(['isShowDetail', 'pageName']) },
  created() {
    this.thisUrl = this.$route.path
    this.initData()
  },
  methods: {
    initData() {
      var kpst_all_menus = localStorage.getItem('kpst-all-menus')
      if (kpst_all_menus) {
        this.parentMenu = JSON.parse(kpst_all_menus)['fxkh']
      }
      this.api.get(this, 'sys_menu', this.loadMenuData, { id: this.type })
    },
    loadMenuData(data) {
      if (data.length === 0) {
        this.backHome()
        return
      }
      this.menus = data
      var item = this.utils.getJSON(data, 'children', 'url', this.thisUrl)
      if (item.url === undefined) {
        this.utils.clickUrl(this, this.menus[0])
        item = this.menus[0]
      }
      this.asTitle = item.title
      this.$emit('funx', item)
    },
    backHome() {
      this.$router.push('/')
    },
    toHobby(command) {
      if (command === undefined) {
        this.utils.destroy(this)
        return
      }
      this.$store.state.pageName = command.title
      if (command.title != '影响分析') {
        this.$store.state.isShowDetail = false
      }
      // 跳转其他路由
      this.utils.clickUrl(this, command)
      // 改变高亮
      this.asTitle = command.title

      // 子组件修改父组件，command为点击的对象
      if (command.children) {
        this.$emit('funx', command)
      }
    }
  }
}
