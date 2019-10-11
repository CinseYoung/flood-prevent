<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="接口名称">
      <el-input v-model="formInline.name" placeholder="接口名称"></el-input>
    </el-form-item>
    <el-form-item label="接口类型">
      <el-select filterable clearable  v-model="formInline.type" placeholder="河流名称">
        <el-option label="地区一" value="shanghai"></el-option>
        <el-option label="地区二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="数据提供单位">
      <el-select filterable clearable v-model="formInline.examine" placeholder="站类">
        <el-option label="类型一" value="shanghai"></el-option>
        <el-option label="类型二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item  label="数据审核单位">
      <el-select filterable clearable  v-model="formInline.provide" placeholder="报讯等级">
        <el-option label="项目一" value="shanghai"></el-option>
        <el-option label="项目二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="warning" @click="add">添加</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="exportExcel">导出</el-button>
    </el-form-item> -->
  </el-form>
</template>
<script>
import index from './index.js'
export default index
</script>
