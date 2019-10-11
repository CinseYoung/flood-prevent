<template>
  <div class="recode-zj">
    <el-table
      ref="multipleTable"
      :data="tableData"
      stripe
      border
      style="width: 100%"
      :height="height"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="record_name" label="文档名称"></el-table-column>
      <el-table-column prop="operator" label="操作人"></el-table-column>
      <el-table-column prop="operation_time" label="操作时间"></el-table-column>
      <el-table-column prop="operation_type" label="操作类型" :formatter="formaterType"></el-table-column>
      <el-table-column prop="operation_status" label="操作状态">
        <template slot-scope="scope">
          <div
            v-bind:class="getStatus(scope.row.operation_status)"
            v-if="scope.row.operation_status === '1'"
            style="color: #0db711"
          >{{ scope.row.operation_status | formatterStatus }}</div>
          <div
            v-bind:class="getStatus(scope.row.operation_status)"
            v-else
            style="color: #f56c6c"
          >{{ scope.row.operation_status | formatterStatus }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="operation_menu" label="操作菜单"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
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
.general-wrap .content  .recode-zj .dot:before {
  content: "";
  width: 10px;
  height: 10px;
  border: 2px solid #fff;
  border-radius: 100%;
  margin-right: 3px;
  display: inline-block;
  box-sizing: border-box;
}
.dot.dot_success:before {
  background-color: #0db711;
}
.dot.dot_fail:before {
  background-color: #f56c6c;
}
</style>