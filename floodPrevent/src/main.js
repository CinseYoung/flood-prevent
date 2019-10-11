import '@/style/global.scss'
import Vue from 'vue'
import '@/plugins/axios'
import App from './App.vue'
import router from './router.js'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import '@/style/styles.scss'
import base from './base.js'

// 音频播放插件
import vueAudioNative from 'vue-audio-native'
Vue.use(vueAudioNative)
// 日历插件
// import FullCalendar from "vue-full-calendar"
// import 'fullcalendar/dist/fullcalendar.css'
// Vue.use(FullCalendar)

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false
Vue.use(base)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
