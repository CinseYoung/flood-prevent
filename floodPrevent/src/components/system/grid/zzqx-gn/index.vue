<template>
  <div>
    <el-table highlight-current-row ref="multipleTable" :data="tableData" stripe borders style="width:100%" :height="height" @row-click="rowClick" :tree-props="{children: 'children', hasChildren: 'hasChildren'}" row-key="dxid" @current-change="handleCurrentChange">
      <el-table-column prop="mc" label="功能名称"></el-table-column>
      <el-table-column prop="fwlj" label="访问路径"></el-table-column>
      <el-table-column prop="mrxs" label="默认显示">
        <template slot-scope="scope">
          {{scope.row.mrxs == 1 ? '是' : '否'}}
        </template>
      </el-table-column>
      <el-table-column prop="ms" label="描述">
        <template slot-scope="scope">
          {{scope.row.ms || '无'}}
        </template>
      </el-table-column>
      <el-table-column prop="xssx" label="显示顺序"></el-table-column>
      <el-table-column prop="lx" label="类型"></el-table-column>
      <el-table-column prop="sfjy" label="是否禁用">
        <template slot-scope="scope">
          {{scope.row.sfjy == 1 ? '是' : '否'}}
        </template>
      </el-table-column>
      <el-table-column prop="cjsj" label="创建时间" show-overflow-tooltip></el-table-column>
    </el-table>
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
.el-table td {
  padding: 8px 0;
}
.el-tooltip__popper {
  font-size: 14px;
  max-width: 50%;
}
</style>