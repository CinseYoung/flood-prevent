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
      <el-table-column prop="zljzrq" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="bhmj" label="保护面积(平方千米)" width="120"></el-table-column>
      <el-table-column prop="bhgdmj" label="保护耕地面积(万公顷)" width="120"></el-table-column>
      <el-table-column prop="bhcts" label="保护村屯数(个)" width="120"></el-table-column>
      <el-table-column prop="bhgdzc" label="保护固定资产(万元)" width="120"></el-table-column>
      <el-table-column prop="bhrk" label="保护人口(万人)" width="120"></el-table-column>
      <el-table-column prop="bhfw" label="保护房屋(万间)" width="120"></el-table-column>
      <el-table-column prop="bhgk" label="保护工矿" width="120"></el-table-column>
      <el-table-column prop="bhcz" label="保护城镇" width="120"></el-table-column>
      <el-table-column prop="bhtl" label="保护铁路" width="120"></el-table-column>
      <el-table-column prop="bhgl" label="保护公路" width="120"></el-table-column>
      <el-table-column prop="bhzdcs" label="保护重点设施" width="120"></el-table-column>
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