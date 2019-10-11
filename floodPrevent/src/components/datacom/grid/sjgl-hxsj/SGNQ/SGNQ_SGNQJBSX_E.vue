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
        { lablename: '水电站对象ID', propname: 'DXID' },
        { lablename: '测站对象ID', propname: 'CZ_DXID' },
        { lablename: '流域对象ID', propname: 'LY_DXID' },
        { lablename: '河流对象ID', propname: 'HL_DX1D' },
        { lablename: '水闸对象1D', propname: 'SZ_DXID' },
        { lablename: '橡胶坝对象ID', propname: 'XJB_DXID' },
        { lablename: '水土保持区划对象ID', propname: 'STB_DXID' },
        { lablename: '水功能区名称', propname: 'SGNQMC' },
        { lablename: '水功能区功能排序', propname: 'SGNQGNPX' },
        { lablename: '水功能区起始断面', propname: 'SGNQQSDM' },
        { lablename: '水功能区终止断面', propname: 'SGNQZZDM' },
        { lablename: '水功能区面积', propname: 'SGNQMJ' },
        { lablename: '水功能区长度', propname: 'SGNQZD' },
        { lablename: '水功能区最低水位', propname: 'SGNQZDSW' },
        { lablename: '水功能区水质目标', propname: 'SGNQSZMB' },
        { lablename: '监控级别', propname: 'JKJB' },
        { lablename: '状态', propname: 'ZT' },
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
      this.api.get(this, 'data_sjgl_sgnq_sgnqjbsx', this.result, param)
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