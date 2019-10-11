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
        { lablename: '地下水水源地代码', propname: 'DXSSYDDM' },
        { lablename: '地下水水源地名称', propname: 'DXSSYDMC' },
        { lablename: '水资源分区对象ID', propname: 'SZYFQDXID' },
        { lablename: '行政区划对象ID', propname: 'XZQHDXID' },
        { lablename: '水源地等级', propname: 'SYDDJ' },
        { lablename: '水源地管理单位对象ID', propname: 'SYDGLDWDXID' },
        { lablename: '地下水水源地面积', propname: 'DXSSYDMJ' },
        { lablename: '水源地审批单位对象ID', propname: 'SYDSPDWDXID' },
        { lablename: '水土保持区划对象ID', propname: 'DXID' },
        { lablename: '流域对象ID', propname: 'LY_DXID' },
        { lablename: '年许可取水量', propname: 'NXKQSL' },
        { lablename: '日最大供水量', propname: 'RZDGSL' },
        { lablename: '设计年供水量', propname: 'SJNGSL' },
        { lablename: '设计年取水量', propname: 'SJNQSL' },
        { lablename: '地下水按埋藏条件分类编码', propname: 'DXSAMZTJFLBM' },
        { lablename: '地下水按含水介质分类编码', propname: 'DXSAHSJZFLBM' },
        { lablename: '范围描述', propname: 'FWMS' },
        { lablename: '工程规模', propname: 'GCGM' },
        { lablename: '供水对象', propname: 'GSDX' },
        { lablename: '供水人口', propname: 'GSRK' },
        { lablename: '含水层厚度', propname: 'HSCHD' },
        { lablename: '建设状况', propname: 'JSZK' },
        { lablename: '面积', propname: 'MJ' },
        { lablename: '水源供水持续状况', propname: 'SYGSCXZK' },
        { lablename: '水质目标', propname: 'SZMB' },
        { lablename: '投产时间', propname: 'TCSJ' },
        { lablename: '运行状况', propname: 'YXZK' },
        { lablename: '多年平均年可开采量', propname: 'DNPJNKKCL' },
        { lablename: '地下水超采区个数', propname: 'DXSCCQGS' },
        { lablename: '时间戳', propname: 'SJC' },
        { lablename: '创建吋间', propname: 'CJSJ' },
        { lablename: '最后更新吋间', propname: 'ZHGXSJ' },
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
      this.api.get(this, 'data_sjgl_sydx_dxssydjbsx', this.result, param)
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