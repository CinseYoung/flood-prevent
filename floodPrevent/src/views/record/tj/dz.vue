<template>
  <div id="statisticReport" style="overflow:visible">
    <div id="main_content"> 
      <div class="padding-10 padding-top-0" style="height: 100%">
        <div class="Maincontainer" style="height: 100%;">
          <el-row :gutter="12" class="top">
            <el-col v-for="(o, index) in documents" :key="index">
              <el-card
                style="height:80px;flex:1;"
                :body-style="{ padding: '0px' }"
                v-bind:style="{background:o.color}"
              >
                <div style="padding: 14px;">
                  <header class="head-card">
                    <span >{{o.text}}</span>
                    <i class="el-icon-warning-outline"></i>
                  </header>
                  <div class="bottom clearfix">
                  <h3 class="time">{{o.num}}</h3>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row style="margin-top:10px;">
            <div class="date-area">
              <div style="position: relative;top: -8px;right: 10px;">
                <el-button
                  type="text"
                  :class="showToday?'btn-active':'gray'"
                  @click="selectDate('today')"
                >今日</el-button>
                <el-button
                  type="text"
                  :class="showWeek?'btn-active':'gray'"
                  @click="selectDate('week')"
                >本周</el-button>
                <el-button
                  type="text"
                  :class="showMonth?'btn-active':'gray'"
                  @click="selectDate('month')"
                >本月</el-button>
                <el-button
                  type="text"
                  :class="showYear?'btn-active':'gray'"
                  @click="selectDate('year')"
                >本年</el-button>
              </div>
              <div class="block">
                <el-date-picker
                  v-model="value1"
                  size="mini"
                  type="daterange"
                  range-separator="~"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </div>
            </div>
          </el-row>
          <el-row style="display: flex;
                justify-content: space-between;">
            <div style="width:500px">
              <echarts1 :option="bar" :id="echartsId1" :height="270" auto-resize></echarts1>
            </div>
            <div class="list-area">
              <h4>
                <span>各类文档排名</span>
              </h4>
              <ol class="list">
                <li class="li" v-for='(o,index) in rankingList' :key="index">{{o}}</li>
              </ol>
            </div>
          </el-row>
          <!-- </div> -->
          <el-row style="margin-left: 20px;">
            <el-col :span="12">
              <el-card shadow="never">
                <h4>
                  <span class="h3">电子档案类别占比</span>
                </h4>
                <div style="width:600px">
                  <echarts2 :option="circle" :id="echartsId2" :height="235" auto-resize></echarts2>
                </div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card shadow="never">
                <h4>
                  <span class="h3">纸质档案类别占比</span>
                </h4>
                <div style="width:600px">
                  <echarts3 :option="circle2" :id="echartsId3" :height="235" auto-resize></echarts3>
                </div>
              </el-card>
            </el-col>
          </el-row>

          <el-row style="margin:0px;display: flex;">
            <div class="pre" @click="preCard">
              <i class="el-icon-arrow-left"></i>
            </div>
            <div class="gallery" ref="gallery">
              <el-col style="width: auto;" v-for="(o, index) in picList" :key="index">
                <el-card
                  style="height:188px;width: 328px;"
                  :body-style="{ padding: '0px' }"
                  shadow="never"
                >
                  <div class="gallery-card">
                    <div class="left">
                      <header>
                        <span style="font-size: 20px;">{{o.text}}</span>
                      </header>
                      <div class="bottom">
                        <h3>{{o.per}}</h3>
                      </div>
                    </div>
                    <div class="right">
                      <div style="width: 100px;height: 115px;">
                        <echarts4 :option="o.opt" :id="String(index)" :height="115" auto-resize></echarts4>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </div>

            <div class="next" @click="nextCard">
              <i class="el-icon-arrow-right"></i>
            </div>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dz from './dz.js'
export default dz
</script>
<style lang='scss' scoped>
 @import "../../../style/reset";
 @import "../../../style/statisticReport";
</style>
<style>
   #statisticReport .el-tabs__item{
        font-size:20px!important;
        height: 50px;
    }
    #statisticReport .h3{
    font-size: 20px;
    }
</style>