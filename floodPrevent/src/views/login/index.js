
import MM from '@/views/login/body/mm/index.vue'
import SM from '@/views/login/body/sm/index.vue'
import DT from '@/views/login/body/dt/index.vue'
import LS from '@/views/login/body/ls/index.vue'
export default {
  name: 'login',
  components: {
  // "login-body": loginBody
  },
  data() {
    return {
      label: '密码登录',
      loginTop: { App: 'App下载', help: '使用帮助' },
      currentComponent: null,
      tabs: [
        { title: '密码登录', src: require('../../assets/login/password2.png'), object: MM },
        { title: '扫码登录', src: require('../../assets/login/erwei.png'), object: SM },
        { title: '动态口令', src: require('../../assets/login/kouling.png'), object: DT },
        { title: '临时授权', src: require('../../assets/login/sq.png'), object: LS }
      ]
    }
  },
  created() {
    var _this = this
    document.onkeypress = function(e) {
      var keycode = document.all ? event.keyCode : e.which
      if (keycode === 13) {
        _this.currentComponent.methods.loginAction(_this)
        return false
      }
    }
  },
  mounted() {
    const object = this.tabs[0].object
    this.currentComponent = object
  },
  methods: {
    tabarbtn(title, index) {
      this.label = title
      const object = this.tabs[index].object
      this.currentComponent = object
    }
  }
}
