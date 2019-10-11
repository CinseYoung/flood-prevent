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
      <el-table-column type="index"
      :index="indexMethod" label="序号" width="100"></el-table-column>
      <el-table-column prop="river_name" label="河名" width="120"></el-table-column>
      <el-table-column prop="station_name" label="站名" width="120"></el-table-column>
      <el-table-column prop="sw" label="水位" width="120"></el-table-column>
      <el-table-column prop="sw_time" label="水位出现时间" width="160"></el-table-column>
      <el-table-column prop="ll" label="流量" width="120"></el-table-column>
      <el-table-column prop="hight_sw" label="最高水位" width="120"></el-table-column>
      <el-table-column prop="hight_sw_time" label="最高水位出现时间" width="160"></el-table-column>
      <el-table-column prop="hight_ll" label="最大流量" width="140"></el-table-column>
      <el-table-column prop="hight_ll_time" label="最大流量出现时间" width="160"></el-table-column>
      <el-table-column prop="warn_sw" label="警戒水位" width="120"></el-table-column>
      <el-table-column prop="sp_warn_sw" label="超警水位" width="120"></el-table-column>
      <el-table-column prop="bzsw" label="保证水位" width="120"></el-table-column>
      <el-table-column prop="sp_bzsw" label="超保证水位" width="130"></el-table-column>
      <el-table-column prop="hist_hight_sw" label="历史最高水位" width="140"></el-table-column>
      <el-table-column prop="sp_hist" label="超历史" width="140"></el-table-column>
      <el-table-column prop="dq" label="地区" width="140"></el-table-column>
      <el-table-column prop="station_num" label="站号" width="140"></el-table-column>
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
.lvse {
  color: green;
}
.hongse {
  color:red;
}
</style>