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
      <el-table-column prop="swtt" label="生物体铜(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtq" label="生物体铅(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtg" label="生物体镉(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtzx" label="生物体总锌(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtzge" label="生物体总锯(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtzs" label="生物体总碎(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtzg" label="生物体总汞(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtx" label="生物体硒(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtzyhw" label="生物体总氧化物(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swthfxf" label="生物体挥发性酚(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtsyt" label="生物体石油桂(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtlll" label="生物体六六六(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtddt" label="生物体滴滴涕(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtdllb" label="生物体多氯联苯(mg/kg)" width="160"></el-table-column>
      <el-table-column prop="swtdsj" label="生物体狄氏剂(mg/kg)" width="160"></el-table-column>
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