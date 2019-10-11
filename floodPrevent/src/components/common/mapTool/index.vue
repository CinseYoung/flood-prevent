<template>
  <div class="map-tool">
    <div class="legends">
      <div v-for="(l,index) in floodData" :key="l.id" class="item" @click="choose(l,index)">
        <i class="legend" :class="{active:idx===index}"></i>
          {{l.name}}
      </div>
    </div>
    <div class="op">
      展现方式：
      <el-select size="mini" v-model="type" placeholder="请选择">
        <el-option
          v-for="item in presentation"
          :key="item.value"
          :label="item.name"
          :value="item.value"
        ></el-option>
      </el-select>
      <div>
        <i v-if="type===1" class="qp-icon" style="margin:0 10px;">卷帘对比</i>
        <i class="qp-icon" style="margin:0 10px;">地图查询</i>
      </div>
    </div>
    <!-- <div>
      <span>
        <i class="qp-icon"></i>卷帘对比
      </span>
      <span>
        <i class="qp-icon"></i>地图查询
      </span>
    </div>-->
    <span
      v-for="(item,index) in tools"
      :key="index"
      :class="{active:active===index}"
      @click="handleClick(item,index,$event)"
    >
      <i :class="item.icon"></i>
      {{item.name}}
    </span>
  </div>
</template>
 
<script src='./index.js' type='text/javascript'></script>
<style  scoped lang="scss">
.ol-dragzoom {
  border: 3px dashed rgb(255, 0, 0);
  border-radius: 3px;
}
.map-tool {
  height: 29px;
  background: #f1f6f7;
  border-bottom: solid 1px #b0b6be;
  text-align: right;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .legends {
    padding: 0;
    display: flex;
    align-items: center;
    margin-right: 150px;
    .item {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 4px;
      .legend {
        width: 15px;
        height: 15px;
        border-radius: 2px;
        display: inline-block;
        margin: 0 4px;
        background-color: #838383;
      }
      .active {
        background-color: blue;
      }
    }
  }
  .op {
    display: flex;
    align-items: center;
    margin: 0 20px;
    .el-select {
      width: 100px;
    }
    .el-input--mini .el-input__inner {
      height: 24px;
      line-height: 24px;
    }
    .el-input__suffix {
      right: 8px;
      top: 6px;
      width: 0;
      height: 0;
      border: 0;
      background: #fff;
    }
    .el-input__suffix-inner:hover {
      border: none;
      background: none;
    }
  }
  .active,
  span:hover {
    background: transparent;
    border: 0;
  }
  span {
    line-height: 29px;
    padding: 0 8px 0 3px;
    cursor: pointer;
    margin-right: 3px;
    border: solid 1px transparent;
    height: 28px;
    display: inline-block;
    i {
      height: 12px;
      width: 12px;
      margin-top: 8px;
      margin-right: 1px;
      display: inline-block;
    }
    .py-icon {
      background: url("../../../assets/maptool/movedo.png") no-repeat;
    }
    .full-icon {
      background: url("../../../assets/maptool/full_map.png") no-repeat;
    }
    .fd-icon {
      background: url("../../../assets/maptool/maxdo.png") no-repeat;
    }
    .sx-icon {
      background: url("../../../assets/maptool/mindo.png") no-repeat;
    }
    .cj-icon {
      background: url("../../../assets/maptool/distdo.png") no-repeat;
    }
    .cm-icon {
      background: url("../../../assets/maptool/areado.png") no-repeat;
    }
    .qc-icon {
      background: url("../../../assets/maptool/recoverdo.png") no-repeat;
    }
    .bh-icon {
      background: url("../../../assets/maptool/brushdo.png") no-repeat;
    }
    .dy-icon {
      background: url("../../../assets/maptool/printdo.png") no-repeat;
    }
    .jt-icon {
      background: url("../../../assets/maptool/savedo.png") no-repeat;
    }
    .qp-icon {
      background: url("../../../assets/maptool/rectdo.png") no-repeat;
    }
  }
  .active,
  span:hover {
    background: #d8d8d8;
    border: solid 1px #838383;
    border-radius: 5px;
  }
}
</style>
 
 
