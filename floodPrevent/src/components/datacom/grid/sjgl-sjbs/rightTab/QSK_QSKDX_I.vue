<template>
  <div>
    <search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">取水口标识</span>
        <el-button type="success" size="mini" @click="seeYjclAdd">添加</el-button>
        <el-button  type="primary" size="mini" @click="exportFiles">导出</el-button>
        <el-upload
          class="upload-demo inline-block"
          ref="upload"
          action=""
          accept="xls,xlsx"
          :auto-upload="false">
          <el-button size="mini" type="warning">导入</el-button>
        </el-upload>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        stripe
        border
        :height="height"
      >
        <el-table-column
          type="index"
          label="序号"
          width="50">
        </el-table-column>
        
        <el-table-column v-for="(item, ind) of table_header" width="140" :key="ind" :show-overflow-tooltip="true" :prop="item.propname" :label="item.labelname"></el-table-column>

        <el-table-column label="操作" align="center" width="200" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleUpdate(scope.$index, scope.row)">
              修改
            </el-button>
            <el-button size="mini" type="danger" @click="handleDele(scope.$index, scope.row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show"/>
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
  </div>
</template>

<script>
import search from '@/components/datacom/search/sjgl-sjbs/QSK_QSKDX_I.vue'
import _dialog from '@/components/common/dialog/index.vue'

export default {
  data() {
    return {
      table_header: [
        { labelname: '取水口对象ID', propname: 'DXID' },
        { labelname: '对象名称', propname: 'DXMC' },
        { labelname: '对象编码', propname: 'DXBM' },
        { labelname: '标准编码', propname: 'BZBM' },
        { labelname: '普查编码', propname: 'PCBM' },
        { labelname: '数据来源', propname: 'SJLY' },
        { labelname: '是否消亡', propname: 'SFXW' },
        { labelname: '备注', propname: 'BZ' }
      ],
      currentPage: 1,
      pagePize: 15,
      tableData: [],
      height: 500,
      total: 0,
      canshu: {},

      dialogOptions: { },
      dialogVisible: false,
      dialogContentComponent: null,
      data: {},
      show: true
    }
  },
  components: {
    search,
    'gr-dialog': _dialog
  },
  created() {
    this.height = document.body.clientHeight - 320
    // this.load()
  },
  methods: {
    load(param) {
      this.api.get(this, 'data_sjgl_sjbs__QSK_QSKDX_I', this.result, param)
    },
    searchSubmit(data) {
      this.load(data)
    },
    result(data) {
      this.total = data.length
      this.tableData = data
    },
    searchResult(data) {
      this.load(data)
    },
    handleUpdate(index, row) {
      this.seeYjcl(row)
    },
    handleDele(index, row) {
      this.$confirm('是否确定删除该数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.tableData.splice(index, 1)
        this.total = this.tableData.length
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleSizeChange(val) {
      // this.pagePize = val
      this.canshu.pagesize = val
      this.load(this.canshu)
    },
    handleCurrentChange(val) {
      // this.currentPage = val
      this.canshu.page = val
      // this.load({ pagesize: this.pagePize, page: this.currentPage })
      this.load(this.canshu)
    },
    seeYjcl(data) {
      this.dialogOptions = { width: '720px', title: '修改', saveBtn: '提交' }
      this.data = data
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/sjgl-sjbs/QSK_QSKDX_I.vue')
    },
    seeYjclAdd() {
      this.dialogOptions = { width: '720px', title: '添加', saveBtn: '提交' }
      this.data = { }
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/sjgl-sjbs/QSK_QSKDX_I.vue')
    },
    exportFiles() {
      // window.location.href = window.URL.createObjectURL(new Blob([response.data], { type:     'application/vnd.ms-excel' }))
      this.utils.excel()
    }
  }
}
</script>

<style scoped lang="scss">
@import "../css/basic.scss";
</style>