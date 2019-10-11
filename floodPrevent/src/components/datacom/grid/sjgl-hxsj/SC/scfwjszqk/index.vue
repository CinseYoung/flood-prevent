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
      <el-table-column prop="scdxid" label="水厂对象ID" width="180"></el-table-column>
      <el-table-column prop="scmc" label="水厂名称" width="120"></el-table-column>
      <el-table-column prop="nf" label="年份" width="120"></el-table-column>
      <el-table-column prop="gszl" label="供水总量(万立方米每天)" width="120"></el-table-column>
      <el-table-column prop="ggfwgsl" label="公共服务供水量(万立方米每天" width="120"></el-table-column>
      <el-table-column prop="jmshgsl" label="居民生活供水量(万立方米每天" width="120"></el-table-column>
      <el-table-column prop="scyygsl" label="生产运营供水量(万立方米每天" width="120"></el-table-column>
      <el-table-column prop="xfjqtgsl" label="消防及其他供水量(万立方米每天" width="120"></el-table-column>
      <el-table-column prop="sbzs" label="水表总数(只)" width="120"></el-table-column>
      <el-table-column prop="yshs" label="用水户数(户)" width="120"></el-table-column>
      <el-table-column prop="ycbs" label="远传表数(只)" width="120"></el-table-column>
      <el-table-column prop="jxbs" label="机械表数(只)" width="120"></el-table-column>
      <el-table-column prop="ckbs" label="磁卡表数(只)" width="120"></el-table-column>
      <el-table-column prop="gwxljsl" label="管网修漏及时率(%)" width="120"></el-table-column>
      <el-table-column prop="gwsdcjqhgl" label="管网水大肠菌群合格率(%)" width="120"></el-table-column>
      <el-table-column prop="gwshzdhgl" label="管网水浑浊度合格率(%)" width="120"></el-table-column>
      <el-table-column prop="gwsszzhhgl" label="管网水水质综合合格率(%)" width="120"></el-table-column>
      <el-table-column prop="gwsxjzshgl" label="管网水细菌总数合格率(%)" width="120"></el-table-column>
      <el-table-column prop="gwsyllhgl" label="管网水游离氯合格率(%)" width="120"></el-table-column>
      <el-table-column prop="gwsz35xhgl" label="管网水质35项合格率(%)" width="120"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
      <el-table-column prop="bz" label="备注" width="160"></el-table-column>
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