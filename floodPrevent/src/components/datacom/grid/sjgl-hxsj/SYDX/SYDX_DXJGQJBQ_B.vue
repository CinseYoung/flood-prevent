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
        { lablename: '地下水通报多媒体对象ID', propname: 'DXSTBDMTDXID' },
        { lablename: '序号', propname: 'XH' },
        { lablename: '水源地井灌区名称', propname: 'SYDJGQMC' },
        { lablename: '灌区面积', propname: 'GQMJ' },
        { lablename: '流域对象ID', propname: 'LYDXID' },
        { lablename: '水质类型', propname: 'SZLX' },
        { lablename: '开采层位', propname: 'KCCW' },
        { lablename: '可采井数量', propname: 'KCJSL' },
        { lablename: '可开采量', propname: 'KKCL' },
        { lablename: '取水用途(论证项目)', propname: 'QSYT' },
        { lablename: '设计供水能力', propname: 'SJGSNL' },
        { lablename: '设计供水人口', propname: 'SJGSRIC' },
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
      this.api.get(this, 'data_sjgl_sydx_dxjgqjbq', this.result, param)
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