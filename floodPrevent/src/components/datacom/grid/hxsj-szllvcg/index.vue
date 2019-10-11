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
      <el-table-column prop="sdcxh" label="率定次序号" width="160"></el-table-column>
      <el-table-column prop="clqsj" label="测流起时间" width="160"></el-table-column>
      <el-table-column prop="zzh" label="闸组号" width="160"></el-table-column>
      <el-table-column prop="clzsj" label="测流止时间" width="160"></el-table-column>
      <el-table-column prop="zssw" label="闸上水位(m)" width="160"></el-table-column>
      <el-table-column prop="zxsw" label="闸下水位(m)" width="160"></el-table-column>
      <el-table-column prop="zsst" label="闸上水头(m)" width="160"></el-table-column>
      <el-table-column prop="zxst" label="闸下水头(m)" width="160"></el-table-column>
      <el-table-column prop="swc" label="水位差(m)" width="160"></el-table-column>
      <el-table-column prop="zmkqpjgd" label="闸门开启平均高度" width="160"></el-table-column>
      <el-table-column prop="zmkqpjgdzjm" label="闸门开启平均高度注解码" width="160"></el-table-column>
      <el-table-column prop="zmkqks" label="闸门开启孔数" width="160"></el-table-column>
      <el-table-column prop="zmkqzk" label="闸门开启总宽(m)" width="160"></el-table-column>
      <el-table-column prop="pjyk" label="平均堰宽(m)" width="160"></el-table-column>
      <el-table-column prop="zkgsmj" label="闸孔过水面积(m²)" width="160"></el-table-column>
      <el-table-column prop="scll" label="实测流量" width="160"></el-table-column>
      <el-table-column prop="scllzjm" label="实测流量注解码" width="160"></el-table-column>
      <el-table-column prop="lt" label="流态" width="160"></el-table-column>
      <el-table-column prop="lljsgsbh" label="流量计算公式编号" width="160"></el-table-column>
      <el-table-column prop="zblm" label="自变量名" width="160"></el-table-column>
      <el-table-column prop="zblz" label="自变量值" width="160"></el-table-column>
      <el-table-column prop="llxs" label="流量系数" width="160"></el-table-column>
      <el-table-column prop="llxszjm" label="流量系数注解码" width="160"></el-table-column>
      <el-table-column prop="cldmwz" label="测流断面位置" width="160"></el-table-column>
      <el-table-column prop="clff" label="测流方法" width="160"></el-table-column>
      <el-table-column prop="dmgsmj" label="断面过水面积(m²)" width="160"></el-table-column>
      <el-table-column prop="dmgsmjzjm" label="断面过水面积注解码" width="160"></el-table-column>
      <el-table-column prop="dmpjls" label="断面平均流速(m/s)" width="160"></el-table-column>
      <el-table-column prop="ccsm" label="测次说明" width="160"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
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