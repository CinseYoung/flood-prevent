<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      stripe
      border
      style="width:100%"
      :height="height"
    >
      <el-table-column
        type="index"
        label="序号"
        width="50">
      </el-table-column>
      <el-table-column v-for="(item, ind) of table_header" width="140" :key="ind" :show-overflow-tooltip="true" :prop="item.propname" :label="item.lablename"></el-table-column>
    </el-table>
    <el-pagination
      style=" margin: 10px 0;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[15, 30, 50]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      table_header: [
        { lablename: 'GUID', propname: 'GUID' },
        { lablename: '水功能区对象ID', propname: 'SGNQDXID' },
        { lablename: '基准年年份', propname: 'JZNNF' },
        { lablename: '棊准年汛期水质类型', propname: 'JZNXQSZLX' },
        { lablename: '基准年非汛期水质类型', propname: 'JZNFXQSZLX' },
        { lablename: '基准年全年水质类型', propname: 'JZNQNSZLX' },
        { lablename: '基准年达标评价', propname: 'JZNDBPJ' },
        { lablename: '基准年主要超标因子', propname: 'JZNZYCBYZ' },
        { lablename: '2015年是否要求达标', propname: 'SFYQDB2015' },
        { lablename: '2020年是否要求达标', propname: 'SFYQDB2020' },
        { lablename: '2030年是否要求达标', propname: 'SFYQDB2030' },
        { lablename: '目标达标年', propname: 'MBDBN' },
        { lablename: '双指标全年水质类型', propname: 'SZBQNSZLX' },
        { lablename: '双指标达标评价', propname: 'SZBDBPJ' },
        { lablename: '双指标主要超标因子', propname: 'SZBZYCBYZ' },
        { lablename: '时间戳', propname: 'SJC' },
        { lablename: '创建时间', propname: 'CJSJ' },
        { lablename: '最后更新时间', propname: 'ZHGXSJ' },
        { lablename: '数据来源', propname: 'SJLY' },
        { lablename: '备注', propname: 'BZ' }
      ],
      currentPage: 1,
      pagePize: 15,
      tableData: [],
      height: 500,
      total: 0,
      canshu: {}
    }
  },
  created() {
    this.height = document.body.clientHeight - 267
  },
  methods: {
    load(param) {
      this.api.get(this, 'data_sjgl_sgnq_sgnqszdbfxxxb', this.result, param)
    },
    result(data) {
      this.total = data.length
      this.tableData = data
    },
    handleSizeChange(val) {
      this.canshu.pagesize = val
      this.load(this.canshu)
    },
    handleCurrentChange(val) {
      this.canshu.page = val
      this.load(this.canshu)
    },
    searchSubmit(data) {
      if (data === undefined) data = {}
      data.pagesize = this.pagePize
      data.page = this.currentPage
      this.canshu = data
      this.load(data)
    }
  }
}

</script>

<style scoped>
@import "../css/basic.css";
</style>