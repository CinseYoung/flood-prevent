import moment from 'moment'
import echarts from 'echarts'
// 音频播放插件
import vueAudioNative from 'vue-audio-native'

import utils from './scripts/utils.js'
import api from './scripts/api/index.js'
import map from './scripts/map/index.js'

export default {
  install(Vue, options) {
    Vue.prototype.moment = moment
    Vue.prototype.echarts = echarts
    // 音频播放插件
    Vue.prototype.vueAudioNative = vueAudioNative

    Vue.prototype.utils = utils
    Vue.prototype.api = api
    Vue.prototype.map = map
  }
}
