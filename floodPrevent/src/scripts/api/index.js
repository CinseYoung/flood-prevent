import urlArray from './urlArray.js'
const kpst = {

  /**
     * _this :对象
     *
     *  key:服务端api接口标识
     *  data:服务端参数
     *  callback 成功后数据回到 ，参数为 data
     *
     */
  get: (_this, key, callback, data) => {
    var url = urlArray[key]
    var params = _this.utils.josnToParam(data)
    if (params !== '') url = url + '?' + params
    _this.axios.defaults.headers.get['sessionId'] = localStorage.getItem('kpst-token')
    _this.axios.get(url).then((data) => {
      if (data === null) return
      kpst.result(_this, data, callback)
    }).catch((error) => {
      _this.$message({ showClose: true, message: error, type: 'error' })
    })
  },
  post: (_this, key, callback, data) => {
    var url = urlArray[key]
    var values = data || {}
    _this.axios.defaults.headers.post['sessionId'] = localStorage.getItem('kpst-token')
    _this.axios.post(url, values).then((data) => {
      if (data === null) return
      kpst.result(_this, data, callback)
    }).catch((error) => {
      _this.$message({ showClose: true, message: error, type: 'error' })
    })
  }, result: (_this, data, callback) => {
    if (data.status === 200) {
      callback.call(this, data.msg)
      return
    }
    if (data.status === 240) {
      _this.$message({ showClose: true, message: '您没有登陆,请联系管理员..', type: 'error' })
      _this.$router.push({ path: '/login' })
      return
    }
    if (data.status === 241) {
      _this.$message({ showClose: true, message: '您没有该对象权限,请联系管理员..', type: 'error' })
      return
    }
    if (data.status === 521) {
      _this.$message({ showClose: true, message: data.msg, type: 'error' })
      return
    }
    if (data.status === 500) {
      _this.$message({ showClose: true, message: '请不要非法操作..', type: 'error' })
      return
    }
  }
}
export default kpst
