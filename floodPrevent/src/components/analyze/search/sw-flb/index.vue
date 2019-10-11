<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="站点列表">
    <el-checkbox-group v-model="formInline.name" fill="#5cf078" @change="changeArray" >
      <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
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
    <el-form-item label="预见期长度(h)">
      <el-input-number v-model="formInline.length" controls-position="right" :min="1"></el-input-number>
    </el-form-item>
    <el-form-item label="计算时段长(h)">
      <el-input-number v-model="formInline.hour" controls-position="right" :min="1"></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="getNum">取数</el-button>
      <el-button type="primary" @click="calFenliu" >计算分流比</el-button>
      <el-button type="primary" @click="forcal">预报计算</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import index from './index.js'
export default index
</script>
