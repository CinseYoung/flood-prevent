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
      <el-table-column prop="sdzdxid" label="水电站对象ID" width="180"></el-table-column>
      <el-table-column prop="sdzmc" label="水电站名称" width="180"></el-table-column>
      <el-table-column prop="zljzrq" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="fldjhcz" label="分类定级核查组" width="120"></el-table-column>
      <el-table-column prop="fldjxsz" label="分类定级巡视组" width="120"></el-table-column>
      <el-table-column prop="fldjyzzp" label="分类定级业主自评" width="160" show-overflow-tooltip></el-table-column>
      <el-table-column prop="flxsxzbm" label="分类县水行政部门" width="160"></el-table-column>
      <el-table-column prop="fxpjhcz" label="风险评级核查组" width="160"></el-table-column>
      <el-table-column prop="fxpjxsxzbm" label="风险评级县水行政部门" width="160"></el-table-column>
      <el-table-column prop="fxpjxsz" label="风险评级巡视组" width="160"></el-table-column>
      <el-table-column prop="sfsh" label="是否审核" width="160"></el-table-column>
      <el-table-column prop="sdzaqjb" label="水电站安全级别" width="160"></el-table-column>
      <el-table-column prop="xsxzzgbmscyj" label="县水行政主管部门审查意见" width="160" show-overflow-tooltip></el-table-column>
      <el-table-column prop="sxzzgfzr" label="水行政主管负责人" width="160"></el-table-column>
      <el-table-column prop="xchczj" label="现场核查专家" width="160"></el-table-column>
      <el-table-column prop="xchczyj" label="现场核查组意见" width="160" show-overflow-tooltip></el-table-column>
      <el-table-column prop="xcxszfzr" label="现场巡视组负责人" width="160"></el-table-column>
      <el-table-column prop="xcxszfzrrq" label="现场巡视组负责人日期" width="160"></el-table-column>
      <el-table-column prop="xcxszyj" label="现场巡视组意见" width="160" show-overflow-tooltip></el-table-column>
      <el-table-column prop="xcxszzj" label="现场巡视组专家" width="160"></el-table-column>
      <el-table-column prop="xcxszzjrq" label="现场巡视组专家日期" width="160"></el-table-column>
      <el-table-column prop="xhr" label="校核人" width="160"></el-table-column>
      <el-table-column prop="xhrq" label="校核日期" width="160"></el-table-column>
      <el-table-column prop="yzhwtr" label="业主或委托人" width="160"></el-table-column>
      <el-table-column prop="yztxrq" label="业主填写日期" width="160"></el-table-column>
      <el-table-column prop="yzzpzcyj" label="业主自评自查意见" width="160"></el-table-column>
      <el-table-column prop="yhjb" label="用户级别" width="160"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
      <el-table-column prop="bz" label="备注" width="160"></el-table-column>
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