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
        { lablename: '行政区划对象ID', propname: 'XZQHDXID' },
        { lablename: '年度', propname: 'ND' },
        { lablename: '常住总人口', propname: 'CZZRK' },
        { lablename: '常住城镇总人口', propname: 'CZCZZRK' },
        { lablename: '常住乡村人口', propname: 'CZXCRK' },
        { lablename: '城镇登记失业率', propname: 'CZDJSYL' },
        { lablename: '农村劳动力', propname: 'NCLDL' },
        { lablename: '劳动力就业率（劳 动力资源利用率）', propname: 'LDLJYL' },
        { lablename: '户籍人口', propname: 'HJRK' },
        { lablename: '农业人口', propname: 'NYRK' },
        { lablename: '非农业人口', propname: 'FNYRK' },
        { lablename: '城镇人均住房面积', propname: 'CZRJZFMJ' },
        { lablename: '人均储蓄存款余额', propname: 'RJCXCKYE' },
        { lablename: '城镇居民人均可支 配收入', propname: 'CZJMRJKZPSR' },
        { lablename: '农村居民人均纯收 入', propname: 'NCJMRJCSR' },
        { lablename: '国民经济总产值', propname: 'GMJJZCZ' },
        { lablename: '国民经济第一产业产值', propname: 'GMJJDYCYCZ' },
        { lablename: '国民经济第二产业产值', propname: 'GMJJDECYCZ' },
        { lablename: '国民经济第三产业产值', propname: 'GMJJDSCYCZ' },
        { lablename: '农业生产值', propname: 'NYSCZ' },
        { lablename: '林业生产值', propname: 'LYSCZ' },
        { lablename: '牧业生产值', propname: 'MYSCZ' },
        { lablename: '渔业生产值', propname: 'YYSCZ' },
        { lablename: '第一产业纯收入', propname: 'DYCYCSR' },
        { lablename: '耕地面积', propname: 'GDMJ' },
        { lablename: '园地面积', propname: 'YDMJ' },
        { lablename: '林地面积', propname: 'LDMJ' },
        { lablename: '牧草地面积', propname: 'MCDMJ' },
        { lablename: '水域（养殖地）面 积', propname: 'SYMJ' },
        { lablename: '基本农田面积（水 田）', propname: 'JBNTMJ' },
        { lablename: '其他面积', propname: 'QTMJ' },
        { lablename: '粮食总产量', propname: 'LSZCL' },
        { lablename: '人均纯收入', propname: 'RJCSR' },
        { lablename: '牲畜存栏量', propname: 'SCCLL' },
        { lablename: '大牲畜年底头数', propname: 'DSCNDTS' },
        { lablename: '牛年末存栏头数', propname: 'NNMCLTS' },
        { lablename: '生猪年末存栏头数', propname: 'SZNMCLTS' },
        { lablename: '羊年末存栏只数', propname: 'YNMCLZS' },
        { lablename: '土地总面积', propname: 'TDZMJ' },
        { lablename: '填报单位', propname: 'TBDW' },
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
      this.api.get(this, 'data_sjgl_xzqh_shjjb', this.result, param)
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