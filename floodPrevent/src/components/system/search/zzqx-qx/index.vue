<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="单位">
      <el-input class="inline-input" v-model="formInline.dw" placeholder="请输入单位名称"></el-input>
    </el-form-item>
    <el-form-item label="角色">
      <el-input class="inline-input" v-model="formInline.js" placeholder="请输入角色"></el-input>
    </el-form-item>
    <el-form-item label="所属地市">
      <el-autocomplete class="inline-input" v-model="formInline.ssds" :fetch-suggestions="querySearch" placeholder="请输入所属地市"></el-autocomplete>
    </el-form-item>
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