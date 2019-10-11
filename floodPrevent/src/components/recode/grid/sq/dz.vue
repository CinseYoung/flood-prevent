<template>
  <div class="recode-zj">
    <el-table
      ref="multipleTable"
      :data="tableData"
      stripe
      border
      style="width: 100%;height: 250px"
      :height="height"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="record_code" label="档案编号" width="180"></el-table-column>
      <el-table-column prop="record_name" label="档案名称" width="180"></el-table-column>
      <el-table-column prop="type_name" label="档案类型" width="120"></el-table-column>
      <el-table-column prop="dq" label="所属地区" width="120"></el-table-column>
      <el-table-column prop="xm" label="所属项目"></el-table-column>
      <el-table-column prop="creater" label="创建人" width="100"></el-table-column>
      <el-table-column prop="create_time" label="创建时间" width="160"></el-table-column>
      <el-table-column label="操作" width="370" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleSee(scope.$dz, scope.row)" icon="el-icon-view">查看授权信息</el-button>
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
import dz from './dz.js'
export default dz
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