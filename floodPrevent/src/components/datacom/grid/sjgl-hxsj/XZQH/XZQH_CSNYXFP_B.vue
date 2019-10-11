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
        { lablename: '行政区划对象ID', propname: 'XZQHDXID' },
        { lablename: '年度', propname: 'ND' },
        { lablename: '区划名称', propname: 'QHMC' },
        { lablename: '摩托车', propname: 'MTC' },
        { lablename: '助力车', propname: 'ZLC' },
        { lablename: '家用汽车', propname: 'JYQC' },
        { lablename: '洗衣机', propname: 'XYJ' },
        { lablename: '电冰箱', propname: 'DBX' },
        { lablename: '彩色电视机', propname: 'CSDSJ' },
        { lablename: '家用电脑', propname: 'JYDN' },
        { lablename: '组合音响', propname: 'ZHYX' },
        { lablename: '摄像机', propname: 'SXJ' },
        { lablename: '照相机', propname: 'ZXJ' },
        { lablename: '钢琴', propname: 'GQ' },
        { lablename: '其他中高档乐器', propname: 'QTZGDLQ' },
        { lablename: '微波炉', propname: 'WBL' },
        { lablename: '空调机', propname: 'KDJ' },
        { lablename: '淋浴热水器', propname: 'LYRSQ' },
        { lablename: '消毒碗柜', propname: 'XDWJ' },
        { lablename: '洗碗机', propname: 'XWJ' },
        { lablename: '健身器材', propname: 'JSQC' },
        { lablename: '固定电话', propname: 'GDDH' },
        { lablename: '移动电话', propname: 'YDDH' },
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
      this.api.get(this, 'data_sjgl_xzqh_csnyxfp', this.result, param)
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