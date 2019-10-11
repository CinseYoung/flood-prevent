<template>
  <div>
    <template>
      <el-table
        ref="multipleTable"
        :data="tableData"
        :span-method="objectSpanMethod"
        stripe
        border
        style="width:100%"
        :height="height"
      >
        <el-table-column prop="sx" label="水系" width="150"></el-table-column>
        <el-table-column prop="river_name" label="河流" width="160"></el-table-column>
        <el-table-column prop="sk_name" label="水库名称" width="160"></el-table-column>
        <el-table-column prop="sk_sw" label="库水位(m)" width="160"></el-table-column>
        <el-table-column prop="rk" label="入库(m³/s)" width="160"></el-table-column>
        <el-table-column prop="ck" label="出库(m³/s)" width="160"></el-table-column>
        <el-table-column prop="xl" label="蓄量(亿m³)" width="160"></el-table-column>
        <el-table-column label="距死水位" align="center">
          <el-table-column prop="ssw" label="死水位(m)" width="160"></el-table-column>
          <el-table-column prop="swc" label="水位差值(m)" width="160"></el-table-column>
          <el-table-column prop="xlc" label="蓄量差值(亿m³)" width="160"></el-table-column>
        </el-table-column>
        <el-table-column label="超汛限水位" align="center">
          <el-table-column prop="xxsw" label="汛限水位(m)" width="160"></el-table-column>
          <el-table-column prop="swc_c" label="水位差值(m)" width="160"></el-table-column>
          <el-table-column prop="xlc_c" label="蓄量差值(亿m³)" width="160"></el-table-column>
        </el-table-column>
        <el-table-column label="距正常高水位" align="center">
          <el-table-column prop="normal" label="正常高水位(m)" width="160"></el-table-column>
          <el-table-column prop="swc_n" label="水位差值(m)" width="160"></el-table-column>
          <el-table-column prop="xlc_n" label="蓄量差值(亿m³)" width="160"></el-table-column>
        </el-table-column>
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
    </template>
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
</style>