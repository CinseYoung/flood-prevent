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
      <el-table-column prop="hd" label="河段名" width="120"></el-table-column>
      <el-table-column prop="za" label="障碍名" width="120"></el-table-column>
      <el-table-column prop="zawz" label="左岸位置" width="160"></el-table-column>
      <el-table-column prop="yawz" label="右岸位置" width="160"></el-table-column>
      <el-table-column prop="zawmj" label="障碍物平面面积(m²)" width="160"></el-table-column>
      <el-table-column prop="zawkd" label="障碍物侵占河道宽度(采)" width="160"></el-table-column>
      <el-table-column prop="zawgsmj" label="障碍物侵占过水面积(m²)" width="160"></el-table-column>
      <el-table-column prop="qzjh" label="清障计划" width="160"></el-table-column>
      <el-table-column prop="qzqk" label="清障情况" width="160"></el-table-column>
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