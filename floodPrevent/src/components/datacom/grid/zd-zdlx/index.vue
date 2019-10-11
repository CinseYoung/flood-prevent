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
      <el-table-column prop="objid" label="对象ID" width="180"></el-table-column>
      <el-table-column prop="up_objid" label="上级对象ID" width="180"></el-table-column>
      <el-table-column prop="objname" label="对象名称" width="120"></el-table-column>
      <el-table-column prop="e_name" label="英文名称" width="150"></el-table-column>
      <el-table-column prop="code" label="对象编码" width="150"></el-table-column>
      <el-table-column prop="sort" label="排序" width="120"></el-table-column>
      <el-table-column prop="state" label="状态" width="150"></el-table-column>
      <el-table-column prop="remarks" label="备注" width="150"></el-table-column>
      <el-table-column label="操作" align="center" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.$index, scope.row)">
            修改
          </el-button>
          <el-button size="mini" type="danger" @click="handleDele(scope.$index, scope.row)">
            删除
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