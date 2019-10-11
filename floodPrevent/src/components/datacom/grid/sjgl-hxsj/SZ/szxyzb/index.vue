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
      <el-table-column prop="qljzrq" label="强料截止日期" width="120"></el-table-column>
      <el-table-column prop="szyt" label="水闸用途" width="120"></el-table-column>
      <el-table-column prop="shejggmj" label="设计灌溉面积(公顷)" width="120"></el-table-column>
      <el-table-column prop="sjggmj" label="实际灌溉面积(公顷)" width="120"></el-table-column>
      <el-table-column prop="sjplbz" label="设计排涝标准(年)" width="120"></el-table-column>
      <el-table-column prop="shejplmj" label="设计排涝面积(公顷)" width="120"></el-table-column>
      <el-table-column prop="sjplmj" label="实际排涝面积(公顷)" width="120"></el-table-column>
      <el-table-column prop="fhbhdx" label="防洪保护对象" width="120"></el-table-column>
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