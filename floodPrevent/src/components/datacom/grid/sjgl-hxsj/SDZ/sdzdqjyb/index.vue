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
      <el-table-column prop="sdzdxid" label="水电站对象ID" width="180"></el-table-column>
      <el-table-column prop="sdzmc" label="水电站名称" width="180"></el-table-column>
      <el-table-column prop="sbsj" label="申报时间" width="120"></el-table-column>
      <el-table-column prop="zhpjjgpsyj" label="综合评检机构评审意见" width="120"></el-table-column>
      <el-table-column prop="zhpjdw" label="综合评检单位" width="120"></el-table-column>
      <el-table-column prop="zhpjsj" label="综合评检时间" width="160"></el-table-column>
      <el-table-column prop="jyjgshyj" label="检验机关审核意见" width="160"></el-table-column>
      <el-table-column prop="dqjyjgyxq" label="定期检验结果有效期" width="160"></el-table-column>
      <el-table-column prop="jydw" label="检验单位" width="160"></el-table-column>
      <el-table-column prop="jysj" label="检验吋间" width="160"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
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