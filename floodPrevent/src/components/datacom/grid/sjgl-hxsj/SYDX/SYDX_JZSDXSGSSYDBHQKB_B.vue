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
        { lablename: '地下水水源地对象ID', propname: 'DXSSYDDXID' },
        { lablename: '地下水通报代码多媒体对象ID', propname: 'DXSTBDMDMTDXID' },
        { lablename: '序号', propname: 'XH' },
        { lablename: '行政区划对象ID', propname: 'XZQHDXID' },
        { lablename: '当年开采量', propname: 'DNKCL' },
        { lablename: '当年开采强度', propname: 'DNKCQD' },
        { lablename: '当年水质合格率', propname: 'DNSZHGL' },
        { lablename: '己有一级保护区面积', propname: 'YYYJBHQMJ' },
        { lablename: '已有一级保护区植被覆盖率', propname: 'YYYJBHQZBFGL' },
        { lablename: '已有二级保护区 面积', propname: 'YYEJBHQMJ' },
        { lablename: '已有二级保护区 植被覆盖率', propname: 'YYEJBHQZBFGL' },
        { lablename: '已有开采井个数', propname: 'YYKCJGS' },
        { lablename: '已有准保护区面积', propname: 'YYZBHQMJ' },
        { lablename: '已有准保护区植被覆盖率', propname: 'YYZBHQZBFGL' },
        { lablename: '新增二级保护区面积', propname: 'XZEJBHQMJ' },
        { lablename: '新增二级保护区植被覆盖率', propname: 'XZEJBHQZBFGL' },
        { lablename: '新增开采井个数', propname: 'XZKCJGS' },
        { lablename: '新增一级保护区面积', propname: 'XZYJBHQMJ' },
        { lablename: '新增一级保护区植被覆盖率', propname: 'XZYJBHQZBFGL' },
        { lablename: '新增准保护区面积', propname: 'XZZBHQMJ' },
        { lablename: '新增准保护区植被覆盖率', propname: 'XZZBHQZBFGL' },
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
      this.api.get(this, 'data_sjgl_sydx_jzsdxsgssydbhqkb', this.result, param)
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