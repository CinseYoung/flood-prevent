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
        { lablename: '法定代表人(单位负责人)', propname: 'FDDBR' },
        { lablename: '单位负责人', propname: 'DWFZR' },
        { lablename: '单位负责人联系电话', propname: 'DWFZRLXDH' },
        { lablename: '业务主管单位名称', propname: 'YWZGDWMC' },
        { lablename: '业务范围', propname: 'YWFW' },
        { lablename: '活动地域', propname: 'HDDY' },
        { lablename: '固定资产原值', propname: 'GDZCYZ' },
        { lablename: '本年固定资产折旧', propname: 'BNGDZCZJ' },
        { lablename: '本年收入合计', propname: 'BNSRHJ' },
        { lablename: '年末资产合计', propname: 'NMZCHJ' },
        { lablename: '本年支出合计', propname: 'BNZCHJ' },
        { lablename: '会计核算形式', propname: 'HJHSXS' },
        { lablename: '人员费用', propname: 'RYFY' },
        { lablename: '工人数量', propname: 'GRSL' },
        { lablename: '年末从业人员合计', propname: 'NMCYRYHJ' },
        { lablename: '在岗职工', propname: 'ZGZG' },
        { lablename: '大学本科及以上', propname: 'DXBKJYS' },
        { lablename: '大专及以下', propname: 'DZJYX' },
        { lablename: '咼级', propname: 'GJ' },
        { lablename: '高级工及以下', propname: 'GJGJYX' },
        { lablename: '中级及以下', propname: 'ZJJYX' },
        { lablename: '技师及以上', propname: 'JSJYS' },
        { lablename: '36岁及以上', propname: 'SJYS36' },
        { lablename: '35岁及以下', propname: 'SJYX35' },
        { lablename: '年末会员单位数合计', propname: 'NMHYDWSHJ' },
        { lablename: '年末会员人数合计', propname: 'NMHYRSHJ' },
        { lablename: '填表人员', propname: 'TBRY' },
        { lablename: '填表联系人电话', propname: 'TBLXRDH' },
        { lablename: '复核人员', propname: 'FHRY' },
        { lablename: '复核人联系电话', propname: 'FHRLXDH' },
        { lablename: '中央审核', propname: 'ZYSH' },
        { lablename: '省级审核', propname: 'SJSH' },
        { lablename: '地区审核', propname: 'DQSH' },
        { lablename: '审查人员', propname: 'SCRY' },
        { lablename: '审核标志', propname: 'SHBZ' },
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
      this.api.get(this, 'data_sjgl_dw_stjbxx', this.result, param)
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