<template>
  <div class="transfer" :class="{hidden:!showLeft}">
    <div class="tree" :class="{hidden:!showLeft}">
      <div class="header">
        <span>编制单元(共{{menu.length}}个)</span>
      </div>
      <el-tree :data="menu" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tree {
  width: 360px;
  color: #666666;
  background: #fff;
  border-right: solid 1px #d9d9d9;
  height: 100%;
  transition: all 1s;
  overflow: hidden;
  .header {
    background: #f0f0f0;
    height: 30px;
    padding: 0 0 0 8px;
    line-height: 30px;
  }
}
.transfer {
  width: 360px;
  transition: all 1s;
}
.gr-header-map-wrap .hidden {
  width: 0;
}
</style>
<script>
/* eslint-disable */
import echarts from "echarts";
import { mapState } from "vuex";
// console.log = function() {};
export default {
  name: "county",
  data() {
    return {
      menu: [],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  computed: { ...mapState(["isShowDetail", "showLeft"]) },
  created() {
    this.getMenuInfo();
  },
  mounted() {},
  methods: {
    getMenuInfo: function() {
      var me = this;
      this.api.get(this, "risk_countyTree", data => {
        me.menu = data;
      });
    },
    handleNodeClick: function(data) {
      // console.log(data);
    }
  }
};
</script>


