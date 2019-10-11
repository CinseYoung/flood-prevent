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
      <el-table-column prop="rjy" label="溶解氧(mg/l)" width="160"></el-table-column>
      <el-table-column prop="gmsyzs" label="高猛酸盐指数(mg/l)" width="160"></el-table-column>
      <el-table-column prop="hxxyl" label="化学需氧量(mg/l)" width="160"></el-table-column>
      <el-table-column prop="wrshxyl" label="五日生化需氧量(mg/l)" width="160"></el-table-column>
      <el-table-column prop="lsy" label="硫酸盐(mg/l)" width="160"></el-table-column>
      <el-table-column prop="lzzl" label="离子总量(mg/l)" width="160"></el-table-column>
      <el-table-column prop="zd" label="总氮(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ad" label="氨氮(mg/l)" width="160"></el-table-column>
      <el-table-column prop="flza" label="非离子氨(mg/l)" width="160"></el-table-column>
      <el-table-column prop="yxsyd" label="亚硝酸盐氮(mg/l)" width="160"></el-table-column>
      <el-table-column prop="xsyd" label="硝酸盐氮(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ksd" label="凯氏氮(mg/l)" width="160"></el-table-column>
      <el-table-column prop="lhw" label="硫化物(mg/l)" width="160"></el-table-column>
      <el-table-column prop="qhw" label="氰化物(mg/l)" width="160"></el-table-column>
      <el-table-column prop="zyhw" label="总氧化物(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ysl" label="元素磷(mg/l)" width="160"></el-table-column>
      <el-table-column prop="zl" label="总磷(mg/l)" width="160"></el-table-column>
      <el-table-column prop="hl" label="黄磷(mg/l)" width="160"></el-table-column>
      <el-table-column prop="rjxlsy" label="溶解性磷酸盐(mg/l)" width="160"></el-table-column>
      <el-table-column prop="rjxzl" label="溶解性总磷(mg/l)" width="160"></el-table-column>
      <el-table-column prop="fhw" label="氟化物(mg/l)" width="160"></el-table-column>
      <el-table-column prop="lhw" label="氯化物(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ylyl" label="游离余氯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="hxl" label="活性氯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="zl" label="总氯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="dhw" label="碘化物(mg/l)" width="160"></el-table-column>
      <el-table-column prop="gui" label="硅(mg/l)" width="160"></el-table-column>
      <el-table-column prop="peng" label="硼(mg/l)" width="160"></el-table-column>
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