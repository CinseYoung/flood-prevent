<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" @changeGrid="changeGrid" ref="searchData"/>
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">{{gridData}}</span>
        <span v-if="show">{{"("+time+":00数据"+")"}}</span>
      </div>
      <component :is="change" :changeGrid="gridData" ref="dataGrid" />
    </div>
  </div>
</template>
<script>
import search from '@/components/analyze/search/hd-zyzdr/index.vue'
import datagrid1 from '@/components/analyze/grid/hd-zyzdr/zyzdr-dr/index.vue'
import datagrid2 from '@/components/analyze/grid/hd-zyzdr/zyzdr-sq/index.vue'
export default {
  data() {
    return {
      time: '',
      show: false,
      gridData: '重要站当日水情',
      change: 'data-griddr',
      data: null
    }
  },
  components: { 'dz-search': search, 'data-griddr': datagrid1, 'data-gridsq': datagrid2 },
  created() {
    this.$emit('update:menuName', '重要站当日水情')
  },
  methods: {
    searchSubmit(data) {
      this.data = data
      this.time = data.time
      this.show = true
    },
    getOption() {
      return this.data
    },
    changeGrid(val, data) {
      // props传到子组件时有时间，调用子组件方法时，props的值还未发生改变，这就导致后续判断出了问题，数据无法获取过来
      this.gridData = val
      this.change = val === '重要站当日水情' ? 'data-griddr' : 'data-gridsq'
      this.data = data
      this.time = this.data.time
      this.show = true
    }
  }
}
</script>
<style >
   @import "../../../style/css/general-content.css";;
</style>