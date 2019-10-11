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
      <el-table-column prop="bzsj" label="标志时间" width="160"></el-table-column>
      <el-table-column prop="tjsdbz" label="统计时段标志" width="160"></el-table-column>
      <el-table-column prop="zdms" label="最大埋深(摄氏度)" width="160"></el-table-column>
      <el-table-column prop="zxms" label="最小埋深(摄氏度)" width="160"></el-table-column>
      <el-table-column prop="zdqyll" label="最大泉涌流量(摄氏度)" width="160"></el-table-column>
      <el-table-column prop="zxqyll" label="最小泉涌流量(摄氏度)" width="160"></el-table-column>
      <el-table-column prop="zgdxssw" label="最高地下水水温" width="160"></el-table-column>
      <el-table-column prop="zddxssw" label="最低地下水水温" width="160"></el-table-column>
      <el-table-column prop="zdmscxsj" label="最大埋深出现时间" width="160"></el-table-column>
      <el-table-column prop="zxmscxsj" label="最小埋深出现时间" width="160"></el-table-column>
      <el-table-column prop="zdqyllcxsj" label="最大泉涌流量出现时间" width="160"></el-table-column>
      <el-table-column prop="zxqyllcxsj" label="最小泉涌流量出现时间" width="160"></el-table-column>
      <el-table-column prop="zgdxsswcxsj" label="最高地下水水温出现时间" width="160"></el-table-column>
      <el-table-column prop="zddxsswcxsj" label="最低地下水水温出现时间" width="160"></el-table-column>
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