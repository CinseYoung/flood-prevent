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
      <el-table-column prop="qddxid" label="渠道对象ID" width="180"></el-table-column>
      <el-table-column prop="qdmc" label="渠道名称" width="120"></el-table-column>
      <el-table-column prop="jlsxh" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="gldwdxid" label="管理单位对象ID" width="120"></el-table-column>
      <el-table-column prop="gqdxid" label="灌区对象ID" width="120"></el-table-column>
      <el-table-column prop="lydxid" label="流域对象ID" width="120"></el-table-column>
      <el-table-column prop="qskdxid" label="取水口对象ID" width="120"></el-table-column>
      <el-table-column prop="zrrdxid" label="自然人对象ID" width="120"></el-table-column>
      <el-table-column prop="stbcqhdxid" label="水土保持区划对象ID" width="120"></el-table-column>
      <el-table-column prop="szyfqdxid" label="水资源分区对象ID" width="120"></el-table-column>
      <el-table-column prop="dmtdxid" label="多媒体对象ID" width="120"></el-table-column>
      <el-table-column prop="xzqhdxid" label="行政区划对象ID" width="120"></el-table-column>
      <el-table-column prop="qdjb" label="渠道级别" width="120"></el-table-column>
      <el-table-column prop="qdmc" label="渠道名称" width="120"></el-table-column>
      <el-table-column prop="qdcd" label="渠道长度(km)" width="120"></el-table-column>
      <el-table-column prop="jzlybm" label="资金来源部门" width="120"></el-table-column>
      <el-table-column prop="qdgn" label="渠道功能" width="120"></el-table-column>
      <el-table-column prop="shejll" label="设计流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="sjll" label="实际流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="jcsj" label="建成时间" width="120"></el-table-column>
      <el-table-column prop="fsl" label="防渗率(%)" width="120"></el-table-column>
      <el-table-column prop="whcd" label="完好程度" width="120"></el-table-column>
      <el-table-column prop="gdcd" label="管道长度(km)" width="120"></el-table-column>
      <el-table-column prop="qsxz" label="渠首形状" width="120"></el-table-column>
      <el-table-column prop="dmcc" label="断面尺寸" width="120"></el-table-column>
      <el-table-column prop="cqzdhnt" label="衬砌长度-混凝土" width="120"></el-table-column>
      <el-table-column prop="cqzdjqs" label="衬砌长度-浆砌石" width="120"></el-table-column>
      <el-table-column prop="cqzdjqz" label="衬砌长度-浆砌砖" width="120"></el-table-column>
      <el-table-column prop="cqzdqt" label="衬砌长度-其他" width="120"></el-table-column>
      <el-table-column prop="qsjd" label="渠首经度" width="120"></el-table-column>
      <el-table-column prop="qswd" label="渠首纬度" width="120"></el-table-column>
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