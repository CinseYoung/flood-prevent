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
        { lablename: '评价方法', propname: 'PJFF' },
        { lablename: '评价时段', propname: 'PJSD' },
        { lablename: '规划个数', propname: 'GHGS' },
        { lablename: '评价个数', propname: 'PJGS' },
        { lablename: '达标个数', propname: 'DBGS' },
        { lablename: '评价河长', propname: 'PJHZ' },
        { lablename: '达标河长', propname: 'DBHZ' },
        { lablename: '评价湖泊面积', propname: 'PJHBMJ' },
        { lablename: '达标湖泊面积', propname: 'DBHBMJ' },
        { lablename: '评价蓄水量', propname: 'PJXSL' },
        { lablename: '达标蓄水量', propname: 'DBXSL' },
        { lablename: '主要超标项目', propname: 'ZYCBXM' },
        { lablename: '时间戳', propname: 'SJC' },
        { lablename: '创建时间', propname: 'CJSJ' },
        { lablename: '最后更新时间', propname: '最后更新时间' },
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
      this.api.get(this, 'data_sjgl_sgnq_sgnqszdbzkxxb', this.result, param)
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