<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" stripe border style="width:100%" :height="height">
      <el-table-column type="index" :index="indexMethod" label="序号" align="center" width="50"></el-table-column>
      <el-table-column prop="mc" label="名称" align="center"></el-table-column>
      <el-table-column prop="lx" label="类型" align="center"></el-table-column>
      <el-table-column prop="tb" label="图标" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="fwdz" label="访问地址" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="gxsj" label="更新时间" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="warning" @click="edit(scope.row)">修改</el-button>
        </template>
      </el-table-column>
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