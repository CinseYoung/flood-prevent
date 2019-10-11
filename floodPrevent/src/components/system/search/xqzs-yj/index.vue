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
    <el-form-item label="应急等级">
      <el-select filterable v-model="formInline.yjdj" placeholder="请选择应急等级">
        <el-option
          v-for="item in option_yjdj"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="启动时间">
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
    <el-form-item label="处理时间">
      <el-date-picker
        v-model="formInline.handleTime"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd HH"
        format="yyyy-MM-dd HH:mm"
        :picker-options="pickerOptions1"
      ></el-date-picker>
    </el-form-item>
    <el-form-item  label="处理人">
      <el-select filterable  v-model="formInline.person" placeholder="请选择处理人">
        <el-option
          v-for="item in option_person"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="formInline.checked">是否处理</el-checkbox>
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
