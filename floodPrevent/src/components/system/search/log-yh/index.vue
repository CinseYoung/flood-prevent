<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="关键词">
      <el-autocomplete class="inline-input" clearable v-model="formInline.gjc" :fetch-suggestions="querySearch" placeholder="请输入关键词"></el-autocomplete>
    </el-form-item>
    <el-form-item label="时间">
      <el-date-picker v-model="formInline.sj" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd HH" format="yyyy-MM-dd HH:mm" :picker-options="pickerOptions1"></el-date-picker>
    </el-form-item>
    <el-form-item label="操作用户">
      <el-input type="textarea" :autosize="{ maxRows: 1}" placeholder="请输入内容" resize='none' v-model="formInline.yh">
      </el-input>
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
