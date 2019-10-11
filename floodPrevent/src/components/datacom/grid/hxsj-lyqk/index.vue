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
      <el-table-column prop="ly" label="流域名" width="120"></el-table-column>
      <el-table-column prop="hy" label="河源位置" width="120"></el-table-column>
      <el-table-column prop="hygc" label="河源高程(m)" width="160"></el-table-column>
      <el-table-column prop="zyqd" label="中游起点位置" width="160"></el-table-column>
      <el-table-column prop="xyqd" label="下游起点位置" width="160"></el-table-column>
      <el-table-column prop="hkwz" label="河口位置" width="160"></el-table-column>
      <el-table-column prop="glcd" label="干流长度(km)" width="160"></el-table-column>
      <el-table-column prop="syhc" label="上游河长(km)" width="160"></el-table-column>
      <el-table-column prop="zyhc" label="中游河长(km)" width="160"></el-table-column>
      <el-table-column prop="xyhc" label="下游河长(km)" width="160"></el-table-column>
      <el-table-column prop="qmj" label="全流域面积(km²)" width="160"></el-table-column>
      <el-table-column prop="symj" label="上游流域面积(km²)" width="160"></el-table-column>
      <el-table-column prop="zymj" label="中游流域面积(km²)" width="160"></el-table-column>
      <el-table-column prop="xymj" label="下游流域面积(km²)" width="160"></el-table-column>
      <el-table-column prop="lysq" label="流域山区面积(km²)" width="160"></el-table-column>
      <el-table-column prop="lyql" label="流域丘陵面积(km²)" width="160"></el-table-column>
      <el-table-column prop="lypy" label="流域平原面积(km²)" width="160"></el-table-column>
      <el-table-column prop="lyhp" label="流域湖泊面积(km²)" width="160"></el-table-column>
      <el-table-column prop="lygd" label="流域耕地面积(万公顷)" width="160"></el-table-column>
      <el-table-column prop="lyrk" label="流域内人口(万人)" width="160"></el-table-column>
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