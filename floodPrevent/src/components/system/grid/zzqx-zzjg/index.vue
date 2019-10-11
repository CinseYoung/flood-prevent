<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" stripe border style="width:100%" :height="height">
      <el-table-column type="index" :index="indexMethod" label="序号" align="center" width="50"></el-table-column>
      <el-table-column prop="dwmc" label="单位名称" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="sjdwmc" label="上级单位" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          {{scope.row.sjdwmc || '无上级单位' }}
        </template>
      </el-table-column>
      <el-table-column prop="xzqhmc" label="所属地区" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="qylx" label="单位类型" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="dz" label="地址" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="lxr" label="联系人" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="lxdh" label="联系电话" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="cz" label="传真" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="email" label="EMAIL" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="warning" @click="edit(scope.row)">设置上级单位</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination style=" margin: 10px 0;" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[15, 30, 50]" :page-size="20" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
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