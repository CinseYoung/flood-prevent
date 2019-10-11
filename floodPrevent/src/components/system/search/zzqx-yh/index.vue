<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="用户账号">
      <el-input class="inline-input" v-model="formInline.yhzh" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="姓名">
      <el-input class="inline-input" v-model="formInline.xm" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="单位">
      <el-autocomplete class="inline-input" v-model="formInline.dxid" :fetch-suggestions="queryCompany" placeholder="请输入单位"></el-autocomplete>
    </el-form-item>
    <el-form-item label="行政区划">
      <el-autocomplete class="inline-input" v-model="formInline.xzqhdxid" :fetch-suggestions="queryArea" placeholder="请输入行政区划"></el-autocomplete>
    </el-form-item>
    <el-form-item label="账户状态">
      <el-select filterable v-model="formInline.zhzt" placeholder="账户状态">
        <el-option label="正常" value="1"></el-option>
        <el-option label="异常" value="0"></el-option>
      </el-select>
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