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
      <el-table-column prop="record_code" label="档案编号" width="180"></el-table-column>
      <el-table-column prop="record_name" label="档案名称" width="180"></el-table-column>
      <el-table-column prop="type_name" label="档案类型" width="120"></el-table-column>
      <el-table-column prop="dq" label="所属地区" width="120"></el-table-column>
      <el-table-column prop="xm" label="所属项目"></el-table-column>
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
      <el-table-column prop="create_time" label="创建时间" width="160"></el-table-column>
      <el-table-column label="操作" width="370" align="center">
        <template slot-scope="scope">
          <el-button size="mini" v-if="scope.row.is_enabled == '1'" type="primary" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          <el-button size="mini" v-if="scope.row.is_enabled == '1'" type="warning" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" v-if="scope.row.is_enabled == '1'" type="danger" @click="handleStop(scope.$index, scope.row)">停用</el-button>
          <el-button size="mini" v-if="scope.row.is_enabled == '1'" type="success" @click="handleDownload(scope.$index, scope.row)">下载文件</el-button>
          <el-button size="mini" v-if="scope.row.is_enabled == '1'" type="info" @click="handleEdit(scope.$index, scope.row)">预览</el-button>
          <el-button size="mini" v-if="scope.row.is_enabled == '0'" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" v-if="scope.row.is_enabled == '0'" type="primary" @click="handleStart(scope.$index, scope.row)">启用</el-button>
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
<style>
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
.general-wrap .content  .recode-zj  .dot.dot_pause:before {
  background-color: #f56c6c;
}
</style>