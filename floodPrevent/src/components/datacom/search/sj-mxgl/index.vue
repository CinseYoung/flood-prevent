<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <!-- <el-form-item label="河流名称">
      <el-select filterable  v-model="formInline.name" placeholder="河流名称">
        <el-option label="地区一" value="shanghai"></el-option>
        <el-option label="地区二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="站类">
      <el-select filterable v-model="formInline.type" placeholder="站类">
        <el-option label="类型一" value="shanghai"></el-option>
        <el-option label="类型二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item  label="报讯等级">
      <el-select filterable  v-model="formInline.grade" placeholder="报讯等级">
        <el-option label="项目一" value="shanghai"></el-option>
        <el-option label="项目二" value="beijing"></el-option>
      </el-select>
    </el-form-item> -->
    <el-form-item>
      <el-button type="primary" @click="add">添加模型</el-button>
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="success" @click="exportExcel">导出</el-button>
    </el-form-item> -->
  </el-form>
</template>
<script>
import index from './index.js'
export default index
</script>
