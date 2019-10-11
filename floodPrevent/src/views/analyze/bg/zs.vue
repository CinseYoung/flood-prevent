<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag bg-width">
        <span class="data-title">水情综述</span>
        <span v-if="show">{{"("+time+"数据"+")"}}</span>
      </div>
      <el-form :inline="true" :model="formInline" size="mini" class="xuanze">
        <el-form-item label="文件列表">
          <el-select v-model="formInline.report" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import search from '@/components/analyze/search/bg-sqzs/index.vue'
export default {
  data() {
    return {
      time: '',
      show: false,
      formInline: {
        report: ''
      },
      options: []
    }
  },
  components: { 'dz-search': search },
  created() {
    this.$emit('update:menuName', '水情综述')
  },
  methods: {
    searchSubmit(data) {
      // this.$refs.dataGrid.searchSubmit(data)
    }
  }
}
</script>
<style >
   @import "../../../style/css/general-content.css";;
</style>