
<template>
  <div class="center">
    <!-- 地图 -->
    <div class="map block top">
      <div id="map_container" style="height:100%;width:100%">
        <el-button type="primary" size="mini" id="map-btn" @click="toYzt">
          更多
          <i class="el-icon-d-arrow-right"></i>
        </el-button>
      </div>
    </div>
    <!-- 预警预报信息 -->
    <div class="wran block bottom">
      <header>
        <div class="title">
          <span class="title-icon"></span>
          <span>预警预报信息</span>
        </div>
        <div class="expand">
          <span>更多</span>
          <i class="el-icon-d-arrow-right"></i>
        </div>
      </header>
      <div class="content table">
        <el-table :data="warningInfo" :header-cell-style="thstyle" highlight-current-row>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="location" label="地点"></el-table-column>
          <el-table-column prop="detail" label="详情"></el-table-column>
          <el-table-column prop="status" label="处理情况"></el-table-column>
          <el-table-column prop="result" label="处理结果"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import index from './index.js';
export default index
</script>
<style lang="scss" scoped>
#map_container {
  position: relative;
}
#map-btn {
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background: transparent;
  color: #838282;
  padding: 0;
  cursor: pointer;
  z-index: 999;
}
</style>