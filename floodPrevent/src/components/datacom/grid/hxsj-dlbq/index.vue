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
      <el-table-column prop="czbm" label="测站编码" width="120"></el-table-column>
      <el-table-column prop="station_name" label="测站名称" width="120"></el-table-column>
      <el-table-column prop="sj" label="时间" width="160"></el-table-column>
      <el-table-column prop="kzgjz" label="扩展关键字" width="160"></el-table-column>
      <el-table-column prop="dlbqh" label="定量冰情号" width="160"></el-table-column>
      <el-table-column prop="xdwz" label="相对位置" width="160"></el-table-column>
      <el-table-column prop="xdjl" label="相对距离(km)" width="160"></el-table-column>
      <el-table-column prop="zabk" label="左岸冰宽" width="160"></el-table-column>
      <el-table-column prop="yabk" label="右岸冰宽" width="160"></el-table-column>
      <el-table-column prop="abhd" label="岸冰厚度(cm)" width="160"></el-table-column>
      <el-table-column prop="lbmd" label="流冰密度" width="160"></el-table-column>
      <el-table-column prop="lbhd" label="流冰厚度(cm)" width="160"></el-table-column>
      <el-table-column prop="zdbkmj" label="最大冰块面积(m²)" width="160"></el-table-column>
      <el-table-column prop="zdbkls" label="最大冰块流速(m/s)" width="160"></el-table-column>
      <el-table-column prop="bll" label="冰流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="fdxz" label="封冻性质" width="160"></el-table-column>
      <el-table-column prop="jdxz" label="解冻性质" width="160"></el-table-column>
      <el-table-column prop="lbdj" label="流冰堆积" width="160"></el-table-column>
      <el-table-column prop="bbfz" label="冰坝发展" width="160"></el-table-column>
      <el-table-column prop="bbgd" label="冰坝高度(m)" width="160"></el-table-column>
      <el-table-column prop="bbkd" label="冰坝宽度(m)" width="160"></el-table-column>
      <el-table-column prop="bbsysw" label="冰坝上游水位(m)" width="160"></el-table-column>
      <el-table-column prop="bbsyss" label="冰坝上游水势" width="160"></el-table-column>
      <el-table-column prop="bllxz" label="冰流量性质" width="160"></el-table-column>
      <el-table-column prop="gclx" label="高程类型" width="160"></el-table-column>
      <el-table-column prop="sjsm" label="数据说明" width="160"></el-table-column>
      <el-table-column prop="cjfs" label="采集方式" width="160"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
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