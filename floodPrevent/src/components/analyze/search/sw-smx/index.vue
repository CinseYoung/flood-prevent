<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="河系">
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
      <el-input-number v-model="formInline.hour" controls-position="right" :min="1"></el-input-number>
    </el-form-item>
    <el-form-item label="播放速度">
      <el-select v-model="speed" clearable filterable placeholder="请选择" @change="changeSpeed">
        <el-option
          v-for="item in options_time"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="站点列表">
      <el-checkbox-group v-model="name" fill="#5cf078" disabled>
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="searchSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import index from './index.js'
export default index
</script>
