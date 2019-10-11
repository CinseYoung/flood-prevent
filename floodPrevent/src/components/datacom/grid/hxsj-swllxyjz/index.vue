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
      <el-table-column prop="nf" label="年份" width="160"></el-table-column>
      <el-table-column prop="yf" label="月份" width="160"></el-table-column>
      <el-table-column prop="xybs" label="旬月标示" width="160"></el-table-column>
      <el-table-column prop="zgsw" label="最高水位" width="160"></el-table-column>
      <el-table-column prop="zgswcxsj" label="最高水位出现时间" width="160"></el-table-column>
      <el-table-column prop="zdll" label="最大流量" width="160"></el-table-column>
      <el-table-column prop="zdllcxsj" label="最大流量出现时间" width="160"></el-table-column>
      <el-table-column prop="zdsw" label="最低水位" width="160"></el-table-column>
      <el-table-column prop="zdswcxsj" label="最低水位出现时间" width="160"></el-table-column>
      <el-table-column prop="zxll" label="最小流量" width="160"></el-table-column>
      <el-table-column prop="zxllcxsj" label="最小流量出现时间" width="160"></el-table-column>
      <el-table-column prop="bz" label="备注" width="160"></el-table-column>
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