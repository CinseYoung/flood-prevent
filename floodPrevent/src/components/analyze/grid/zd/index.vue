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
      <el-table-column prop="river_name" label="河流名称" width="120"></el-table-column>
      <el-table-column prop="sx" label="水系名称" width="150"></el-table-column>
      <el-table-column prop="ly" label="流域名称" width="150"></el-table-column>
      <el-table-column prop="longitude" label="经度" width="120"></el-table-column>
      <el-table-column prop="latitude" label="纬度" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" width="160"></el-table-column>
      <el-table-column prop="jm_name" label="基面名称" width="160"></el-table-column>
      <el-table-column prop="id" label="行政区划对象ID" width="160"></el-table-column>
      <el-table-column prop="jm_gc" label="基面高程" width="160"></el-table-column>
      <el-table-column prop="jm_xzz" label="基面修正值" width="160"></el-table-column>
      <el-table-column prop="station_type" label="站类" width="160"></el-table-column>
      <el-table-column prop="bx_level" label="报讯等级" width="120"></el-table-column>
      <el-table-column prop="jz_year" label="建站年月" width="160"></el-table-column>
      <el-table-column prop="sb_year" label="始报年月" width="160"></el-table-column>
      <el-table-column prop="lsdw" label="隶属行业单位" width="160"></el-table-column>
      <el-table-column prop="xxdw" label="信息管理单位" width="160"></el-table-column>
      <el-table-column prop="jhdw" label="交换管理单位" width="160"></el-table-column>
      <el-table-column prop="czab" label="测站岸别" width="160"></el-table-column>
      <el-table-column prop="czfw" label="测站方位" width="160"></el-table-column>
      <el-table-column prop="jl" label="至河口距离" width="160"></el-table-column>
      <el-table-column prop="js_area" label="集水面积" width="160"></el-table-column><el-table-column prop="pym" label="拼音码" width="150"></el-table-column>
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