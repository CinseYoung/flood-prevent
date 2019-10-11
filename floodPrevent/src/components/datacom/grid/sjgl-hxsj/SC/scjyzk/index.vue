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
      <el-table-column prop="scdxid" label="水厂对象ID" width="180"></el-table-column>
      <el-table-column prop="scmc" label="水厂名称" width="120"></el-table-column>
      <el-table-column prop="nf" label="年份" width="120"></el-table-column>
      <el-table-column prop="qygdzc" label="企业固定资产(万元)" width="120"></el-table-column>
      <el-table-column prop="qycyrys" label="企业从业人员数(人)" width="120"></el-table-column>
      <el-table-column prop="gysz" label="公用水站(处)" width="120"></el-table-column>
      <el-table-column prop="gscb" label="供水成本(元/米每秒)" width="120"></el-table-column>
      <el-table-column prop="zhsj" label="综合水价(元/米每秒)" width="120"></el-table-column>
      <el-table-column prop="yssj" label="原水水价(元/米每秒)" width="120"></el-table-column>
      <el-table-column prop="xzsysj" label="行政事业水价(元/米每秒)" width="120"></el-table-column>
      <el-table-column prop="gysj" label="工业水价(元/米每秒)" width="120"></el-table-column>
      <el-table-column prop="jzysj" label="建筑业水价(元/米每秒)" width="120"></el-table-column>
      <el-table-column prop="syfwysj" label="商业服务业水价(元/米每秒)" width="120"></el-table-column>
      <el-table-column prop="jmshsj" label="居民生活水价(元/米每秒)" width="120"></el-table-column>
      <el-table-column prop="sfhsl" label="水费回收率(%)" width="120"></el-table-column>
      <el-table-column prop="wsclf" label="污水处理费(元/米每秒)" width="120"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
      <el-table-column prop="bz" label="备注" width="160"></el-table-column>
      <el-table-column prop="cjsj" label="创建时间" width="160"></el-table-column>
      <el-table-column prop="cjsj" label="最后更新时间" width="160"></el-table-column>
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