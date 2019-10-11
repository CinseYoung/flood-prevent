<template>
  <div class="home-wrap">
    <header class="header">
      <div class="logo">
        <span>西藏自治区水利综合信息服务平台</span>
      </div>
    </header>
    <div class="main-content">
      <left />
      <cen />
      <right />
    </div>
    <!-- 用户操作 -->
    <el-dropdown class="user-name" @command="handleCommand">
      <el-button type="primary">
        <i>{{username}}</i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          :command="item.command"
          :divided="item.divided"
          v-for="(item,index) in dropdownData"
          :key="index"
        >
          <i :class="setDropdownClass(item.class)"></i>
          {{item.name}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 密码修改弹窗 -->
    <gr-dialog
      :dialogVisible.sync="dialogVisible"
      :dialogOptions="dialogOptions"
      :dialogContentComponent="dialogContentComponent"
    />
  </div>
</template>
<script>
import index from './index.js'
export default index
</script>
<style lang="scss">
@import "./index.scss";
</style>