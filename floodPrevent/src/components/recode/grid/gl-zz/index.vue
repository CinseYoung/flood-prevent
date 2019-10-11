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
      <el-table-column prop="record_code" label="文档编号" width="180"></el-table-column>
      <el-table-column prop="record_name" label="文档名称" width="180"></el-table-column>
      <el-table-column prop="type_name" label="文档类型" width="120"></el-table-column>
      <el-table-column prop="region" label="所属地区" width="120"></el-table-column>
      <el-table-column prop="project" label="所属项目"></el-table-column>
      <el-table-column prop="roomName" label="档案室"></el-table-column>
      <el-table-column prop="place" label="文档存放位置"></el-table-column>
      <el-table-column prop="is_enabled" label="状态" width="100">
        <template slot-scope="scope">
          <div
            v-bind:class="getStatus(scope.row.is_enabled)"
            v-if="scope.row.is_enabled === '1'"
            style="color: #0db711"
          >{{scope.row.is_enabled | formatterStatusForDoc}}</div>
          <div
            v-bind:class="getStatus(scope.row.is_enabled)"
            v-else
            style="color: #f56c6c"
          >{{scope.row.is_enabled | formatterStatusForDoc}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="登记时间" width="160"></el-table-column>
      <el-table-column label="操作" width="210">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleSee(scope.$index, scope.row)">查看</el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style=" margin: 10px 0;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[15, 30, 50]"
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
.general-wrap .content  .recode-zj .dot.dot_play:before {
  background-color: #0db711;
}
.general-wrap .content  .recode-zj .dot.dot_pause:before {
  background-color: #f56c6c;
}
</style>