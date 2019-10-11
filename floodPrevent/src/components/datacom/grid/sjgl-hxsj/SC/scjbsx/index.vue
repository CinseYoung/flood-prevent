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
      <el-table-column prop="scdxid" label="水厂对象ID" width="180"></el-table-column>
      <el-table-column prop="scdm" label="水厂代码" width="180"></el-table-column>
      <el-table-column prop="scmc" label="水厂名称" width="120"></el-table-column>
      <el-table-column prop="xzqhdxid" label="行政区划对象ID" width="120"></el-table-column>
      <el-table-column prop="gldwdxid" label="管理单位对象ID" width="120"></el-table-column>
      <el-table-column prop="dxid" label="水资源分区对象ID" width="120"></el-table-column>
      <el-table-column prop="ly_dxid" label="流域对象ID" width="120"></el-table-column>
      <el-table-column prop="pwkdxid" label="排污口对象ID" width="120"></el-table-column>
      <el-table-column prop="sk_dxid" label="水库对象ID" width="120"></el-table-column>
      <el-table-column prop="yds_dxid" label="引调水工程对象ID" width="120"></el-table-column>
      <el-table-column prop="ncg_dxid" label="农村供水工程对象ID" width="120"></el-table-column>
      <el-table-column prop="zrr_dxid" label="自然人对象ID" width="120"></el-table-column>
      <el-table-column prop="cz_dxid" label="测站对象ID" width="120"></el-table-column>
      <el-table-column prop="stb_dxid" label="水土保持区划对象ID" width="120"></el-table-column>
      <el-table-column prop="jn_dxid" label="井对象ID" width="120"></el-table-column>
      <el-table-column prop="qsk_dxid" label="取水口对象ID" width="120"></el-table-column>
      <el-table-column prop="syd_dxid" label="地表水水源地对象ID" width="120"></el-table-column>
      <el-table-column prop="syd_dxid2" label="地下水水源地对象ID" width="120"></el-table-column>
      <el-table-column prop="qsxkzdm" label="取水许可证代码" width="120"></el-table-column>
      <el-table-column prop="xxdz" label="详细地址" width="120"></el-table-column>
      <el-table-column prop="frdb" label="法人代表" width="120"></el-table-column>
      <el-table-column prop="lxfs" label="联系方式" width="120"></el-table-column>
      <el-table-column prop="jd" label="经度（度）" width="120"></el-table-column>
      <el-table-column prop="wd" label="纬度（度）" width="120"></el-table-column>
      <el-table-column prop="rscnl" label="日生产能力(万立方米每天)" width="120"></el-table-column>
      <el-table-column prop="qsjlqk" label="取水计量情况" width="120"></el-table-column>
      <el-table-column prop="jcysgx" label="进厂原水管线" width="120"></el-table-column>
      <el-table-column prop="jcysfm" label="进厂原水阀门" width="120"></el-table-column>
      <el-table-column prop="qskrl" label="清水库容量" width="120"></el-table-column>
      <el-table-column prop="gsrk" label="供水人口(万人)" width="120"></el-table-column>
      <el-table-column prop="gsdx" label="供水对象" width="120"></el-table-column>
      <el-table-column prop="ybfcsbs" label="一泵房出水泵数" width="120"></el-table-column>
      <el-table-column prop="ybfcsbyc" label="一泵房出水泵扬程" width="120"></el-table-column>
      <el-table-column prop="ybfcsbll" label="一泵房出水泵流量" width="120"></el-table-column>
      <el-table-column prop="ebfcsbs" label="二泵房岀水泵数" width="120"></el-table-column>
      <el-table-column prop="ebfcsbyc" label="二泵房出水泵扬程(m)" width="120"></el-table-column>
      <el-table-column prop="ebfcsbll" label="二泵房出水泵流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="ccfm" label="出厂阀门" width="120"></el-table-column>
      <el-table-column prop="ccgx" label="出厂管线" width="120"></el-table-column>
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