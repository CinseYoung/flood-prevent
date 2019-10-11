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
      <el-table-column prop="szdxid" label="水闸对象ID" width="180"></el-table-column>
      <el-table-column prop="szmc" label="水闸名称" width="180"></el-table-column>
      <el-table-column prop="zljzrq" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="lszdhfll" label="历史最大洪峰流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="lszdhfllfsrq" label="历史最大洪峰流量发生日期" width="120"></el-table-column>
      <el-table-column prop="sjyyzdgzll" label="实际运用最大过闸流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="sjyyzdgzllfsrq" label="实际运用最大过闸流量发生日期" width="120"></el-table-column>
      <el-table-column prop="sjyyzszgsw" label="实际运用闸上最高水位(m)" width="120"></el-table-column>
      <el-table-column prop="sjyyzszgswfsrq" label="实际运用闸上最高水位发生日期" width="120"></el-table-column>
      <el-table-column prop="zsxzdswc" label="闸上下最大水位差(m)" width="120"></el-table-column>
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