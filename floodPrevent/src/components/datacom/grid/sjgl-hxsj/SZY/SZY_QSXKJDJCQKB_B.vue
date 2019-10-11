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
        { lablename: '水资源分区对象ID', propname: 'SZYFQDXID' },
        { lablename: '年份', propname: 'NF' },
        { lablename: '统计分类代码', propname: 'TJFLDM' },
        { lablename: '年终保有实施监督管理的取水许可证数', propname: 'NZBYSSJDGLDQSXKZS' },
        { lablename: '取水许可证批准的水量', propname: 'QSXKZPZDSL' },
        { lablename: '年审取水许可证数', propname: 'NSQSXKZS' },
        { lablename: '年审水量', propname: 'NSSL' },
        { lablename: '退水水质检测的取水户数', propname: 'TSSZJCDQSHS' },
        { lablename: '退水水质检测达标率', propname: 'TSSZJCDBL' },
        { lablename: '吊销许可证数', propname: 'DXXICZS' },
        { lablename: '吊销许可证削减许可水量', propname: 'DXXKZXJXKSL' },
        { lablename: '因取水户终止而吊销许可证数', propname: 'YQSHZZEDXXKZS' },
        { lablename: '因取水户终止而吊销许可证削减许可水量', propname: 'YQSHZZEDXXKZXJXKSL' },
        { lablename: '因取水户违法而吊销许可证数', propname: 'YQSHWFEDXXKZS' },
        { lablename: '因取水户违法而吊销许可证削减许可水量', propname: 'YQSHWFEDXXKZXJXKSL' },
        { lablename: '取水标的变更许可证数', propname: 'QSBDBGXKZS' },
        { lablename: '取水标的变更增加许可水量', propname: 'QSBDBGZJXKSL' },
        { lablename: '取水标的变更削减许可水量', propname: 'QSBDBGXJXKSL' },
        { lablename: '计量设施装置数', propname: 'JLSSZZS' },
        { lablename: '水平衡测试企业数', propname: 'SPHCSQYS' },
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
      this.api.get(this, 'data_sjgl_szy_qsxkjdjcqkb', this.result, param)
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