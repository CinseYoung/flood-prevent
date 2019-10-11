<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="标题">
      <el-autocomplete
        class="inline-input"
        v-model="formInline.title"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
    ></el-autocomplete>
    </el-form-item>
    <el-form-item label="动作">
      <el-select filterable v-model="formInline.action" placeholder="请选择动作">
        <el-option
          v-for="item in option_action"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item  label="类型">
      <el-select filterable  v-model="formInline.type" placeholder="请选择类型">
        <el-option
          v-for="item in option_type"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="时间">
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
