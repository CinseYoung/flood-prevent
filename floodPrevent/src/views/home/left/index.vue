<template>
  <div class="left">
    <div class="top" style="margin-bottom:10px;">
      <!-- 系统导航 -->
      <div class="sys-menu block">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="(s,index) in syss" :key="s.id" :label="s.title" :name="s.key">
            <div :class="setItemClass(index)">
              <ul class="item-list">
                <li v-for="(n,i) in menus[s.key]" :key="i" @click="clickUrl(n)">
                  <img :src="utils.setImgSrc(n.imgSrc)" />
                  <div>{{n.title}}</div>
                </li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 我的工作 -->
      <div class="block duty">
        <header>
          <div class="title">
            <span class="title-icon"></span>
            <span>我的工作</span>
          </div>
          <div class="expand" @click="moreWorks">
            <span>更多</span>
            <i class="el-icon-d-arrow-right"></i>
          </div>
        </header>
        <div class="content work-c">
          <div v-for="w in works" :key="w.id">
            <div class="event">
              <div class="title">
                <i :class="w.deal?'success':'danger'"></i>
                <span>{{w.event}}</span>
              </div>
              <div class="status">
                <span v-if="w.deal">已处理</span>
                <span style="color:red" v-else>处理</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 汛期值班 -->
    <div class="block works bottom">
      <header>
        <div class="title">
          <span class="title-icon"></span>
          <span>汛期值班</span>
        </div>
        <div class="expand">
          <span>更多</span>
          <i class="el-icon-d-arrow-right"></i>
        </div>
      </header>
      <div class="content xq-content">
        <div v-for="d in dutyInfo" :key="d.id" class="item">
          <div class="department item">
            <span>{{d.department}}</span>
            <span>带班领导</span>
            <span>{{d.leader}}</span>
            <span>{{d.tel}}</span>
          </div>
          <div class="persons item">
            <span>值班人员</span>
            <span v-for="p in d.persons" :key="p.id" class="person">
              <span>{{p.name}}</span>
              <span>{{p.tel}}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import index from './index.js'
export default index
</script>
