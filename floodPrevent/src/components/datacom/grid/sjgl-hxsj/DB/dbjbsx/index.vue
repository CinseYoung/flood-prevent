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
      <el-table-column prop="dbdxid" label="大坝对象ID" width="180"></el-table-column>
      <el-table-column prop="dbmc" label="大坝名称" width="120"></el-table-column>
      <el-table-column prop="jzwmc" label="建筑物名称" width="160"></el-table-column>
      <el-table-column prop="zljzrq" label="资料截止日期" width="160"></el-table-column>
      <el-table-column prop="gldwdxid" label="管理单位对象ID" width="160"></el-table-column>
      <el-table-column prop="yzqhdxid" label="行政区划对象ID" width="160"></el-table-column>
      <el-table-column prop="lydxid" label="流域对象ID" width="160"></el-table-column>
      <el-table-column prop="hldxid" label="河流对象ID" width="160"></el-table-column>
      <el-table-column prop="czdxid" label="测站对象ID" width="160"></el-table-column>
      <el-table-column prop="qskdxid" label="取水口对象ID" width="160"></el-table-column>
      <el-table-column prop="skdxid" label="水库对象ID" width="160"></el-table-column>
      <el-table-column prop="zrrdxid" label="自然人对象ID" width="160"></el-table-column>
      <el-table-column prop="szyfqdxid" label="水资源分区对象ID" width="160"></el-table-column>
      <el-table-column prop="stbcqhdxid" label="水土保持区划对象ID" width="160"></el-table-column>
      <el-table-column prop="jzwjb" label="建筑物级别" width="160"></el-table-column>
      <el-table-column prop="bxcl" label="坝型（按材料分）" width="160"></el-table-column>
      <el-table-column prop="bxjg" label="坝型（按结构分）" width="160"></el-table-column>
      <el-table-column prop="bzxzddjd" label="坝轴线左端点经度(度)" width="160"></el-table-column>
      <el-table-column prop="bzxzddwd" label="坝轴线左端点纬度(度)" width="160"></el-table-column>
      <el-table-column prop="dzjbld" label="地震基本烈度(度)" width="160"></el-table-column>
      <el-table-column prop="dzsjld" label="地震设计烈度(度)" width="160"></el-table-column>
      <el-table-column prop="zdbg" label="最大坝高(m)" width="160"></el-table-column>
      <el-table-column prop="bdkd" label="坝顶宽度(m)" width="160"></el-table-column>
      <el-table-column prop="bdcd" label="坝顶长度(m)" width="160"></el-table-column>
      <el-table-column prop="bdgc" label="坝顶高程(m)" width="160"></el-table-column>
      <el-table-column prop="btfsxs" label="坝体防渗形式" width="160"></el-table-column>
      <el-table-column prop="fstdmgc" label="防渗体顶面高程(m)" width="160"></el-table-column>
      <el-table-column prop="flqdgc" label="防浪墙顶高程(m)" width="160"></el-table-column>
      <el-table-column prop="sybp" label="上游坝坡" width="160"></el-table-column>
      <el-table-column prop="xybp" label="下游坝坡" width="160"></el-table-column>
      <el-table-column prop="bjdz" label="坝基地质" width="160"></el-table-column>
      <el-table-column prop="bjfscs" label="坝基防渗措施" width="160"></el-table-column>
      <el-table-column prop="gjqk" label="改建情况" width="160"></el-table-column>
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