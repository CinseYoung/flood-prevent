<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">雨情汛情</span>
        <el-button type="primary" size="mini" @click="startYjxy">启动应急响应</el-button>
      </div>
      <data-grid ref="dataGrid" @funx="seeYjxy" @chuangkou="seeZd"/>
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show"/>
  </div>
</template>
<script>
import search from '@/components/system/search/xqzs-xq/index.vue'
import datagrid from '@/components/system/grid/xqzs-xq/index.vue'
import _dialog from '@/components/common/dialog/index.vue'
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
  components: { 'dz-search': search, 'data-grid': datagrid, 'gr-dialog': _dialog },
  created() {
    this.$emit('update:menuName', '雨情汛情')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    startYjxy() {
      this.$refs.dataGrid.startYjxy()
    },
    seeYjxy(data) {
      this.show = true
      this.dialogVisible = true
      this.dialogOptions = { width: '680px', title: '启动应急响应', saveBtn: '提交' }
      this.dialogContentComponent = () => import('@/components/system/dialog/xqzs-xq/yjxy.vue')
    },
    seeZd(data) {
      this.data = data
      this.show = false
      this.dialogOptions = { width: '1200px', title: '站点过程线', saveBtn: '提交' }
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/system/dialog/xqzs-xq/gcx.vue')
    }
  }
}
</script>
<style >
 @import "../../../style/css/general-content.css";
</style>