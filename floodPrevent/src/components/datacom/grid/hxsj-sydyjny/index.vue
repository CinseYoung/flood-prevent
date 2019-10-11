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
      <el-table-column prop="czdxid" label="测站对象ID" width="180"></el-table-column>
      <el-table-column prop="zm" label="站码" width="120"></el-table-column>
      <el-table-column prop="station_name" label="测站名称" width="120"></el-table-column>
      <el-table-column prop="cxbh" label="垂线编号" width="160"></el-table-column>
      <el-table-column prop="cmbh" label="层面编号" width="160"></el-table-column>
      <el-table-column prop="stlx" label="水体类型" width="160"></el-table-column>
      <el-table-column prop="cysj" label="采样时间" width="160"></el-table-column>
      <el-table-column prop="lll" label="六六六(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ddt" label="滴滴涕(mg/l)" width="160"></el-table-column>
      <el-table-column prop="lg" label="乐果(mg/l)" width="160"></el-table-column>
      <el-table-column prop="dll" label="对硫磷(mg/l)" width="160"></el-table-column>
      <el-table-column prop="jjdll" label="甲基对硫磷(mg/l)" width="160"></el-table-column>
      <el-table-column prop="mlll" label="马拉硫磷(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ddw" label="敌敌畏(mg/l)" width="160"></el-table-column>
      <el-table-column prop="dbc" label="敌百虫(mg/l)" width="160"></el-table-column>
      <el-table-column prop="atlj" label="阿特拉津(mg/l)" width="160"></el-table-column>
      <el-table-column prop="bjq" label="百菌清(mg/l)" width="160"></el-table-column>
      <el-table-column prop="jcw" label="甲蔡威(mg/l)" width="160"></el-table-column>
      <el-table-column prop="xqjz" label="溴氧菊酯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="nxl" label="内吸磷(mg/l)" width="160"></el-table-column>
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