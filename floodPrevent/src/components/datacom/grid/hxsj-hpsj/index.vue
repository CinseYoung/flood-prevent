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
      <el-table-column prop="hqcz" label="湖区定居村庄(个)" width="120"></el-table-column>
      <el-table-column prop="hqrk" label="湖区定居人口(人)" width="120"></el-table-column>
      <el-table-column prop="hqgd" label="湖区耕地面积(万公顷)" width="120"></el-table-column>
      <el-table-column prop="sjgg" label="设计灌溉面积(公顷)" width="160"></el-table-column>
      <el-table-column prop="sjggmj" label="实际灌溉面积(公顷)" width="160"></el-table-column>
      <el-table-column prop="djzg" label="定居最高高程(m)" width="160"></el-table-column>
      <el-table-column prop="djzd" label="定居最低高程(m)" width="160"></el-table-column>
      <el-table-column prop="whmj" label="围湖养殖面积(公顷)" width="160"></el-table-column>
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