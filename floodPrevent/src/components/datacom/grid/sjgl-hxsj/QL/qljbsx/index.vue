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
      <el-table-column prop="qldxid" label="桥梁对象ID" width="180"></el-table-column>
      <el-table-column prop="qlmc" label="桥梁名称" width="120"></el-table-column>
      <el-table-column prop="jljzrq" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="dxid" label="流域对象ID" width="120"></el-table-column>
      <el-table-column prop="hl_dxid" label="河流对象ID" width="120"></el-table-column>
      <el-table-column prop="stb_dxid" label="水土保持区划对象ID" width="120"></el-table-column>
      <el-table-column prop="dw_dxid" label="单位对象ID" width="120"></el-table-column>
      <el-table-column prop="szydxid" label="水资源分区对象ID(m)" width="120"></el-table-column>
      <el-table-column prop="syddxid" label="地表水水源地对象ID" width="120"></el-table-column>
      <el-table-column prop="sgn_dxid" label="水功能区对象ID" width="120"></el-table-column>
      <el-table-column prop="zrr_dxid" label="自然人对象ID" width="120"></el-table-column>
      <el-table-column prop="df_dxid" label="堤防对象ID" width="120"></el-table-column>
      <el-table-column prop="zqlx" label="主桥类型" width="120"></el-table-column>
      <el-table-column prop="zqz" label="主桥长(m)" width="120"></el-table-column>
      <el-table-column prop="fqlx" label="副桥类型" width="120"></el-table-column>
      <el-table-column prop="fqz" label="副桥长(m)" width="120"></el-table-column>
      <el-table-column prop="zqmk" label="主桥面宽(m)" width="120"></el-table-column>
      <el-table-column prop="fqmk" label="副桥面宽(m)" width="120"></el-table-column>
      <el-table-column prop="zqmzgdgc" label="主桥面最高点高程(m)" width="120"></el-table-column>
      <el-table-column prop="zqldgc" label="主桥梁底高程(m)" width="120"></el-table-column>
      <el-table-column prop="zqks" label="主桥孔数(孔)" width="120"></el-table-column>
      <el-table-column prop="fqks" label="副桥孔数(孔)" width="120"></el-table-column>
      <el-table-column prop="zqqkjkd" label="主桥桥孔净跨度(m)" width="120"></el-table-column>
      <el-table-column prop="qlsjhz" label="桥梁设计荷载(千牛)" width="120"></el-table-column>
      <el-table-column prop="thyxhdqldyx" label="通航与行洪对桥梁的影响" width="120"></el-table-column>
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