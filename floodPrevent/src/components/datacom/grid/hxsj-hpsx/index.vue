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
      <el-table-column prop="longitude" label="经度" width="120"></el-table-column>
      <el-table-column prop="latitude" label="纬度" width="120"></el-table-column>
      <el-table-column prop="hp_bulk" label="湖泊容积" width="160"></el-table-column>
      <el-table-column prop="sm_area" label="水面面积(km²)" width="160"></el-table-column>
      <el-table-column prop="shuxing" label="咸淡水属性" width="160"></el-table-column>
      <el-table-column prop="water_depth" label="平均水深" width="160"></el-table-column>
      <el-table-column prop="big_depth" label="最大水深" width="160"></el-table-column>
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