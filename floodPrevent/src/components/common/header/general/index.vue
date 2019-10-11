
<template>
  <div class="header">
    <div class="logo">
      <i>{{name}}</i>
    </div>
    <div class="nav">
      <ul v-for="(item,index) in menus" :key="index">
        <li :class="{active:asTitle===item.title}" @click="toHobby(item)">
          <img :src="utils.setImgSrc(item.imgSrc)" :alt="item.title" />
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
    <div class="top-right">
      <el-dropdown class="user-name">
        <el-button type="primary" @click.native="backHome()">
          <img src="../../../../assets/house.png" alt />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <template v-for="(item,index) in parentMenu">
            <el-dropdown-item :key="index" @click.native="toHobby(item)" v-show="thisTitle!==item.title">
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
  </div>
</template>
<script>
import header from './index.js'
export default header
</script>
 
<style lang="scss" scoped>
@import "./index.scss";
</style>