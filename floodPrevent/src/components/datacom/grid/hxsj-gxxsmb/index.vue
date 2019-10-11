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
      <el-table-column prop="gxxlb" label="关系线类别" width="160"></el-table-column>
      <el-table-column prop="xh" label="线号" width="160"></el-table-column>
      <el-table-column prop="zblb" label="自变量名" width="160"></el-table-column>
      <el-table-column prop="yblb" label="因变量名" width="160"></el-table-column>
      <el-table-column prop="dxsjqsj" label="定线数据起时间" width="160"></el-table-column>
      <el-table-column prop="dxsjzsj" label="定线数据止时间" width="160"></el-table-column>
      <el-table-column prop="dxsjxxzblz" label="定线数据下限自变量值" width="160"></el-table-column>
      <el-table-column prop="dxsjsxzblz" label="定线数据上限自变量值" width="160"></el-table-column>
      <el-table-column prop="xcsbds" label="线参数表达式" width="160"></el-table-column>
      <el-table-column prop="gxtm" label="关系图名" width="160"></el-table-column>
      <el-table-column prop="syqqsj" label="适用期起时间" width="160"></el-table-column>
      <el-table-column prop="syqzsj" label="适用期止时间" width="160"></el-table-column>
      <el-table-column prop="dxdjzs" label="定线点据总数" width="160"></el-table-column>
      <el-table-column prop="dxff" label="定线方法" width="160"></el-table-column>
      <el-table-column prop="xtwc" label="系统误差" width="160"></el-table-column>
      <el-table-column prop="sjbqdd" label="随机不确定度" width="160"></el-table-column>
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