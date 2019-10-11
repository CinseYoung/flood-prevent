<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="预报对象">
      <el-select v-model="formInline.value" clearable filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="选择日期">
      <el-date-picker
        v-model="formInline.createTime"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd HH"
        format="yyyy-MM-dd HH:mm"
        :picker-options="pickerOptions1"
      ></el-date-picker>
    </el-form-item>
    <el-form-item label="时段长(h)">
      <el-input-number v-model="formInline.hour" controls-position="right" @change="handleChange" :min="1"></el-input-number>
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
