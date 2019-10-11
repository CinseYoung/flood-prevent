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
      <el-table-column prop="czdxid" label="测站对象ID" width="180"></el-table-column>
      <el-table-column prop="zm" label="站码" width="120"></el-table-column>
      <el-table-column prop="station_name" label="测站名称" width="120"></el-table-column>
      <el-table-column prop="cxbh" label="垂线编号" width="160"></el-table-column>
      <el-table-column prop="cmbh" label="层面编号" width="160"></el-table-column>
      <el-table-column prop="stlx" label="水体类型" width="160"></el-table-column>
      <el-table-column prop="cysj" label="采样时间" width="160"></el-table-column>
      <el-table-column prop="qw" label="气温(摄氏度)" width="160"></el-table-column>
      <el-table-column prop="dqy" label="大气压(帕)" width="160"></el-table-column>
      <el-table-column prop="gzsj" label="光照时间(小时)" width="160"></el-table-column>
      <el-table-column prop="gzqd" label="光照强度" width="160"></el-table-column>
      <el-table-column prop="sw" label="水温(摄氏度)" width="160"></el-table-column>
      <el-table-column prop="ph" label="PH" width="160"></el-table-column>
      <el-table-column prop="ddl" label="电导率(微西门子每厘米)" width="160"></el-table-column>
      <el-table-column prop="yhhydw" label="氧化还原电位(mv)" width="160"></el-table-column>
      <el-table-column prop="sd" label="色度(度)" width="160"></el-table-column>
      <el-table-column prop="chou" label="臭" width="160"></el-table-column>
      <el-table-column prop="rykjw" label="肉眼可见物" width="160"></el-table-column>
      <el-table-column prop="zd" label="浊度(S)" width="160"></el-table-column>
      <el-table-column prop="tmd" label="透明度(米)" width="160"></el-table-column>
      <el-table-column prop="xfw" label="悬浮物(mg/l)" width="160"></el-table-column>
      <el-table-column prop="khd" label="矿化度(mg/l)" width="160"></el-table-column>
      <el-table-column prop="sd" label="酸度(mg/l)" width="160"></el-table-column>
      <el-table-column prop="zjd" label="总碱度(mg/l)" width="160"></el-table-column>
      <el-table-column prop="ztsy" label="重碳酸盐(mg/l)" width="160"></el-table-column>
      <el-table-column prop="tsy" label="碳酸盐(mg/l)" width="160"></el-table-column>
      <el-table-column prop="yleyht" label="游离二氧化碳(mg/l)" width="160"></el-table-column>
      <el-table-column prop="qsxeyht" label="侵蚀性二氧化碳(mg/l)" width="160"></el-table-column>
      <el-table-column prop="zgt" label="总固体(mg/l)" width="160"></el-table-column>
      <el-table-column prop="rjxzgt" label="溶解性总固体(mg/l)" width="160"></el-table-column>
      <el-table-column prop="zfsxa" label="总α放射性(贝克/升)" width="160"></el-table-column>
      <el-table-column prop="zfsxb" label="总β放射性(贝克/升)" width="160"></el-table-column>
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