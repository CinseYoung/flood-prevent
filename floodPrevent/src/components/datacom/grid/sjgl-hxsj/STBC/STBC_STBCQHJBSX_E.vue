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
        { lablename: '区划名称', propname: 'QHMC' },
        { lablename: '水土保持领导协调机构', propname: 'STBCLDXDJG' },
        { lablename: '规章和规范性文件', propname: 'GZHGFXWJ' },
        { lablename: '水土保持宣传', propname: 'STBCXC' },
        { lablename: '水土保持规划', propname: 'STBCGH' },
        { lablename: '应报水土保持方案', propname: 'YBSTBCFA' },
        { lablename: '实报水土保持方案', propname: 'SBSTBCFA' },
        { lablename: '水土保持方案编报率', propname: 'STBCFABBL' },
        { lablename: '应征水土保持补偿费', propname: 'YZSTBCBCF' },
        { lablename: '实征水土保持补偿 费', propname: 'SZSTBCBCF' },
        { lablename: '水土保持补偿费征收率', propname: 'STBCBCFZSL' },
        { lablename: '水土流失控制率', propname: 'STLSKZL' },
        { lablename: '周边开山、取石、挖沙管理', propname: 'ZBICSQSWSGL' },
        { lablename: '区划降水蓄滞能力', propname: 'QHJSXZNL' },
        { lablename: '森林覆盖率', propname: 'SLFGL' },
        { lablename: '人均占有公共绿地面积', propname: 'RJZYGGLDMJ' },
        { lablename: '水系绿化率', propname: 'SXLHL' },
        { lablename: '档案资料管理', propname: 'DAZLGL' },
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
      this.api.get(this, 'data_sjgl_stbcqhjbsx', this.result, param)
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