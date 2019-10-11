<template>
  <div class="gr-header-map-wrap" id="yzt">
    <gr-header :name="name" :thisTitle="thisTitle" ref="header" :type="type" />
    <div class="center">
      <router-view :menuName.sync="menuName" />
      <div id="map_container" @click="mapClick($event)" @mousemove="move" class="map"></div>
    </div>
    <map-model></map-model>
    <div id="popup" class="ol-popup">
      <a href="#" id="popup-closer" class="ol-popup-closer"></a>
      <div id="popup-content"></div>
    </div>
    <div id="dot"></div>
  </div>
</template>
<script>
import _wrap from './index.js';
export default _wrap
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
<style lang="scss">
.map {
  height: 100%;
  width: 100%;
  cursor: pointer;
  .ol-control {
    display: none;
  }
}
</style>