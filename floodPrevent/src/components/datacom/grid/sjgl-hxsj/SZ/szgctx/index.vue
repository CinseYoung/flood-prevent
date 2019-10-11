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
      <el-table-column prop="szdxid" label="水闸对象ID" width="180"></el-table-column>
      <el-table-column prop="szmc" label="水闸名称" width="180"></el-table-column>
      <el-table-column prop="zljzrq" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="snzcjj" label="枢纽组成简介" width="120"></el-table-column>
      <el-table-column prop="yyyz" label="运用原则" width="120"></el-table-column>
      <el-table-column prop="zjdz" label="闸基地质" width="120"></el-table-column>
      <el-table-column prop="dzjmld" label="地震基木烈度(度)" width="120"></el-table-column>
      <el-table-column prop="dzsjld" label="地震设计烈度(度)" width="120"></el-table-column>
      <el-table-column prop="zzddjd" label="闸左端点经度(度)" width="120"></el-table-column>
      <el-table-column prop="zzddwd" label="闸左端点纬度(度)" width="120"></el-table-column>
      <el-table-column prop="zsyddgc" label="闸上游堤顶高程(m)" width="120"></el-table-column>
      <el-table-column prop="zxyddgc" label="闸下游堤顶高程(m)" width="120"></el-table-column>
      <el-table-column prop="zmqkxysj" label="闸门全开需要时间(分)" width="120"></el-table-column>
      <el-table-column prop="czwt" label="存在问题" width="120"></el-table-column>
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