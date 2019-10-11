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
      <el-table-column prop="type_name" label="类别名称"></el-table-column>
      <el-table-column prop="type_code" label="类别编码"></el-table-column>
      <el-table-column prop="description" label="类别描述"></el-table-column>
      <el-table-column prop="creater" label="创建人"></el-table-column>
      <el-table-column prop="create_time" label="创建时间"></el-table-column>
      <el-table-column prop="is_enabled" label="文档状态">
        <template slot-scope="scope">
          <div
            v-bind:class="getStatus(scope.row.is_enabled)"
            v-if="scope.row.is_enabled"
            style="color: #0db711"
          >{{scope.row.is_enabled | formatterStatusForDoc}}</div>
          <div
            v-bind:class="getStatus(scope.row.is_enabled)"
            v-else
            style="color: #f56c6c"
          >{{scope.row.is_enabled | formatterStatusForDoc}}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="370" align="center">
        <template slot-scope="scope">
          <el-button size="mini" v-if="scope.row.is_enabled" type="primary" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" v-if="scope.row.is_enabled" type="danger" @click="handleStop(scope.$index, scope.row)">停用</el-button>
          <el-button size="mini" v-if="scope.row.is_enabled" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" v-if="!scope.row.is_enabled" type="primary" @click="handleStart(scope.$index, scope.row)">启用</el-button>
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
.general-wrap .content .recode-zj .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.general-wrap .content .recode-zj .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.general-wrap .content .recode-zj .el-table td {padding: 8px 0;}
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
.general-wrap .content .recode-zj .dot.dot_play:before {
  background-color: #0db711;
}
.general-wrap .content .recode-zj .dot.dot_pause:before {
  background-color: #f56c6c;
}
</style>