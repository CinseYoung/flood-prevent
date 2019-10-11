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
      <el-table-column prop="zkmc" label="闸孔名称" width="120"></el-table-column>
      <el-table-column prop="zljzrq" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="zkkd" label="闸孔宽度(m)" width="120"></el-table-column>
      <el-table-column prop="zkgd" label="闸孔高度(m)" width="120"></el-table-column>
      <el-table-column prop="zmdkgc" label="闸门底槛高程(m)" width="120"></el-table-column>
      <el-table-column prop="ztjgxs" label="闸体结构型式" width="120"></el-table-column>
      <el-table-column prop="zks" label="闸孔数(孔)" width="120"></el-table-column>
      <el-table-column prop="xnfs" label="消能方式" width="120"></el-table-column>
      <el-table-column prop="zmdgc" label="闸门顶高程(m)" width="120"></el-table-column>
      <el-table-column prop="zmxs" label="闸门型式" width="120"></el-table-column>
      <el-table-column prop="zmsl" label="闸门数量(扇)" width="120"></el-table-column>
      <el-table-column prop="qbjxs" label="启闭机型式" width="120"></el-table-column>
      <el-table-column prop="qbjts" label="启闭机台数(台)" width="120"></el-table-column>
      <el-table-column prop="djqbl" label="单机启闭力(吨)" width="120"></el-table-column>
      <el-table-column prop="dypz" label="电源配置" width="120"></el-table-column>
      <el-table-column prop="czwt" label="存在问题" width="120"></el-table-column>
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