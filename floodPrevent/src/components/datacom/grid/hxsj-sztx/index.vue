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
      <el-table-column prop="nian" label="年" width="160"></el-table-column>
      <el-table-column prop="zzh" label="闸组号" width="160"></el-table-column>
      <el-table-column prop="szxh" label="水闸型式" width="160"></el-table-column>
      <el-table-column prop="yqxs" label="翼墙形式" width="160"></el-table-column>
      <el-table-column prop="pjysj" label="平均引水角(度)" width="160"></el-table-column>
      <el-table-column prop="zshk" label="闸上河宽(m)" width="160"></el-table-column>
      <el-table-column prop="zxsk" label="闸下河宽(m)" width="160"></el-table-column>
      <el-table-column prop="zmxs" label="闸门型式" width="160"></el-table-column>
      <el-table-column prop="zdgc" label="闸底高程(m)" width="160"></el-table-column>
      <el-table-column prop="ydgc" label="堰顶高程(m)" width="160"></el-table-column>
      <el-table-column prop="ydxs" label="堰顶形状" width="160"></el-table-column>
      <el-table-column prop="zks" label="总孔数" width="160"></el-table-column>
      <el-table-column prop="dkk" label="单孔宽(m)" width="160"></el-table-column>
      <el-table-column prop="dkkzjm" label="单孔宽注解码" width="160"></el-table-column>
      <el-table-column prop="pjkk" label="平均孔宽(m)" width="160"></el-table-column>
      <el-table-column prop="zkk" label="总孔宽(m)" width="160"></el-table-column>
      <el-table-column prop="zmgd" label="闸门高度(m)" width="160"></el-table-column>
      <el-table-column prop="pjkd" label="平均开度(m)" width="160"></el-table-column>
      <el-table-column prop="zdh" label="闸墩厚(m)" width="160"></el-table-column>
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