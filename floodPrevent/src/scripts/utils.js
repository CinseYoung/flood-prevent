const defaultDialogOption = { width: '20%', title: '提示', saveBtn: '保存' }
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
const utilsFunction = {
  // 注销登录状态
  destroy: _this => {
    _this.api.get(_this, 'sys_destroy', () => {
      localStorage.removeItem('kpst-token')
      localStorage.removeItem('kpst-username')
      utilsFunction.push(_this, '/login')
    })
  },
  // 前端写入登录状态
  register: (_this, data) => {
    localStorage.setItem('kpst-token', data.key)
    localStorage.setItem('kpst-username', data.yhzh)
    utilsFunction.push(_this, '/')
  },
  setImgSrc: url => {
    const imgSrc =
      url !== undefined || url !== '' ? url : 'assets/home/icon.png'
    return require('@/' + imgSrc)
  },
  push: (_this, url) => {
    _this.$router.push(url)
  },
  clickUrl(_this, data) {
    if (data.tp === '1') {
      utilsFunction.push(_this, data.url)
      return
    }
    if (data.tp === '2') {
      var a = document.getElementById('main-href')
      a.setAttribute('href', data.url)
      a.click()
      a.setAttribute('href', '#')
      return
    }
  },
  getDialogOption: option => {
    const json = option.replace(/'/g, '"')
    return Object.assign({}, defaultDialogOption, JSON.parse(json))
  },
  getValue: (_this, filterFields) => {
    var list = _this.model
    var result = {}
    if (filterFields === undefined) filterFields = []
    for (var key in list) {
      if (filterFields.indexOf(key) > -1) {
        continue
      }
      result[key] = list[key]
    }
    return result
  },
  josnToParam: data => {
    if (data === undefined) {
      return ''
    }
    var params = ''
    for (var key in data) {
      if (data[key] === null || data[key].length === 0) {
        continue
      }
      params += '&' + key + '=' + encodeURIComponent(data[key])
    }
    return params.substring(1)
  },
  excel() {
    // 设置当前日期
    const time = new Date()
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const day = time.getDate()
    const name = year + '' + month + '' + day
    // console.log(name)
    /* generate workbook object from table */
    //  .table要导出的是哪一个表格
    var wb = XLSX.utils.table_to_book(document.querySelector('.el-table'))
    /* get binary string as output */
    var wbout = XLSX.write(wb, {
      bookType: 'xlsx',
      bookSST: true,
      type: 'array'
    })
    try {
      //  name+'.xlsx'表示导出的excel表格名字
      FileSaver.saveAs(
        new Blob([wbout], { type: 'application/octet-stream' }),
        name + '.xlsx'
      )
    } catch (e) {
      if (typeof console !== 'undefined') console.log(e, wbout)
    }
    return wbout
  },
  getJSON(data, arrKey, key, val) {
    var item = {}
    for (var k in data) {
      var d = data[k]
      if (d[arrKey] && utilsFunction.boolJSON(d, arrKey, key, val)) {
        item = d
        break
      }
      if (d[key] === val) {
        item = d
        break
      }
    }
    return item
  },
  boolJSON(data, arrKey, key, val) {
    if (data[arrKey] === undefined) return false
    var items = data[arrKey]
    for (var k in items) {
      var d = items[k]
      var b = utilsFunction.boolJSON(d)
      if (b) {
        return true
      }
      if (d[key] === val) {
        return true
      }
    }
  }, excelImport(obj, callback) {
    this.file = obj
    var rABS = false
    var f = this.file
    var reader = new FileReader()
    FileReader.prototype.readAsBinaryString = function(f) {
      var binary = ''
      var rABS = false
      var wb
      var outdata
      var reader = new FileReader()
      reader.onload = function(e) {
        var bytes = new Uint8Array(reader.result)
        var length = bytes.byteLength
        for (var i = 0; i < length; i++) {
          binary += String.fromCharCode(bytes[i])
        }
        var XLSX = require('xlsx')
        if (rABS) {
          wb = XLSX.read(btoa(fixdata(binary)), {
            type: 'base64'
          })
        } else {
          wb = XLSX.read(binary, {
            type: 'binary'
          })
        }
        outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
        this.da = [...outdata]
        callback(this.da)
      }
      reader.readAsArrayBuffer(f)
    }
    if (rABS) {
      reader.readAsArrayBuffer(f)
    } else {
      reader.readAsBinaryString(f)
    }
  }
}

export default utilsFunction
