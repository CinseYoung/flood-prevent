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
      <el-table-column type="index"
      :index="indexMethod" label="序号" width="100"></el-table-column>
      <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column prop="yjdj" label="应急等级" width="100"></el-table-column>
      <el-table-column prop="content" label="内容" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column prop="start_time" label="启动时间" width="160"></el-table-column>
      <el-table-column prop="is_handle" label="是否处理" width="100"></el-table-column>
      <el-table-column prop="handle_step" label="处理措施" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column prop="handle_time" label="处理时间" width="160"></el-table-column>
      <el-table-column prop="clr" label="处理人" width="160"></el-table-column>
      <el-table-column label="操作" width="260" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleSee(scope.$index, scope.row)">应急处理</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除应急</el-button>
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
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.el-table td {padding: 8px 0;}
.el-tooltip__popper{font-size: 14px; max-width:50% }
</style>