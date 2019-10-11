<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      stripe
      border
      style="width:100%"
      :row-style="{height:'100px'}"
      :cell-style="{padding:'0px'}"
      :height="height"
    >
      <el-table-column type="index" :index="indexMethod" label="序号" width="100"></el-table-column>
      <el-table-column prop="jlr" label="记录人" width="100"></el-table-column>
      <el-table-column prop="jl_time" label="记录时间" width="160"></el-table-column>
      <el-table-column prop="content" label="内容" width="160" show-overflow-tooltip></el-table-column>
      <el-table-column label="录音" width="300">
        <template slot-scope="scope">
          <vue-audio-native
            size="small"
            :url="scope.row.ly"
            :hint="hint"
            :showDownload="false"
          ></vue-audio-native>
        </template>
      </el-table-column>
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
.el-table td {
  padding: 8px 0;
}
.el-tooltip__popper {
  font-size: 14px;
  max-width: 50%;
}
.vueAudioNative {
  height: 90px;
  .tip-hover {
    width: 45px;
  }
}
</style>