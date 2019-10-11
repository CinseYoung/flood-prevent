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
      <el-table-column prop="bzdxid" label="泵站对象ID" width="120"></el-table-column>
      <el-table-column prop="nian" label="年" width="120"></el-table-column>
      <el-table-column prop="jzh" label="机组号" width="120"></el-table-column>
      <el-table-column prop="jx" label="机型" width="160"></el-table-column>
      <el-table-column prop="zjts" label="装机台数" width="160"></el-table-column>
      <el-table-column prop="csgldmmj" label="岀水管路断面面积(m²)" width="160"></el-table-column>
      <el-table-column prop="bdzs" label="标定转速(m/s)" width="160"></el-table-column>
      <el-table-column prop="djedgl" label="单机额定功率(kw)" width="160"></el-table-column>
      <el-table-column prop="djsjll" label="单机设计流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="sjyc" label="设计扬程(m)" width="160"></el-table-column>
      <el-table-column prop="tfdg" label="驼峰底高(m)" width="160"></el-table-column>
      <el-table-column prop="qpsw" label="起排水位(m)" width="160"></el-table-column>
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