<template>
   <div class="gr-header-map-wrap">
      <gr-header :name="name" :thisTitle="thisTitle"  ref="header" :type="type" />
      <map-tool ref="mapTool" />
      <div class="center">
          <router-view  />
          <div id="map_container" style="height:100%;width:100%"></div>
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