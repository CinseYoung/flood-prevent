<template>
  <el-form :inline="true" :model="formInline" size="mini" class="chazhao">
    <el-form-item label="标题">
      <el-autocomplete
        class="inline-input"
        v-model="formInline.title"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
    ></el-autocomplete>
    </el-form-item>
    <el-form-item label="记录时间">
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