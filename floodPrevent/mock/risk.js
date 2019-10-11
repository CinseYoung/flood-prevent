const Mock = require('mockjs') // mockjs 导入依赖模块
const util = require('./util') // 自定义工具模块
module.exports = {
  init: (app) => {
    app.get('/api/risk/get/base/result', function(rep, res) {
      var json = util.getJsonFile('./data/riskMap.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.array))
    })
    // 获取影响地区村庄信息
    app.get('/api/risk/get/base/result/village', function(rep, res) {
      var json = util.getJsonFile('./data/villages.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.array))
    })
    // 获取影响分析 综合指标 表格信息
    app.get('/api/risk/get/base/result/zhtable', function(rep, res) {
      var json = util.getJsonFile('./data/zhtable.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.array))
    })
    // 获取影响分析 影响土地 表格信息
    app.get('/api/risk/get/base/result/landtable', function(rep, res) {
      var json = util.getJsonFile('./data/landTable.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.array))
    })
    // 获取县级风险图  树结构信息
    app.get('/api/risk/get/base/result/countyTree', function(rep, res) {
      var json = util.getJsonFile('./data/countyTree.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.array))
    })
    // 获取地区数据  左侧搜索栏
    app.get('/api/risk/get/base/result/city', function(rep, res) {
      var json = util.getJsonFile('./data/city.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.array))
    })
  }
}
