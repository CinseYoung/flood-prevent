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
        { lablename: '粮食作物总播种面积', propname: 'LSZWZBZMJ' },
        { lablename: '谷物总播种面积', propname: 'GWZBZMJ' },
        { lablename: '稻谷播种面积', propname: 'DGBZMJ' },
        { lablename: '小麦播种面积', propname: 'XMBZMJ' },
        { lablename: '玉米播种面积', propname: 'YMBZMJ' },
        { lablename: '豆类播种面积', propname: 'DLBZMJ' },
        { lablename: '薯类播种面积', propname: 'SLBZMJ' },
        { lablename: '油料总播种面积', propname: 'YLZBZMJ' },
        { lablename: '花生播种面积', propname: 'HSBZMJ' },
        { lablename: '油菜籽播种面积', propname: 'YCZBZMJ' },
        { lablename: '棉花播种面积', propname: 'MHBZMJ' },
        { lablename: '麻类播种面积', propname: 'MLBZMJ' },
        { lablename: '糖料总播种面积', propname: 'TLZBZMJ' },
        { lablename: '甘蔗播种面积', propname: 'GZBZMJ' },
        { lablename: '烟叶播种面积', propname: 'YYBZMJ' },
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
      this.api.get(this, 'data_sjgl_xzqh_nzwbzmjqk', this.result, param)
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