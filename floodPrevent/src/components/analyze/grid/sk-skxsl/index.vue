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
      <el-table-column prop="sx" label="水系" width="120"></el-table-column>
      <el-table-column prop="river_name" label="河流" width="160"></el-table-column>
      <el-table-column prop="sk_name" label="水库名称" width="150"></el-table-column>
      <el-table-column prop="sk_sw" label="月平均库水位(m³/s)" width="150"></el-table-column>
      <el-table-column prop="today_sw" label="今日库水位(m³/s)" width="160"></el-table-column>
      <el-table-column prop="xl-month" label="蓄量月变化(亿m³)" width="150"></el-table-column>
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
.lvse {
  color: green;
}
.hongse {
  color:red;
}
</style>