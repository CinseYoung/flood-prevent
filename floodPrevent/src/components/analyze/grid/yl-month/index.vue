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
      <el-table-column prop="fq_name" label="分区名称" width="120"></el-table-column>
      <el-table-column prop="all_station_num" label="总站数" width="120"></el-table-column>
      <el-table-column prop="lose_station" label="缺报站" width="120"></el-table-column>
      <el-table-column prop="biggset_station" label="最大站站点" width="120"></el-table-column>
      <el-table-column prop="biggset_num" label="最大站站号" width="120"></el-table-column>
      <el-table-column prop="biggset_yl" label="最大站雨量(mm)" width="120"></el-table-column>
      <el-table-column prop="average_yl" label="平均降雨量(mm)" width="120"></el-table-column>
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