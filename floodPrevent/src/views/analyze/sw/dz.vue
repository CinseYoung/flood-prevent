<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">{{value}}雨洪过程</span>
        <span v-if="show">{{"("+st+":00至"+et+":00"+")"}}</span>
      </div>
      <gr-echarts :option="option" :id="id" :height="height"/>
    </div>
  </div>
</template>
<script>
import search from '@/components/analyze/search/sw-dz/index.vue'
import _echrats from '@/components/common/echarts/index.vue'
export default {
  data() {
    return {
      st: '',
      et: '',
      show: false,
      option: {},
      id: 'yhdz',
      value: '',
      height: 600
    }
  },
  components: { 'dz-search': search, 'gr-echarts': _echrats },
  created() {
    this.$emit('update:menuName', '雨洪对照分析')
    this.height = document.body.clientHeight - 215
  },
  methods: {
    searchSubmit(data) {
      this.st = data.st
      this.et = data.et
      this.value = data.value
      this.show = true
      this.api.get(this, 'analyze_swdz_page', this.result, data)
    },
    result(data) {
      console.log(data)
      this.load()
    },
    load() {
      var temData = ['2009/6/12 2:00', '2009/6/12 3:00', '2009/6/12 4:00', '2009/6/12 5:00', '2009/6/12 6:00', '2009/6/12 7:00', '2009/6/12 8:00', '2009/6/12 9:00', '2009/6/12 10:00', '2009/6/12 11:00', '2009/6/12 12:00', '2009/6/12 13:00', '2009/6/12 14:00', '2009/6/12 15:00', '2009/6/12 16:00', '2009/6/12 17:00', '2009/6/12 18:00', '2009/6/12 19:00', '2009/6/12 20:00', '2009/6/12 21:00', '2009/6/12 22:00', '2009/6/12 23:00']
      var color = ['#ff7f50', '#87cefa', '#da70d6', '#32cd32']
      var option = {
        color,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        legend: {
          data: ['实际雨量', '净雨量', '实际流量', '计算流量'],
          x: 'left'
        },
        axisPointer: {
          link: { xAxisIndex: 'all' }
        },
        grid: [
          {
            left: 50,
            right: 50,
            height: '26%'
          },
          {
            left: 50,
            right: 50,
            height: '47%',
            top: '40%'
          }
        ],
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            xAxisIndex: [0, 1]
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100,
            xAxisIndex: [0, 1]
          }
        ],
        xAxis: [
          {
            // show: false,//隐藏了x轴
            type: 'category',
            gridIndex: 0, // 对应前面grid的索引位置（第一个）
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: true
            },
            axisPointer: {
              type: 'shadow'
            },
            data: temData
          },
          {
            type: 'category',
            gridIndex: 1, // 对应前面grid的索引位置（第二个）
            splitLine: {
              show: true
            },
            axisTick: {
              alignWithLabel: true
            },
            data: temData
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '降\n雨\n量',
            gridIndex: 0,
            inverse: true,
            nameLocation: 'middle',
            nameTextStyle: {
              color: 'blue',
              padding: 4
            },
            nameGap: 25,
            nameRotate: 0,
            axisLabel: {
              formatter: '{value}'

            }
          },
          {
            type: 'value',
            name: '流\n量',
            gridIndex: 1,
            nameLocation: 'middle',
            position: 'left',
            nameTextStyle: {
              color: 'blue'
            },
            nameGap: 25,
            nameRotate: 0,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '实际雨量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 15, 25]
          },
          {
            name: '净雨量',
            type: 'bar',
            barGap: '-100%',
            data: [7, 15, 36, 10, 10, 20, 5, 20, 36, 10, 5, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 20, 20, 20, 25]
          },
          {
            name: '实际流量',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [20, 20, 90, 50, 60, 30, 20, 45, 90, 50, 55, 35, 68, 40, 90, 50, 60, 30, 20, 20, 80, 50, 60, 30, 45, 66]
          },
          {
            name: '计算流量',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [10, 15, 70, 45, 60, 60, 50, 20, 70, 38, 55, 35, 68, 40, 90, 45, 40, 30, 30, 20, 70, 52, 70, 30, 45, 66]
          }
        ]
      }
      this.option = option
    }
  }
}
</script>
<style >
   @import "../../../style/css/general-content.css";;
</style>