<template>
  <el-form :inline="true" :model="formInline" size="mini" class="chazhao" style="text-align:center">
    <el-form-item label="选择日期">
      <el-date-picker
        v-model="formInline.createTime"
        type="month"
        :picker-options="pickerOptions1"
        value-format="yyyy-MM"
        placeholder="选择月"
      ></el-date-picker>
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
<style lang="scss">
  .chazhao{
      padding: 15px 0 0 5px;
      border-bottom: solid 1px #d9d9d9;
      .el-button--primary {
          color: #fff;
          background-color: #409eff;
          border-color: #409eff;
        }
        .el-button--primary:hover {
          background-color: rgb(193, 218, 243);
          border-color: rgb(121, 184, 248);
          color: #000;
        }
  }
</style>