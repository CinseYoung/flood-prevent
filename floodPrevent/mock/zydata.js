const Mock = require('mockjs') // mockjs 导入依赖模块
const util = require('./util') // 自定义工具模块
module.exports = {
  init: (app) => {
    app.get('/api/data/get/base/datazylx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.array))
    }),
    app.get('/api/data/get/base/datazyfw', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.fwArray))
    }),
    app.get('/api/data/get/base/datazysh', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.shArray))
    }),
    app.get('/api/data/get/base/datazdlx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zdlxArray))
    }),
    app.get('/api/data/get/base/datazdxx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zdxxArray))
    }),
    app.get('/api/data/get/base/datasjgl', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sjglArray))
    }),
    app.get('/api/data/get/base/datamxgl', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.mxglArray))
    }),
    app.get('/api/data/get/base/datarwgj', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.rwgjArray))
    }),
    app.get('/api/data/get/base/datasjbs', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sjbsArray))
    }),
    app.get('/api/data/get/base/left_datasjbs', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.left_sjbsArray))
    })
    app.get('/api/data/get/base/datasjbf', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sjbfArray))
    })
    app.get('/api/data/get/base/dataalllist', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.AllListArray))
    })
    app.get('/api/data/get/base/datadmtjbxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.dmtjbxxbArray))
    })
    app.get('/api/data/get/base/datajkdjbsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.jkdjbsxArray))
    })
    app.get('/api/data/get/base/datajkdjksjwj', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.jkdjksjwjArray))
    })
    app.get('/api/data/get/base/datajcqjbsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.jcqjbsxArray))
    })
    app.get('/api/data/get/base/datakcqjbsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.kcqjbsxArray))
    })
    app.get('/api/data/get/base/datastbcqhjbsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.stbcqhjbsxArray))
    })
    app.get('/api/data/get/base/datastbcfabzjbxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.stbcfabzjbxxbArray))
    })
    app.get('/api/data/get/base/datastbcfajsscxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.stbcfajsscxxbArray))
    })
    app.get('/api/data/get/base/datastbcfapfxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.stbcfapfxxbArray))
    })
    app.get('/api/data/get/base/datastbcfassxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.stbcfassxxbArray))
    })
    app.get('/api/data/get/base/datastbcfatxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.stbcfatxbArray))
    })
    app.get('/api/data/get/base/datastbcfatxbcs', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.stbcfatxbcsArray))
    })
    app.get('/api/data/get/base/datastbcfatxbxm', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.stbcfatxbxmArray))
    })
    app.get('/api/data/get/base/datastbclxqhtb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.stbclxqhtbArray))
    })
    app.get('/api/data/get/base/datastbczdfzqht', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.stbczdfzqhtArray))
    })
    // 数据管理-核心数据-地下水水源地模型对象表
    app.get('/api/data/get/base/data_sydx_dxjgqdxs', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxjgqdxs_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxjgqjbq', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxjgqjbq_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxsgssydszzkb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxsgssydszzkb_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxssyddbswxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxssyddbswxxb_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxssydfxxcltjb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxssydfxxcltjb_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxssydjbsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxssydjbsx_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxssydkcltjb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxssydkcltjb_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxssydkzswxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxssydkzswxxb_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxssydszpjxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxssydszpjxxb_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxssydydmtzlgxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxssydydmtzlgxb_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxssydydxsjczgxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxssydydxsjczgxb_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxsydlslrbb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxsydlslrbb_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxsydlslybb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxsydlslybb_Array))
    })
    app.get('/api/data/get/base/data_sydx_dxsydslxxnbb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_dxsydslxxnbb_Array))
    })
    app.get('/api/data/get/base/data_sydx_jzsdxsgssydbhqkb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_jzsdxsgssydbhqkb_Array))
    })
    app.get('/api/data/get/base/data_sydx_sydszzkpj', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydx_sydszzkpj_Array))
    })
    // 数据管理-核心数据-地表水水源地模型对象表结构
    app.get('/api/data/get/base/data_sydb_dbssydszpjxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydb_dbssydszpjxxb_Array))
    })
    app.get('/api/data/get/base/data_sydb_dbssyjbsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydb_dbssyjbsx_Array))
    })
    app.get('/api/data/get/base/data_sydb_dbsydlslrbb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydb_dbsydlslrbb_Array))
    })
    app.get('/api/data/get/base/data_sydb_dbsydlslybb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydb_dbsydlslybb_Array))
    })
    app.get('/api/data/get/base/data_sydb_dbsydslxxnbb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sydb_dbsydslxxnbb_Array))
    })
    // 数据管理-核心数据-水功能区模型对象表结构
    app.get('/api/data/get/base/data_sgnq_dbpjbgndpg', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_dbpjbgndpg_Array))
    })
    app.get('/api/data/get/base/data_sgnq_dbpjbgndpj', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_dbpjbgndpj_Array))
    })
    app.get('/api/data/get/base/data_sgnq_dgsgnqdbkhqkb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_dgsgnqdbkhqkb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_hbszpjtjb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_hbszpjtjb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_hddmdxszx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_hddmdxszx_Array))
    })
    app.get('/api/data/get/base/data_sgnq_hddmszdbp', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_hddmszdbp_Array))
    })
    app.get('/api/data/get/base/data_sgnq_ljlyysgnqbhgxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_ljlyysgnqbhgxb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_pjbgsdbpgxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_pjbgsdbpgxxb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_qgsgnqszpjcgb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_qgsgnqszpjcgb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqbgxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqbgxxb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqdbpjbgsjbxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqdbpjbgsjbxxb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqjbjbxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqjbjbxxb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqjbsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqjbsx_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqjznwrlxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqjznwrlxxb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqnwnlfxxx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqnwnlfxxx_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqnwnlhdbgsxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqnwnlhdbgsxxb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqnwnlhdcgxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqnwnlhdcgxxb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqnwnljbxx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqnwnljbxx_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqszdbfxxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqszdbfxxxb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqszdbjjgb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqszdbjjgb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqszdbzkxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqszdbzkxxb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sgnqxppwzlkzxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sgnqxppwzlkzxxb_Array))
    })
    app.get('/api/data/get/base/data_sgnq_sjstszpjt', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_sjstszpjt_Array))
    })
    app.get('/api/data/get/base/data_sgnq_skszpjtjb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.sgnq_skszpjtjb_Array))
    })
    // 数据管理-核心数据-水资源分区模型对象表结构
    app.get('/api/data/get/base/data_szy_fqydkdehgxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_fqydkdehgxb_Array))
    })
    app.get('/api/data/get/base/data_szy_nwnljxppwzlkzf', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_nwnljxppwzlkzf_Array))
    })
    app.get('/api/data/get/base/data_szy_nwnljxppwzlkzj', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_nwnljxppwzlkzj_Array))
    })
    app.get('/api/data/get/base/data_szy_qsxkjbqk', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_qsxkjbqk_Array))
    })
    app.get('/api/data/get/base/data_szy_qsxkjbqkb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_qsxkjbqkb_Array))
    })
    app.get('/api/data/get/base/data_szy_qsxkjdjcqk', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_qsxkjdjcqk_Array))
    })
    app.get('/api/data/get/base/data_szy_qsxkjdjcqkb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_qsxkjdjcqkb_Array))
    })
    app.get('/api/data/get/base/data_szy_sgnqdbkhzbb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_sgnqdbkhzbb_Array))
    })
    app.get('/api/data/get/base/data_szy_sjfqnyjqdbhgx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_sjfqnyjqdbhgx_Array))
    })
    app.get('/api/data/get/base/data_szy_sjfqyejqdbhgx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_sjfqyejqdbhgx_Array))
    })
    app.get('/api/data/get/base/data_szy_sxsjxzqhjszygkb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_sxsjxzqhjszygkb_Array))
    })
    app.get('/api/data/get/base/data_szy_szyfqdxskcltjb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szyfqdxskcltjb_Array))
    })
    app.get('/api/data/get/base/data_szy_szyfqjbsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szyfqjbsx_Array))
    })
    app.get('/api/data/get/base/data_szy_szyfqpjjgb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szyfqpjjgb_Array))
    })
    app.get('/api/data/get/base/data_szy_szyfqqsxktjb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szyfqqsxktjb_Array))
    })
    app.get('/api/data/get/base/data_szy_szyfqyhbgxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szyfqyhbgxb_Array))
    })
    app.get('/api/data/get/base/data_szy_szyfqyskgxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szyfqyskgxb_Array))
    })
    app.get('/api/data/get/base/data_szy_szyfqyxzqhgxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szyfqyxzqhgxb_Array))
    })
    app.get('/api/data/get/base/data_szy_szyfzssyqkb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szyfzssyqkb_Array))
    })
    app.get('/api/data/get/base/data_szy_szyjsfqjbxxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szyjsfqjbxxb_Array))
    })
    app.get('/api/data/get/base/data_szy_szyjsfqyczgxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szyjsfqyczgxb_Array))
    })
    app.get('/api/data/get/base/data_szy_szyqyczgx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szyqyczgx_Array))
    })
    app.get('/api/data/get/base/data_szy_szysjfqybzgxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szysjfqybzgxb_Array))
    })
    app.get('/api/data/get/base/data_szy_szysjfqydxssydgxb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_szysjfqydxssydgxb_Array))
    })
    app.get('/api/data/get/base/data_szy_xzqsgnqdbkhqkb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_xzqsgnqdbkhqkb_Array))
    })
    app.get('/api/data/get/base/data_szy_xzqsgnqfldbkhqkb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_xzqsgnqfldbkhqkb_Array))
    })
    app.get('/api/data/get/base/data_szy_zyjhhbsgnqszd', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.szy_zyjhhbsgnqszd_Array))
    })
    // 数据管理-核心数据-水资源分区模型对象表结构
    app.get('/api/data/get/base/data_lypq_lypqjbsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.lypq_lypqjbsx_Array))
    })
    // 数据管理-核心数据-行政区划模型对象表结构
    app.get('/api/data/get/base/data_xzqh_xzqhjbxx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.xzqh_xzqhjbxx_Array))
    })
    app.get('/api/data/get/base/data_xzqh_bgls', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.xzqh_bgls_Array))
    })
    app.get('/api/data/get/base/data_xzqh_bglsfjxx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.xzqh_bglsfjxx_Array))
    })
    app.get('/api/data/get/base/data_xzqh_xzqhjszygk', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.xzqh_xzqhjszygk_Array))
    })
    app.get('/api/data/get/base/data_xzqh_nzwbzmjqk', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.xzqh_nzwbzmjqk_Array))
    })
    app.get('/api/data/get/base/data_xzqh_nyjxyyl', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.xzqh_nyjxyyl_Array))
    })
    app.get('/api/data/get/base/data_xzqh_nzqclqk', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.xzqh_nzqclqk_Array))
    })
    app.get('/api/data/get/base/data_xzqh_shjjb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.xzqh_shjjb_Array))
    })
    app.get('/api/data/get/base/data_xzqh_ncnyxfp', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.xzqh_ncnyxfp_Array))
    })
    app.get('/api/data/get/base/data_xzqh_csnyxfp', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.xzqh_csnyxfp_Array))
    })
    // 数据管理-核心数据-单位模型对象表结构
    app.get('/api/data/get/base/data_dw_dwjbsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.dw_dwjbsx_Array))
    })
    app.get('/api/data/get/base/data_dw_ffrzzjbxx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.dw_ffrzzjbxx_Array))
    })
    app.get('/api/data/get/base/data_dw_jgjbxx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array. dw_jgjbxx_Array))
    })
    app.get('/api/data/get/base/data_dw_sydwjbxx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.dw_sydwjbxx_Array))
    })
    app.get('/api/data/get/base/data_dw_stjbxx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.dw_stjbxx_Array))
    })
    app.get('/api/data/get/base/data_dw_qyjbxx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.dw_qyjbxx_Array))
    })
    app.get('/api/data/get/base/data_dw_dwscxw', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.dw_dwscxw_Array))
    })
    // 数据管理-核心数据-自然人模型对象表结构
    app.get('/api/data/get/base/data_zrr_zrrjbsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zrr_zrrjbsx_Array))
    })
    app.get('/api/data/get/base/data_zrr_hdcyry', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zrr_hdcyry_Array))
    })
    // 数据管理-核心数据-闸站工程模型对象表结构
    app.get('/api/data/get/base/data_zz_zzgcjbsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.zz_zzgcjbsx_Array))
    })
    // -----------------------------------------------
    app.get('/api/data/get/base/dataLyjb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.lyjbArray))
    })
    app.get('/api/data/get/base/dataLyxzqh', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.lyxzqhArray))
    })
    app.get('/api/data/get/base/dataHpsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.hpsxArray))
    })
    app.get('/api/data/get/base/dataHptz', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.hptzArray))
    })
    app.get('/api/data/get/base/dataHpsj', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.hpsjArray))
    })
    app.get('/api/data/get/base/dataHpxx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.hpxxArray))
    })
    app.get('/api/data/get/base/dataChsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.chsxArray))
    })
    app.get('/api/data/get/base/dataRhsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.rhsxArray))
    })
    app.get('/api/data/get/base/dataHpswmj', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.hpswmjArray))
    })
    app.get('/api/data/get/base/dataHlsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.hlsxArray))
    })
    app.get('/api/data/get/base/dataLyqk', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.lyqkArray))
    })
    app.get('/api/data/get/base/dataHcsmx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.hcsmxArray))
    })
    app.get('/api/data/get/base/dataHlhd', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.hlhdArray))
    })
    app.get('/api/data/get/base/dataHdza', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.hdzaArray))
    })
    app.get('/api/data/get/base/dataHscb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.hscbArray))
    })
    app.get('/api/data/get/base/dataCzsx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.czsxArray))
    })
    app.get('/api/data/get/base/dataHdfh', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.hdfhArray))
    })
    app.get('/api/data/get/base/dataTrtzz', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.trtzzArray))
    })
    app.get('/api/data/get/base/dataHspl', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.hsplArray))
    })
    app.get('/api/data/get/base/dataSwll', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.swllArray))
    })
    app.get('/api/data/get/base/dataDdm', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.ddmArray))
    })
    app.get('/api/data/get/base/dataKhqx', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.khqxArray))
    })
    app.get('/api/data/get/base/dataJsl', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.jslArray))
    })
    app.get('/api/data/get/base/dataJxl', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.jxlArray))
    })
    app.get('/api/data/get/base/dataBb', function(rep, res) {
      var json = util.getJsonFile('./data/datazylx.json')
      var array = Mock.mock(json)
      res.json(util.response(200, array.bbArray))
    })
  }
}
