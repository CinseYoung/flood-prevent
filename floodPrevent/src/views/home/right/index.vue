<template>
  <div class="right">
    <!-- 舆情信息 -->
    <div class="block yq top">
      <header>
        <div class="title">
          <span class="title-icon"></span>
          <span>舆情信息</span>
        </div>
        <div class="expand">
          <span>更多</span>
          <i class="el-icon-d-arrow-right"></i>
        </div>
      </header>
      <div class="content yq-list">
        <div class="item" v-for="y in yqInfo" :key="y.id">
          <span>{{y.title}}</span>
          <span>{{y.date}}</span>
        </div>
      </div>
    </div>
    <!-- 水利工程进度 -->
    <div class="wran block bottom">
      <header>
        <div class="title">
          <span class="title-icon"></span>
          <span>水利工程进度</span>
        </div>
        <div class="expand">
          <span>更多</span>
          <i class="el-icon-d-arrow-right"></i>
        </div>
      </header>
      <div class="content table">
        <el-table :data="waterInfo" :header-cell-style="thstyle" highlight-current-row>
          <el-table-column prop="type" label="工程类型"></el-table-column>
          <el-table-column prop="location" label="工程名称"></el-table-column>
          <el-table-column prop="detail" label="进度情况"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
  import index from './index.js'
  export default index
</script>