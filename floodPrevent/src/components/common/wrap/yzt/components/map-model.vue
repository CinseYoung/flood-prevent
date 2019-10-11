   
<style lang="scss" scoped>
.map-model {
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: baseline;
  .el-icon-refresh {
    align-self: flex-end;
    font-size: 30px;
  }
  .tip {
    font-size: 12px;
    background-color: #fff;
    border: 1px solid #eee;
    padding: 2px 4px;
    position: absolute;
    bottom: 0;
  }

  .list {
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    background-color: #fafafa;
    width: 86px;
    transition: all 600ms;
    font-size: 12px;
    cursor: pointer;
    .box:hover {
      border: 1px solid #308ff1;
    }
    li {
      background-image: url("https://webmap1.bdimg.com/wolfman/static/common/images/new/maptype_a6d3e9b.png");
      .box {
        width: 86px;
        height: 50px;
        border: 1px solid transparent;
        box-sizing: border-box;
        background-repeat: no-repeat;
        background-size: 86px 200px;
        display: flex;
        justify-content: flex-end;
      }
      .name {
        color: #fff;
        padding: 2px;
        align-self: flex-end;
        cursor: pointer;
      }
      .activeSpan {
        background-color: #308ff1;
      }
      .name:hover {
        background-color: #308ff1;
      }
    }
  }
  .unfold {
    width: 278px;
    justify-content: space-between;
  }
  li:nth-child(2) {
    background-position: 0 -180px;
  }
  li:last-child {
    background-position: 0 -130px;
  }
}
</style>
<template>
  <div class="map-model">
    <i class="el-icon-refresh" @mouseenter="showTip(true)" @mouseleave="showTip(false)"></i>
    <span class="tip" v-if="istip" @mouseenter="showTip(true)" @mouseleave="showTip(false)">切换地图模式</span>
    <ul :class="{list:true,unfold:!isfold}" @mouseenter="fold(false)" @mouseleave="fold(true)">
      <li v-for="(m,index) in mode" :key="index">
        <div class="box" v-if="index==2 ||!isfold" @click="choose(m)">
          <span :class="{name:true,activeSpan:m.id==id}">{{m.name}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable  */
// import conf from "../../../../scripts/map/conf.js";

export default {
  name: "map-model",
  data() {
    return {
      istip: false,
      id: "",
      isfold: true,
      mode: [
        {
          id: 1,
          name: "区划"
        },
        {
          id: 2,
          name: "影像"
        },
        {
          id: 3,
          name: "地形"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    showTip: function(s) {
      var me = this;
      if (s) {
        me.istip = true;
      } else {
        me.istip = false;
      }
    },
    hiddenTip: function() {
      setTimeout(() => {
        this.istip = false;
      }, 100);
    },
    fold: function(p) {
      this.isfold = p;
    },
    choose: function(data) {
      var me = this;
      me.id = data.id;

      var mlayer2 = new ol.layer.Tile({
        source: new ol.source.XYZ({
          url:
            "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}"
        })
      });
      var img = new ol.layer.Tile({
        source: new ol.source.XYZ({
          url:
            "http://t3.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
        })
        // visible: false
      });
      var map_cva = new ol.layer.Tile({
        source: new ol.source.XYZ({
          url:
            "http://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
        })
        // visible: false
      });
      var map_vec = new ol.layer.Tile({
        source: new ol.source.XYZ({
          url:
            "http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
        })
        // visible: false
      });
      var map_ter = new ol.layer.Tile({
        source: new ol.source.XYZ({
          url:
            "http://t4.tianditu.com/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
        })
        // visible: false
      });
      var map_cta = new ol.layer.Tile({
        source: new ol.source.XYZ({
          url:
            "http://t4.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=d0cf74b31931aab68af181d23fa23d8d"
        })
        // visible: false
      });
      var init = new ol.layer.Tile({
        source: new ol.source.TileArcGISRest({
          url:
            "http://arcgis.keepsoft.net:9472/arcgis/rest/services/BaseMap_map/MapServer",
          params: { sessionId: localStorage.getItem("kpst-token") }
        })
        // visible: false
      });
      function clear() {
        me.map._this.getLayers().clear();
      }
      if (data.name === "区划") {
        clear();
        me.map._this.addLayer(map_vec);
        me.map._this.addLayer(map_cva);
        // me.map._this.addLayer(mlayer2);
      } else if (data.name === "影像") {
        clear();
        me.map._this.addLayer(img);
        // img.setVisible(true);
      } else if (data.name === "地形") {
        clear();
        me.map._this.addLayer(map_ter);
        me.map._this.addLayer(map_cta);
      }
    }
  }
};
</script>