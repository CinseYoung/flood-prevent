<template>
  <div style="height:100%">
    <qx-search></qx-search>
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">权限管理</span>
      </div>
      <data-grid ref="dataGrid" @setOrganize="setOrganize" />
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show" />
  </div>
</template>
<script>
import qxSearch from '@/components/system/search/zzqx-qx/index.vue'
import dataGrid from '@/components/system/grid/zzqx-qx/index.vue'
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
  components: {
    dataGrid,
    grDialog,
    qxSearch
  },
  created() {
    this.$emit('update:menuName', '权限管理')
  },
  methods: {
    setOrganize(data) {
      this.show = true
      this.dialogVisible = true
      this.dialogOptions = { width: '680px', title: '设置权限', saveBtn: '提交' }
      this.dialogContentComponent = () => import('@/components/system/dialog/zzqx-qx/set-qx.vue')
    }
  }
}
</script>