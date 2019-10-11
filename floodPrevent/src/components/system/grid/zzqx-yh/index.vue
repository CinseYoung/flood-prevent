<template>
  <div>
    <el-table ref="multipleTable" :data="tableData" stripe border style="width:100%" :height="height">
      <el-table-column prop="yhzh" label="用户账号" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="xm" label="姓名" align="center"></el-table-column>
      <el-table-column prop="xb" label="性别" align="center">
        <template slot-scope="scope">
          <div>
            {{scope.row.xb === '1' ? '男' : '女' }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="yx" label="邮箱" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="sjhm" label="用户手机" align="center" show-overflow-tooltip></el-table-column>
      <!-- <el-table-column prop="area" label="行政区划" align="center"></el-table-column> -->
      <el-table-column prop="dwmc" label="单位" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column label="账户状态" align="center">
        <template slot-scope="scope">
          <div>
            {{scope.row.zhzt === '1' ? '正常' : '异常' }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="cjsj" label="创建时间" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="warning" @click="edit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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