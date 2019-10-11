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
      <el-table-column prop="name" label="湖泊名" width="120"></el-table-column>
      <el-table-column prop="lymj" label="流域面积(km²)" width="120"></el-table-column>
      <el-table-column prop="ssw" label="死水位(m)" width="120"></el-table-column>
      <el-table-column prop="skr" label="死库容(万立方米)" width="160"></el-table-column>
      <el-table-column prop="normal_xs" label="正常蓄水位(m)" width="160"></el-table-column>
      <el-table-column prop="normal_tx" label="正常调蓄水位(m)" width="160"></el-table-column>
      <el-table-column prop="design_hs" label="设计洪水位(m)" width="160"></el-table-column>
      <el-table-column prop="design_mj" label="设计洪水位相应面积(km²)" width="160"></el-table-column>
      <el-table-column prop="design_rj" label="设计洪水位相应容积(万立方米)" width="160"></el-table-column>
      <el-table-column prop="jhhs" label="校核洪水位(米)" width="160"></el-table-column>
      <el-table-column prop="sczg" label="实测最高水位(m)" width="160"></el-table-column>
      <el-table-column prop="sczd" label="实测最低水位(m)" width="160"></el-table-column>
      <el-table-column prop="dczg" label="调查最高水位(m)" width="160"></el-table-column>
      <el-table-column prop="dczd" label="调查最低水位(m)" width="160"></el-table-column>
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