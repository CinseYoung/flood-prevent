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
      <el-table-column prop="station_code" label="测站编码" width="180"></el-table-column>
      <el-table-column prop="station_name" label="测站名称" width="180"></el-table-column>
      <el-table-column prop="dxn" label="典型年" width="120"></el-table-column>
      <el-table-column prop="tjbl" label="统计变量类别" width="150"></el-table-column>
      <el-table-column prop="pjz" label="平均值" width="150"></el-table-column>
      <el-table-column prop="lcxs" label="离差系数" width="120"></el-table-column>
      <el-table-column prop="pcxs" label="偏差系数" width="120"></el-table-column>
      <el-table-column prop="ksnf" label="开始年份" width="160"></el-table-column>
      <el-table-column prop="jsnf" label="结束年份" width="160"></el-table-column>
      <el-table-column prop="ybsl" label="样本数量" width="160"></el-table-column>
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