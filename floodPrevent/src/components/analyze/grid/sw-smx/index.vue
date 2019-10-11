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
      <el-table-column prop="time" label="时间" width="180"></el-table-column>
      <el-table-column prop="hksw" label="汉口水位" width="160"></el-table-column>
      <el-table-column prop="hsgsw" label="黄石港水位" width="150"></el-table-column>
      <el-table-column prop="mtzsw" label="码头镇水位" width="150"></el-table-column>
      <el-table-column prop="dtsw" label="大通水位" width="160"></el-table-column>
    </el-table>
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