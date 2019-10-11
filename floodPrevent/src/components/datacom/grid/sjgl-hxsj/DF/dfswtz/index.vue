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
      <el-table-column prop="dfdxid" label="堤防对象ID" width="180"></el-table-column>
      <el-table-column prop="dfmc" label="堤防名称" width="120"></el-table-column>
      <el-table-column prop="sjhsbz" label="设计洪水标准(年)" width="120"></el-table-column>
      <el-table-column prop="sjhsw" label="设计洪水位(m)" width="120"></el-table-column>
      <el-table-column prop="bzsw" label="保证水位(m)" width="120"></el-table-column>
      <el-table-column prop="jjsw" label="警戒水位(m)" width="120"></el-table-column>
      <el-table-column prop="sfsw" label="设防水位(m)" width="120"></el-table-column>
      <el-table-column prop="sjll" label="设计流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="jjll" label="警戒流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="xhsw" label="校核水位(m)" width="120"></el-table-column>
      <el-table-column prop="xhll" label="校核流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="lszgsw" label="历史最高水位(m)" width="120"></el-table-column>
      <el-table-column prop="lszgswfsrq" label="历史最高水位发生日期" width="120"></el-table-column>
      <el-table-column prop="lszdhfll" label="历史最大洪峰流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="lszdhfllfsrq" label="历史最大洪峰流量发生日期" width="120"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
      <el-table-column prop="bz" label="备注" width="160"></el-table-column>
      <el-table-column prop="cjsj" label="创建时间" width="160"></el-table-column>
      <el-table-column prop="cjsj" label="最后更新时间" width="160"></el-table-column>
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