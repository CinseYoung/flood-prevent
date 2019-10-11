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
      <el-table-column prop="bzdxid" label="泵站对象ID" width="120"></el-table-column>
      <el-table-column prop="czdxid" label="测站对象ID" width="120"></el-table-column>
      <el-table-column prop="sdcxh" label="率定次序号" width="120"></el-table-column>
      <el-table-column prop="clqsj" label="测流起时间" width="160"></el-table-column>
      <el-table-column prop="clzsj" label="测流止时间" width="160"></el-table-column>
      <el-table-column prop="jzh" label="机组号" width="160"></el-table-column>
      <el-table-column prop="zssw" label="站上水位(m)" width="160"></el-table-column>
      <el-table-column prop="zxsw" label="站下水位(m)" width="160"></el-table-column>
      <el-table-column prop="swc" label="水位差(m)" width="160"></el-table-column>
      <el-table-column prop="zsst" label="站上水头(m)" width="160"></el-table-column>
      <el-table-column prop="kjgl" label="开机功率(kw)" width="160"></el-table-column>
      <el-table-column prop="kjts" label="开机台数" width="160"></el-table-column>
      <el-table-column prop="kjypjd" label="开机叶片角度(度)" width="160"></el-table-column>
      <el-table-column prop="ylzj" label="叶轮直径(m)" width="160"></el-table-column>
      <el-table-column prop="sjzs" label="实际转速(m/s)" width="160"></el-table-column>
      <el-table-column prop="csfgsmj" label="出水阀过水面积(m²)" width="160"></el-table-column>
      <el-table-column prop="scll" label="实测流量(m³/s)" width="160"></el-table-column>
      <el-table-column prop="scllzjm" label="实测流量注解码" width="160"></el-table-column>
      <el-table-column prop="xljsgs" label="效率计算公式编号" width="160"></el-table-column>
      <el-table-column prop="zblm" label="自变量名" width="160"></el-table-column>
      <el-table-column prop="zblz" label="自变量值" width="160"></el-table-column>
      <el-table-column prop="xlz" label="效率值" width="160"></el-table-column>
      <el-table-column prop="xlzzjm" label="效率值注解码" width="160"></el-table-column>
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