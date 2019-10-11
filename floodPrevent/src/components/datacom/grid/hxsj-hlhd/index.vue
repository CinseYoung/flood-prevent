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
      <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>
      <el-table-column prop="hl" label="河流名" width="120"></el-table-column>
      <el-table-column prop="hd" label="河段名" width="120"></el-table-column>
      <el-table-column prop="hdsjdd" label="河段上界地点" width="160"></el-table-column>
      <el-table-column prop="hdxjdd" label="河段下界地点" width="160"></el-table-column>
      <el-table-column prop="river_type" label="河型" width="160"></el-table-column>
      <el-table-column prop="hlmj" label="汇流面积(km²)" width="160"></el-table-column>
      <el-table-column prop="hdcd" label="河段长度(km)" width="160"></el-table-column>
      <el-table-column prop="hcpjkd" label="河槽平均宽度(m)" width="160"></el-table-column>
      <el-table-column prop="tdpjkd" label="滩地平均宽度(m)" width="160"></el-table-column>
      <el-table-column prop="hcmj" label="河槽面积(km²)" width="160"></el-table-column>
      <el-table-column prop="tdmj" label="滩地面积(km²)" width="160"></el-table-column>
      <el-table-column prop="hdptll" label="河道平滩流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="zdhk" label="最大河宽(m)" width="160"></el-table-column>
      <el-table-column prop="zxhk" label="最小河宽(m)" width="160"></el-table-column>
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
.el-table td {
  padding: 8px 0;
}
.el-tooltip__popper {
  font-size: 14px;
  max-width: 50%;
}
</style>