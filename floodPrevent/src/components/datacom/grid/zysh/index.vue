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
      <!-- <el-table-column v-model="slearr" type="selection" width="40" /> -->
      <el-table-column prop="object_type" label="对象类型" width="180"></el-table-column>
      <el-table-column prop="interface_name" label="接口名称" width="180"></el-table-column>
      <el-table-column prop="useCompany" label="使用单位" width="120"></el-table-column>
      <el-table-column prop="useTime" label="申请时长/剩余时长" width="150"></el-table-column>
      <el-table-column prop="addtime" label="创建时间" width="180"></el-table-column>
      <el-table-column prop="examine" label="是否审核" width="180"></el-table-column>
      <el-table-column label="操作" align="center" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="toExamine(scope.$index, scope.row)">
            审核
          </el-button>
          <el-button size="mini" type="danger" @click="unExamine(scope.$index, scope.row)">
            取消审核
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