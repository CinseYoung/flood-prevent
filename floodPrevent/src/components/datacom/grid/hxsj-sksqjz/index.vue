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
      <el-table-column prop="bzsj" label="标志时间" width="160"></el-table-column>
      <el-table-column prop="tjsdbz" label="统计时段标志" width="160"></el-table-column>
      <el-table-column prop="zgksw" label="最高库水位(米)" width="160"></el-table-column>
      <el-table-column prop="zdksw" label="最低库水位(米)" width="160"></el-table-column>
      <el-table-column prop="zdrkll" label="最大入库流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="zxrkll" label="最小入库流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="zdckll" label="最大出库流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="zxckll" label="最小出库流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="zdxsl" label="最大蓄水量(百万立方米)" width="160"></el-table-column>
      <el-table-column prop="zxxsl" label="最小蓄水量(百万立方米)" width="160"></el-table-column>
      <el-table-column prop="zgkswcxsj" label="最高库水位出现时间" width="160"></el-table-column>
      <el-table-column prop="zdkswcxsj" label="最低库水位出现时间" width="160"></el-table-column>
      <el-table-column prop="zdrkllcxsj" label="最大入库流量出现时间" width="160"></el-table-column>
      <el-table-column prop="zxrkllcxsj" label="最小入库流量出现时间" width="160"></el-table-column>
      <el-table-column prop="zdckllcxsj" label="最大出库流量出现时间" width="160"></el-table-column>
      <el-table-column prop="zxckllcxsj" label="最小出库流量出现时间" width="160"></el-table-column>
      <el-table-column prop="zdxslcxsj" label="最大蓄水量出现时间" width="160"></el-table-column>
      <el-table-column prop="zxxslcxsj" label="最小蓄水量出现时间" width="160"></el-table-column>
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