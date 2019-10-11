<template>
  <div style="height:100%">
    <zzjg-search @searchZzjg="searchZzjg"></zzjg-search>
    <div class="gr-datagrid">
      <div class="gr-tag">
        <span class="data-title">组织机构</span>
      </div>
      <data-grid ref="dataGrid" @setOrganize="setOrganize" />
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show" @searchZzjg="searchZzjg" />
  </div>
</template>
<script>
import zzjgSearch from '@/components/system/search/zzqx-zzjg/index.vue'
import dataGrid from '@/components/system/grid/zzqx-zzjg/index.vue'
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
    zzjgSearch
  },
  created() {
    this.$emit('update:menuName', '组织机构')
  },
  methods: {
    reload() {
      this.$refs.dataGrid.searchZzjg()
    },
    searchZzjg(data) {
      this.$refs.dataGrid.searchZzjg(data)
    },
    setOrganize(data) {
      this.data = data
      this.show = true
      this.dialogVisible = true
      this.dialogOptions = { width: '680px', title: '设置上级单位', saveBtn: '提交' }
      this.dialogContentComponent = () => import('@/components/system/dialog/zzqx-zzjg/add-jg.vue')
    }
  }
}
</script>