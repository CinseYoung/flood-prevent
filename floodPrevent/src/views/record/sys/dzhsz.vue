<template>
  <div style="height:60%;">
    <search @searchSubmit="searchSubmit" :selectData="selectData"/>
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">电子回收站列表</span>
        <el-button type="primary" size="mini" @click="recovery">档案恢复</el-button>
        <el-button type="warning" size="mini" @click="deleted">彻底删除</el-button>
      </div>
      <data-grid ref="dataGrid" @funx="see" :selectData.sync="selectData"/>
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data"/>
  </div>
</template>
<script>
import search from '@/components/recode/search/dzhsz/index.vue'
import datagrid from '@/components/recode/grid/dzhsz/index.vue'
import _dialog from '@/components/common/dialog/index.vue'

export default {
  data() {
    return {
      dialogOptions: { width: '680px', title: '查看电子档案信息', saveBtn: '保存' },
      dialogVisible: false,
      dialogContentComponent: null,
      data: {},
      selectData: []
    }
  },
  components: { 'search': search, 'data-grid': datagrid, 'gr-dialog': _dialog },
  created() {
    this.$emit('update:menuName', '电子回收站')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    }, recovery() {
      this.$refs.dataGrid.recovery()
    }, deleted() {
      this.$refs.dataGrid.deleted()
    }, see(data) {
      this.dialogVisible = true
      this.data = data
      this.dialogContentComponent = () => import('@/components/recode/dialog/dzhsz/see.vue')
    }
  }
}
</script>