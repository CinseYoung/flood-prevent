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
        { lablename: '当年审批通过水资源论证项目数', propname: 'DNSPTGSZYLZXMS' },
        { lablename: '水资源论证通过可开采水量', propname: 'SZYLZTGICKCSL' },
        { lablename: '当年新批申请数', propname: 'DNXPSQS' },
        { lablename: '新批申请批准水量', propname: 'XPSQPZSL' },
        { lablename: '当年新发许可证数', propname: 'DNXFXKZS' },
        { lablename: '新发许可证许可水量', propname: 'XFXKZXKSL' },
        { lablename: '年终保有的有效取水许可证总数', propname: 'NZBYDYXQSXKZZS' },
        { lablename: '年终保有的地热水有效取水许可证数', propname: 'NZBYDDRSYXQSXKZS' },
        { lablename: '年终保有的矿泉水有效取水许可证数', propname: 'NZBYDKQSYXQSXKZS' },
        { lablename: '年终保有的水力发电有效取水许可证数', propname: 'NZBYDSLFDYXQSXKZS' },
        { lablename: '年终保有的有效取水许可证地表水许可水量', propname: 'NZBYDYXQSXKZDBSXKSL' },
        { lablename: '地下水许可水量', propname: 'NZBYDYXQSXKZDXSXKSL' },
        { lablename: '年终保有的有效取水许可证地热水许可水量', propname: 'NZBYDYXQSXKZDRSXKSL' },
        { lablename: '年终保有的有效取水许可证矿泉水许可水1=1', propname: 'NZBYDYXQSXKZKQSXKSL' },
        { lablename: '年终保有的有 效取水许可证水力发电许可水量', propname: 'NZBYDYXQSXKZSLFDXKSL' },
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
      this.api.get(this, 'data_sjgl_szy_qsxkjbqk', this.result, param)
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