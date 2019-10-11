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
      <el-table-column prop="cysj" label="采样时间" width="160"></el-table-column>
      <el-table-column prop="fyzwzl" label="浮游植物种类" width="160"></el-table-column>
      <el-table-column prop="fyzwsl" label="浮游植物数量" width="160"></el-table-column>
      <el-table-column prop="fyzwswl" label="浮游植物生物量(个/升)" width="160"></el-table-column>
      <el-table-column prop="zsswzl" label="着生生物种类" width="160"></el-table-column>
      <el-table-column prop="zsswsl" label="着生生物数量" width="160"></el-table-column>
      <el-table-column prop="fydwzl" label="浮游动物种类" width="160"></el-table-column>
      <el-table-column prop="fydwsl" label="浮游动物数量" width="160"></el-table-column>
      <el-table-column prop="fydwswl" label="浮游动物生物量(个/升)" width="160"></el-table-column>
      <el-table-column prop="dqdwzl" label="底栖动物种类" width="160"></el-table-column>
      <el-table-column prop="dqdwsl" label="底栖动物数量" width="160"></el-table-column>
      <el-table-column prop="dqdwswl" label="底栖动物生物量(g/m²)" width="160"></el-table-column>
      <el-table-column prop="sswgszwzl" label="水生维管束植物种类" width="160"></el-table-column>
      <el-table-column prop="sswgszwsl" label="水生维管束植物数量" width="160"></el-table-column>
      <el-table-column prop="yqzl" label="鱼群种类" width="160"></el-table-column>
      <el-table-column prop="yqsl" label="鱼群数量" width="160"></el-table-column>
      <el-table-column prop="stcjscl" label="水体初级生产力(供热耗标准煤)" width="160"></el-table-column>
      <el-table-column prop="jxdxsyjg" label="急性毒性试验结果" width="160"></el-table-column>
      <el-table-column prop="mxdxsyjg" label="慢性毒性试验结果" width="160"></el-table-column>
      <el-table-column prop="wsztbsyjg" label="污水致突变试验结果" width="160"></el-table-column>
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