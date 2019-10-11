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
        { lablename: '单位对象ID', propname: 'DWDXID' },
        { lablename: '行政区划对象ID', propname: 'XZQHDXID' },
        { lablename: '信用评价记录', propname: 'XYPJJL' },
        { lablename: '单位获奖情况', propname: 'DWHJQK' },
        { lablename: '工程获奖情况', propname: 'GCHJQK' },
        { lablename: '其他良好情况', propname: 'QTLHQK' },
        { lablename: '拖欠工资情况', propname: 'TQGZQK' },
        { lablename: '收受他人贿赂行为', propname: 'SSTRHLXW' },
        { lablename: '未全面履行合同及违规行为', propname: 'WQMLXHTJWGXW' },
        { lablename: '转包、违法分包、挂靠等行为', propname: 'ZBWFFBGKDXW' },
        { lablename: '其他不良行为', propname: 'QTBLXW' },
        { lablename: '公众投诉及处理情况', propname: 'GZTSJCLQK' },
        { lablename: '初审时间', propname: 'CSSJ' },
        { lablename: '初审人姓名', propname: 'CSRXM' },
        { lablename: '初审意见', propname: 'CSYJ' },
        { lablename: '终审时间', propname: 'ZSSJ' },
        { lablename: '终审人姓名', propname: 'ZSRXM' },
        { lablename: '终审意见', propname: 'ZSYJ' },
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
      this.api.get(this, 'data_sjgl_dw_dwscxw', this.result, param)
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