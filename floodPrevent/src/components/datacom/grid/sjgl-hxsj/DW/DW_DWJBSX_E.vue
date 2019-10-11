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
        { lablename: '单位名称', propname: 'DWMC' },
        { lablename: '行政区划对象ID', propname: 'XZQHDXID' },
        { lablename: '水资源分区对象ID', propname: 'DXID' },
        { lablename: '水土保持区划对象ID', propname: 'STBDXID' },
        { lablename: '企业类型', propname: 'QYLX' },
        { lablename: '执照注册号', propname: 'ZZZCH' },
        { lablename: '地址', propname: 'DZ' },
        { lablename: '法定代表人', propname: 'FDDBR' },
        { lablename: '联系人', propname: 'LXR' },
        { lablename: '联系电话', propname: 'LXDH' },
        { lablename: '邮编号码', propname: 'YBHM' },
        { lablename: '传真', propname: 'CZ' },
        { lablename: 'EMAIL', propname: 'E-MAIL' },
        { lablename: '网址', propname: 'WZ' },
        { lablename: '注册资金', propname: 'ZCZJ' },
        { lablename: '单位代码', propname: 'DWDM' },
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
      this.api.get(this, 'data_sjgl_dw_dwjbsx', this.result, param)
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