<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="任务名称">
      <el-input v-model="formInline.name" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="所属模型">
      <el-select filterable clearable v-model="formInline.type" placeholder="所属模型">
        <el-option label="模型一" value="shanghai"></el-option>
        <el-option label="模型二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="success" @click="add">添加</el-button>
    </el-form-item> -->
  </el-form>
</template>
<script>
import index from './index.js'
export default index
</script>
