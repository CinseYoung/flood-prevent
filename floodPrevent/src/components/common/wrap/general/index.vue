<template>
  <div class="general-wrap">
    <gr-header :name="name" :thisTitle="thisTitle" @funx="updateObject" ref="header" :type="type" />
    <div class="center">
      <left-menu :menuData="menuData" :menuName.sync="menuName" />
      <div class="content">
        <bread-crumb ref="breadCrumb" />
        <router-view :menuName.sync="menuName" @cjyy="cjyy" />
      </div>
    </div>
  </div>
</template>
<script>
import _wrap from './index.js'
export default _wrap
</script>
<style lang="scss">
@import "./index.scss";
</style>