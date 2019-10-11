<template>
  <div>
    <template>
      <el-table
        ref="multipleTable"
        :data="tableData"
        stripe
        border
        style="width:100%"
        :height="height"
      >
        <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>
        <el-table-column prop="sx" label="水系" width="150"></el-table-column>
        <el-table-column prop="river_name" label="河名" width="160"></el-table-column>
        <el-table-column prop="station_name" label="站名" width="160"></el-table-column>
        <el-table-column prop="sk_sw" label="库水位(m)" width="140"></el-table-column>
        <el-table-column prop="rk" label="入库流量(m³/s)" width="140"></el-table-column>
        <el-table-column prop="ck" label="出库流量(m³/s)" width="140"></el-table-column>
        <el-table-column prop="xsl" label="蓄水量(亿m³)" width="140"></el-table-column>
        <el-table-column label="距汛限" align="center">
          <el-table-column prop="sw_xun" label="水位(m)" width="140"></el-table-column>
          <el-table-column prop="xsl_xun" label="蓄水量(亿m³)" width="140"></el-table-column>
        </el-table-column>
        <el-table-column label="距正常" align="center">
          <el-table-column prop="sw_normal" label="水位(m)" width="140"></el-table-column>
          <el-table-column prop="xsl_normal" label="蓄水量(亿m³)" width="140"></el-table-column>
        </el-table-column>
        <el-table-column prop="ssw" label="死水位(m)" width="140"></el-table-column>
        <el-table-column prop="xxsw" label="汛限水位(m)" width="140"></el-table-column>
        <el-table-column prop="normal_hight_sw" label="正常高水位(m)" width="150"></el-table-column>
        <el-table-column prop="ss" label="水势" width="80"></el-table-column>
        <el-table-column prop="river_name" label="水系" width="150"></el-table-column>
        <el-table-column prop="station_num" label="站号" width="150"></el-table-column>
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
    </template>
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
.el-table td {
  padding: 8px 0;
}
</style>