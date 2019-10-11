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
      <el-table-column v-for="(item, ind) of table_header" width="140" :key="ind" :show-overflow-tooltip="true" :prop="item.propname" :label="item.lablename"></el-table-column>
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
export default {
  data() {
    return {
      table_header: [
        { lablename: 'GUID', propname: 'GUID' },
        { lablename: '采砂对象ID', propname: 'CSDXID' },
        { lablename: '年度', propname: 'ND' },
        { lablename: '可采区名称', propname: 'KCQMC' },
        { lablename: '采区批准文号', propname: 'CQPZWH' },
        { lablename: '采区规划文号', propname: 'CQGHWH' },
        { lablename: '允许采砂时段开始月份', propname: 'YXCSSDKSYF' },
        { lablename: '允许米砂时段截止月份', propname: 'YXCSSDJZYF' },
        { lablename: '采砂区的平面位置控制坐标', propname: 'CSQDPMWZKZZB' },
        { lablename: '规划采区面积', propname: 'GHCQMJ' },
        { lablename: '米区河床高程', propname: 'CQHCGC' },
        { lablename: '开采控制深度', propname: 'KCKZSD' },
        { lablename: '规划米砂量', propname: 'GHCSL' },
        { lablename: '年度采砂控制总里', propname: 'NDCSKZZL' },
        { lablename: '采砂船控制数量', propname: 'CSCKZSL' },
        { lablename: '控制开采高程', propname: 'KZKCGC' },
        { lablename: '禁采期开始月份', propname: 'JCQKSYF' },
        { lablename: '禁采期结束月份', propname: 'JCQJSYF' },
        { lablename: '采区批准年限', propname: 'CQPZNX' },
        { lablename: '采区长度', propname: 'CQZD' },
        { lablename: '采区宽度', propname: 'CQKD' },
        { lablename: '招标情况', propname: 'ZBQK' },
        { lablename: '基本情况介绍', propname: 'JBQKJS' },
        { lablename: '时间戳', propname: 'SJC' },
        { lablename: '创建时间', propname: 'CJSJ' },
        { lablename: '最后更新时间', propname: 'ZHGXSJ' },
        { lablename: '数据来源', propname: 'SJLY' },
        { lablename: '备注', propname: 'BZ' }
      ],
      currentPage: 1,
      pagePize: 15,
      tableData: [],
      height: 500,
      total: 0,
      canshu: {}
    }
  },
  created() {
    this.height = document.body.clientHeight - 267
  },
  methods: {
    load(param) {
      this.api.get(this, 'data_sjgl_cskcqjbsx', this.result, param)
    },
    result(data) {
      this.total = data.length
      this.tableData = data
    },
    handleSizeChange(val) {
      this.canshu.pagesize = val
      this.load(this.canshu)
    },
    handleCurrentChange(val) {
      this.canshu.page = val
      this.load(this.canshu)
    },
    searchSubmit(data) {
      if (data === undefined) data = {}
      data.pagesize = this.pagePize
      data.page = this.currentPage
      this.canshu = data
      this.load(data)
    }
  }
}

</script>

<style scoped>
@import "../css/basic.css";
</style>