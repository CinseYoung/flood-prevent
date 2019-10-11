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
      :index="indexMethod" label="序号" width="100"></el-table-column>
      <el-table-column prop="river_name" label="河流" width="120"></el-table-column>
      <el-table-column prop="sk" label="水库" width="140"></el-table-column>
      <el-table-column label="水库特征值" >
        <el-table-column prop="normal_sw" label="正常高水位(m)" width="120"></el-table-column>
        <el-table-column prop="death_sw" label="死水位(m)" width="120"></el-table-column>
        <el-table-column prop="smallest_ll" label="最小下泄流量指标(m³/s)" width="120"></el-table-column>
      </el-table-column>
      <el-table-column label="库水位(m)">
        <el-table-column prop="hightest" label="最高" width="120"></el-table-column>
        <el-table-column prop="lowest" label="最低" width="120"></el-table-column>
        <el-table-column prop="month_start" label="月初" width="120"></el-table-column>
        <el-table-column prop="month_end" label="月末" width="120"></el-table-column>
      </el-table-column>
      <el-table-column label="入库流量(m³/s)">
        <el-table-column prop="bigest_rk" label="最大" width="120"></el-table-column>
        <el-table-column prop="smallest_rk" label="最小" width="120"></el-table-column>
        <el-table-column prop="average_rk" label="平均" width="120"></el-table-column>
      </el-table-column>
      <el-table-column label="出库流量(m³/s)">
        <el-table-column prop="bigest_ck" label="最大" width="120"></el-table-column>
        <el-table-column prop="smallest_ck" label="最小" width="120"></el-table-column>
        <el-table-column prop="average_ck" label="平均" width="120"></el-table-column>
      </el-table-column>
      <el-table-column prop="xs_change" label="蓄水变化量(亿m³)" width="120"></el-table-column>
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