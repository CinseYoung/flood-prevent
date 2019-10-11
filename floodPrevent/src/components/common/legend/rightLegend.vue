<template>
  <div class="right-legend">
    <div v-if="!isfold">
      <header class="title">风险信息统计：</header>
      <ul class="list">
        <li v-for="y in info" :key="y.id">
          <span class="name">{{y.name}}：</span>
          <span class="value">{{y.value}}</span>
        </li>
      </ul>
    </div>
    <i class="el-icon-back btn" @click="fold"></i>
  </div>
</template>
<script>
export default {
  name: 'right-legend',
  data() {
    return {
      info: [
        { name: '淹没面积', value: '598.320000km2km' },
        { name: '淹没耕地', value: '598.320000km2km' },
        { name: '影响人口', value: '598.320000km2km' },
        { name: '影响GDP', value: '598.320000km2km' }
      ],
      isfold: true
    }
  },
  methods: {
    fold: function() {
      this.isfold = !this.isfold
    }
  }
}
</script>
<style lang="scss" scoped>
.right-legend {
  border: 1px solid #ccc;
  // width: 190px;
  // height: 90px;
  position: fixed;
  bottom: 4px;
  right: 4px;
  border-radius: 2px;
  background-color: #fff;
  font-size: 12px;
  text-align: center;
  // padding: 2px;
  padding: 10px;
  z-index: 999;
  .title {
    font-size: 13px;
  }
  .list {
    margin-top: 2px;
    text-align: left;
    li {
      .name {
        margin-right: 10px;
      }
    }
  }
  .btn {
    transform: rotate(-135deg);
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }
}
</style>