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
      <el-table-column prop="czbm" label="测站编码" width="120"></el-table-column>
      <el-table-column prop="station_name" label="测站名称" width="120"></el-table-column>
      <el-table-column prop="sj" label="时间" width="160"></el-table-column>
      <el-table-column prop="kzgjz" label="扩展关键字" width="160"></el-table-column>
      <el-table-column prop="cxpjhsl" label="垂线平均含水率" width="160"></el-table-column>
      <el-table-column prop="bchsl" label="表层含水率" width="160"></el-table-column>
      <el-table-column prop="sdhsl10" label="10厘米深度含水率" width="160"></el-table-column>
      <el-table-column prop="sdhsl20" label="20厘米深度含水率" width="160"></el-table-column>
      <el-table-column prop="sdhsl30" label="30厘米深度含水率" width="160"></el-table-column>
      <el-table-column prop="sdhsl40" label="40厘米深度含水率" width="160"></el-table-column>
      <el-table-column prop="sdhsl50" label="50厘米深度含水率" width="160"></el-table-column>
      <el-table-column prop="sdhsl60" label="60厘米深度含水率" width="160"></el-table-column>
      <el-table-column prop="sdhsl70" label="70厘米深度含水率" width="160"></el-table-column>
      <el-table-column prop="sdhsl80" label="80厘米深度含水率" width="160"></el-table-column>
      <el-table-column prop="sdhsl90" label="90厘米深度含水率" width="160"></el-table-column>
      <el-table-column prop="sdhsl100" label="100厘米深度含水率" width="160"></el-table-column>
      <el-table-column prop="sdhsl110" label="110厘米深度含水率" width="160"></el-table-column>
      <el-table-column prop="zwzl" label="作物种类" width="160"></el-table-column>
      <el-table-column prop="zwszq" label="作物生长期" width="160"></el-table-column>
      <el-table-column prop="zwzljqszq" label="作物种类及其生长期" width="160"></el-table-column>
      <el-table-column prop="zwsfzt" label="作物水分状态" width="160"></el-table-column>
      <el-table-column prop="zwszcd" label="作物受灾程度" width="160"></el-table-column>
      <el-table-column prop="trlb" label="土壤类别" width="160"></el-table-column>
      <el-table-column prop="gtchd" label="干土层厚度(cm)" width="160"></el-table-column>
      <el-table-column prop="ggxgts" label="灌溉相隔天数(天)" width="160"></el-table-column>
      <el-table-column prop="jyxhts" label="降雨相隔天数(天)" width="160"></el-table-column>
      <el-table-column prop="trhslcf" label="土壤含水率测法" width="160"></el-table-column>
      <el-table-column prop="sjsm" label="数据说明" width="160"></el-table-column>
      <el-table-column prop="cjfs" label="采集方式" width="160"></el-table-column>
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