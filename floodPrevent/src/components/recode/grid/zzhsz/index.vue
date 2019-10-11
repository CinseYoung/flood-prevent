<template>
  <div class="recode-grid">
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
      <el-table-column prop="record_code" width="200" label="文档编号"></el-table-column>
      <el-table-column prop="record_name" label="文档名称"></el-table-column>
      <el-table-column prop="type_name" label="文档类型"></el-table-column>
      <el-table-column prop="creater" label="登记人"></el-table-column>
      <el-table-column prop="create_time" width="180" label="登记时间"></el-table-column>
      <el-table-column prop="roomName" label="档案室"></el-table-column>
      <el-table-column prop="place" label="文档存放位置"></el-table-column>
      <el-table-column prop="is_enabled" label="状态">
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
      <el-table-column label="操作" width="370" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleSee(scope.$index, scope.row)">查看</el-button>
          <el-button size="mini" type="warning" @click="handleRecovery(scope.$index, scope.row)">文档恢复</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">彻底删除</el-button>
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
.general-wrap .content  .recode-grid .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.general-wrap .content  .recode-grid .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.general-wrap .content  .recode-grid .el-table td {padding: 8px 0;}
.general-wrap .content  .recode-grid .dot:before {
  content: "";
  width: 10px;
  height: 10px;
  border: 2px solid #fff;
  border-radius: 100%;
  margin-right: 3px;
  display: inline-block;
  box-sizing: border-box;
}
.general-wrap .content  .recode-grid .dot.dot_play:before {
  background-color: #0db711;
}
.general-wrap .content  .recode-grid .dot.dot_pause:before {
  background-color: #f56c6c;
}
</style>