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
      <el-table-column prop="dfdxid" label="堤防对象ID" width="180"></el-table-column>
      <el-table-column prop="dfmc" label="堤防名称" width="120"></el-table-column>
      <el-table-column prop="gcmcdm" label="工程名称代码" width="120"></el-table-column>
      <el-table-column prop="cjsj" label="采集时间" width="120"></el-table-column>
      <el-table-column prop="cjdjdzb" label="采集点经度坐标(度)" width="120"></el-table-column>
      <el-table-column prop="cjdwdzb" label="采集点纬度坐标(度)" width="120"></el-table-column>
      <el-table-column prop="cjddm" label="采集点地名" width="120"></el-table-column>
      <el-table-column prop="cjdzh" label="采集点桩号" width="120"></el-table-column>
      <el-table-column prop="sw" label="水位(m)" width="120"></el-table-column>
      <el-table-column prop="ll" label="流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="swzt" label="水位状态" width="120"></el-table-column>
      <el-table-column prop="swztcxsj" label="水位状态持续时间(小时)" width="120"></el-table-column>
      <el-table-column prop="smjddgc" label="水面距堤顶高差(m)" width="120"></el-table-column>
      <el-table-column prop="dfjb" label="堤防级别" width="120"></el-table-column>
      <el-table-column prop="szab" label="所在岸别" width="120"></el-table-column>
      <el-table-column prop="qzzh" label="起止桩号" width="120"></el-table-column>
      <el-table-column prop="dfwhzk" label="堤防完好状况" width="120"></el-table-column>
      <el-table-column prop="cdjzwzk" label="穿堤建筑物状况" width="120"></el-table-column>
      <el-table-column prop="hphawhzk" label="护坡护岸完好状况" width="120"></el-table-column>
      <el-table-column prop="jd" label="经度" width="120"></el-table-column>
      <el-table-column prop="wd" label="纬度" width="120"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
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