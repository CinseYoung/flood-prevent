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
      <el-table-column prop="ybdw" label="预报单位" width="160"></el-table-column>
      <el-table-column prop="fadm" label="方案代码" width="160"></el-table-column>
      <el-table-column prop="yjsj" label="依据时间" width="160"></el-table-column>
      <el-table-column prop="fbsj" label="发布时间" width="160"></el-table-column>
      <el-table-column prop="fssj" label="发生时间" width="160"></el-table-column>
      <el-table-column prop="kzgjz" label="扩展关键字(m)" width="160"></el-table-column>
      <el-table-column prop="ybbqxxh" label="预报冰情现象号" width="160"></el-table-column>
      <el-table-column prop="ybbqwz" label="预报冰情位置" width="160"></el-table-column>
      <el-table-column prop="ybxdjl" label="预报相对距离(km)" width="160"></el-table-column>
      <el-table-column prop="ybbh" label="预报冰厚(cm)" width="160"></el-table-column>
      <el-table-column prop="bhzlm" label="冰厚种类码" width="160"></el-table-column>
      <el-table-column prop="ybbll" label="预报冰流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="bllxz" label="冰流量性质" width="160"></el-table-column>
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