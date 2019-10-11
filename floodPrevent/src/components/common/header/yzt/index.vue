
<template>
  <div class="header yzt">
    <div class="top-right">
      <el-dropdown class="user-name">
        <el-button type="primary" @click.native="backHome()">
          <img src="../../../../assets/house.png" alt />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <template v-for="(item,index) in parentMenu">
            <el-dropdown-item
              :key="index"
              @click.native="toHobby(item)"
              v-show="thisTitle!==item.title"
            >
              <i class="el-icon-menu el-icon--left"></i>
              {{item.title}}
            </el-dropdown-item>
          </template>
          <el-dropdown-item :divided="true" @click.native="toHobby()">
            <i class="el-icon-error el-icon--left"></i>退出系统
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <yzt-search ref="borther" />
    <div class="layer">
      <div class="btn" @click="showPop">图层</div>
      <layer-menu v-if="layerMenu" @triggerBrotherMethods="triggerBrotherMethods" />
    </div>
  </div>
</template>
<script>
import header from './index.js';
export default header
</script>
 
<style lang="scss" scoped>
@import "./index.scss";
.gr-header-map-wrap .yzt {
  position: absolute;
  width: 100%;
  background-color: transparent;
  .top-right {
    cursor: pointer;
    .el-button--primary {
      position: fixed;
      top: 15px;
      right: 16px;
      background: #308ff1;
      border-color: #308ff1;
      padding: 6px 10px;
      z-index: 999;
    }
  }
}
</style>