<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="字典名称">
      <el-input v-model="formInline.name" placeholder="字典名称"></el-input>
    </el-form-item>
    <el-form-item label="字典编码">
      <el-input v-model="formInline.name" placeholder="字典编码"></el-input>
    </el-form-item>
    <el-form-item  label="状态">
      <el-select filterable clearable v-model="formInline.grade" placeholder="状态">
        <el-option label="启用" value="1"></el-option>
        <el-option label="禁用" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="onSubmit">查询</el-button>
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="primary" @click="add">添加</el-button>
    </el-form-item> -->
  </el-form>
</template>
<script>
import index from './index.js'
export default index
</script>
