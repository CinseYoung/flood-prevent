<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="gr-breadcrumb">
    <el-breadcrumb-item to="/"  replace="replace">首页</el-breadcrumb-item>
    <template v-for="(item,index) in data">
      <template v-if="item.to">
        <el-breadcrumb-item :key="index" :to="item.to" replace="replace">{{item.name}}</el-breadcrumb-item>
      </template>
      <template v-else>
        <el-breadcrumb-item :key="index">{{item.name}}</el-breadcrumb-item>
      </template>
    </template>
  </el-breadcrumb>
</template>
<script>
import index from './index.js'
export default index
</script>
 
<style scoped lang="scss">
.gr-breadcrumb {
  background: #fff;
  border-bottom: solid 1px #d9d9d9;
  line-height: 38px;
  margin-left: 5px;
  padding-left: 17px;
}
</style>
