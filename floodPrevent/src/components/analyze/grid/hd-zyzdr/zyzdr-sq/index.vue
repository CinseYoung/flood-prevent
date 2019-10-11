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
        <el-table-column prop="river_name" label="河名" width="150"></el-table-column>
        <el-table-column prop="station_name" label="站名" width="160"></el-table-column>
        <el-table-column prop="sw" label="水位(m)" width="150"></el-table-column>
        <el-table-column prop="ss" label="水势" width="100"></el-table-column>
        <el-table-column prop="ll" label="相应/出库流量(m³/s)" width="150"></el-table-column>
        <el-table-column prop="river_name1" label="河名" width="150"></el-table-column>
        <el-table-column prop="station_name1" label="站名" width="160"></el-table-column>
        <el-table-column prop="sw1" label="水位(m)" width="150"></el-table-column>
        <el-table-column prop="ss1" label="水势" width="100"></el-table-column>
        <el-table-column prop="ll1" label="相应/出库流量(m³/s)" width="150"></el-table-column>
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