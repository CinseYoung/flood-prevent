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
        { lablename: '水土保持方案名称', propname: 'STBCFAMC' },
        { lablename: '方案编制单位', propname: 'FABZDW' },
        { lablename: '编制单位资质等级', propname: 'BZDWZZDJ' },
        { lablename: '编制结束时间', propname: 'BZJSSJ' },
        { lablename: '法定代表人', propname: 'FDDBR' },
        { lablename: '法定代表人电话', propname: 'FDDBRDH' },
        { lablename: '联系人', propname: 'LXR' },
        { lablename: '联系人电话', propname: 'LXRDH' },
        { lablename: '单位地址', propname: 'DWDZ' },
        { lablename: '邮政编码', propname: 'YZBM' },
        { lablename: 'E-Mail', propname: 'EMAIL' },
        { lablename: '传真', propname: 'CZ' },
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
      this.api.get(this, 'data_sjgl_stbcfabzjbxxb', this.result, param)
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