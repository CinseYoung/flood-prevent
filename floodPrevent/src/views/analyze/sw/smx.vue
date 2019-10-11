<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" :cities="cities" :options="options" :playTime.sync="playTime"/>
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">水面线</span>
        <span v-if="show">{{"("+st+":00至"+et+":00"+")"}}</span>
      </div>
      <gr-echarts :option="option" :id="id" :height="height"/>
      <data-grid :echartsHeight="height" :tableData="tableData"/>
    </div>
  </div>
</template>
<script>
import search from '@/components/analyze/search/sw-smx/index.vue'
import _echrats from '@/components/common/echarts/index.vue'
import datagrid from '@/components/analyze/grid/sw-smx/index.vue'
export default {
  data() {
    return {
      st: '',
      et: '',
      show: false,
      option: {},
      id: 'flb',
      height: 600,
      playTime: 500,
      cities: ['汉口', '黄石港', '码头镇', '大通'],
      options: [{
        value: '汉口至大通',
        label: '汉口至大通'
      }],
      tableData: []
    }
  },
  components: { 'dz-search': search, 'gr-echarts': _echrats, 'data-grid': datagrid },
  created() {
    this.$emit('update:menuName', '水面线展示')
    this.height = document.body.clientHeight - 450
  },
  watch: {
    playTime(val) {
      this.load()
    }
  },
  methods: {
    searchSubmit(data) {
      this.st = data.st
      this.et = data.et
      this.show = true
      this.api.get(this, 'analyze_swsmx_page', this.result, data)
    },
    result(data) {
      this.tableData = data
      this.load()
    },
    load() {
      var temData = ['2009/6/12 2:00', '2009/6/12 3:00', '2009/6/12 4:00', '2009/6/12 5:00', '2009/6/12 6:00', '2009/6/12 7:00', '2009/6/12 8:00', '2009/6/12 9:00', '2009/6/12 10:00', '2009/6/12 11:00']
      var color = ['#ff7f50', '#87cefa', '#ca50d5']
      var option = {
        baseOption: {
          color,
          timeline: {
            axisType: 'category',
            autoPlay: false,
            playInterval: this.playTime,
            data: temData
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            data: ['水位线', '警戒水位', '保证水位'],
            selected: {
              '保证水位': false
            }
          },
          grid: {
            bottom: '25%'
          },
          xAxis: [
            {
              type: 'category',
              splitLine: {
                show: true
              },
              data: this.cities
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '水位(m)',
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
              name: '水位线',
              type: 'line'
            },
            {
              name: '警戒水位',
              type: 'line',
              label: {
                show: true,
                position: 'inside'
              }
            },
            {
              name: '保证水位',
              type: 'line',
              label: {
                show: true
              }
            }
          ]
        },
        options: [
          {
            series: [
              { data: [21, 18, 16, 13] },
              { data: [27, 22, 18, 15] },
              { data: [29, 25, 22, 18] }
            ]
          },
          {
            series: [
              { data: [21, 18, 16, 13] },
              { data: [27, 22, 18, 15] },
              { data: [29, 25, 22, 18] }
            ]
          },
          {
            series: [
              { data: [21, 18, 16, 13] },
              { data: [27, 22, 18, 15] },
              { data: [29, 25, 22, 18] }
            ]
          },
          {
            series: [
              { data: [21, 18, 16, 13] },
              { data: [27, 22, 18, 15] },
              { data: [29, 25, 22, 18] }
            ]
          },
          {
            series: [
              { data: [21, 18, 16, 13] },
              { data: [27, 22, 18, 15] },
              { data: [29, 25, 22, 18] }
            ]
          },
          {
            series: [
              { data: [21, 18, 16, 13] },
              { data: [27, 22, 18, 15] },
              { data: [29, 25, 22, 18] }
            ]
          },
          {
            series: [
              { data: [21, 18, 16, 13] },
              { data: [27, 22, 18, 15] },
              { data: [29, 25, 22, 18] }
            ]
          },
          {
            series: [
              { data: [21, 18, 16, 13] },
              { data: [27, 22, 18, 15] },
              { data: [29, 25, 22, 18] }
            ]
          },
          {
            series: [
              { data: [21, 14, 10, 5] },
              { data: [27, 20, 15, 10] },
              { data: [29, 25, 22, 18] }
            ]
          },
          {
            series: [
              { data: [21, 10, 8, 5] },
              { data: [27, 18, 14, 8] },
              { data: [29, 22, 18, 15] }
            ]
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