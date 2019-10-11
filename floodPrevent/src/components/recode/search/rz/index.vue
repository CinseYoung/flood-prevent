<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="文档名称">
      <el-input v-model="formInline.record_name" placeholder="文档名称"></el-input>
    </el-form-item>
    <el-form-item label="操作人">
      <el-input v-model="formInline.operator" placeholder="操作人"></el-input>
    </el-form-item>
    <el-form-item label="操作类型">
      <el-select filterable  v-model="formInline.operation_type" placeholder="操作类型">
        <el-option label="全部" value="0"></el-option>
        <el-option label="添加" value="1"></el-option>
        <el-option label="修改" value="2"></el-option>
        <el-option label="删除" value="3"></el-option>
        <el-option label="编辑" value="4"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="操作时间">
      <el-date-picker
        v-model="formInline.operationTime"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import index from './index.js'
export default index
</script>
