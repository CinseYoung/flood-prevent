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
      <el-table-column prop="bzdxid" label="泵站对象ID" width="180"></el-table-column>
      <el-table-column prop="bzdm" label="泵站代码" width="180"></el-table-column>
      <el-table-column prop="bzmc" label="泵站名称" width="120"></el-table-column>
      <el-table-column prop="zljzrq" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="xzqhdxid" label="行政区划对象ID" width="120"></el-table-column>
      <el-table-column prop="gldwdxid" label="管理单位对象ID" width="120"></el-table-column>
      <el-table-column prop="qddxid" label="渠道对象ID" width="120"></el-table-column>
      <el-table-column prop="skdxid" label="水库对象ID" width="120"></el-table-column>
      <el-table-column prop="hpdxid" label="湖泊对象ID" width="120"></el-table-column>
      <el-table-column prop="czdxid" label="测站对象ID" width="120"></el-table-column>
      <el-table-column prop="dmtdxid" label="多媒体对象ID" width="120"></el-table-column>
      <el-table-column prop="qskdxid" label="取水口对象ID" width="120"></el-table-column>
      <el-table-column prop="lydxid" label="流域对象ID" width="120"></el-table-column>
      <el-table-column prop="hldxid" label="河流对象ID" width="120"></el-table-column>
      <el-table-column prop="dfdxid" label="堤防对象ID" width="120"></el-table-column>
      <el-table-column prop="zrrdxid" label="自然人对象ID" width="120"></el-table-column>
      <el-table-column prop="sgnqdxid" label="水功能区对象ID" width="120"></el-table-column>
      <el-table-column prop="szyfqdx" label="水资源分区对象" width="120"></el-table-column>
      <el-table-column prop="dbssyddxid" label="地表水水源地对象ID" width="120"></el-table-column>
      <el-table-column prop="gqdxid" label="灌区对象ID" width="120"></el-table-column>
      <el-table-column prop="stbcqhdxid" label="水土保持区划对象ID" width="120"></el-table-column>
      <el-table-column prop="gldwdm" label="管理单位代码" width="120"></el-table-column>
      <el-table-column prop="gldwmc" label="管理单位名称" width="120"></el-table-column>
      <el-table-column prop="gcwz" label="工程位置" width="120"></el-table-column>
      <el-table-column prop="yyyz" label="运用原则" width="120"></el-table-column>
      <el-table-column prop="lx" label="类型" width="120"></el-table-column>
      <el-table-column prop="szjm" label="水准基面" width="120"></el-table-column>
      <el-table-column prop="jdszjmwz" label="假定水准基面位置" width="120"></el-table-column>
      <el-table-column prop="jcrq" label="建成日期" width="120"></el-table-column>
      <el-table-column prop="ksyxrq" label="开始运行日期" width="120"></el-table-column>
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