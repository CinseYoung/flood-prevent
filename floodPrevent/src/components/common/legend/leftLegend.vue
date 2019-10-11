<template>
  <div class="left-legend" :class="{move:!showLeft}">
    <div v-if="isfold">
      <header class="title">{{titles[1]}}</header>
      <ul class="list">
        <!-- <li v-for="y in years" :key="y.id">
          <span class="icon" :style="{backgroundColor:y.icon}"></span>
          <span class="name">{{y.name}}</span>
        </li>-->
        <li v-for="d in deeps" :key="d.id">
          <span class="icon" :style="{backgroundColor:d.icon}"></span>
          <span class="name">{{d.name}}</span>
        </li>
      </ul>
    </div>
    <i class="el-icon-back btn" @click="fold"></i>
  </div>
</template>
<script>
/*eslint-disable   */
import { mapState } from "vuex";
export default {
  name: "left-legend",
  data() {
    return {
      titles: ["洪水淹没范围", "洪水淹没水深"],
      years: [
        { icon: "blue", name: "5年一遇" },
        { icon: "blue", name: "10年一遇" },
        { icon: "blue", name: "20年一遇" },
        { icon: "blue", name: "50年一遇" },
        { icon: "blue", name: "100年及以上一遇" }
      ],
      deeps: [
        { icon: "blue", name: "<0.5m" },
        { icon: "blue", name: "0.5~1.0m" },
        { icon: "blue", name: "1.0~2m" },
        { icon: "blue", name: "2~3.0" },
        { icon: "blue", name: ">3.0m" }
      ],
      isfold: false
    };
  },
  computed: { ...mapState(["showLeft"]) },
  methods: {
    fold: function() {
      this.isfold = !this.isfold;
    }
  }
};
</script>

<style lang="scss" scoped>
.left-legend {
  border: 1px solid #ccc;
  // width: 130px;
  // height: 150px;
  position: fixed;
  bottom: 4px;
  left: 360px;
  margin-left: 4px;
  border-radius: 2px;
  background-color: #fff;
  font-size: 12px;
  text-align: center;
  padding: 10px;
  z-index: 99;
  transition: all 1s;
  .title {
    color: rgb(1, 179, 250);
    font-size: 13px;
    font-weight: bolder;
  }
  .list {
    width: 90px;
    margin-top: 10px;
    text-align: left;
    li {
      .icon {
        display: inline-block;
        width: 15px;
        height: 10px;
        margin-right: 10px;
      }
    }
  }
}
.move {
  left: 0;
}
.btn {
  transform: rotate(-45deg);
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
</style>