<template>
  <div id="cell-detail" v-if="isShowDetail">
    <!-- <div class="switchBtn" @click="close">
      <i class="el-icon-caret-right"></i>
    </div>-->
    <div class="menu">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane size="mini" v-for="m in menu" :key="m.id" :label="m.name"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="titles" v-if="showAreas">方案1 (50年一遇洪水-溃口)</div>
    <div id="chart" v-if="!showAreas"></div>
    <div class="table">
      <div class="total">
        <div v-if="activeName!=2">
          影响区域：
          <span v-if="showAreas">1个省，</span>
          <span>{{tableData[0].city}}个区县，</span>
          <span>{{tableData[0].town}} 个乡镇</span>
          <span v-if="showAreas">，538个村</span>
        </div>
        <div v-else>
          <span>（单位：公顷）</span>
        </div>
      </div>
      <el-table
        border
        highlight-current-row
        :data="tableData"
        style="width: 100%"
        max-height="400"
        v-if="!showAreas && activeName==0"
      >
        <el-table-column prop="province" label="省份" width="60"></el-table-column>
        <el-table-column prop="city" label="区县" width="60"></el-table-column>
        <el-table-column prop="town" label="乡镇"></el-table-column>
        <el-table-column prop="floodArea" label="淹没面积(km²)" width="110"></el-table-column>
        <el-table-column prop="landArea" label="淹没耕地面积(hm²)" width="130"></el-table-column>
        <el-table-column prop="population" label="影响人口（万人）" width="120"></el-table-column>
        <el-table-column prop="GDP" label="淹没区GDP（万元）" width="140"></el-table-column>
      </el-table>
      <el-table
        border
        highlight-current-row
        :data="tableData"
        style="width: 100%"
        max-height="400"
        v-if="activeName==2"
      >
        <el-table-column prop="province" label="省份" width="60"></el-table-column>
        <el-table-column prop="city" label="区县" width="60"></el-table-column>
        <el-table-column prop="town" label="乡镇"></el-table-column>
        <el-table-column prop="forest" label="林地" width></el-table-column>
        <el-table-column prop="grass" label="草地" width></el-table-column>
        <el-table-column prop="water" label="水域" width></el-table-column>
        <el-table-column prop="other" label="其他" width></el-table-column>
        <el-table-column prop="total" label="总计" width></el-table-column>
      </el-table>
      <div class="txt-area" v-if="showAreas">
        <div v-for="v in villages" :key="v.id">
          <div class="title">
            <span>{{v.town}}</span>
            <span>{{v.city}}</span>
            <span>{{v.province}}</span>
          </div>
          <div class="village">
            <span v-for="vi in v.villages" :key="vi.id">{{vi}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="riskType">
      <span>
        <span style="font-weight:bolder">风险类型：</span>
        <span v-for="t in riskType" :key="t.id">
          <span class="icon" :style="{backgroundColor:t.color}"></span>
          {{t.name}}
        </span>
      </span>
    </div>
    <div class="section">
      <div class="left">
        <span style="font-weight:bolder">分段区间：</span>
        <el-select size="mini" v-model="section" placeholder="请选择">
          <el-option v-for="t in sections" :key="t.value" :label="t" :value="t"></el-option>
        </el-select>
        <div class="range" v-if="section=='其他'">
          范围：
          <el-input v-model="mini" size="mini"></el-input>-
          <el-input v-model="max" size="mini"></el-input>
        </div>

        <el-button plain size="mini" style="margin:0 0 0 10px;" @click="analyse">分析</el-button>
      </div>
      <el-button size="mini" plain @click="download">导出</el-button>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import echarts from "echarts";
import { mapState } from "vuex";
export default {
  name: "cellDetail",
  data() {
    return {
      activeName: 0,
      section: "",
      mini: "",
      max: "",
      sections: [">5.0m", "其他", "不限"],
      chartOption: null,
      tableData: [{ province: 1, city: 4, town: 3, villages: 568 }],
      riskType: [
        { name: "淹没水深", color: "#47aaf9" },
        { name: "淹没历时", color: "#ccc" },
        { name: "到达时间", color: "#aaa" }
      ],
      villages: [],
      showAreas: false,
      menu: [
        {
          name: "综合指标",
          chartData: {
            colorList: ["#C1232B", "#B5C334"],
            title: {
              text: "方案1长江1954年实际洪水淹没面积(km²)",
              x: "center",
              y: "30",
              left: "center",
              textStyle: {
                fontSize: 12
              }
            },
            tooltip: { trigger: "axis" },
            grid: {
              top: 70
            },
            legend: [
              {
                orient: "horizontal", // 'vertical'
                x: "68%", // 'center' | 'left' | {number},
                y: "top", // 'ce
                itemWidth: 0,
                itemHeight: 0,
                selectedMode: false, //取消图例上的点击事件
                data: ["统计单元："],
                textStyle: {
                  fontSize: 12
                }
              },
              {
                orient: "horizontal", // 'vertical'
                x: "right", // 'center' | 'left' | {number},
                y: "top", // 'ce
                itemWidth: 12,
                itemHeight: 12,
                data: ["区县", "乡镇"],
                textStyle: {
                  fontSize: 12
                },
                selected: {
                  区县: false
                }
              }
            ],
            xAxis: {
              axisLabel: {
                interval: 0,
                rotate: 40
              },
              data: [
                "汉河镇",
                "老湾乡",
                "大同湖管理区",
                "武林镇",
                "黄家口镇",
                "龙口镇",
                "新滩镇",
                "大沙湖管理区",
                "燕窝镇"
              ]
            },
            yAxis: {
              type: "value",
              min: 0,
              max: 120,
              interval: 24, //间隔
              minInterval: 1 //设置成1保证坐标轴分割刻度显示成整数。
            },
            series: [
              {
                name: "统计单元：",
                type: "bar"
              },
              {
                name: "区县",
                type: "bar",
                itemStyle: {
                  normal: {
                    //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                    color: function(params) {
                      // build a color map as your need.
                      var colorList = [
                        "#C1232B",
                        "#B5C334",
                        "#FCCE10",
                        "#E87C25",
                        "#27727B",
                        "#FE8463",
                        "#9BCA63",
                        "#FAD860",
                        "#F3A43B",
                        "#60C0DD",
                        "#D7504B",
                        "#C6E579",
                        "#F4E001",
                        "#F0805A",
                        "#26C0C0"
                      ];
                      return colorList[params.dataIndex];
                    }, //以下为是否显示，显示位置和显示格式的设置了
                    label: {
                      show: false,
                      position: "top",
                      formatter: "{b}\n{c}"
                    }
                  }
                }, //设置柱的宽度，要是数据太少，柱子太宽不美观~
                barWidth: 20,
                data: [50, 36, 25, 20, 15, 15, 115, 90, 85]
              },
              {
                name: "乡镇",
                type: "bar",
                itemStyle: {
                  normal: {
                    //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                    color: function(params) {
                      // build a color map as your need.
                      var colorList = [
                        "#2196f3",
                        "#B5C334",
                        "#FCCE10",
                        "#E87C25",
                        "#27727B",
                        "#FE8463",
                        "#9BCA63",
                        "#FAD860",
                        "#F3A43B",
                        "#60C0DD",
                        "#D7504B",
                        "#C6E579",
                        "#F4E001",
                        "#F0805A",
                        "#26C0C0"
                      ];
                      return colorList[params.dataIndex];
                    }, //以下为是否显示，显示位置和显示格式的设置了
                    label: {
                      show: false,
                      position: "top",
                      //                             formatter: '{c}'
                      formatter: "{b}\n{c}"
                    }
                  }
                }, //设置柱的宽度，要是数据太少，柱子太宽不美观~
                barWidth: 20,
                data: [15, 115, 90, 85, 50, 36, 25, 20, 15]
              }
            ]
          }
        },
        { name: "影响地区" },
        {
          name: "影响土地",
          chartData: {
            colorList: ["#C1232B", "#B5C334"],
            title: {
              text: "方案1长江1954年实际洪水淹没面积(km²)",
              x: "center",
              y: "30",
              left: "center",
              textStyle: {
                fontSize: 12
              }
            },
            grid: {
              top: 70
            },
            tooltip: { trigger: "axis" },
            color: ["#C1232B", "#B5C334"],
            legend: [
              {
                orient: "horizontal", // 'vertical'
                x: "68%", // 'center' | 'left' | {number},
                y: "top", // 'ce
                itemWidth: 0,
                itemHeight: 0,
                data: ["统计单元："],
                selectedMode: false, //取消图例上的点击事件
                textStyle: {
                  fontSize: 12
                }
              },
              {
                orient: "horizontal", // 'vertical'
                x: "right", // 'center' | 'left' | {number},
                y: "top", // 'ce
                itemWidth: 12,
                itemHeight: 12,
                data: ["区县", "乡镇"],
                textStyle: {
                  fontSize: 12
                },
                selected: {
                  区县: false
                }
              }
            ],
            xAxis: {
              axisLabel: {
                interval: 0,
                rotate: 40
              },
              data: [
                "汉河镇",
                "老湾乡",
                "大同湖管理区",
                "武林镇",
                "黄家口镇",
                "龙口镇",
                "新滩镇",
                "大沙湖管理区",
                "燕窝镇"
              ]
            },
            yAxis: {
              type: "value",
              min: 0,
              max: 120,
              interval: 24, //间隔
              minInterval: 1 //设置成1保证坐标轴分割刻度显示成整数。
            },
            series: [
              {
                name: "统计单元：",
                type: "bar"
              },
              {
                name: "乡镇",
                type: "bar",
                itemStyle: {
                  normal: {
                    color: "#2196f3"
                  }
                }, //设置柱的宽度，要是数据太少，柱子太宽不美观~
                barWidth: 20,
                data: [50, 96, 25, 120, 115, 115, 115, 90, 85]
              },
              {
                name: "区县",
                type: "bar",
                itemStyle: {
                  normal: {
                    //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
                    color: function(params) {
                      // build a color map as your need.
                      var colorList = [
                        "#27727B",
                        "#B5C334",
                        "#2196f3",
                        "#FCCE10",
                        "#E87C25",
                        "#FE8463",
                        "#9BCA63",
                        "#FAD860",
                        "#F3A43B",
                        "#60C0DD",
                        "#D7504B",
                        "#C6E579",
                        "#F4E001",
                        "#F0805A",
                        "#26C0C0"
                      ];
                      return colorList[params.dataIndex];
                    } //以下为是否显示，显示位置和显示格式的设置了
                  }
                }, //设置柱的宽度，要是数据太少，柱子太宽不美观~
                barWidth: 20,
                data: [15, 115, 90, 85, 50, 36, 25, 120, 115]
              }
            ]
          }
        }
      ]
    };
  },
  computed: { ...mapState(["isShowDetail"]) },
  created() {
    this.getTableData();
    this.getVillages();
  },
  mounted() {
    // 初始化图表
    this.drawChart("chart");
    this.a();
  },
  methods: {
    // 分析事件
    analyse: function() {},
    // 导出事件
    download: function() {},
    // 导航菜单点击事件
    handleClick: function() {
      if (this.activeName == 0 || this.activeName == 2) {
        this.showAreas = false;
        this.getTableData();
        setTimeout(() => {
          this.drawChart("chart");
        }, 100);
      } else {
        var div = document.getElementById("chart");
        var myChart = echarts.init(div);
        // div.removeAttribute("_echarts_instance_");
        myChart.dispose();
        this.showAreas = true;
      }
    },
    // 图表绘制
    drawChart(id) {
      // 基于准备好的dom，初始化echarts实例
      var div = document.getElementById("chart");
      var myChart = echarts.init(div);
      div.removeAttribute("_echarts_instance_"); // 移除容器上原有的 _echarts_instance
      // 指定图表的配置项和数据
      this.chartOption = this.menu[this.activeName].chartData;
      // 使用刚指定的配置项和数据显示图表。
      myChart.clear();
      myChart.setOption(this.chartOption, true);
    },
    // 获取影响地区信息
    getVillages() {
      var me = this;
      me.axios
        .get("/risk/get/base/result/village")
        .then(data => {
          if (data === null) return;
          me.villages = data;
        })
        .catch(error => {
          this.$message({ showClose: true, message: error, type: "error" });
        });
    },
    a() {
      var me = this;
      me.axios
        .get("/risk/get/base/result/countyTree")
        .then(data => {
          if (data === null) return;
        })
        .catch(error => {
          this.$message({ showClose: true, message: error, type: "error" });
        });
    },
    // 获取 表格信息
    getTableData() {
      var me = this;
      var url;
      if (me.activeName == 2) {
        url = "/risk/get/base/result/landTable";
      } else {
        url = "/risk/get/base/result/zhtable";
      }
      me.axios
        .get(url)
        .then(data => {
          if (data === null) return;
          me.tableData = data;
        })
        .catch(error => {
          this.$message({ showClose: true, message: error, type: "error" });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
#cell-detail {
  position: fixed;
  left: 360px;
  width: 540px;
  background: #fff;
  height: calc(100% - 84px);
  top: 84px;
  z-index: 999;
  font-size: 12px;
  overflow: auto;
  .switchBtn {
    position: absolute;
    top: 40%;
    width: 20px;
    height: 60px;
    border: 1px solid #ccc;
    border-left: none;
    line-height: 60px;
    // margin-top: -40px;
    background: #fff;
    opacity: 0.6;
    z-index: 999;
    cursor: pointer;
  }
  .menu {
    width: 228px;
    position: absolute;
    top: 0;
  }
  .titles {
    position: relative;
    top: 36px;
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
  #chart {
    width: 100%;
    height: 300px;
    position: relative;
    top: 5px;
  }
  .table {
    margin-top: 40px;
    text-align: right;
    .total {
      background-color: #f1f6f7;
      padding: 10px;
    }
    .txt-area {
      text-align: left;
      margin-top: 4px;
      font-size: 13px;
      border: 1px solid #ccc;
      max-height: 600px;
      overflow: auto;
      .title {
        background-color: #f1f6f7;
        font-size: 14px;
        padding: 10px;
        span + span {
          margin-left: 10px;
        }
      }
      .village {
        padding: 10px;
        span + span {
          margin-left: 10px;
        }
      }
    }
  }
  .riskType {
    padding: 10px;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 2px;
      margin: 0 2px;
    }
  }
  .section {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    .left,
    .range {
      display: flex;
      .el-select {
        width: 100px !important;
        margin-right: 10px;
      }
      .el-input--mini {
        width: 40px;
        margin: 0 4px;
      }
    }
    .range {
      .el-input--mini /deep/.el-input__inner {
        padding: 0 4px;
      }
    }
  }
}
.txt-area::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.txt-area::-webkit-scrollbar-thumb {
  background-color: #f8d2d2;
}
</style>
<style lang="scss">
#cell-detail ::-webkit-scrollbar {
  //滚动条的宽度
  width: 9px;
  height: 9px;
}
#cell-detail ::-webkit-scrollbar-track-piece {
  //滚动条凹槽的颜色，还可以设置边框属性
  background-color: #f8f8f8;
}
#cell-detail ::-webkit-scrollbar-thumb {
  //滚动条的设置
  background-color: #dddddd;
  background-clip: padding-box;
  min-height: 28px;
  border-radius: 20px;
}
#cell-detail ::-webkit-scrollbar-thumb:hover {
  background-color: #bbb;
}
#cell-detail .el-tabs__item {
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
#cell-detail .el-table {
  font-size: 12px;
}
</style>