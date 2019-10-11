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
        { lablename: '流域片区对象ID', propname: 'LYPQDXID' },
        { lablename: '资料截止日期', propname: 'ZLJZRQ' },
        { lablename: '河源位置', propname: 'HYWZ' },
        { lablename: '河源高程', propname: 'HYGC' },
        { lablename: '中游起点位置', propname: 'ZYQDWZ' },
        { lablename: '下游起点位置', propname: 'XYQDWZ' },
        { lablename: '河口位置', propname: 'HKWZ' },
        { lablename: '干流长度', propname: 'GLZD' },
        { lablename: '上游河长', propname: 'SYHZ' },
        { lablename: '中游河长', propname: 'ZYHZ' },
        { lablename: '下游河长', propname: 'XYHZ' },
        { lablename: '全河汇入一级支流 数', propname: 'QHHRYJZLS' },
        { lablename: '全河汇入一级支流 名称', propname: 'QHHRYJZLMC' },
        { lablename: '全流域面积', propname: 'QLYMJ' },
        { lablename: '上游流域面积', propname: 'SYLYMJ' },
        { lablename: '中游流域面积', propname: 'ZYLYMJ' },
        { lablename: '下游流域面积', propname: 'XYLYMJ' },
        { lablename: '流域山区面积', propname: 'LYSQMJ' },
        { lablename: '流域丘陵面积', propname: 'LYQLMJ' },
        { lablename: '流域平原面积', propname: 'LYPYMJ' },
        { lablename: '流域湖泊面积', propname: 'LYHBMJ' },
        { lablename: '流域耕地面积', propname: 'LYGDMJ' },
        { lablename: '流域内人口', propname: 'LYNRK' },
        { lablename: '流域内社经情况', propname: 'LYNSJQK' },
        { lablename: '洪水威胁范围', propname: 'HSWXFW' },
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
      this.api.get(this, 'data_sjgl_lypq_lypqjbsx', this.result, param)
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