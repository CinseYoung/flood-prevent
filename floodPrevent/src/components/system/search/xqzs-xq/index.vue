<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="站点/编码">
      <el-autocomplete
        class="inline-input"
        v-model="formInline.name"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
    ></el-autocomplete>
    </el-form-item>
    <el-form-item label="站点类型">
      <el-select filterable v-model="formInline.type" clearable placeholder="站点类型">
        <el-option label="类型一" value="shanghai"></el-option>
        <el-option label="类型二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="选择地区">
      <el-select v-model="formInline.selectCity" clearable filterable placeholder="所属地市" @change="getCity">
        <el-option
          v-for="item in citys"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="formInline.selectXian" clearable filterable placeholder="所属县" @change="getXian">
        <el-option
          v-for="item in xian"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item  label="报讯等级">
      <el-select filterable  v-model="formInline.grade" clearable placeholder="报讯等级">
        <el-option label="等级一" value="shanghai"></el-option>
        <el-option label="等级二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="formInline.checked">是否预警</el-checkbox>
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
