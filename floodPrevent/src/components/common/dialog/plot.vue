<template>
  <div id="plot" v-if="isPlot">
    <p class="header">标绘</p>
    <span class="closeBtn" @click="close">
      <i class="el-icon-close"></i>
    </span>
    <div class="content">
      <div class="item" v-for="m in menu" :key="m.id">
        <span class="name">{{m.name}}</span>
        <div class="btns">
          <el-button size="mini" v-for="s in m.children" :key="s.id">
            <i class="el-icon-close"></i>
            {{s.name}}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState } from "vuex";
export default {
  name: "plot",
  data() {
    return {
      isShow: false,
      menu: [
        {
          name: "方案操作",
          children: [{ icon: "", name: "保存" }, { icon: "", name: "打开" }]
        },
        {
          name: "对象操作",
          children: [
            { icon: "", name: "选取" },
            { icon: "", name: "删除" },
            { icon: "", name: "属性" },
            { icon: "", name: "上移" },
            { icon: "", name: "下移" },
            { icon: "", name: "清除" }
          ]
        },
        {
          name: "标绘符号",
          children: [
            { icon: "", name: "常用符号" },
            { icon: "", name: "水利专题" },
            { icon: "", name: "避险转移" },
            { icon: "", name: "转移群众" },
            { icon: "", name: "抢险队伍" },
            { icon: "", name: "物资仓库" },
            { icon: "", name: "危险点" },
            { icon: "", name: "危险区" },
            { icon: "", name: "安全点" },
            { icon: "", name: "安全区" },
            { icon: "", name: "抢险指挥部" },
            { icon: "", name: "物资运输" },
            { icon: "", name: "救助点" },
            { icon: "", name: "临时安置点" },
            { icon: "", name: "备注" },
            { icon: "", name: "行动路线" }
          ]
        }
      ]
    };
  },
  computed: { ...mapState(["isPlot"]) },
  // created() {},
  // mounted() {},
  // watch() {},
  methods: {
    close() {
      this.$store.state.isPlot = false;
    }
  }
};
</script>
<style lang="scss" scoped>
#plot {
  width: 360px;
  height: 560px;
  position: absolute;
  right: 4px;
  top: 150px;
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  box-shadow: -2px 12px 20px #d4d4d3;
  z-index: 999;
  .header {
    background-color: #f5f5f5;
    padding: 10px;
    font-weight: bolder;
  }
  .closeBtn {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
  }
  .content {
    padding: 10px;
    .item + .item {
      border-top: 1px solid #f1eeee;
    }
    .item {
      display: flex;
      padding: 4px 0;
      .name {
        display: block;
        min-width: 80px;
      }
      button {
        margin: 2px;
      }
    }
  }
}
</style>