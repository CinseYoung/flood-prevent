<template>
  <div style="height:60%;">
    <search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">借阅列表</span>
        <el-button type="primary" size="mini" @click="add">新建</el-button>
      </div>
      <data-grid ref="dataGrid" />
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent"/>
  </div>
</template>
<script>
import search from '@/components/recode/search/jy/index.vue'
import datagrid from '@/components/recode/grid/jy/index.vue'
import _dialog from '@/components/common/dialog/index.vue'
export default {
  data() {
    return {
      dialogOptions: { width: '680px', title: '新增借阅', saveBtn: '保存' },
      dialogVisible: false,
      dialogContentComponent: null
    }
  },
  components: { 'search': search, 'data-grid': datagrid, 'gr-dialog': _dialog },
  created() {
    this.$emit('update:menuName', '借阅信息')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    add() {
      this.handleCommand()
    },
    handleCommand(data) {
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/recode/dialog/jy/add.vue')
    }
  }
}
</script>