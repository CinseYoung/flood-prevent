const path = require('path')
// const webpack = require('webpack')

const express = require('express')
const app = express()
const apiRoutes = express.Router()
app.use('/api', apiRoutes)

function resolve(dir) {
  return path.join(__dirname, dir)
}
/**
 * 如果你的项目没有用到 sockjs，vuecli3 运行 npm run serve 之后 network 里面一直调研一个接口： http://192.168.0.101:8001/sockjs-node/info?t=1560737261281
    找到/node_modules/sockjs-client/dist/sockjs.js
    找到代码的 1605行 注释掉
 */
module.exports = {
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    before: require('./mock/index.js')
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  productionSourceMap: false // 生产环境是否生成 SourceMap
}
