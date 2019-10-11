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
      <el-table-column prop="guid" label="GUID" width="180"></el-table-column>
      <el-table-column prop="dbdxid" label="大坝对象ID" width="180"></el-table-column>
      <el-table-column prop="dbmc" label="大坝名称" width="120"></el-table-column>
      <el-table-column prop="jdsj" label="鉴定时间" width="160"></el-table-column>
      <el-table-column prop="jddw" label="鉴定单位" width="160"></el-table-column>
      <el-table-column prop="jddwxz" label="鉴定单位资质" width="160"></el-table-column>
      <el-table-column prop="aqlb" label="安全类别" width="160"></el-table-column>
      <el-table-column prop="spwh" label="审批文号" width="160"></el-table-column>
      <el-table-column prop="jlhwt" label="结论或问题" width="160" show-overflow-tooltip></el-table-column>
      <el-table-column prop="ncqdzycs" label="拟采取的主要措施" width="160" show-overflow-tooltip></el-table-column>
      <el-table-column prop="dmtdxid" label="多媒体对象ID" width="160"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
      <el-table-column prop="bz" label="备注" width="160"></el-table-column>
      <el-table-column prop="cjsj" label="创建时间" width="160"></el-table-column>
      <el-table-column prop="zhgxsj" label="最后更新时间" width="160"></el-table-column>
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