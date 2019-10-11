<template>
  <div class="recode-zj">
    <el-table
      ref="multipleTable"
      :data="tableData"
      stripe
      border
      style="width: 100%;height:60%"
      :height="height"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="borrow_user" label="借阅人"></el-table-column>
      <el-table-column prop="limit_time" label="借阅期限"></el-table-column>
      <el-table-column prop="borrow_time" label="借阅时间"></el-table-column>
      <el-table-column prop="creater" label="操作人"></el-table-column>
      <el-table-column prop="create_time" label="操作时间"></el-table-column>
      <el-table-column prop="remark" label="申请说明"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
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
.general-wrap .content  .recode-zj .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.general-wrap .content  .recode-zj .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.general-wrap .content  .recode-zj .el-table td {padding: 8px 0;}
</style>