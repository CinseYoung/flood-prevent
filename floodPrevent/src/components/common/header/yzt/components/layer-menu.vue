<style lang='scss' scoped>
.pop {
  /* border: 2px solid #308ff1; */
  width: 300px;
  height: 600px;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px #dddddd;
  background-color: #fff;
  z-index: 999;
  position: absolute;
  right: 0px;
  top: 50px;
  padding: 0 10px;
  color: #333;
  .item {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;
    .title {
      min-width: 50px;
    }
    .content {
      .op {
        cursor: pointer;
      }
      .op + .op {
        padding-left: 10px;
      }
    }
    .lighted {
      color: red;
    }
  }
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 999;
    color: #000;
  }
}
</style>
<template>
  <div class="pop">
    <i class="el-icon-close close" @click="close"></i>
    <div v-for="m in menu" :key="m.id" class="item">
      <!-- <span class="title">{{m.name}}：</span>
      <div class="content">
        <span v-for="c in m.children" :key="c.id" class="op" @click="choose(c)">{{c.name}}</span>
      </div>-->
      <span v-for="n in m.children" :key="n.id" @click="choose(n)">
        <i class="el-icon-location" :class="{lighted:n.islight}"></i>
        {{n.name}}
      </span>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import { mapState } from "vuex";
export default {
  name: "layerMenu",
  data() {
    return {
      islight: false,
      itemName: "",
      menu: [
        {
          name: "测站",
          id: "cz",
          children: [
            {
              name: "山南站",
              state: "北京站",
              waterLevel: 5.12,
              increase: -0.12,
              river: "黄河",
              squ: 1011,
              people: 10521,
              islight: false
            },
            {
              name: "拉萨站",
              state: "拉萨站",
              waterLevel: 3.12,
              increase: -0.12,
              river: "拉萨河",
              squ: 1211,
              people: 13521,
              islight: false
            }
          ]
        }
      ]
    };
  },

  computed: { ...mapState(["yztSearch", "layerMenu"]) },
  created() {},
  mounted() {},
  methods: {
    close: function() {
      var me = this;
      me.$store.state.layerMenu = false;
    },
    choose: function(data) {
      var me = this;
      data.islight = !data.islight;
      me.itemName = data;

      me.$emit("clickBrotherBtn", true);
      me.islight = !me.islight;
      this.$store.state.yztSearch = data;
      this.$store.state.yztPanel = true;
      var map = me.map._this;
      if (me.islight) {
        map.removeLayer(map.rvl);
        map.addLayer(map.rvl);
      } else {
        map.removeLayer(map.rvl);
        map.markOverlay.setPosition(undefined);
      }
      // if (data === "流域（面）") {
      // } else if (data === "湖泊（面）") {
      //   var arr = ["a0", "a1"];
      //   var src =
      //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569666330482&di=0986de542d435b3f0507166c1f550772&imgtype=0&src=http%3A%2F%2Fhbimg.huabanimg.com%2F949f48f60c483882c46b62ed1e1568a3bc0aa00f112b-TqLODH_fw236";
      //   var opacity = 0;
      //   var scale = 0.2;
      //   draw(arr, src, scale, arr.length, opacity);
      // } else if (data === "河流（面）") {
      //   var arr = ["b0", "b1", "b2", "b3"];
      //   var src =
      //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569666330481&di=0532e980d5ccc2ff922b2f6fbb3418ec&imgtype=0&src=http%3A%2F%2Fimages.liqucn.com%2Fmini%2F120x120%2Fimg%2Fh23%2Fh72%2Fimg_localize_ecb024b7dec709c608193ea5e3b5e744_450x450_120x120.png";
      //   var opacity = 0;
      //   var scale = 0.2;
      //   draw(arr, src, scale, arr.length, opacity);
      // }
    }
  }
};
</script>