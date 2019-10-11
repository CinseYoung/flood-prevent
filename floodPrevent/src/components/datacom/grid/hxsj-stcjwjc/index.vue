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
      <el-table-column prop="zm" label="站码" width="120"></el-table-column>
      <el-table-column prop="station_name" label="测站名称" width="120"></el-table-column>
      <el-table-column prop="cysj" label="采样时间" width="160"></el-table-column>
      <el-table-column prop="cxbh" label="垂线编号" width="160"></el-table-column>
      <el-table-column prop="dnph" label="底泥pH" width="160"></el-table-column>
      <el-table-column prop="dnsf" label="底泥水分(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="zhfxgt" label="总挥发性固体(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnlhw" label="底泥硫化物(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnzs" label="底泥总砷(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnzge" label="底泥总铬(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnzg" label="底泥总汞(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnt" label="底泥铜(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnq" label="底泥铅(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnx" label="底泥锌(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dng" label="底泥镉(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnxi" label="底泥硒(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnn" label="底泥镍(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnyl" label="底泥油类(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnlll" label="底泥六六六(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnddt" label="底泥滴滴涕(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dnzyjw" label="底泥总有机质(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dndllb" label="底泥多氯联苯(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="dndsj" label="底泥狄氏剂(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
      <el-table-column prop="bz" label="备注" width="160"></el-table-column>
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