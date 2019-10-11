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
      <el-table-column
        type="index"
        label="序号"
        width="50">
      </el-table-column>
      <el-table-column prop="BM" label="表明" width="180"></el-table-column>
      <el-table-column prop="BSF" label="标识符" width="180"></el-table-column>
      <el-table-column prop="BFLX" label="备份类型" width="180"></el-table-column>
      <el-table-column prop="BFTS" label="备份条数" width="180"></el-table-column>
      <el-table-column prop="SJDX" label="数据大小" width="180"></el-table-column>
      <el-table-column prop="ZHSJC" label="最后时间戳" width="180"></el-table-column>
      <el-table-column prop="SFSC" label="是否上传备份空间" width="180"></el-table-column>
      <el-table-column prop="BFSJ" label="备份时间" width="180"></el-table-column>
      <!-- <el-table-column label="操作" align="center" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="success" size="mini" @click="runstart(scope.$index, scope.row)" v-if="scope.row.state == '关闭'">
            启动
          </el-button>
          <el-button size="mini" type="info" @click="runend(scope.$index, scope.row)" v-else>
            关闭
          </el-button>
        </template>
      </el-table-column> -->
      <el-table-column label="操作" align="center" width="260" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="reduction(scope.$index, scope.row)">
            还原
          </el-button>
          <el-button type="primary" size="mini" @click="upload_backup(scope.$index, scope.row)" :disabled="scope.row.SFSC === '是'">
            上传备份文件
          </el-button>
          <!-- <el-button size="mini" type="danger" @click="handleDele(scope.$index, scope.row)">
            删除模型
          </el-button> -->
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
.el-table td {padding: 8px 0;}
.gutter {
  width: 17px;
  display: block;
}
</style>