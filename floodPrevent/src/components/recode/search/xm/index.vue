<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="档案室名称">
      <el-input v-model="formInline.name" placeholder="档案室名称"></el-input>
    </el-form-item>
    <el-form-item label="档案室管理员">
      <el-input v-model="formInline.manager" placeholder="档案室管理员"></el-input>
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
