<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" @changeGrid="changeGrid"/>
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">{{gridData}}</span>
        <span v-if="show">{{"("+time+":00数据"+")"}}</span>
      </div>
      <component :is="change" :changeGrid="gridData" ref="dataGrid"></component>
    </div>
  </div>
</template>
<script>
import search from '@/components/analyze/search/sk-sksq/index.vue'
import datagrid1 from '@/components/analyze/grid/sk-sksq/sksq-top/index.vue'
import datagrid2 from '@/components/analyze/grid/sk-sksq/sksq-down/index.vue'
import datagrid3 from '@/components/analyze/grid/sk-sksq/sksq-mainsk/index.vue'
import datagrid4 from '@/components/analyze/grid/sk-sksq/sksq-skq/index.vue'
import datagrid5 from '@/components/analyze/grid/sk-sksq/sksq-station/index.vue'
export default {
  data() {
    return {
      time: '',
      show: false,
      gridData: '上游供蓄',
      change: 'data-gridtop'
    }
  },
  components: { 'dz-search': search, 'data-gridtop': datagrid1, 'data-griddown': datagrid2, 'data-gridmainsk': datagrid3, 'data-gridskq': datagrid4, 'data-gridstation': datagrid5 },
  created() {
    this.$emit('update:menuName', '水库水情表')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
      this.time = data.time
      this.show = true
    },
    changeGrid(val, data) {
      // props传到子组件时有时间，调用子组件方法时，props的值还未发生改变，这就导致后续判断出了问题，数据无法获取过来
      this.gridData = val
      if (val === '上游供蓄') {
        this.change = 'data-gridtop'
      } else if (val === '中下游供蓄') {
        this.change = 'data-griddown'
      } else if (val === '主要水库表') {
        this.change = 'data-gridmainsk'
      } else if (val === '水库群供蓄') {
        this.change = 'data-gridskq'
      } else {
        this.change = 'data-gridstation'
      }
      this.$nextTick(() => {
        this.$refs.dataGrid.changeRadio(data)
      })
    }
  }
}
</script>
<style >
   @import "../../../style/css/general-content.css";;
</style>