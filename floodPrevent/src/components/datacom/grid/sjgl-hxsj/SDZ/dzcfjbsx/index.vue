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
      <el-table-column prop="guid" label="GUID" width="180"></el-table-column>
      <el-table-column prop="dzcfdxid" label="电站厂房对象ID" width="180"></el-table-column>
      <el-table-column prop="dzcfbm" label="电站厂房编码" width="180"></el-table-column>
      <el-table-column prop="dzcfrq" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="dzcfmc" label="电站厂房名称" width="120"></el-table-column>
      <el-table-column prop="cfxs" label="厂房型式" width="120"></el-table-column>
      <el-table-column prop="cfc" label="厂房长(m)" width="120"></el-table-column>
      <el-table-column prop="cfk" label="厂房宽(m)" width="120"></el-table-column>
      <el-table-column prop="cfg" label="厂房高(m)" width="120"></el-table-column>
      <el-table-column prop="azjpmc" label="安装间平面长(m)" width="120"></el-table-column>
      <el-table-column prop="azjpmk" label="安裝间平面宽(m)" width="120"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
      <el-table-column prop="bz" label="备注" width="160"></el-table-column>
      <el-table-column prop="cjsj" label="创建时间" width="160"></el-table-column>
      <el-table-column prop="zhgxsj" label="最后更新时间" width="160"></el-table-column>
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
import index from './index.js'
export default index
</script>
<style lang="scss">
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.el-table td {padding: 8px 0;}
.gutter {
  width: 17px;
  display: block;
}
</style>