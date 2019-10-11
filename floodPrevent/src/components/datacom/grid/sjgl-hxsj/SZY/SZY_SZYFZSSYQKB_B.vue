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
        { lablename: '征收工业水资源费', propname: 'ZSGYSZYF' },
        { lablename: '征收农业水资源费', propname: 'ZSNYSZYF' },
        { lablename: '征收生活水资源费', propname: 'ZSSHSZYF' },
        { lablename: '征收水力发电水资源费', propname: 'ZSSLFDSZYF' },
        { lablename: '征收火电水资源费', propname: 'ZSHDSZYF' },
        { lablename: '征收地表水水资源费', propname: 'ZSDBSSZYF' },
        { lablename: '征收地下水水资源费', propname: 'ZSDXSSZYF' },
        { lablename: '征收地热水水资源费', propname: 'ZSDRSSZYF' },
        { lablename: '征收矿泉水水资源费', propname: 'ZSKQSSZYF' },
        { lablename: '水资源费支出管理费用', propname: 'SZYFZCGLFY' },
        { lablename: '水资源费支出基础工作费用', propname: 'SZYFZCJCGZFY' },
        { lablename: '水资源费支出科研费用', propname: 'SZYFZCKYFY' },
        { lablename: '水资源费支出设备费用', propname: 'SZYFZCSBFY' },
        { lablename: '水资源费支岀其他费用', propname: 'SZYFZCQTFY' },
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
      this.api.get(this, 'data_sjgl_szy_szyfzssyqkb', this.result, param)
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