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
      <el-table-column prop="station_code" label="测站编码" width="180"></el-table-column>
      <el-table-column prop="station_name" label="测站名称" width="180"></el-table-column>
      <el-table-column prop="zdgc" label="左堤高程(m)" width="120"></el-table-column>
      <el-table-column prop="ydgc" label="右堤高程(m)" width="150"></el-table-column>
      <el-table-column prop="jjsw" label="警戒水位(m)" width="150"></el-table-column>
      <el-table-column prop="jjll" label="警戒流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="bzsw" label="保证水位(m)" width="120"></el-table-column>
      <el-table-column prop="bzll" label="保证流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="ptll" label="平滩流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="sczgsw" label="实测最高水位(m)" width="160"></el-table-column>
      <el-table-column prop="zgswcxsj" label="实测最高水位出现时间" width="170"></el-table-column>
      <el-table-column prop="dczgsw" label="调查最高水位(m)" width="160"></el-table-column>
      <el-table-column prop="dczgswcxsj" label="调查最高水位出现时间" width="170"></el-table-column>
      <el-table-column prop="sczdll" label="实测最大流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="zdllcxsj" label="实测最大流量出现时间" width="170"></el-table-column>
      <el-table-column prop="dczdll" label="调查最大流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="dczdllcxsj" label="调查最大流量出现时间" width="170"></el-table-column>
      <el-table-column prop="lszdhsl" label="历史最大含沙量(kg/m³)" width="160"></el-table-column>
      <el-table-column prop="hslcxsj" label="历史最大含沙量出现时间" width="180"></el-table-column>
      <el-table-column prop="dmls" label="历史最大断面平均流速(m/s)" width="170"></el-table-column>
      <el-table-column prop="dmlscxsj" label="历史最大断面平均流速出现时间" width="180"></el-table-column>
      <el-table-column prop="lszdsw" label="历史最低水位(m)" width="160"></el-table-column>
      <el-table-column prop="zdswcxsj" label="历史最低水位出现时间" width="170"></el-table-column>
      <el-table-column prop="lszxll" label="历史最小流量(m³/s)" width="150"></el-table-column>
      <el-table-column prop="zxllcxsj" label="历史最小流量岀现时间" width="170"></el-table-column>
      <el-table-column prop="gsw" label="高水位告警值(m)" width="150"></el-table-column>
      <el-table-column prop="dll" label="大流量告警值(m³/s)" width="150"></el-table-column>
      <el-table-column prop="dsw" label="低水位告警值(m)" width="150"></el-table-column>
      <el-table-column prop="xll" label="小流量告警值(m³/s)" width="150"></el-table-column>
      <el-table-column prop="start_sw" label="启动预报水位标准(m)" width="150"></el-table-column>
      <el-table-column prop="start_ll" label="启动预报流量标准(m³/s)" width="150"></el-table-column>
      <el-table-column prop="nlszgsw" label="年历史最高前五位预警水位" width="150"></el-table-column>
      <el-table-column prop="nlszdsw" label="年历史最低前五位预警水位" width="150"></el-table-column>
      <el-table-column prop="nlszdll" label="年历史最大前五位预警流量" width="150"></el-table-column>
      <el-table-column prop="nlszxll" label="年历史最小前五位预警流量" width="150"></el-table-column>
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