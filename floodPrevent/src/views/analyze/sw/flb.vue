<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">分流比计算</span>
        <span v-if="show">{{"("+st+":00至"+et+":00"+")"}}</span>
      </div>
      <gr-echarts :option="option" :id="id" :height="height"/>
    </div>
  </div>
</template>
<script>
import search from '@/components/analyze/search/sw-flb/index.vue'
import _echrats from '@/components/common/echarts/index.vue'
export default {
  data() {
    return {
      st: '',
      et: '',
      show: false,
      option: {},
      id: 'flb',
      height: 600
    }
  },
  components: { 'dz-search': search, 'gr-echarts': _echrats },
  created() {
    this.$emit('update:menuName', '分流比计算')
    this.height = document.body.clientHeight - 270
  },
  methods: {
    searchSubmit(data) {
      this.st = data.st
      this.et = data.et
      this.show = true
      this.api.get(this, 'analyze_swdz_page', this.result, data)
    },
    result(data) {
      this.load()
    },
    load() {
      var temData = ['2009/6/12 2:00', '2009/6/12 3:00', '2009/6/12 4:00', '2009/6/12 5:00', '2009/6/12 6:00', '2009/6/12 7:00', '2009/6/12 8:00', '2009/6/12 9:00', '2009/6/12 10:00', '2009/6/12 11:00', '2009/6/12 12:00', '2009/6/12 13:00', '2009/6/12 14:00', '2009/6/12 15:00', '2009/6/12 16:00', '2009/6/12 17:00', '2009/6/12 18:00', '2009/6/12 19:00', '2009/6/12 20:00', '2009/6/12 21:00', '2009/6/12 22:00', '2009/6/12 23:00']
      var color = ['#ff7f50', '#87cefa']
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
          data: ['宜昌', '枝城'],
          top: 40
        },
        grid: [
          {
            left: 50,
            right: 50,
            top: '15%'
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
            name: '流量(m³/s)',
            nameTextStyle: {
              color: 'pink'
            },
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '宜昌',
            type: 'line',
            data: [20, 20, 90, 50, 60, 30, 20, 45, 90, 50, 55, 35, 68, 40, 90, 50, 60, 30, 20, 20, 80, 50, 60, 30, 45, 66]
          },
          {
            name: '枝城',
            type: 'line',
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