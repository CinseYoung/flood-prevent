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
      <el-table-column prop="sw" label="水位(m)" width="160"></el-table-column>
      <el-table-column prop="ll" label="流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="dmgsmj" label="断面过水面积(m²)" width="160"></el-table-column>
      <el-table-column prop="dmpjls" label="断面平均流速(m/s)" width="160"></el-table-column>
      <el-table-column prop="dmzdls" label="断面最大流速(m/s)" width="160"></el-table-column>
      <el-table-column prop="hstzm" label="河水特征码" width="160"></el-table-column>
      <el-table-column prop="ss" label="水势" width="160"></el-table-column>
      <el-table-column prop="clff" label="测流方法" width="160"></el-table-column>
      <el-table-column prop="cjff" label="测积方法" width="160"></el-table-column>
      <el-table-column prop="csff" label="测速方法" width="160"></el-table-column>
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