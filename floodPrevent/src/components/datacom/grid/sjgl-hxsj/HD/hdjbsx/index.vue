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
      <el-table-column prop="hddxid" label="涵洞对象ID" width="180"></el-table-column>
      <el-table-column prop="hddm" label="涵洞代码" width="180"></el-table-column>
      <el-table-column prop="hdmc" label="涵洞名称" width="120"></el-table-column>
      <el-table-column prop="jljzrq" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="ks" label="孔数（条数）" width="120"></el-table-column>
      <el-table-column prop="qddxid" label="渠道对象ID" width="120"></el-table-column>
      <el-table-column prop="gddmxz" label="管道断面形状" width="120"></el-table-column>
      <el-table-column prop="xzqhdxid" label="行政区划对象ID" width="120"></el-table-column>
      <el-table-column prop="gdjg" label="管道净高(m)" width="120"></el-table-column>
      <el-table-column prop="gqdxid" label="灌区对象ID" width="120"></el-table-column>
      <el-table-column prop="dxid" label="堤防对象ID" width="120"></el-table-column>
      <el-table-column prop="hl_dxid" label="河流对象ID" width="120"></el-table-column>
      <el-table-column prop="yds_dxid" label="引调水工程对象ID" width="120"></el-table-column>
      <el-table-column prop="syd_dxid" label="地表水水源地对象ID" width="120"></el-table-column>
      <el-table-column prop="sgn_dxid" label="水功能区对象ID" width="120"></el-table-column>
      <el-table-column prop="ly_dxid" label="流域对象ID(km)" width="120"></el-table-column>
      <el-table-column prop="zrr_dxid" label="自然人对象ID" width="120"></el-table-column>
      <el-table-column prop="szy_dxid" label="水资源分区对象ID" width="120"></el-table-column>
      <el-table-column prop="dw_dxid" label="单位对象ID(m³/s)" width="120"></el-table-column>
      <el-table-column prop="stb_dxid" label="水土保持区划对象ID(m³/s)" width="120"></el-table-column>
      <el-table-column prop="gdjk" label="管道净宽(m)" width="120"></el-table-column>
      <el-table-column prop="hdlx" label="涵洞类型" width="120"></el-table-column>
      <el-table-column prop="hddmjg" label="涵洞断面结构" width="120"></el-table-column>
      <el-table-column prop="gdnj" label="管道内径(m)" width="120"></el-table-column>
      <el-table-column prop="hddmjgqt" label="涵洞断面结构-其它" width="120"></el-table-column>
      <el-table-column prop="jkdjgc" label="进口底槛高程(m)" width="120"></el-table-column>
      <el-table-column prop="hdcl" label="涵洞材料" width="120"></el-table-column>
      <el-table-column prop="ckdjgc" label="出口底槛高程(m)" width="120"></el-table-column>
      <el-table-column prop="zmxs" label="闸门型式" width="120"></el-table-column>
      <el-table-column prop="hdclqt" label="涵洞材料-其它" width="120"></el-table-column>
      <el-table-column prop="hdcd" label="涵洞长度(m)" width="120"></el-table-column>
      <el-table-column prop="zmsl" label="闸门数量(扇)" width="120"></el-table-column>
      <el-table-column prop="qbjxs" label="启闭机型式" width="120"></el-table-column>
      <el-table-column prop="sjll" label="设计流量(m³/s)" width="120"></el-table-column>
      <el-table-column prop="qbjts" label="启闭机台数" width="120"></el-table-column>
      <el-table-column prop="dmcc" label="断面尺寸(m²)" width="120"></el-table-column>
      <el-table-column prop="djqbl" label="单机启闭力" width="120"></el-table-column>
      <el-table-column prop="jcsj" label="建成时间" width="120"></el-table-column>
      <el-table-column prop="kj" label="孔径(宽)(m)" width="120"></el-table-column>
      <el-table-column prop="dypz" label="电源配置" width="120"></el-table-column>
      <el-table-column prop="czwt" label="存在问题" width="120"></el-table-column>
      <el-table-column prop="szqdqszh" label="所在渠道起始桩号" width="120"></el-table-column>
      <el-table-column prop="whcd" label="完好程度" width="120"></el-table-column>
      <el-table-column prop="jd" label="经度" width="120"></el-table-column>
      <el-table-column prop="wd" label="纬度" width="120"></el-table-column>
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