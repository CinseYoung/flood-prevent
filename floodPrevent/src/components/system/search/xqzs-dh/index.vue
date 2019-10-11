<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="记录人">
      <el-autocomplete
        class="inline-input"
        clearable
        v-model="formInline.person"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
    ></el-autocomplete>
    </el-form-item>
    <el-form-item label="记录时间">
      <el-date-picker
        v-model="formInline.createTime"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd HH"
        format="yyyy-MM-dd HH:mm"
        :picker-options="pickerOptions1"
      ></el-date-picker>
    </el-form-item>
    <el-form-item  label="内容">
      <el-input
        type="textarea"
        :autosize="{ maxRows: 1}"
        placeholder="请输入内容"
        resize='none'
        v-model="formInline.content">
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
