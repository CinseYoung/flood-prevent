<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="选择日期">
      <el-date-picker
        v-model="formInline.createTime"
        type="datetime"
        :picker-options="pickerOptions1"
        value-format="yyyy-MM-dd HH"
        format="yyyy-MM-dd HH:mm"
        placeholder="选择日期时间"
      ></el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="success" @click="exportExcel">导出</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="info" @click="setZyz">设置重要站</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import index from './index.js'
export default index
</script>
