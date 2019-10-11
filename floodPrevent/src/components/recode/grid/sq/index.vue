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
      <el-table-column prop="record_code" label="档案编号"></el-table-column>
      <el-table-column prop="record_name" label="档案名称"></el-table-column>
      <el-table-column prop="user" label="授权用户"></el-table-column>
      <el-table-column prop="creater" label="操作人"></el-table-column>
      <el-table-column prop="authorization" label="权限"></el-table-column>
      <el-table-column prop="create_time" label="操作时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleEdit(scope.$index, scope.row)">修改授权</el-button>
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)">清除授权</el-button>
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