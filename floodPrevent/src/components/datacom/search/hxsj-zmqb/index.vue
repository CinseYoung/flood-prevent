<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="流域名称">
      <el-autocomplete
        class="inline-input"
        clearable
        v-model="formInline.name"
        :fetch-suggestions="querySearch"
        placeholder="请输入流域名称"
    ></el-autocomplete>
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
import index from './index.js'
export default index
</script>
