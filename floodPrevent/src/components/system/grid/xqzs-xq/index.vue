<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      stripe
      border
      style="width:100%"
      :height="height"
      @selection-change="handleSelectionChange"
      @row-dblclick="showEacherts"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="station_code" label="站码" width="180"></el-table-column>
      <el-table-column prop="station_name" label="名称" width="180"></el-table-column>
      <el-table-column prop="type" label="类型" width="120"></el-table-column>
      <el-table-column prop="bx_level" label="报讯等级" width="150"></el-table-column>
      <el-table-column prop="jsl" label="降水量(mm)" width="150"></el-table-column>
      <el-table-column prop="ylyj" label="雨量预警" width="120"></el-table-column>
      <el-table-column prop="sw" label="水位(m)" width="120"></el-table-column>
      <el-table-column prop="swyj" label="水位预警" width="160"></el-table-column>
      <el-table-column prop="ll" label="流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="st_time" label="发生时间" width="160"></el-table-column>
      <el-table-column prop="szdq" label="所在地区" width="160"></el-table-column>
      <el-table-column prop="szhl" label="所在河流" width="160"></el-table-column>
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