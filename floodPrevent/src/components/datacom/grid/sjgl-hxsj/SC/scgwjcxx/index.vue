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
      <el-table-column prop="ssgdz" label="输水管道长" width="120"></el-table-column>
      <el-table-column prop="psgdz" label="配水管道长" width="120"></el-table-column>
      <el-table-column prop="ztgzd" label="铸铁管长度" width="120"></el-table-column>
      <el-table-column prop="qmztgzd" label="球墨铸铁管长度" width="120"></el-table-column>
      <el-table-column prop="gdzzd" label="管道总长度" width="120"></el-table-column>
      <el-table-column prop="ggzd" label="钢管长度" width="120"></el-table-column>
      <el-table-column prop="gwpjyl" label="管网平均压力" width="120"></el-table-column>
      <el-table-column prop="gwylhgl" label="管网压力合格率" width="120"></el-table-column>
      <el-table-column prop="gsqymj" label="供水区域面积" width="120"></el-table-column>
      <el-table-column prop="nynzd10" label="10年以内长度" width="120"></el-table-column>
      <el-table-column prop="ncd1030" label="10〜30年长度" width="120"></el-table-column>
      <el-table-column prop="ncd3050" label="30〜50年长度" width="120"></el-table-column>
      <el-table-column prop="nyszd50" label="50年以上长度" width="120"></el-table-column>
      <el-table-column prop="dn75mmyxzd" label="DN75nmi以下长度" width="120"></el-table-column>
      <el-table-column prop="cddn30075" label="DN300〜75mm长度" width="120"></el-table-column>
      <el-table-column prop="cddn800300" label="DN800〜300mm长度" width="120"></el-table-column>
      <el-table-column prop="dn800mmyszd" label="DN800mm以上长度" width="120"></el-table-column>
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