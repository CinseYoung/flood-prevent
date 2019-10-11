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
      <el-table-column prop="szdxid" label="水闸对象ID" width="180"></el-table-column>
      <el-table-column prop="szmc" label="水闸名称" width="180"></el-table-column>
      <el-table-column prop="zljzrq" label="资料截止日期" width="120"></el-table-column>
      <el-table-column prop="jcrq" label="建成日期" width="120"></el-table-column>
      <el-table-column prop="ksyxrq" label="开始运行日期" width="120"></el-table-column>
      <el-table-column prop="szjm" label="水准基面" width="120"></el-table-column>
      <el-table-column prop="jdszjmwz" label="假定水准基面位置" width="120"></el-table-column>
      <el-table-column prop="shqk" label="损坏情况" width="120"></el-table-column>
      <el-table-column prop="jggkjqk" label="加固改扩建情况" width="120"></el-table-column>
      <el-table-column prop="szydsgcdxid" label="所在引调水工程对象ID" width="120"></el-table-column>
      <el-table-column prop="szqdxid" label="所在渠对象ID" width="120"></el-table-column>
      <el-table-column prop="szdfdxid" label="所在堤防对象ID" width="120"></el-table-column>
      <el-table-column prop="szszysjqdxid" label="所在水资源三级区对象ID" width="120"></el-table-column>
      <el-table-column prop="szhldxid" label="所在河流对象ID" width="120"></el-table-column>
      <el-table-column prop="szlydxid" label="所属流域对象ID" width="120"></el-table-column>
      <el-table-column prop="jd" label="经度" width="120"></el-table-column>
      <el-table-column prop="wd" label="纬度" width="120"></el-table-column>
      <el-table-column prop="qskdxid" label="取水口对象ID" width="120"></el-table-column>
      <el-table-column prop="zyjzwjb" label="主要建筑物级别" width="120"></el-table-column>
      <el-table-column prop="gldwdxid" label="管理单位对象ID" width="120"></el-table-column>
      <el-table-column prop="shgqdxid" label="所属灌区对象ID" width="120"></el-table-column>
      <el-table-column prop="szskdxid" label="所在水库对象ID" width="120"></el-table-column>
      <el-table-column prop="czdxid" label="测站对象ID" width="120"></el-table-column>
      <el-table-column prop="szxzqhdxid" label="所在行政区划对象ID" width="120"></el-table-column>
      <el-table-column prop="bzdxid" label="泵站对象ID" width="120"></el-table-column>
      <el-table-column prop="zrrdxid" label="自然人对象ID" width="120"></el-table-column>
      <el-table-column prop="dbssyddxid" label="地表水水源地对象ID" width="120"></el-table-column>
      <el-table-column prop="stbcqhdxid" label="水土保持区划对象ID" width="120"></el-table-column>
      <el-table-column prop="szxxwz" label="水闸详细位置" width="120"></el-table-column>
      <el-table-column prop="sfwtzgc" label="是否为套闸工程" width="120"></el-table-column>
      <el-table-column prop="kgrq" label="开工日期" width="120"></el-table-column>
      <el-table-column prop="szlx" label="水闸类型" width="120"></el-table-column>
      <el-table-column prop="sfwzzgc" label="是否为闸站工程" width="120"></el-table-column>
      <el-table-column prop="sfwzjgc" label="是否为在建工程" width="120"></el-table-column>
      <el-table-column prop="szjb" label="水闸级别" width="120"></el-table-column>
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