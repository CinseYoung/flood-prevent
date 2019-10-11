<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="文档名称">
      <el-input v-model="formInline.recordName" placeholder="档案名称"></el-input>
    </el-form-item>
    <el-form-item label="文档类型">
      <el-select v-model="formInline.recordTypeId" placeholder="所属类型">
        <el-option key="" value="" label="全部"></el-option>
        <el-option
          v-for="option in selectData"
          :key="option.id"
          :value="option.id"
          :label="option.type_name"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属地区">
      <el-select filterable  v-model="formInline.region" placeholder="所属地区">
        <el-option label="地区一" value="shanghai"></el-option>
        <el-option label="地区二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item  label="所属项目">
      <el-select filterable  v-model="formInline.project" placeholder="所属项目">
        <el-option label="项目一" value="shanghai"></el-option>
        <el-option label="项目二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="创建日期">
      <el-date-picker
        v-model="formInline.createTime"
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
