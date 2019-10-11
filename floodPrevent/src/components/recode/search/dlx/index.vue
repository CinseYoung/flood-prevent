<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="文档类别">
      <el-select filterable  v-model="formInline.recordtype" placeholder="文档类别">
        <el-option label="电子文档" value="0"></el-option>
        <el-option label="纸质文档" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="类别名称">
      <el-input v-model="formInline.typeName" placeholder="档案室名称"></el-input>
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
