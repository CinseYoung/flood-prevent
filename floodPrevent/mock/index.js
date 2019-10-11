const bodyParser = require('body-parser')
// 引入其他API接口
const sys = require('./sys') // 自定义工具模块
const record = require('./record') // 自定义工具模块

const risk = require('./risk.js') // 自定义工具模块
const analyze = require('./analyze')
const system = require('./system')
const zydata = require('./zydata')
// 返回一个函数
module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  // 系统数据
  sys.init(app)

  record.init(app)

  risk.init(app)

  analyze.init(app)

  system.init(app)

  zydata.init(app)
}
