<template>
  <div style="height:100%">
    <yh-search @searchSubmit="searchSubmit"></yh-search>
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">用户管理</span>
        <el-button type="primary" size="mini" @click="addUser">增加</el-button>
      </div>
      <data-grid ref="dataGrid" @editUser="editUser" />
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show" />
    </div>
  </div>
</template>
<script>
import yhSearch from '@/components/system/search/zzqx-yh/index.vue'
import dataGrid from '@/components/system/grid/zzqx-yh/index.vue'
import grDialog from '@/components/common/dialog/index.vue'
export default {
  data() {
    return {
      dialogOptions: {},
      dialogVisible: false,
      dialogContentComponent: null,
      data: {},
      show: true
    }
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    addUser(data) {
      this.show = true
      this.dialogVisible = true
      this.dialogOptions = {
        width: '680px',
        title: '增加用户',
        saveBtn: '提交'
      }
      this.dialogContentComponent = () =>
        import('@/components/system/dialog/zzqx-yh/add-user.vue')
    },
    editUser() {
      this.show = true
      this.dialogVisible = true
      this.dialogOptions = {
        width: '680px',
        title: '编辑用户资料',
        saveBtn: '提交'
      }
      this.dialogContentComponent = () =>
        import('@/components/system/dialog/zzqx-yh/add-user.vue')
    }
  },
  components: {
    yhSearch,
    dataGrid,
    grDialog
  },
  created() {
    this.$emit('update:menuName', '用户管理')
  }
}
</script>
<style>
@import "~@/style/css/general-content.css";
</style>