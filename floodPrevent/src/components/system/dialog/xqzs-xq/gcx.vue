<template>
  <div style="height:100%">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="echarts-grid">
      <div style="width:700px">
        <gr-echarts :option="option" :id="id" :height="height"/>
      </div>
      <data-grid ref="dataGrid" />
    </div>
  </div>
</template>
<script>
import _echrats from '@/components/common/echarts/index.vue'
import search from '@/components/system/dialog/xqzs-xq/gcx-search/index.vue'
import datagrid from '@/components/system/dialog/xqzs-xq/gcx-grid/index.vue'
export default {
  data() {
    return {
      option: {},
      id: 'xqgcx',
      height: 400
    }
  },
  props: {
    data: { type: Object, default: {}}
  },
  components: { 'dz-search': search, 'gr-echarts': _echrats, 'data-grid': datagrid },
  mounted() {
    console.log(this.data)
    this.load()
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    load() {
      var temData = ['2009/6/12 2:00', '2009/6/12 3:00', '2009/6/12 4:00', '2009/6/12 5:00', '2009/6/12 6:00', '2009/6/12 7:00', '2009/6/12 8:00', '2009/6/12 9:00', '2009/6/12 10:00', '2009/6/12 11:00', '2009/6/12 12:00', '2009/6/12 13:00', '2009/6/12 14:00', '2009/6/12 15:00', '2009/6/12 16:00', '2009/6/12 17:00', '2009/6/12 18:00', '2009/6/12 19:00', '2009/6/12 20:00', '2009/6/12 21:00', '2009/6/12 22:00', '2009/6/12 23:00']
      var color = ['#ff7f50', '#87cefa', '#675bba']
      var option = {
        color,
        title: {
          text: '合成流量过程对比',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        legend: {
          data: ['降水量', '水位', '流量'],
          top: 25
        },
        grid: [
          {
            top: '15%',
            right: '20%'
          }
        ],
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100
          }
        ],
        xAxis: [
          {
            type: 'category',
            splitLine: {
              show: true
            },
            boundaryGap: false,
            axisTick: {
              alignWithLabel: true
            },
            data: temData
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '降水量(mm)',
            nameTextStyle: {
              color: 'pink'
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '水位(m)',
            position: 'right',
            axisLine: {
              lineStyle: {
                color: color[0]
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            name: '流量(m³/s)',
            position: 'right',
            offset: 60,
            axisLine: {
              lineStyle: {
                color: color[1]
              }
            },
            axisLabel: {
              formatter: '{value} ml'
            }
          }
        ],
        series: [
          {
            name: '降水量',
            type: 'line',
            data: [20, 20, 90, 50, 60, 30, 20, 45, 90, 50, 55, 35, 68, 40, 90, 50, 60, 30, 20, 20, 80, 50, 60, 30, 45, 66]
          },
          {
            name: '水位',
            type: 'line',
            yAxisIndex: 1,
            data: [10, 15, 70, 45, 60, 60, 50, 20, 70, 38, 55, 35, 68, 40, 90, 45, 40, 30, 30, 20, 70, 52, 70, 30, 45, 66]
          },
          {
            name: '流量',
            type: 'line',
            yAxisIndex: 2,
            data: [1500, 1600, 1538, 1498, 1456, 1587, 1256, 1100, 1156, 1265, 1241, 1364, 1311, 1255, 1423, 1233, 1166, 1366, 1388, 1490, 1547, 1644, 1620, 1520, 1547, 1588]
          }
        ]
      }
      this.option = option
    },
    submitForm() {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        // this.login()
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>
<style lang="scss">
  .echarts-grid{
    display: flex;
  }
</style>