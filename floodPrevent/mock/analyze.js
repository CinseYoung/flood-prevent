const Mock = require('mockjs') // mockjs 导入依赖模块
const util = require('./util') // 自定义工具模块
module.exports = {
  init: (app) => {
    app.get('/api/analyze/get/base/analyzePage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.array))
    })
    app.get('/api/analyze/get/base/analyzeGbPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.gbArray))
    }),
    app.get('/api/analyze/get/base/analyzeZyzPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zyzArray))
    }),
    app.get('/api/analyze/get/base/analyzeSzzyzPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szzyzArray))
    }),
    app.get('/api/analyze/get/base/analyzeJbPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.jbArray))
    }),
    app.get('/api/analyze/get/base/analyzeCjPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.cjArray))
    }),
    app.get('/api/analyze/get/base/analyzeZyzdr1Page', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zyzdrArray1))
    }),
    app.get('/api/analyze/get/base/analyzeZyzdr2Page', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zyzdrArray2))
    }),
    app.get('/api/analyze/get/base/analyzeZyzdbPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zyzdbArray))
    }),
    app.get('/api/analyze/get/base/analyzeLstzzPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.lstzzArray))
    }),
    app.get('/api/analyze/get/base/analyzeZyzswPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zyzswArray))
    }),
    app.get('/api/analyze/get/base/analyzeZyzlsPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zyzlsArray))
    }),
    app.get('/api/analyze/get/base/analyzeTopPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.topArray))
    }),
    app.get('/api/analyze/get/base/analyzeDownPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.downArray))
    }),
    app.get('/api/analyze/get/base/analyzeMainskPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.mainskArray))
    }),
    app.get('/api/analyze/get/base/analyzeSkqPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.skqArray))
    }),
    app.get('/api/analyze/get/base/analyzeStationPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.stationArray))
    }),
    app.get('/api/analyze/get/base/analyzeSkxslPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.skxslArray))
    }),
    app.get('/api/analyze/get/base/analyzeSktzzPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sktzzArray))
    }),
    app.get('/api/analyze/get/base/analyzeYlmonthPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.ylmonthArray))
    }),
    app.get('/api/analyze/get/base/analyzeYldayPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.yldayArray))
    }),
    app.get('/api/analyze/get/base/analyzeYlhourPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.ylhourArray))
    }),
    app.get('/api/analyze/get/base/analyzeSwdzPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.swdzArray))
    }),
    app.get('/api/analyze/get/base/analyzeSwsmxPage', function(rep, res) {
      var json = util.getJsonFile('./data/analyzePage.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.smxArray))
    })
  }
}
