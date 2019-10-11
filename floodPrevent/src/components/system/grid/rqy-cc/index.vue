<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" stripe border style="width:100%" :height="height">
      <el-table-column prop="zjip" label="主机IP" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="zjzt" label="主机状态" align="center"></el-table-column>
      <el-table-column prop="pop" label="pop" align="center"></el-table-column>
      <el-table-column prop="cpu" label="CPU" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="ncdx" label="内存大小" align="center"></el-table-column>
      <el-table-column prop="images" label="images" align="center"></el-table-column>
      <el-table-column prop="bb" label="版本" align="center"></el-table-column>
      <el-table-column prop="zjlx" label="主机类型" align="center"></el-table-column>
      <el-table-column prop="cjsj" label="创建时间" align="center" show-overflow-tooltip></el-table-column>
    </el-table>
    <el-pagination style=" margin: 10px 0;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[15, 30, 50]" :page-size="20" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
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