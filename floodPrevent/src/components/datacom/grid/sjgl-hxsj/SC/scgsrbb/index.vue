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
      <el-table-column prop="xb" label="日期" width="120"></el-table-column>
      <el-table-column prop="gsl" label="供水量(万立方米)" width="120"></el-table-column>
      <el-table-column prop="gwpjyl" label="管网平均压力(兆帕)" width="120"></el-table-column>
      <el-table-column prop="gwzdyl" label="管网最低压力(兆帕)" width="120"></el-table-column>
      <el-table-column prop="gwzgyl" label="管网最高压力(兆帕)" width="120"></el-table-column>
      <el-table-column prop="yxsyjs" label="运行水源井数(眼)" width="120"></el-table-column>
      <el-table-column prop="tysyjs" label="停用水源井数(眼)" width="120"></el-table-column>
      <el-table-column prop="btswxdsd" label="白天室外相对湿度(%)" width="120"></el-table-column>
      <el-table-column prop="ywswxdsd" label="夜晚室外相对湿度(%)" width="120"></el-table-column>
      <el-table-column prop="pjqw" label="平均气温(摄氏度)" width="120"></el-table-column>
      <el-table-column prop="zdqw" label="最低气温(摄氏度)" width="120"></el-table-column>
      <el-table-column prop="zgqw" label="最高气温(摄氏度)" width="120"></el-table-column>
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