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
      <el-table-column prop="sjzssw" label="设计闸上水位(m)" width="120"></el-table-column>
      <el-table-column prop="sjzxsw" label="设计闸下水位(m)" width="120"></el-table-column>
      <el-table-column prop="sjgzll" label="设计过闸流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="sjhsbz" label="设计洪水标准(年)" width="120"></el-table-column>
      <el-table-column prop="sjfhzssw" label="设计防洪闸上水位(m)" width="120"></el-table-column>
      <el-table-column prop="sjfhzxsw" label="设计防洪闸下水位(m)" width="120"></el-table-column>
      <el-table-column prop="sjfhgzll" label="设计防洪过闸流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="xhhsbz" label="校核洪水标准" width="120"></el-table-column>
      <el-table-column prop="xhzssw" label="校核闸上水位(m)" width="120"></el-table-column>
      <el-table-column prop="xhzxsw" label="校核闸下水位(m)" width="120"></el-table-column>
      <el-table-column prop="xhgzll" label="校核过闸流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="sfwypsxz" label="是否为引排双向闸" width="120"></el-table-column>
      <el-table-column prop="xhhsbzcxq" label="校核洪水标准重现期" width="120"></el-table-column>
      <el-table-column prop="sjhsbzcxq" label="设计洪水标准重现期" width="120"></el-table-column>
      <el-table-column prop="xhcsbzcxq" label="校核潮水标准重现期" width="120"></el-table-column>
      <el-table-column prop="sjcsbzcxq" label="设计潮水标准重现期" width="120"></el-table-column>
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