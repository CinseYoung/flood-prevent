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
      <el-table-column prop="bzdxid" label="泵站对象ID" width="180"></el-table-column>
      <el-table-column prop="bzdm" label="泵站代码" width="180"></el-table-column>
      <el-table-column prop="bzmc" label="泵站名称" width="120"></el-table-column>
      <el-table-column prop="xzqhdm" label="行政区划代码" width="120"></el-table-column>
      <el-table-column prop="nd" label="年度" width="120"></el-table-column>
      <el-table-column prop="ggrs" label="高工人数" width="120"></el-table-column>
      <el-table-column prop="gcsrs" label="工程师(技师)人数" width="120"></el-table-column>
      <el-table-column prop="zgrs" label="助工人数" width="120"></el-table-column>
      <el-table-column prop="jgrs" label="技工人数" width="120"></el-table-column>
      <el-table-column prop="syxrs30" label="30岁以下人数" width="120"></el-table-column>
      <el-table-column prop="srs3040" label="30〜40岁人数" width="120"></el-table-column>
      <el-table-column prop="srs4050" label="40〜50岁人数" width="120"></el-table-column>
      <el-table-column prop="sysrs50" label="50岁以上人数" width="120"></el-table-column>
      <el-table-column prop="gbrs" label="干部人数" width="120"></el-table-column>
      <el-table-column prop="htwrs" label="合同王人数" width="120"></el-table-column>
      <el-table-column prop="lsgrs" label="临时工人数" width="120"></el-table-column>
      <el-table-column prop="ltxrs" label="离退休人数" width="120"></el-table-column>
      <el-table-column prop="xxjyxwhrs" label="小学及以下文化人数" width="120"></el-table-column>
      <el-table-column prop="czwhrs" label="初中文化人数" width="120"></el-table-column>
      <el-table-column prop="gzwhrs" label="高中文化人数" width="120"></el-table-column>
      <el-table-column prop="zzwhrs" label="中专文化人数" width="120"></el-table-column>
      <el-table-column prop="dzwhrs" label="大专文化人数" width="120"></el-table-column>
      <el-table-column prop="bkjyswhrs" label="本科及以上文化人数" width="120"></el-table-column>
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