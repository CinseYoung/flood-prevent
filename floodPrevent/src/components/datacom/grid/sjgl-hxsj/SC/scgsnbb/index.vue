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
      <el-table-column prop="scdxid" label="水厂对象ID" width="180"></el-table-column>
      <el-table-column prop="scmc" label="水厂名称" width="120"></el-table-column>
      <el-table-column prop="gszl" label="供水总量(万万立方米每天)" width="120"></el-table-column>
      <el-table-column prop="pjrgsl" label="平均日供水量(万立方米每天)" width="120"></el-table-column>
      <el-table-column prop="zgrgsl" label="最高日供水量(万立方米每天)" width="120"></el-table-column>
      <el-table-column prop="csssnl" label="储水设施能力(万立方米每天)" width="120"></el-table-column>
      <el-table-column prop="sjzhscnl" label="实际综合生产能力(万立方米每天)" width="120"></el-table-column>
      <el-table-column prop="zszl" label="制水总量(万万立方米每天)" width="120"></el-table-column>
      <el-table-column prop="zsdwhdl" label="制水单位耗电量(kwh/s)" width="120"></el-table-column>
      <el-table-column prop="zsdwcb" label="制水单位成本(元/米每秒)" width="120"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
      <el-table-column prop="bz" label="备注" width="160"></el-table-column>
      <el-table-column prop="cjsj" label="创建时间" width="160"></el-table-column>
      <el-table-column prop="cjsj" label="最后更新时间" width="160"></el-table-column>
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