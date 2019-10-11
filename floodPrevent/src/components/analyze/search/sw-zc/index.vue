<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="河系">
      <el-select v-model="formInline.hx" clearable filterable placeholder="请选择">
        <el-option
          v-for="item in options_hx"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="预报站">
      <el-select v-model="formInline.ybz" clearable filterable placeholder="请选择">
        <el-option
          v-for="item in options_ybz"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="参考站">
      <el-select v-model="formInline.ckz" clearable filterable placeholder="请选择">
        <el-option
          v-for="item in options_ckz"
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
    <el-form-item label="预见期长度(h)">
      <el-input-number v-model="formInline.length" controls-position="right" :min="1"></el-input-number>
    </el-form-item>
    <el-form-item label="时段长(h)">
      <el-input-number v-model="formInline.hour" controls-position="right" @change="handleChange" :min="1"></el-input-number>
    </el-form-item>
    <el-form-item label="分析类型">
      <el-radio-group v-model="formInline.radio">
        <el-radio :label="'总涨差'">总涨差</el-radio>
        <el-radio :label="'时段涨差'">时段涨差</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="zctjSubmit">涨差统计</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import index from './index.js'
export default index
</script>
