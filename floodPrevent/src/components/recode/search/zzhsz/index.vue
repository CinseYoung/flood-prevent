<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="文档名称">
      <el-input v-model="formInline.record_name" placeholder="档案名称"></el-input>
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
    <el-form-item label="查询日期">
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
