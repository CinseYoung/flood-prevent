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
        { lablename: '测站对象ID', propname: 'CZDXID' },
        { lablename: '测定时间', propname: 'CDSJ' },
        { lablename: '采样时间', propname: 'CYSJ' },
        { lablename: '评价方法', propname: 'PJFF' },
        { lablename: '评价时段长', propname: 'PJSDZ' },
        { lablename: '评价时间', propname: 'PJSJ' },
        { lablename: '地区特定项目达标评价', propname: 'DQTDXMDBPJ' },
        { lablename: '地区特定项目中主要超标项目', propname: 'DQTDXMZZYCBXM' },
        { lablename: '地下水水源地达标面积', propname: 'DXSSYDDBMJ' },
        { lablename: '地下水水源地达标水质监测站个数', propname: 'DXSSYDDBSZJCZGS' },
        { lablename: '地下水水源地水质监测站总数', propname: 'DXSSYDSZJCZZS' },
        { lablename: '地下水水源地总评价面积', propname: 'DXSSYDZPJMJ' },
        { lablename: '地下水性质', propname: 'DXSXZ' },
        { lablename: '毒理学达标评价', propname: 'DLXDBPJ' },
        { lablename: '毒理学主要超标项目', propname: 'DLXZYCBXM' },
        { lablename: '放射性指标达标评价', propname: 'FSXZBDBPJ' },
        { lablename: '放射性指标主要超标项目', propname: 'FSXZBZYCBXM' },
        { lablename: '水质类别', propname: 'SZLB' },
        { lablename: '一般指标中主要超标项目', propname: 'YBZBZZYCBXM' },
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
      this.api.get(this, 'data_sjgl_sydx_dxssydszpjxxb', this.result, param)
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