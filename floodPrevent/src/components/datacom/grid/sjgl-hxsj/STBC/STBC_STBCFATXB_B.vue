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
        { lablename: '水土保持区划对象ID', propname: 'STBCQHDXID' },
        { lablename: '水土保持方案编号', propname: 'STBCFABH' },
        { lablename: '水土保持监测费', propname: 'STBCJCF' },
        { lablename: '水土保持监理费', propname: 'STBCJLF' },
        { lablename: '水土保持设施补偿费', propname: 'STBCSSBCF' },
        { lablename: '水土保持总投资', propname: 'STBCZTZ' },
        { lablename: '水土流失总治理度', propname: 'STLSZZLD' },
        { lablename: '土壤类型代码', propname: 'TRLXDM' },
        { lablename: '土壤流失控制比', propname: 'TRLSKZB' },
        { lablename: '项目建设区面积', propname: 'XMJSQMJ' },
        { lablename: '新增水土流失量', propname: 'XZSTLSL' },
        { lablename: '新增水土流失主要区域', propname: 'XZSTLSZYQY' },
        { lablename: '原地貌土壤侵蚀模数', propname: 'YDMTRQSMS' },
        { lablename: '直接影响区面积', propname: 'ZJYXQMJ' },
        { lablename: '植被恢复系数', propname: 'ZBHFXS' },
        { lablename: '植被类型', propname: 'ZBLX' },
        { lablename: '地貌类型', propname: 'DMLX' },
        { lablename: '植物措施投资总计', propname: 'ZWCSTZZJ' },
        { lablename: '方案设计水平年', propname: 'FASJSPN' },
        { lablename: '防治责任范围面积', propname: 'FZZRFWMJ' },
        { lablename: '工程措施投资总计', propname: 'GCCSTZZJ' },
        { lablename: '国家级重点防治区类型', propname: 'GJJZDFZQLX' },
        { lablename: '建设期水土流失预测总量', propname: 'JSQSTLSYCZL' },
        { lablename: '拦渣率', propname: 'LZL' },
        { lablename: '林草覆盖率', propname: 'LCFGL' },
        { lablename: '临时措施投资总计', propname: 'LSCSTZZJ' },
        { lablename: '破坏水保设施面积', propname: 'PHSBSSMJ' },
        { lablename: '气候类型', propname: 'QHLX' },
        { lablename: '扰动地表面积', propname: 'RDDBMJ' },
        { lablename: '扰动土地整治率', propname: 'RDTDZZL' },
        { lablename: '容许土壤流失量', propname: 'RXTRLSL' },
        { lablename: '省级重点防治区类型', propname: 'SJZDFZQLX' },
        { lablename: '水土保持独立费用', propname: 'STBCDLFY' },
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
      this.api.get(this, 'data_sjgl_stbcfatxb', this.result, param)
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