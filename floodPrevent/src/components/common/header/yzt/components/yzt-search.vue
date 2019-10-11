<style lang="scss">
.search {
  position: absolute;
  z-index: 1000;
  top: 15px;
  .btn-area {
    .el-button--mini {
      padding: 2px 18px;
      font-size: 16px;
      border-radius: 0 3px 3px 0;
      border-left: 0;
    }
    .el-input__inner {
      border-radius: 4px 0 0 4px;
      width: 360px;
    }
  }
}
</style>
<style lang="scss" scoped>
.search {
  padding: 0 20px;
  .btn-area {
    display: flex;
  }
  .result {
    width: 359px;
    padding: 16px 0;
    background-color: #fff;
    box-shadow: 1px 1px 1px 0px #d9d9d9;
    margin: 0 54px 0 1px;
    font-size: 13px;
    .close-btn {
      position: absolute;
      top: 42px;
      right: 75px;
      z-index: 999;
      color: #000;
    }
    .menus {
      display: flex;
      padding: 0 20px 10px;
      .menu-item {
        background-color: #3f8de1;
        color: #fff;
        padding: 4px 15px;
        border-radius: 2px;
        flex: 1;
        text-align: center;
      }
      .menu-item + .menu-item {
        margin-left: 10px;
      }
    }
    .content {
      .item {
        color: #333;
        .span {
          margin: 0 10px 0 0;
          display: inline-block;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
<template>
  <div class="search">
    <div class="btn-area">
      <div @click="showPanel">
        <el-input
          @focus="showPanel"
          v-model="searchKey"
          placeholder="搜站点、流域、河流、大坝等"
          style="border-radius:4px 0 0 4px"
          @keyup.enter.native="search"
        ></el-input>
      </div>
      <el-button
        size="mini"
        class="el-icon-search"
        type="primary"
        style="background-color:#409EFF;"
        @click="search"
      ></el-button>
    </div>
    <div class="result" v-if="yztPanel">
      <i class="el-icon-close close-btn" @click="hidden"></i>
      <div class="menus">
        <span class="menu-item">【流域】列表</span>
        <span class="menu-item">查询结果</span>
      </div>
      <div class="content" v-if="searchResult">
        <div class="item" @click="csearch(searchResult.state)">
          <span>【测站】</span>
          <span>名称：</span>
          <span class="span">{{searchResult.state}}</span>
          <span>水位：</span>
          <span class="span">
            <span>{{searchResult.waterLevel}}</span>m
          </span>
          <span>涨幅：</span>
          <span class="span">
            <span>{{searchResult.increase}}</span>m
          </span>
        </div>
        <div class="item" @click="csearch(searchResult.river)">
          <span>【河流】</span>
          <span>名称：</span>
          <span class="span">
            <span>{{searchResult.river}}</span>
          </span>
          <span>面积：</span>
          <span class="span">
            <span>{{searchResult.squ}}</span>m²
          </span>
          <span>人口：</span>
          <span class="span">
            <span>{{searchResult.people}}</span>人
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*eslint-disable*/

import { mapState } from "vuex";
export default {
  name: "yzt-search",
  data() {
    return {
      searchKey: "",
      searchResult: {}
    };
  },
  computed: { ...mapState(["yztPanel", "yztSearch"]) },

  created() {
    this.searchResult = this.yztSearch;
  },
  watch: {
    yztSearch(oldV, newV) {
      if (oldV != newV || oldV == "") {
        this.searchResult = oldV;
      }
    }
  },
  mounted() {},
  methods: {
    getSearchResult: function() {
      var me = this;
      this.api.get(this, "yzt_search", data => {
        me.searchResult = data;
      });
    },
    showPanel: function() {
      this.$store.state.yztPanel = true;
    },
    hidden: function() {
      this.$store.state.yztPanel = false;
    },
    addIcon: function(coord) {
      var me = this;
      var map = this.map._this;
      var iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(coord),
        name: ""
      });

      var iconStyle = new ol.style.Style({
        image: new ol.style.Icon(
          /** @type {olx.style.IconOptions} */ ({
            anchor: [0.5, 0.96],
            scale: 0.5,
            //anchorXUnits: 'fraction',
            //anchorYUnits: 'pixels',
            src: "https://openlayers.org/en/latest/examples/data/icon.png"
          })
        )
      });
      iconStyle.getImage().setScale(0.8);
      iconFeature.setStyle(iconStyle);

      var vectorSource = new ol.source.Vector({
        features: [iconFeature]
      });

      var vectorLayer = new ol.layer.Vector({
        source: vectorSource
      });
      map.removeLayer(vectorLayer);
      map.addLayer(vectorLayer);
      return {
        feature: iconFeature,
        layer: vectorLayer,
        sourceVector: vectorSource,
        point: coord
      };
    },
    search: function() {
      var me = this;

      var map = me.map._this;
      document.querySelector(".el-input__inner").focus();
      if (this.searchKey == "") {
        this.$store.state.yztPanel = false;
        me.getSearchResult();
      } else {
        if (me.searchKey === "洛杉矶") {
          map.getView().setCenter([-118, 34]); //34°03′、西经118°15′
          map.getView().setZoom(10);
        } else if (me.searchKey.indexOf("北京") >= 0) {
          // map.getView().setZoom(7);
          // me.addIcon([116.5, 40]);
          map.showDot([116.4, 39.9]);
          map.showPop([116.4, 39.9]);
          map.removeOverlay(map.point);
          map.addOverlay(map.point);
          map.getView().setCenter([116.4, 40]);
        } else if (me.searchKey.indexOf("拉萨") >= 0) {
          // map.getView().setZoom(7);
          // me.addIcon([116.5, 40]);
          map.showDot([91.1, 29.41]);
          map.showPop([91.1, 29.41]);
          map.removeOverlay(map.point);
          map.addOverlay(map.point);
          map.getView().setCenter([91.15, 29]);
        }
      }
    },
    csearch: function(k) {
      var me = this;
      me.searchKey = k;
      me.search();
    }
  }
};
</script>