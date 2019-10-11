<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">雨情汛情</span>
      </div>
      <data-grid ref="dataGrid" @funx="seeYjcl"/>
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show"/>
  </div>
</template>
<script>
import search from '@/components/system/search/xqzs-yj/index.vue'
import datagrid from '@/components/system/grid/xqzs-yj/index.vue'
import _dialog from '@/components/common/dialog/index.vue'
export default {
  data() {
    return {
      dialogOptions: { width: '680px', title: '应急处理', saveBtn: '提交' },
      dialogVisible: false,
      dialogContentComponent: null,
      data: {},
      show: true
    }
  },
  components: { 'dz-search': search, 'data-grid': datagrid, 'gr-dialog': _dialog },
  created() {
    this.$emit('update:menuName', '应急响应')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    seeYjcl(data) {
      this.data = data
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/system/dialog/xqzs-yj/yjcl.vue')
    }
  }
}
</script>
<style >
 @import "../../../style/css/general-content.css";
</style>