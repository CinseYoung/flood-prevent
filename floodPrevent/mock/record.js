const Mock = require('mockjs') // mockjs 导入依赖模块
const util = require('./util') // 自定义工具模块
module.exports = {
  init: (app) => {
    // 电子档案模拟数据请求
    app.get('/api/record/get/base/recordPage', function(rep, res) {
      var json = util.getJsonFile('./data/recordPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.array))
    })
    // 纸质档案模拟数据请求
    app.get('/api/record/get/base/recordZzPage', function(rep, res) {
      var json = util.getJsonFile('./data/recordPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zzArray))
    })
    // 档案室模拟数据请求
    app.get('/api/record/get/base/recordOffice', function(rep, res) {
      var json = util.getJsonFile('./data/recordPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.officeArray))
    })
    // 档案类别模拟数据请求
    app.get('/api/record/get/base/recordType', function(rep, res) {
      var json = util.getJsonFile('./data/recordPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.typeArray))
    })
    // 档案日志模拟数据请求
    app.get('/api/record/get/base/recordLog', function(rep, res) {
      var json = util.getJsonFile('./data/recordPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.logArray))
    })
    // 档案借阅模拟数据请求
    app.get('/api/record/get/base/recordLend', function(rep, res) {
      var json = util.getJsonFile('./data/recordPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.lendArray))
    })
    // 档案授权模拟数据请求
    app.get('/api/record/get/base/recordAuth', function(rep, res) {
      var json = util.getJsonFile('./data/recordPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.authArray))
    })
    // 项目模拟数据请求
    app.get('/api/record/get/base/recordProject', function(rep, res) {
      var json = util.getJsonFile('./data/recordPage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.projectArray))
    })
  }
}
