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
        { lablename: '成立时间', propname: 'CLSJ' },
        { lablename: '单位类型', propname: 'DWLX' },
        { lablename: '营业费用、管理费用、财务费用合计', propname: 'YYFYGLFYCWFYHJ' },
        { lablename: '营业税金及附加', propname: 'YYSJJFJ' },
        { lablename: '本年应交增值税', propname: 'BNYJZZS' },
        { lablename: '供水业务税金', propname: 'GSYWSJ' },
        { lablename: '商品和服务支出', propname: 'SPHFWZC' },
        { lablename: '职工工资和福利费', propname: 'ZGGZHFLF' },
        { lablename: '经营税金', propname: 'JYSJ' },
        { lablename: '营业外支出', propname: 'YYWZC' },
        { lablename: '工资福利支出', propname: 'GZFLZC' },
        { lablename: '其他直接支出', propname: 'QTZJZC' },
        { lablename: '负债合计', propname: 'FZHJ' },
        { lablename: '年末从业人员合计', propname: 'NMCYRYHJ' },
        { lablename: '工人数量', propname: 'GRSL' },
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
      this.api.get(this, 'data_sjgl_dw_sydwjbxx', this.result, param)
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