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
      <el-table-column prop="cxbh" label="垂线编号" width="160"></el-table-column>
      <el-table-column prop="cmbh" label="层面编号" width="160"></el-table-column>
      <el-table-column prop="stlx" label="水体类型" width="160"></el-table-column>
      <el-table-column prop="cysj" label="采样时间" width="160"></el-table-column>
      <el-table-column prop="gai" label="钙(mg/l)" width="160"></el-table-column>
      <el-table-column prop="mei" label="镁(mg/l)" width="160"></el-table-column>
      <el-table-column prop="jia" label="钾(mg/l)" width="160"></el-table-column>
      <el-table-column prop="na" label="钠(mg/l)" width="160"></el-table-column>
      <el-table-column prop="jn" label="钾钠(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ljg" label="六价铬(mg/l)" width="160"></el-table-column>
      <el-table-column prop="zg" label="总铬(mg/l)" width="160"></el-table-column>
      <el-table-column prop="gong" label="汞(mg/l)" width="160"></el-table-column>
      <el-table-column prop="tong" label="铜(mg/l)" width="160"></el-table-column>
      <el-table-column prop="qian" label="铅(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ge" label="镉(mg/l)" width="160"></el-table-column>
      <el-table-column prop="xin" label="锌(mg/l)" width="160"></el-table-column>
      <el-table-column prop="tie" label="铁(mg/l)" width="160"></el-table-column>
      <el-table-column prop="meng" label="猛(mg/l)" width="160"></el-table-column>
      <el-table-column prop="yin" label="银(mg/l)" width="160"></el-table-column>
      <el-table-column prop="niu" label="镍(mg/l)" width="160"></el-table-column>
      <el-table-column prop="mu" label="钼(mg/l)" width="160"></el-table-column>
      <el-table-column prop="gu" label="钻(mg/l)" width="160"></el-table-column>
      <el-table-column prop="pi" label="铍(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ti" label="锐-(mg/l)" width="160"></el-table-column>
      <el-table-column prop="bei" label="锁(mg/l)" width="160"></el-table-column>
      <el-table-column prop="fan" label="钒(mg/l)" width="160"></el-table-column>
      <el-table-column prop="tai" label="钛(mg/l)" width="160"></el-table-column>
      <el-table-column prop="tuo" label="铊(mg/l)" width="160"></el-table-column>
      <el-table-column prop="lv" label="铝(mg/l)" width="160"></el-table-column>
      <el-table-column prop="zyd" label="总硬度(mg/l)" width="160"></el-table-column>
      <el-table-column prop="shen" label="确(mg/l)" width="160"></el-table-column>
      <el-table-column prop="xi" label="硒(mg/l)" width="160"></el-table-column>
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