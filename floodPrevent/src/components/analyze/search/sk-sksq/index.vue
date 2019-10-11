<template>
  <el-form :inline="true" :model="formInline" size="mini" class="gr-form-search">
    <el-form-item label="选择日期">
      <el-date-picker
      v-model="formInline.createTime"
      type="datetime"
      :picker-options="pickerOptions1"
      value-format="yyyy-MM-dd HH"
      format="yyyy-MM-dd HH:mm"
      placeholder="选择日期时间">
    </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-radio-group v-model="radio" @change="changeLabel">
        <el-radio :label="'上游供蓄'">上游供蓄</el-radio>
        <el-radio :label="'中下游供蓄'">中下游供蓄</el-radio>
        <el-radio :label="'水库群供蓄'">水库群供蓄</el-radio>
        <el-radio :label="'主要水库表'">主要水库表</el-radio>
        <el-radio :label="'全部站'">全部站</el-radio>
      </el-radio-group>
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
<style lang="scss">
  // .is-checked {
  //   color: #308ff1;
  // }
// .el-radio__input.is-checked + .el-radio__label {
//   color: #308ff1;
// }
</style>