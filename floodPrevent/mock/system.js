const Mock = require('mockjs') // mockjs 导入依赖模块
const util = require('./util') // 自定义工具模块
module.exports = {
  init: app => {
    app.get('/api/system/get/base/systemXqPage', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.xqarray))
    })
    app.get('/api/system/get/base/systemYjPage', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.yjarray))
    })
    app.get('/api/system/get/base/systemDx1Page', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.dx1array))
    })
    // 用户管理
    app.get('/api/system/get/base/systemYhPage', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.yharray))
    })
    // 功能管理
    app.get('/api/system/get/base/systemGnPage', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.gnarray))
    })
    // 组织机构
    app.get('/api/system/get/base/systemZzjgPage', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zzjgarray))
    })
    // 子系统管理
    app.get('/api/system/get/base/systemZxtPage', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zxtarray))
    })
    // 权限管理
    app.get('/api/system/get/base/systemQxPage', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.qxarray))
    })
    // 日志管理
    app.get('/api/system/get/base/systemLogyhPage', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.logarray))
    })
    app.get('/api/system/get/base/systemDx2Page', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.dx2array))
    })
    app.get('/api/system/get/base/systemDhPage', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.dharray))
    })
    app.get('/api/system/get/base/systemBgPage', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.bgarray))
    })
    app.get('/api/system/get/base/systemGwPage', function(rep, res) {
      var json = util.getJsonFile('./data/systemPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.gwarray))
    })
    /* 容器云 */
    // 应用管理
    app.get('/api/rqy/get/base/yygl', function(rep, res) {
      var json = util.getJsonFile('./data/rqyPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.yyglArray))
    })
    // 服务管理
    app.get('/api/rqy/get/base/fwgl', function(rep, res) {
      var json = util.getJsonFile('./data/rqyPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.fwglArray))
    })
    // 镜像仓库
    app.get('/api/rqy/get/base/jxck', function(rep, res) {
      var json = util.getJsonFile('./data/rqyPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.jxckArray))
    })
    // 存储管理
    app.get('/api/rqy/get/base/ccgl', function(rep, res) {
      var json = util.getJsonFile('./data/rqyPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.ccglArray))
    })
  }
}
