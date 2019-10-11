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
      <el-table-column prop="zljzrq" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="shejzjzrl" label="设计装机总容量(兆瓦)" width="120"></el-table-column>
      <el-table-column prop="sjzjzrl" label="实际装机总容量(兆瓦)" width="120"></el-table-column>
      <el-table-column prop="jzts" label="机组台数" width="120"></el-table-column>
      <el-table-column prop="bx" label="泵型" width="120"></el-table-column>
      <el-table-column prop="pssjqcsw" label="排水设计前池水位(m)" width="120"></el-table-column>
      <el-table-column prop="pssjhcsw" label="排水设计后池水位(m)" width="120"></el-table-column>
      <el-table-column prop="bcdbgc" label="泵池底板高程(m)" width="120"></el-table-column>
      <el-table-column prop="shejpsll" label="设计排水流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="sjpsll" label="实际排水流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="sjpsmj" label="实际排水面积(公顷)" width="120"></el-table-column>
      <el-table-column prop="ggsjqcsw" label="灌溉（引水）设计 前池水位(m)" width="120"></el-table-column>
      <el-table-column prop="ggsjhcsw" label="灌溉〔引水）设计 后池水位(m)" width="120"></el-table-column>
      <el-table-column prop="shejggysll" label="设计灌溉引水流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="sjggysll" label="实际灌溉引水流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="shejggmj" label="设计灌溉面积(公顷)" width="120"></el-table-column>
      <el-table-column prop="sjggmj" label="实际灌溉面积(公顷)" width="120"></el-table-column>
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