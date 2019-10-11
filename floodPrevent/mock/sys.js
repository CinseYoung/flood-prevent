const Mock = require('mockjs') // mockjs 导入依赖模块
const util = require('./util') // 自定义工具模块
module.exports = {
  init: app => {
    // 监听http请求
    app.get('/api/user/userinfo', function(rep, res) {
      // 每次响应请求时读取mock data的json文件
      // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
      var json = util.getJsonFile('./data/userInfo.json')
      // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
      res.json(Mock.mock(util.response(200, json)))
    })
    // 普通登录
    app.post('/api/loginAction', function(rep, res) {
      var body = rep.body
      if (body.username !== 'admin' && body.password !== '123456') {
        res.json(Mock.mock(util.response(521, '用户或密码错误..')))
        return
      }
      var json = util.getJsonFile('./data/userInfo.json')
      res.json(Mock.mock(util.response(200, json)))
    })
    // 动态密码登录
    app.post('/api/loginDTAction', function(rep, res) {
      var body = rep.body
      if (body.username !== 'admin' && body.password !== '123456') {
        res.json(Mock.mock(util.response(521, '用户或密码错误..')))
        return
      }
      var json = util.getJsonFile('./data/userInfo.json')
      res.json(Mock.mock(util.response(200, json)))
    })
    // 临时授权登录
    app.post('/api/loginLSAction', function(rep, res) {
      var body = rep.body
      if (body.password !== '123456') {
        res.json(Mock.mock(util.response(521, '用户或密码错误..')))
        return
      }
      var json = util.getJsonFile('./data/userInfo.json')
      res.json(Mock.mock(util.response(200, json)))
    })

    // 注销用户
    app.get('/api/sys/destroy', function(rep, res) {
      //  var body = rep.body 根据sessionId删除redis 的用户登录信息
      res.json(Mock.mock(util.response(200, 'success')))
    })

    // 修改密码
    app.post('/api/sys/changePwd', function(rep, res) {
      var body = rep.body

      res.json(Mock.mock(util.response(200, 'success')))
    })

    // 获取门户菜单信息
    app.get('/api/sys/get/menu/nav', function(rep, res) {
      var json = util.getJsonFile('./data/menu.json')
      res.json(Mock.mock(util.response(200, json)))
    })
    // 获取菜单信息
    app.get('/api/sys/get/menu/list', function(rep, res) {
      var id = rep.query.id
      var json = {}
      if (id === 'recode') {
        // 分系统类型获取,档案
        json = util.getJsonFile('./data/recodeMenu.json')
      } else if (id === 'riskmap') {
        // 分系统类型获取,风险图
        json = util.getJsonFile('./data/riskMenu.json')
      } else if (id === 'shyjyb') {
        // 山洪预警预报
        json = util.getJsonFile('./data/shyjybMenu.json')
      } else if (id === 'analyze') {
        // 统计分析
        json = util.getJsonFile('./data/analyzeMenu.json')
      } else if (id === 'base') {
        // 山洪调查评价数据
        json = util.getJsonFile('./data/shdcpjMenu.json')
      } else if (id === 'system') {
        // 山洪调查评价数据
        json = util.getJsonFile('./data/systemMenu.json')
      } else if (id === 'data') {
        // 山洪调查评价数据
        json = util.getJsonFile('./data/dataMenu.json')
      } else if (id === 'rqy') {
        // 容器云管理
        json = util.getJsonFile('./data/rqyMenu.json')
      }
      res.json(Mock.mock(util.response(200, json)))
    })
    // 获取首页 值班信息
    app.get('/api/sys/get/dutyInfo', function(rep, res) {
      var json = util.getJsonFile('./data/dutyInfo.json')
      var array = Mock.mock(json)
      res.json(Mock.mock(util.response(200, array.array)))
    })
    // 获取首页 我的工作
    app.get('/api/sys/get/works', function(rep, res) {
      var json = util.getJsonFile('./data/works.json')
      var array = Mock.mock(json)
      res.json(Mock.mock(util.response(200, array.array)))
    })
    // 获取首页 预警预报信息
    app.get('/api/sys/get/warn', function(rep, res) {
      var json = util.getJsonFile('./data/warningInfo.json')
      var array = Mock.mock(json)
      res.json(Mock.mock(util.response(200, array.array)))
    })
    // 获取首页 舆情信息
    app.get('/api/sys/get/yqInfo', function(rep, res) {
      var json = util.getJsonFile('./data/yqInfo.json')
      var array = Mock.mock(json)
      res.json(Mock.mock(util.response(200, array.array)))
    })
    // 获取首页 水利工程进度
    app.get('/api/sys/get/waterInfo', function(rep, res) {
      var json = util.getJsonFile('./data/waterInfo.json')
      var array = Mock.mock(json)
      res.json(Mock.mock(util.response(200, array.array)))
    })
    // 一张图搜索
    app.get('/api/sys/get/searchResult', function(rep, res) {
      var json = util.getJsonFile('./data/yzt.json')
      res.json(Mock.mock(util.response(200, json)))
    })
  }
}
