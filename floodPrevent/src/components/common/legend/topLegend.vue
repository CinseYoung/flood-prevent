<template>
  <div class="top-legend">
    <div v-if="!isfold">
      <ul>
        <li>
          淹没第
          <span class="name">{{info.time}}</span>
          小时
        </li>
        <li>淹没面积：{{info.squ}}km²</li>
        <li>
          淹没村庄：
          <span class="value">{{info.num}}</span>个
        </li>
      </ul>
    </div>
    <i class="el-icon-back btn" @click="fold"></i>
  </div>
</template>
<script>
export default {
  name: 'top-legend',
  data() {
    return {
      info: { time: 75, squ: '762.413', num: 476 },
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
.top-legend {
  border: 1px solid #ccc;
  position: fixed;
  top: 84px;
  left: 360px;
  border-radius: 2px;
  background-color: #fff;
  font-size: 12px;
  padding: 4px 10px 10px 4px;
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
    transform: rotate(45deg);
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }
}
</style>