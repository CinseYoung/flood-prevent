import _echarts1 from '@/components/common/echarts/index.vue'
import _echarts2 from '@/components/common/echarts/index.vue'
import _echarts3 from '@/components/common/echarts/index.vue'
import _echarts4 from '@/components/common/echarts/index.vue'
export default {
  components: { 'echarts1': _echarts1, 'echarts2': _echarts2, 'echarts3': _echarts3, 'echarts4': _echarts4 },
  created() {
    this.$emit('update:menuName', '电子档案统计')
  },
  data() {
    return {
      dialogVisible: false, // 弹窗显示
      id: 1000,
      activeName: 'first',
      currentDate: new Date(),
      value1: '',
      isEdit: false,
      showToday: false,
      showWeek: false,
      showYear: false,
      showMonth: false,
      lookCount: 1,
      echartsId1: 'echartsId1',
      echartsId2: 'echartsId2',
      echartsId3: 'echartsId3',
      picList: [],
      rankingList: [],
      recordtype: 0,
      today_week_month_year: 'year',
      colorList: ['#FE0000', '#F29700', '#02B0ED', '#55E87D', '#FFE200', '#F29701', '#F29702', '#F29704', '#F29705', '#F29707', '#F2974', '#F2978', '#F29712', '#F29724', '#F29735', '#F29747', '#F2954', '#F2968'],
      documents: [],
      bar: {
        color: ['#3398DB'],
        grid: {
          left: '0%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        title: {
          text: '',
          x: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['', '']
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            max: 200,
            min: 0,
            splitNumber: 1
          }
        ],
        series: [
          {
            name: '上传数量',
            type: 'bar',
            barWidth: '60%',
            data: []
          }
        ]
      },
      circle: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: '500px',
          y: '20%',
          itemWidth: 10, // 设置图例图形的宽
          itemHeight: 10, // 设置图例图形的高
          icon: 'circle',
          data: []
        },
        series: [
          {
            name: '类别占比',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: []
          }
        ]
      },
      circle2: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: '500px',
          y: '20%',
          itemWidth: 10, // 设置图例图形的宽
          itemHeight: 10, // 设置图例图形的高
          icon: 'circle',
          data: []
        },
        series: [
          {
            name: '纸质档案占比',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: []
          }
        ]
      },
      loadValue: [
        { value: 36, name: '类别一', itemStyle: { normal: { color: '#679df7' }}},
        { value: 20, name: '类别二', itemStyle: { normal: { color: '#73c5a7' }}},
        { value: 16, name: '类别三', itemStyle: { normal: { color: '#55E87D' }}},
        { value: 10, name: '类别四', itemStyle: { normal: { color: '#FFE200' }}},
        { value: 9, name: '类别五', itemStyle: { normal: { color: '#fe0000' }}},
        { value: 9, name: '其他', itemStyle: { normal: { color: '#826eee' }}}
      ]
    }
  },
  computed: {},
  mounted() {
    this.initTable()
    this.recordCountYear()
    this.recordRankingYear()
    // 默认是本年显示
    this.showYear = true
    this.electronicRatio()
    this.paperRatio()
    this.load()
  },
  methods: {
    load() {
      var picList = [
        {
          text: '档案室一',
          per: '82%',
          opt: {
            tooltip: {
              show: false,
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              show: false,
              orient: 'vertical',
              x: 'left',
              data: ['1', '2']
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '80%'],
                hoverAnimation: false,
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: false,
                    textStyle: {
                      fontSize: '12'
                      // fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  { value: 82, name: '1', itemStyle: { normal: { color: '#4abfec' }}},
                  { value: 18, name: '2', itemStyle: { normal: { color: '#ade3e4' }}}
                ]
              }
            ]
          }
        },
        {
          text: '档案室二',
          per: '78%',
          opt: {
            tooltip: {
              show: false,
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              show: false,
              orient: 'vertical',
              x: 'left',
              data: ['1', '2']
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '80%'],
                hoverAnimation: false,
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: false,
                    textStyle: {
                      fontSize: '12'
                      // fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  { value: 78, name: '1', itemStyle: { normal: { color: '#0b7ce8' }}},
                  { value: 22, name: '2', itemStyle: { normal: { color: '#ade3e4' }}}
                ]
              }
            ]
          }
        },
        {
          text: '档案室三',
          per: '45%',
          opt: {
            tooltip: {
              show: false,
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              show: false,
              orient: 'vertical',
              x: 'left',
              data: ['1', '2']
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '80%'],
                hoverAnimation: false,
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: false,
                    textStyle: {
                      fontSize: '12'
                      // fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  { value: 45, name: '1', itemStyle: { normal: { color: '#4abfec' }}},
                  { value: 55, name: '2', itemStyle: { normal: { color: '#ade3e4' }}}
                ]
              }
            ]
          }
        }, {
          text: '档案室四',
          per: '30%',
          opt: {
            tooltip: {
              show: false,
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              show: false,
              orient: 'vertical',
              x: 'left',
              data: ['1', '2']
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '80%'],
                hoverAnimation: false,
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: false,
                    textStyle: {
                      fontSize: '12'
                      // fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  { value: 30, name: '1', itemStyle: { normal: { color: '#4abfec' }}},
                  { value: 70, name: '2', itemStyle: { normal: { color: '#ade3e4' }}}
                ]
              }
            ]
          }
        },
        {
          text: '档案室五',
          per: '30%',
          opt: {
            tooltip: {
              show: false,
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              show: false,
              orient: 'vertical',
              x: 'left',
              data: ['1', '2']
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '80%'],
                hoverAnimation: false,
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: false,
                    textStyle: {
                      fontSize: '12'
                      // fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: [
                  { value: 30, name: '1', itemStyle: { normal: { color: '#4abfec' }}},
                  { value: 70, name: '2', itemStyle: { normal: { color: '#ade3e4' }}}
                ]
              }
            ]
          }
        }
      ]
      this.picList = picList
    },
    initTable: function() {
      // 下载量
      var me = this
      this.api.get(this, 'record_statistics_count', (data) => {
        // console.log(data)
        me.documents.push({ text: '文档被访问次数', num: data.lookCount, color: 'rgba(97, 168, 235, 0.87)' })
        me.documents.push({ text: '文档下载次数', num: data.downloadCount, color: '#f58a8a' })
        me.documents.push({ text: '电子文档数', num: data.electronic, color: '#46be8a' })
        me.documents.push({ text: '纸质档案数', num: data.paper, color: '#80bd3d' })
      }, {})
    },
    electronicRatio: function(tabName) {
      // 电子档案类别占比
      var me = this
      var params = { recordtype: me.recordtype }
      this.api.get(this, 'record_statistics_electronic', (res) => {
        var arr = res
        for (var i = 0; i < arr.length; i++) {
          // console.log(arr[i])
          me.circle.legend.data.push(arr[i].type_name)
          me.circle.series[0].data.push({ value: arr[i].countNum, name: arr[i].type_name, itemStyle: { normal: { color: me.colorList[i] == null ? '#FFE200' : me.colorList[i] }}})
        }
      }, params)
    },
    paperRatio: function(tabName) {
      // 纸张档案类别占比
      var me = this
      var params = { recordtype: me.recordtype }
      this.api.get(this, 'record_statistics_paper', (res) => {
        var arr = res
        for (var i = 0; i < arr.length; i++) {
          // console.log(arr[i])
          me.circle2.legend.data.push(arr[i].type_name)
          me.circle2.series[0].data.push({ value: arr[i].perc, name: arr[i].type_name, itemStyle: { normal: { color: me.colorList[i] == null ? '#FFE200' : me.colorList[i] }}})
        }
      }, params)
    },
    recordCountYear: function(tabName) {
      // 当年文档上传量
      var me = this
      var params = { recordtype: me.recordtype }
      this.api.get(this, 'record_count_year', (res) => {
        var arr = res
        for (var i = 0; i < arr.length; i++) {
          // console.log(arr[i])
          me.bar.xAxis[0].data.push(arr[i].month)
          me.bar.series[0].data.push(arr[i].sum)
          me.bar.test = 1
        }
      }, params)
    },
    recordCountWeek: function(tabName) {
      // 当周的文档上传量
      var me = this
      var params = { recordtype: me.recordtype }
      this.api.get(this, 'record_count_week', (res) => {
        var arr = res
        for (var i = 0; i < arr.length; i++) {
          // console.log(arr[i])
          me.bar.xAxis[0].data.push(arr[i].days)
          me.bar.series[0].data.push(arr[i].sum)
          me.bar.test = 1
        }
      }, params)
    },
    recordCountMonth: function(tabName) {
      var me
      if (tabName == null) { me = this }
      var params = { recordtype: me.recordtype }
      this.api.get(this, 'record_count_month', (res) => {
        var arr = res
        for (var i = 0; i < arr.length; i++) {
          // console.log(arr[i])
          me.bar.xAxis[0].data.push(arr[i].days)
          me.bar.series[0].data.push(arr[i].sum)
          me.bar.test = 1
        }
      }, params)
    },
    recordCountDay: function(tabName) {
      debugger
      // 当日文档上传量
      var me = this
      var params = { recordtype: me.recordtype }
      this.api.get(this, 'record_count_day', (res) => {
        var arr = res
        if (arr) {
          me.bar.xAxis[0].data.push(arr.day)
          me.bar.series[0].data.push(arr.sum)
          me.bar.test = 1
        }
      }, params)
    },
    recordRankingYear: function(tabName) {
      if (tabName == null) {
        tabName = 0
      }
      // 文档类型排名
      var me = this
      var params = { recordtype: me.recordtype }
      this.api.get(this, 'record_ranking_year', (res) => {
        var arr = res
        for (var i = 0; i < arr.length; i++) {
          // console.log(arr[i])
          me.rankingList.push(arr[i].type_name)
        }
      }, params)
    },
    preCard: function() {
      this.picList.push(this.picList[0])
      this.picList.splice(0, 1)
    },
    nextCard: function() {
      const index = this.picList.length - 1
      const item = this.picList[index]
      this.picList.splice(index, 1)
      this.picList.unshift(item)
    },
    selectDate: function(date) {
      this.showToday = false
      this.showWeek = false
      this.showMonth = false
      this.showYear = false
      var me = this
      me.bar.xAxis[0].data = []
      me.bar.series[0].data = []
      if (date === 'today') {
        this.showToday = true
        this.today_week_month_year = 'today'
        this.recordCountDay()
      } else if (date === 'week') {
        this.showWeek = true
        this.today_week_month_year = 'week'
        this.recordCountWeek()
      } else if (date === 'month') {
        this.showMonth = true
        this.today_week_month_year = 'month'
        this.recordCountMonth()
      } else {
        this.showYear = true
        this.today_week_month_year = 'year'
        this.recordCountYear()
      }
    },
    // 图表绘制
    createChat: function() {
      // 基于准备好的dom，初始化echarts实例
      // 使用刚指定的配置项和数据显示图表。
      // eslint-disable-next-line no-undef
      myChart.setOption(option)
      window.onload = function() {
        var topbtn = document.getElementById('btn')
        // eslint-disable-next-line no-unused-vars
        var timer = null
        topbtn.onclick = function() {
          timer = setInterval(function() {
            // var backtop = document.body.scto
          })
        }
      }
    },
    handleClick(tab, event) {
      // // console.log(tab);
      var me = this
      me.bar.xAxis[0].data = []
      me.bar.series[0].data = []
      if (tab.name === 'second') {
        me.recordtype = 1
      } else {
        me.recordtype = 0
      }
      var tm = me.today_week_month_year
      if (tm === 'today') {
        this.recordCountDay()
      } else if (tm === 'week') {
        this.recordCountWeek()
      } else if (tm === 'month') {
        this.recordCountMonth()
      } else {
        this.recordCountYear()
      }
    },
    select: function(m) {
      // console.log(m)
    },
    add: function() {
      this.dialogVisible = true
    },
    edit: function() {
      this.isEdit = true
      this.dialogVisible = true
    },
    del: function() {
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    },
    handleCheckChange(data, checked, indeterminate) {
      // console.log(checked)
    },
    handleNodeClick(data) {
      // console.log(data)
    },
    append(data) {
      const newChild = { id: data.id++, label: data.label + '-' + data.id++, children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },
    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    }
  },
  filters: {
    formatterStatus(value) {
      if (value === 0) {
        return '启用'
      } else {
        return '停用'
      }
    },
    formatterStatusForDoc(value) {
      if (value === 0) {
        return '完好'
      } else {
        return '损坏'
      }
    }
  }
}
