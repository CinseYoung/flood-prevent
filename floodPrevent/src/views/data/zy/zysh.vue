<template>
  <div style="height:100%;">
    <search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
       <div class="gr-tag">
        <span class="data-title">资源审核</span>
      </div>
      <datagrid ref="dataGrid" @funx="seeYjcl" />
      <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show"/>
    </div>
  </div>
</template>

<script>
import datagrid from '@/components/datacom/grid/zysh/index.vue'
import search from '@/components/datacom/search/zysh/index.vue'
import _dialog from '@/components/common/dialog/index.vue'

export default {
  data() {
    return {
      dialogOptions: { width: '680px', title: '审核', saveBtn: '提交' },
      dialogVisible: false,
      dialogContentComponent: null,
      data: {},
      show: true
    }
  },
  created() {
    this.$emit('update:menuName', '资源目录审核')
  },
  methods: {
    searchSubmit(data) {
      this.$refs.dataGrid.searchSubmit(data)
    },
    seeYjcl(data) {
      this.data = data
      this.dialogVisible = true
      this.dialogContentComponent = () => import('@/components/datacom/dialog/zy-zysh/index.vue')
    }
  },
  components: {
    datagrid,
    search,
    'gr-dialog': _dialog
  }
}
</script>
<style >
 @import "../../../style/css/general-content.css";
</style>