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
        { lablename: '闸站工程对象ID', propname: 'ZZGCDXID' },
        { lablename: '闸站工程编码', propname: 'ZZGCBM' },
        { lablename: '闸站工程名称', propname: 'ZZGCMC' },
        { lablename: '资料截止日期', propname: 'ZLJZRQ' },
        { lablename: '所属行政区划', propname: 'SSXZQH' },
        { lablename: '所在水库对象LD', propname: 'SZSKDXID' },
        { lablename: '所在河流对象ID', propname: 'SZHLDXID' },
        { lablename: '所在湖泊对象ID', propname: 'SZHPDXID' },
        { lablename: '水功能区对象ID', propname: 'DXID' },
        { lablename: '泵站对象ID', propname: 'BZ_DXID' },
        { lablename: '水资源分区对象ID', propname: 'SZYDXID' },
        { lablename: '水土保持区划对象ID', propname: 'STB_DXID' },
        { lablename: '地表水水源地对象ID', propname: 'SYD_DXID' },
        { lablename: '自然人对象ID', propname: 'ZRRDXID' },
        { lablename: '单位对象ID', propname: 'DW_DXID' },
        { lablename: '流域对象ID', propname: 'LY_DXID' },
        { lablename: '水闸对象ID', propname: 'SZ_DXID' },
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
      this.api.get(this, 'data_sjgl_zz_zzgcjbsx', this.result, param)
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