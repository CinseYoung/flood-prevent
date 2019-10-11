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
      <el-table-column prop="szhl" label="所在河流" width="120"></el-table-column>
      <el-table-column prop="szhp" label="所在湖泊" width="120"></el-table-column>
      <el-table-column prop="czdxid" label="测站对象ID" width="120"></el-table-column>
      <el-table-column prop="ly_dxid" label="流域标_流域对象ID" width="120"></el-table-column>
      <el-table-column prop="qd_dxid" label="渠道标_渠道对象ID" width="120"></el-table-column>
      <el-table-column prop="zrrdxid" label="自然人对象ID" width="120"></el-table-column>
      <el-table-column prop="dwdxid" label="单位对象ID" width="120"></el-table-column>
      <el-table-column prop="xzqhdxid" label="行政区划对象ID" width="120"></el-table-column>
      <el-table-column prop="stbcqhdxid" label="水土保持区划对象ID" width="120"></el-table-column>
      <el-table-column prop="szyfqdxid" label="水资源分区对象ID" width="120"></el-table-column>
      <el-table-column prop="csdxid" label="采砂对象ID" width="120"></el-table-column>
      <el-table-column prop="sjsw" label="设计水（高潮）位(m)" width="120"></el-table-column>
      <el-table-column prop="szsl" label="水闸数量(个)" width="120"></el-table-column>
      <el-table-column prop="hlab" label="河流岸别" width="120"></el-table-column>
      <el-table-column prop="kgsj" label="开工时间" width="120"></el-table-column>
      <el-table-column prop="qddlzbdj" label="起点地理坐标东经" width="120"></el-table-column>
      <el-table-column prop="dfgcgldwbm" label="堤防工程管理单位编码" width="120"></el-table-column>
      <el-table-column prop="zdwzx" label="终点位置乡" width="120"></el-table-column>
      <el-table-column prop="zdwzc" label="终点位置村" width="120"></el-table-column>
      <el-table-column prop="dfcd" label="堤防长度(m)" width="120"></el-table-column>
      <el-table-column prop="ddkd" label="堤顶宽度（最大值）（m）" width="120"></el-table-column>
      <el-table-column prop="ddgc" label="堤顶高程（终点高程）（m）" width="120"></el-table-column>
      <el-table-column prop="jcsj" label="建成时间" width="120"></el-table-column>
      <el-table-column prop="qddlzbbw" label="起点地理坐标北纬（度）" width="120"></el-table-column>
      <el-table-column prop="ghfhbz" label="规划防洪（潮）标准(年)" width="120"></el-table-column>
      <el-table-column prop="dfmc" label="堤防名称" width="120"></el-table-column>
      <el-table-column prop="dqsh" label="地区审核" width="120"></el-table-column>
      <el-table-column prop="dfgcgkglbm" label="堤防工程归口管理部门" width="120"></el-table-column>
      <el-table-column prop="zdxzqhdm" label="终点行政区划代码" width="120"></el-table-column>
      <el-table-column prop="dfgd" label="堤防高度（最大值）（m）" width="120"></el-table-column>
      <el-table-column prop="ddkdzxz" label="堤顶宽度（最小值）（m）" width="120"></el-table-column>
      <el-table-column prop="bzsl" label="泵站数量（处）" width="120"></el-table-column>
      <el-table-column prop="dfgcgldwmc" label="堤防工程管理单位名称" width="120"></el-table-column>
      <el-table-column prop="gcjsqk" label="工程建设情况" width="120"></el-table-column>
      <el-table-column prop="gcrw" label="工程任务" width="120"></el-table-column>
      <el-table-column prop="qdwzx" label="起点位置县" width="120"></el-table-column>
      <el-table-column prop="qdwzj" label="起点位置街（村）" width="120"></el-table-column>
      <el-table-column prop="dsgc" label="挡水高程(m)" width="120"></el-table-column>
      <el-table-column prop="ddghfhbzdcd" label="达到规划防洪（潮）标准的长度(m)" width="120"></el-table-column>
      <el-table-column prop="dfgdzxz" label="堤防高度（最小值）(m)" width="120"></el-table-column>
      <el-table-column prop="ghsl" label="管涵数量(个)" width="120"></el-table-column>
      <el-table-column prop="qdwzdq" label="起点位置地区" width="120"></el-table-column>
      <el-table-column prop="zdwzs" label="终点位置省" width="120"></el-table-column>
      <el-table-column prop="gcxt" label="高程系统" width="120"></el-table-column>
      <el-table-column prop="zddlzbbw" label="终点地理坐标北纬(度)" width="120"></el-table-column>
      <el-table-column prop="szhlmc" label="所在河流（湖泊、海岸）名称" width="120"></el-table-column>
      <el-table-column prop="qdwzs" label="起点位置省" width="120"></el-table-column>
      <el-table-column prop="dfxs" label="堤防型式" width="120"></el-table-column>
      <el-table-column prop="qdxzqhdm" label="起点行政区划代码" width="120"></el-table-column>
      <el-table-column prop="dflx" label="堤防类型" width="120"></el-table-column>
      <el-table-column prop="zdwzx" label="终点位置县" width="120"></el-table-column>
      <el-table-column prop="zdwzdq" label="终点位置地区" width="120"></el-table-column>
      <el-table-column prop="qdwzx" label="起点位置乡（镇）" width="120"></el-table-column>
      <el-table-column prop="dfjb" label="堤防级别" width="120"></el-table-column>
      <el-table-column prop="dfkjqk" label="堤防跨界情况" width="120"></el-table-column>
      <el-table-column prop="zddlzbdj" label="终点地理坐标东经(度)" width="120"></el-table-column>
      <el-table-column prop="dfqdwz" label="堤防（段）起点位置" width="120"></el-table-column>
      <el-table-column prop="gldwdm" label="管理单位代码" width="120"></el-table-column>
      <el-table-column prop="dfqdzh" label="堤防（段）起点桩号" width="120"></el-table-column>
      <el-table-column prop="dfzdwz" label="堤防（段）终点位置" width="120"></el-table-column>
      <el-table-column prop="dzjbld" label="地震基本烈度(度)" width="120"></el-table-column>
      <el-table-column prop="dfzdzh" label="堤防〔段）终点桩号" width="120"></el-table-column>
      <el-table-column prop="dzsjld" label="地震设计烈度(度)" width="120"></el-table-column>
      <el-table-column prop="pxdd" label="平、险堤段" width="120"></el-table-column>
      <el-table-column prop="szjm" label="水准基面" width="120"></el-table-column>
      <el-table-column prop="jdszjmwz" label="假定水准基面位置" width="120"></el-table-column>
      <el-table-column prop="qkjs" label="情况介绍" width="120"></el-table-column>
      <el-table-column prop="qdddgc" label="起点堤顶高程(m)" width="120"></el-table-column>
      <el-table-column prop="zdddgc" label="终点堤顶高程(m)" width="120"></el-table-column>
      <el-table-column prop="zddg" label="最大堤高(m)" width="120"></el-table-column>
      <el-table-column prop="zddgszzh" label="最大堤高所在桩号" width="120"></el-table-column>
      <el-table-column prop="zxdg" label="最小堤高(m)" width="120"></el-table-column>
      <el-table-column prop="zxdgszzh" label="最小堤高所在桩号" width="120"></el-table-column>
      <el-table-column prop="ybdg" label="—般堤高" width="120"></el-table-column>
      <el-table-column prop="zdddk" label="最大堤顶宽(m)" width="120"></el-table-column>
      <el-table-column prop="zdddkszzh" label="最大堤顶宽所在桩号" width="120"></el-table-column>
      <el-table-column prop="zzddk" label="最窄堤顶宽(m)" width="120"></el-table-column>
      <el-table-column prop="zzddkszzh" label="最窄堤顶宽所在桩号" width="120"></el-table-column>
      <el-table-column prop="ddpjkd" label="堤顶平均宽度(m)" width="120"></el-table-column>
      <el-table-column prop="ddlmxs" label="堤顶路面型式" width="120"></el-table-column>
      <el-table-column prop="zyazddj" label="左右岸最大堤距(m)" width="120"></el-table-column>
      <el-table-column prop="zyazxdj" label="左右岸最小堤距(m)" width="120"></el-table-column>
      <el-table-column prop="zyapjdj" label="左右岸平均堤距(m)" width="120"></el-table-column>
      <el-table-column prop="hpcs" label="护坡处数(处)" width="120"></el-table-column>
      <el-table-column prop="hpzcd" label="护坡总长度(m)" width="120"></el-table-column>
      <el-table-column prop="glhzcs" label="关联涵闸处数(处)" width="120"></el-table-column>
      <el-table-column prop="czwt" label="存在问题" width="120"></el-table-column>
      <el-table-column prop="sjc" label="时间戳" width="160"></el-table-column>
      <el-table-column prop="sjly" label="数据来源" width="160"></el-table-column>
      <el-table-column prop="cjsj" label="创建时间" width="160"></el-table-column>
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