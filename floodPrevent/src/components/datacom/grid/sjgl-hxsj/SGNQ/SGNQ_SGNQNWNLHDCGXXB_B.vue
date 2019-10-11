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
        { lablename: '规划水平年', propname: 'GHSPN' },
        { lablename: '水功能区水体类型', propname: 'SGNQSTLX' },
        { lablename: '成果来源', propname: 'CGLY' },
        { lablename: '计算方法', propname: 'JSFF' },
        { lablename: 'COD纳污量', propname: 'CODNWL' },
        { lablename: 'COD水质目标', propname: 'CODSZMB' },
        { lablename: 'COD综合衰减系数', propname: 'CODZHSJXS' },
        { lablename: '氨氮纳污量', propname: 'ADNWL' },
        { lablename: '氨氮水质目标', propname: 'ADSZMB' },
        { lablename: '氨氮综合衰减系数', propname: 'ADZHSJXS' },
        { lablename: 'TN纳污量', propname: 'TNNWL' },
        { lablename: 'TN水质目标', propname: 'TNSZMB' },
        { lablename: 'TN综合衰减系数', propname: 'TNZHSJXS' },
        { lablename: 'TP纳污量', propname: 'TPNWL' },
        { lablename: 'TP水质目标', propname: 'TPSZMB' },
        { lablename: 'TP综合衰减系数', propname: 'TPZHSJXS' },
        { lablename: '其他指标名称', propname: 'QTZBMC' },
        { lablename: '其他指标水质目标', propname: 'QTZBSZMB' },
        { lablename: '其他指标综合衰减系数', propname: 'QTZBZIISJXS' },
        { lablename: '设计水量', propname: 'SJSL' },
        { lablename: '设计流量', propname: 'SJLL' },
        { lablename: '设计水量单位说明', propname: 'SJSLDWSM' },
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
      this.api.get(this, 'data_sjgl_sgnq_sgnqnwnlhdcgxxb', this.result, param)
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