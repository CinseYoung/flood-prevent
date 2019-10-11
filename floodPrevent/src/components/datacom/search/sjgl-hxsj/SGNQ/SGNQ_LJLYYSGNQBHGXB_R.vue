<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="GUID">
      <el-input
        class="inline-input"
        clearable
        v-model="formInline.name"
        placeholder="请输入关键字"
    ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="exportExcel">导出</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        name: ''
      }
    }
  },
  mounted() {
    this.onSubmit()
  },
  methods: {
    onSubmit() {
      var data = Object.assign({}, this.formInline)
      this.$emit('searchSubmit', data)
    },
    exportExcel() {
      this.utils.excel()
    }
  }
}
</script>

<style scoped>
   @import "../css/basic.css";
</style>
