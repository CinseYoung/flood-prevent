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
      <el-table-column prop="task_name" label="任务名称" width="180"></el-table-column>
      <el-table-column prop="execution_frequency" label="执行频率" width="180"></el-table-column>
      <el-table-column prop="state" label="状态" width="100"></el-table-column>
      <el-table-column prop="addtime" label="创建时间" width="180"></el-table-column>
      <el-table-column prop="start_up_time" label="开始任务时间" width="180"></el-table-column>
      <el-table-column prop="runtime" label="运行时长" width="180"></el-table-column>
      <!-- <el-table-column label="操作" align="center" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="success" size="mini" @click="runstart(scope.$index, scope.row)" v-if="scope.row.state == '关闭'">
            启动
          </el-button>
          <el-button size="mini" type="info" @click="runend(scope.$index, scope.row)" v-else>
            关闭
          </el-button>
        </template>
      </el-table-column> -->
      <el-table-column label="操作" align="center" width="400" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="success" size="mini" @click="runstart(scope.$index, scope.row)" v-if="scope.row.state == '关闭'">
            启动
          </el-button>
          <el-button size="mini" type="info" @click="runend(scope.$index, scope.row)" v-else>
            关闭
          </el-button>
          <el-button type="primary" size="mini" @click="handleUpdate(scope.$index, scope.row)">
            修改模型
          </el-button>
          <el-button size="mini" type="danger" @click="handleDele(scope.$index, scope.row)">
            删除模型
          </el-button>
          <el-button size="mini" @click="viewlog(scope.$index, scope.row)">
            查看日志
          </el-button>
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
.gutter {
  width: 17px;
  display: block;
}
</style>