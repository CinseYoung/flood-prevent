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
      <el-table-column prop="ben" label="苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="jb" label="甲苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="yb" label="乙苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ejb" label="二甲苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="lb" label="氯苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="byx" label="苯乙烯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="elb12" label="1,2二氯苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="elb14" label="1,4二氯苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="slb123" label="1,2,3三氯苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="slb124" label="1,2,4三氯苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="slb135" label="1,3,5三氯苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="slb" label="四氯苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="xjb" label="硝基苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="exjb12" label="1,2二硝基苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="exjb13" label="1,3二硝基苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="exjb14" label="1,4二硝基苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="exjjb24" label="2,4二硝基甲苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="sxjjb246" label="2,4,6三硝基甲苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="xjlb2" label="2-硝基氯苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="xjlb3" label="3-硝基氯苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="xjlb4" label="4-硝基氯苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="exjlb24" label="2,4二硝基氯苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="dllb" label="多氯联苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ybb" label="异丙苯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ba" label="苯胺(mg/l)" width="160"></el-table-column>
      <el-table-column prop="lba" label="联苯胺(mg/l)" width="160"></el-table-column>
      <el-table-column prop="lbejsejz" label="邻苯二甲酸二甲酯(mg/l)" width="160"></el-table-column>
      <el-table-column prop="lbejsedz" label="邻苯二甲酸二丁脂(mg/l)" width="160"></el-table-column>
      <el-table-column prop="lbejsexz" label="邻苯二甲酸二辛脂(mg/l)" width="160"></el-table-column>
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