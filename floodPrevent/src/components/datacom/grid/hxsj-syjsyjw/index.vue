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
      <el-table-column prop="jjg" label="甲基汞(mg/l)" width="160"></el-table-column>
      <el-table-column prop="yjg" label="乙基汞(mg/l)" width="160"></el-table-column>
      <el-table-column prop="syjq" label="四乙基铅(mg/l)" width="160"></el-table-column>
      <el-table-column prop="djhys" label="丁基黄原酸(mg/l)" width="160"></el-table-column>
      <el-table-column prop="bd" label="吡啶(mg/l)" width="160"></el-table-column>
      <el-table-column prop="shj" label="水合肼(mg/l)" width="160"></el-table-column>
      <el-table-column prop="sjy" label="松节油(mg/l)" width="160"></el-table-column>
      <el-table-column prop="bbb" label="苯并(a)芘(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ylzbmhxj" label="阴离了表面活性剂(mg/l)" width="160"></el-table-column>
      <el-table-column prop="zyjt" label="总有机碳(mg/l)" width="160"></el-table-column>
      <el-table-column prop="syl" label="石油类(mg/l)" width="160"></el-table-column>
      <el-table-column prop="dzwy" label="动植物油(mg/l)" width="160"></el-table-column>
      <el-table-column prop="wnzdslr" label="微囊藻毒素LR(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ylsa" label="叶绿素a(mg/l)" width="160"></el-table-column>
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