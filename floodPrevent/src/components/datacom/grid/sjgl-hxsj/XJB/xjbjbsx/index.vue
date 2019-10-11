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
      <el-table-column prop="szdxid" label="橡胶坝对象ID" width="180"></el-table-column>
      <el-table-column prop="szmc" label="橡胶坝名称" width="180"></el-table-column>
      <el-table-column prop="zljzrq" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="xzqhdxid" label="行政区划对象ID" width="120"></el-table-column>
      <el-table-column prop="czdxid" label="测站对象ID" width="120"></el-table-column>
      <el-table-column prop="qd_dxid" label="渠道标-渠道对象ID" width="120"></el-table-column>
      <el-table-column prop="dw_dwid" label="单位标 单位对象ID" width="120"></el-table-column>
      <el-table-column prop="hldxid" label="河流对象ID" width="120"></el-table-column>
      <el-table-column prop="lydxid" label="流域对象ID" width="120"></el-table-column>
      <el-table-column prop="szyfqdxid" label="水资源分区对象ID" width="120"></el-table-column>
      <el-table-column prop="dbssyddxid" label="地表水水源地对象ID" width="120"></el-table-column>
      <el-table-column prop="zrrdxid" label="自然人对象ID" width="120"></el-table-column>
      <el-table-column prop="ydsgcdxid" label="引调水工程对象ID" width="120"></el-table-column>
      <el-table-column prop="gqdxid" label="灌区对象ID" width="120"></el-table-column>
      <el-table-column prop="stbcqhdxid" label="水土保持区划对象ID" width="120"></el-table-column>
      <el-table-column prop="sjbg" label="设计坝高(m)" width="120"></el-table-column>
      <el-table-column prop="dsfs" label="挡水方式" width="120"></el-table-column>
      <el-table-column prop="cpfs" label="充排方式" width="120"></el-table-column>
      <el-table-column prop="czjz" label="充胀介质" width="120"></el-table-column>
      <el-table-column prop="cpxysj" label="充排需要时间(分)" width="120"></el-table-column>
      <el-table-column prop="btbz" label="坝体布置" width="120"></el-table-column>
      <el-table-column prop="bdcd" label="坝顶长度(m)" width="120"></el-table-column>
      <el-table-column prop="ks" label="跨数(跨)" width="120"></el-table-column>
      <el-table-column prop="dkzdkd" label="单跨最大跨度(m)" width="120"></el-table-column>
      <el-table-column prop="mgjgxs" label="锚固结构形式" width="120"></el-table-column>
      <el-table-column prop="xhfycs" label="泄洪放淤措施" width="120"></el-table-column>
      <el-table-column prop="xnfs" label="消能方式" width="120"></el-table-column>
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