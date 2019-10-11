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
      <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>
      <el-table-column prop="hl" label="河流名" width="120"></el-table-column>
      <el-table-column prop="dm" label="断面名称" width="120"></el-table-column>
      <el-table-column prop="lc" label="里程(m)" width="160"></el-table-column>
      <el-table-column prop="hcpl_33" label="洪潮频率(P=0.33%)水位(m)" width="160"></el-table-column>
      <el-table-column prop="hcpl_51" label="洪潮频率(P=0.5%)水位(m)" width="160"></el-table-column>
      <el-table-column prop="hcpl_1" label="洪潮频率(p=l%)水位(m)" width="160"></el-table-column>
      <el-table-column prop="hcpl_2" label="洪潮频率(P=2%)水位(m)" width="160"></el-table-column>
      <el-table-column prop="hcpl_26" label="洪潮频率(P=3.26%)水位(m)" width="160"></el-table-column>
      <el-table-column prop="hcpl_52" label="洪潮频率(P=5%)水位(m)" width="160"></el-table-column>
      <el-table-column prop="hcpl_TM0" label="洪潮频率(TM0%)水位(m)" width="160"></el-table-column>
      <el-table-column prop="hcpl_20" label="洪潮频率(P=20%)水位(m)" width="160"></el-table-column>
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
.el-table td {
  padding: 8px 0;
}
.el-tooltip__popper {
  font-size: 14px;
  max-width: 50%;
}
</style>