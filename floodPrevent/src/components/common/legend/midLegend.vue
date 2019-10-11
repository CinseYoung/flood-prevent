<template>
  <div class="step">
    步长：
    <el-select size="mini" v-model="pace" placeholder="1">
      <el-option v-for="p in paces" :key="p.value" :label="p" :value="p"></el-option>
    </el-select>
    <div class="block">
      <el-slider v-model="time" :max="348"></el-slider>
    </div>
    <span>{{time}} /348小时</span>
    <span style="padding:0 10px 4px;">||</span>
  </div>
</template>
<script>
export default {
  name: 'mid-legend',
  data() {
    return {
      pace: '',
      paces: [1, 2, 3, 4, 5, 6],
      time: 75
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.step {
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 20px;
  left: 50%;
  width: 430px;
  height: 50px;
  line-height: 50px;
  font-size: 12px;
  padding: 10px;
  margin-left: -100px;
  background-color: #eee;
  border-radius: 10px;
  z-index: 999;
  .el-select {
    width: 70px;
  }
  .el-slider {
    width: 200px;
    padding: 20px;
  }
}
</style>
<style lang="scss">
.step {
  .el-input--mini .el-input__inner {
    height: 24px;
    line-height: 24px;
  }
  .el-input__suffix {
    right: 0px;
    top: -2px;
  }
}
</style>