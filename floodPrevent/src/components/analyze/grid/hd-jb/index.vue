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
      <el-table-column type="index"
      :index="indexMethod" label="序号" width="100" fixed></el-table-column>
      <el-table-column prop="river_name" label="河名" width="120" fixed></el-table-column>
      <el-table-column prop="station_name" label="站名" width="120" fixed></el-table-column>
      <el-table-column prop="month_lowest" label="月最低水位(m)实况" width="160"></el-table-column>
      <el-table-column label="月最高水位(m)" >
        <el-table-column prop="sk" label="实况" width="120"></el-table-column>
        <el-table-column prop="appear_date" label="出现日期" width="160"></el-table-column>
        <el-table-column prop="year_hight" label="历年最高" width="120"></el-table-column>
        <el-table-column prop="appear_year" label="出现年份" width="120"></el-table-column>
        <el-table-column prop="year_value" label="历年均值" width="120"></el-table-column>
      </el-table-column>
      <el-table-column label="月平均水位(m)">
        <el-table-column prop="sk_sw" label="实况" width="120"></el-table-column>
        <el-table-column prop="year_value_sw" label="历年均值" width="120"></el-table-column>
        <el-table-column prop="jdjp" label="绝对距平" width="120"></el-table-column>
      </el-table-column>
      <el-table-column label="月最大流量(m³/s)">
        <el-table-column prop="sk_ll" label="实况" width="120"></el-table-column>
        <el-table-column prop="appear_date_ll" label="出现日期" width="160"></el-table-column>
        <el-table-column prop="year_hight_ll" label="历年最高" width="120"></el-table-column>
        <el-table-column prop="appear_year_ll" label="出现年份" width="120"></el-table-column>
        <el-table-column prop="year_value_ll" label="历年均值" width="120"></el-table-column>
      </el-table-column>
      <el-table-column label="月平均流量(m³/s)">
        <el-table-column prop="sk_pjll" label="实况" width="120"></el-table-column>
        <el-table-column prop="year_value_pjll" label="历年均值" width="120"></el-table-column>
        <el-table-column prop="xdjp" label="相对距平" width="120"></el-table-column>
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