<template>
  <div class="left-menu">
    <ul>
      <li @click="clickUrl(item)" :class="{active:menuName===item.title}" v-for="(item,index) in menuData" :key="index">
        <img :src="utils.setImgSrc(item.imgSrc)" />
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import index from './index.js'
export default index
</script>
<style  lang="scss">
@import "./index.scss";
</style>
