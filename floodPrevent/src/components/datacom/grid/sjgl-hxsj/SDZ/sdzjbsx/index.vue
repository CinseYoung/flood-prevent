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
      <el-table-column prop="sdzmc" label="水电站名称" width="120"></el-table-column>
      <el-table-column prop="sdzgldwdm" label="水电站管理单位代码" width="160"></el-table-column>
      <el-table-column prop="sdzgldwmc" label="水电站管理单位名称" width="160"></el-table-column>
      <el-table-column prop="sdzlx" label="水电站类型" width="160"></el-table-column>
      <el-table-column prop="sdzgkgldw" label="水电站归口管理单位" width="160"></el-table-column>
      <el-table-column prop="skdxid" label="水库对象ID" width="160"></el-table-column>
      <el-table-column prop="sljts" label="水轮机台数" width="160"></el-table-column>
      <el-table-column prop="szhldxid" label="所在河流对象ID" width="160"></el-table-column>
      <el-table-column prop="szszysjqdxid" label="所在水资源三级区对象ID" width="160"></el-table-column>
      <el-table-column prop="xzqhdxid" label="行政区划对象ID" width="160"></el-table-column>
      <el-table-column prop="lydxid" label="流域对象ID" width="160"></el-table-column>
      <el-table-column prop="dbdxid" label="大坝对象1D" width="160"></el-table-column>
      <el-table-column prop="qskdxid" label="取水口对象ID" width="160"></el-table-column>
      <el-table-column prop="zrrdxid" label="自然人对象ID" width="160"></el-table-column>
      <el-table-column prop="dbssydxid" label="地表水水源地对象ID" width="160"></el-table-column>
      <el-table-column prop="stbcqhdxid" label="水土保持区划对象ID" width="160"></el-table-column>
      <el-table-column prop="cymc" label="曾用名称" width="160"></el-table-column>
      <el-table-column prop="zysh" label="中央审核" width="160"></el-table-column>
      <el-table-column prop="zbyqts" label="主变压气台数" width="160"></el-table-column>
      <el-table-column prop="zyjzwjb" label="主要建筑物级别" width="160"></el-table-column>
      <el-table-column prop="zjrl" label="装机容量(kw)" width="160"></el-table-column>
      <el-table-column prop="zzjrl" label="总装机容量(kw)" width="160"></el-table-column>
      <el-table-column prop="zdbg" label="最大坝（闸）高(m)" width="160"></el-table-column>
      <el-table-column prop="ywkwb" label="有无矿尾坝" width="160"></el-table-column>
      <el-table-column prop="dzgc" label="电站高程" width="160"></el-table-column>
      <el-table-column prop="dzqckr" label="电站前池库容(m/s)" width="160"></el-table-column>
      <el-table-column prop="dzsfywjjk" label="电站是否有微机监控" width="160"></el-table-column>
      <el-table-column prop="dzsyzxz" label="电站所有制性质" width="160"></el-table-column>
      <el-table-column prop="dztxdz" label="电站通讯地址" width="160"></el-table-column>
      <el-table-column prop="tjxn" label="调节性能" width="160"></el-table-column>
      <el-table-column prop="dlhsdwxz" label="独立核算单位性质" width="160"></el-table-column>
      <el-table-column prop="dnpjfdl" label="多年平均发电量(方千瓦时)" width="160"></el-table-column>
      <el-table-column prop="edst" label="额定水头(m)" width="160"></el-table-column>
      <el-table-column prop="fdjts" label="发电机台数" width="160"></el-table-column>
      <el-table-column prop="fdyyll" label="发电引用流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="fbzs" label="副坝座数" width="160"></el-table-column>
      <el-table-column prop="gcdb" label="工程等别" width="160"></el-table-column>
      <el-table-column prop="gcjsqk" label="工程建设情况" width="160"></el-table-column>
      <el-table-column prop="gcztj" label="工程总投资(万元)" width="160"></el-table-column>
      <el-table-column prop="gsdjdfrdwmc" label="工商登记的法人单位名称" width="160"></el-table-column>
      <el-table-column prop="gsdjzh" label="工商登记证号" width="160"></el-table-column>
      <el-table-column prop="jcsj" label="建成时间" width="160"></el-table-column>
      <el-table-column prop="jskgsj" label="建设开工时间" width="160"></el-table-column>
      <el-table-column prop="jstcsj" label="建设投产时间" width="160"></el-table-column>
      <el-table-column prop="kgsj" label="开工时间" width="160"></el-table-column>
      <el-table-column prop="kcsjjsqk" label="勘察设计建设情况" width="160"></el-table-column>
      <el-table-column prop="lczdqk" label="历次整顿情况" width="160"></el-table-column>
      <el-table-column prop="nfdl" label="年发电量(万千瓦时)" width="160"></el-table-column>
      <el-table-column prop="sjll" label="设计流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="sjnfdl" label="设计年发电量(kwh)" width="160"></el-table-column>
      <el-table-column prop="sjst" label="设计水头(m)" width="160"></el-table-column>
      <el-table-column prop="scazrk" label="生产安置人口(万人)" width="160"></el-table-column>
      <el-table-column prop="sshyxxygd" label="失事后影响下游耕地(亩)" width="160"></el-table-column>
      <el-table-column prop="sshyxxyrk" label="失事后影响下游人口(人)" width="160"></el-table-column>
      <el-table-column prop="sydwdjdfrdwmc" label="事业单位登记的法人单位名称" width="160"></el-table-column>
      <el-table-column prop="qsxkzh" label="取水许可证号" width="160"></el-table-column>
      <el-table-column prop="swxkzh" label="上网许可证号" width="160"></el-table-column>
      <el-table-column prop="kffs" label="开发方式" width="160"></el-table-column>
      <el-table-column prop="kfrw" label="开发任务(万立方米)" width="160"></el-table-column>
      <el-table-column prop="jzts" label="机组台数(台)" width="160"></el-table-column>
      <el-table-column prop="jsgzkgsj" label="技术改造开工时间" width="160"></el-table-column>
      <el-table-column prop="jsgznr" label="技术改造内容" width="160"></el-table-column>
      <el-table-column prop="jd" label="经度(度)" width="160"></el-table-column>
      <el-table-column prop="wd" label="纬度(度)" width="160"></el-table-column>
      <el-table-column prop="bqazrk" label="搬迁安置人口(万人)" width="160"></el-table-column>
      <el-table-column prop="bzcl" label="保证出力(kw)" width="160"></el-table-column>
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