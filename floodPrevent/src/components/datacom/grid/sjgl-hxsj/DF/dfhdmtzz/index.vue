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
      <el-table-column prop="clrq" label="测量日期" width="120"></el-table-column>
      <el-table-column prop="dmzh" label="断面桩号" width="120"></el-table-column>
      <el-table-column prop="dsdmwz" label="起始断面位置" width="120"></el-table-column>
      <el-table-column prop="dsdmzh" label="起始断面桩号" width="120"></el-table-column>
      <el-table-column prop="zqsdmjl" label="至起始断面距离(m)" width="120"></el-table-column>
      <el-table-column prop="qcdwz" label="起测点位置" width="120"></el-table-column>
      <el-table-column prop="qcdgc" label="起测点高程(m)" width="120"></el-table-column>
      <el-table-column prop="dstz" label="堤身土质" width="120"></el-table-column>
      <el-table-column prop="dsfsxs" label="堤身防渗形式" width="120"></el-table-column>
      <el-table-column prop="djdz" label="堤基地质" width="120"></el-table-column>
      <el-table-column prop="djfsxs" label="堤基防渗形式" width="120"></el-table-column>
      <el-table-column prop="dsjgd" label="堤身净高度(m)" width="120"></el-table-column>
      <el-table-column prop="ddgc" label="堤顶高程(m)" width="120"></el-table-column>
      <el-table-column prop="ddcg" label="堤顶超高(m)" width="120"></el-table-column>
      <el-table-column prop="ddkd" label="堤顶宽度(m)" width="120"></el-table-column>
      <el-table-column prop="yhmdjgc" label="迎河面堤脚高程(m)" width="120"></el-table-column>
      <el-table-column prop="bhmdjgc" label="背河面堤脚高程(m)" width="120"></el-table-column>
      <el-table-column prop="yhppb" label="迎河坡坡比" width="120"></el-table-column>
      <el-table-column prop="bhppb" label="背河坡坡比" width="120"></el-table-column>
      <el-table-column prop="yhphpqk" label="迎河坡护坡情况" width="120"></el-table-column>
      <el-table-column prop="bhphpqk" label="背河坡护坡情况" width="120"></el-table-column>
      <el-table-column prop="yhmtdkd" label="迎河面滩地宽度(m)" width="120"></el-table-column>
      <el-table-column prop="yhmptdgc" label="迎河面平台（前俄）顶高程(m)" width="120"></el-table-column>
      <el-table-column prop="yhmptdk" label="迎河面平台（前俄）顶宽(m)" width="120"></el-table-column>
      <el-table-column prop="yhmptpd" label="迎河面平台（前饿）坡度" width="120"></el-table-column>
      <el-table-column prop="bhmptdgc" label="背河面平台（后俄）顶高程(m)" width="120"></el-table-column>
      <el-table-column prop="bhmptdk" label="背河面平台（后俄）顶宽(m)" width="120"></el-table-column>
      <el-table-column prop="bhmptpd" label="背河面平台（后俄）坡度" width="120"></el-table-column>
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