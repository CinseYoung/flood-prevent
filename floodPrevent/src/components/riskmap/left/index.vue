<template>
  <div class="left-risk" ref="nav" :class="{hidden:!showLeft}">
    <div class="search" v-if="showLeft">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
        <div class="keyword">
          <el-input
            placeholder="请输入查询内容"
            v-model="formInline.keyword"
            size="mini"
            class="input-with-select"
          >
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
          <i
            :class="{'el-collapse-item__ arrow':true,'el-icon-arrow-right':true,'is-active':show}"
            @click="handleCollapse()"
            style="margin: 0 0 0 55px;"
          ></i>
        </div>
        <div class="group" v-if="show">
          <el-form-item label="河流：">
            <el-select v-model="formInline.river" placeholder="请选择河流">
              <el-option v-for="r in rivers" :key="r.id" :label="r" :value="r"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属地：">
            <el-select v-model="formInline.region" placeholder="请选择地区">
              <el-option v-for="p in regions" :label="p.name" :value="p.id" :key="p.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="类型：">
            <el-select v-model="formInline.type" placeholder="请选择类型">
              <el-option v-for="t in types" :key="t.id" :label="t" :value="t"></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="content" v-if="showLeft">
      <el-card class="box-card" shadow="never" :style="{height:height+'px'}">
        <div slot="header">
          <span>编制单元(共{{data.length}}个)</span>
        </div>
        <el-scrollbar>
          <el-collapse class="item">
            <el-collapse-item v-for="(item ,index) in data" :key="index">
              <template slot="title">
                <div>
                  <span class="number">{{index+1}}</span>
                  <span class="icon">{{item.name }}</span>
                </div>
              </template>
              <div
                class="item-content"
                v-for="(n ,i) in item.children"
                :key="i"
                :class="{itemActive:n.id===activeSpan}"
              >
                <span
                  :class="{span:true,spanActive:n.id===activeSpan }"
                  @click="spanClick(n,$event)"
                >{{n.name}}</span>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-scrollbar>
      </el-card>
      <!-- <div class="pageBar">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="leftPage.currentPage"
          layout="prev, pager, next, jumper"
          :total="20"
          :page-size="1"
          :pagerCount="5"
          small
        ></el-pagination> 
      </div>-->
    </div>
     <div class="switchBtn" @click="close">
      <i class="el-icon-caret-right"></i>
    </div>
    <span class="map-title">{{title}}</span>
  </div>
</template>

<script>
/* eslint-disable */
import riskLeft from "./index.js";

export default riskLeft;
</script>
<style lang="scss">
@import "./index.scss";
.gr-header-map-wrap .el-collapse-item__wrap {
  background-color: transparent;
}
.gr-header-map-wrap  .active {
  background-color: #f0f0f0;
}
</style>
