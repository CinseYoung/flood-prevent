<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="单位名称">
      <el-input class="inline-input" v-model="formInline.dwmc" placeholder="请输入单位名称"></el-input>
    </el-form-item>
    <el-form-item label="上级单位">
      <el-autocomplete class="inline-input" v-model="formInline.sjdwmc" :fetch-suggestions="queryCompany" placeholder="请输入上级单位"></el-autocomplete>
    </el-form-item>
    <el-form-item label="所属地区">
      <el-autocomplete class="inline-input" v-model="formInline.xzqhmc" :fetch-suggestions="queryArea" placeholder="请输入所属地区"></el-autocomplete>
    </el-form-item>
    <el-form-item label="单位类型">
      <el-autocomplete class="inline-input" v-model="formInline.lx" :fetch-suggestions="querySearch" placeholder="请输入单位类型"></el-autocomplete>
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