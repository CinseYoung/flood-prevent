/* eslint-disable */
import { View } from 'ol'
import { Feature, geom, style } from "ol"
import OSM from 'ol/source/OSM'
import Point from 'ol/geom/Point'
import Select from 'ol/interaction/Select'
import DragZoom from 'ol/interaction/DragZoom'
import Style from 'ol/style/Style'
import conf from './conf.js'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js'
import { TileArcGISRest, Vector as VectorSource } from 'ol/source.js'

const kpst = {
  init: () => {
    var _op = { target: conf.target, layers: [], view: new View(conf.view) }
    kpst._this = new ol.Map(_op)
    const maps = conf.urls
    for (const index in maps) {
      const m = maps[index]
      if (!m.overlay) continue
      var layerConf = { source: new TileArcGISRest({ url: m.url, params: { 'sessionId': localStorage.getItem('kpst-token') } }) }
      if (m.extent) layerConf.extent = m.extent
      kpst._this.addLayer(new TileLayer(layerConf))
    }
    //添加框选控件    //为了改变DragZoom的内容，重新实例化一个控件
    var dragZoom = new DragZoom({
      condition: ol.events.condition.always,
      out: false, // 此处为设置拉框完成时放大还是缩小 true缩小
    });
    // 默认控件不激活状态
    dragZoom.setActive(false);
    // 将控件添加到地图
    kpst._this.addInteraction(dragZoom);

    // 测距、面

    //创建一个当前要绘制的对象
    var sketch
    //创建一个帮助提示框对象
    var helpTooltipElement;
    //创建一个帮助提示信息对象
    var helpTooltip;
    //创建一个测量提示框对象
    var measureTooltipElement;
    //创建一个测量提示信息对象
    var measureTooltip;
    //继续绘制多边形的提示信息
    var continuePolygonMsg
    //继续绘制线段的提示信息
    var continueLineMsg
    //帮助提示信息
    var helpMsg
    //定义矢量数据源
    var source = new ol.source.Vector();
    //定义矢量图层
    var vector = new ol.layer.Vector({
      source: source,
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255,255,255,0.2)'
        }),
        stroke: new ol.style.Stroke({
          color: '#e21e0a',
          width: 2
        }),
        image: new ol.style.Circle({
          radius: 5,
          fill: new ol.style.Fill({
            color: '#ffcc33'
          })
        })
      })
    });
    //创建比例尺控件
    var scaleLineControl = new ol.control.ScaleLine({
      units: 'metric',
      target: 'scalebar',
      className: 'ol-scale-line'
    });

    function measure(mtype) {
      sketch = new ol.Feature();
      // continuePolygonMsg = 'Click to continue drawing the polygon';
      // continueLineMsg = 'Click to continue drawing the line';
      //将矢量图层添加到地图中
      kpst._this.removeLayer(vector);
      kpst._this.addLayer(vector);
      //添加比例尺控件
      kpst._this.removeControl(scaleLineControl);
      kpst._this.addControl(scaleLineControl);
      //鼠标移动触发的函数
      var pointerMoveHandler = function (evt) {
        //如果是平移地图则直接结束
        if (evt.dragging) {
          return;
        }
        //帮助提示信息
        helpMsg = 'Click to start drawing';
        if (sketch) {
          //获取绘图对象的几何要素
          var geom = sketch.getGeometry();
          //如果当前绘制的几何要素是多线段，则将绘制提示信息设置为多线段绘制提示信息
          // if (geom instanceof ol.geom.Polygon) {
          //   helpMsg = continuePolygonMsg;
          // } else if (geom instanceof ol.geom.LineString) {
          //   helpMsg = continueLineMsg;
          // }
        }
        //设置帮助提示要素的内标签为帮助提示信息
        // if (helpTooltipElement)
        // helpTooltipElement.innerHTML = helpMsg;
        //设置帮助提示信息的位置
        // if (helpTooltip)
        helpTooltip.setPosition(evt.coordinate);
        //移除帮助提示要素的隐藏样式
        removeClass(document.getElementsByClassName('tooltip')[0], 'hidden')
      };

      //触发pointermove事件
      kpst._this.on('pointermove', pointerMoveHandler);

      //当鼠标移除地图视图的时为帮助提示要素添加隐藏样式
      document.querySelector('.ol-viewport').onmouseout = function () {
        addClass(document.getElementsByClassName('tooltip')[0], 'hidden')
      }
      //定义一个交互式绘图对象
      var draw;
      //添加交互式绘图对象的函数
      function addInteraction() {
        //创建一个交互式绘图对象
        draw = new ol.interaction.Draw({
          //绘制的数据源
          source: source,
          //绘制类型
          type: mtype,
          //样式
          style: new ol.style.Style({
            fill: new ol.style.Fill({
              color: 'rgba(255,255,255,0.2)'
            }),
            stroke: new ol.style.Stroke({
              color: 'rgba(0,0,0,0.5)',
              lineDash: [10, 10],
              width: 2
            }),
            image: new ol.style.Circle({
              radius: 5,
              stroke: new ol.style.Stroke({
                color: 'rgba(0,0,0,0.7)'
              }),
              fill: new ol.style.Fill({
                color: 'rgba(255,255,255,0.2)'
              })
            })
          })
        });
        //将交互绘图对象添加到地图中
        kpst._this.addInteraction(draw);
        //创建测量提示框
        createMeasureTooltip();
        //创建帮助提示框
        createHelpTooltip();
        //定义一个事件监听
        var listener;
        //定义一个控制鼠标点击次数的变量
        var count = 0;
        //绘制开始事件
        draw.on('drawstart', function (evt) {
          //The feature being drawn.
          sketch = evt.feature;
          //提示框的坐标
          var tooltipCoord = evt.coordinate;
          //监听几何要素的change事件
          //Increases the revision counter and dispatches a 'change' event.
          listener = sketch.getGeometry().on('change', function (evt) {
            //The event target.
            //获取绘制的几何对象
            var geom = evt.target;
            //定义一个输出对象，用于记录面积和长度
            var output;
            if (geom instanceof ol.geom.Polygon) {
              kpst._this.removeEventListener('singleclick');
              kpst._this.removeEventListener('dblclick');
              //输出多边形的面积
              output = formatArea(geom);
              //Return an interior point of the polygon.
              //获取多变形内部点的坐标
              tooltipCoord = geom.getInteriorPoint().getCoordinates();
            } else if (geom instanceof ol.geom.LineString) {
              //输出多线段的长度
              output = formatLength(geom);
              //Return the last coordinate of the geometry.
              //获取多线段的最后一个点的坐标
              tooltipCoord = geom.getLastCoordinate();
            }
            //设置测量提示框的内标签为最终输出结果
            // if (measureTooltipElement)
            measureTooltipElement.innerHTML = output;
            //设置测量提示信息的位置坐标
            // if (measureTooltip)
            measureTooltip.setPosition(tooltipCoord);
          });
          //地图单击事件
          kpst._this.on('singleclick', function (evt) {
            //设置测量提示信息的位置坐标，用来确定鼠标点击后测量提示框的位置
            // if (measureTooltip)
            measureTooltip.setPosition(evt.coordinate);
            //如果是第一次点击，则设置测量提示框的文本内容为起点
            if (count == 0 && measureTooltipElement) {
              measureTooltipElement.innerHTML = "起点";
            }
            //根据鼠标点击位置生成一个点
            var point = new ol.geom.Point(evt.coordinate);
            //将该点要素添加到矢量数据源中
            source.addFeature(new ol.Feature(point));
            //更改测量提示框的样式，使测量提示框可见
            measureTooltipElement.className = 'tooltip tooltip-static';
            //创建测量提示框
            createMeasureTooltip();
            //点击次数增加
            count++;
          });
          //地图双击事件
          kpst._this.on('dblclick', function (evt) {
            //根据
            var point = new ol.geom.Point(evt.coordinate);
            source.addFeature(new ol.Feature(point));
          });
        }, this);
        //绘制结束事件
        draw.on('drawend', function (evt) {
          count = 0;
          //设置测量提示框的样式
          measureTooltipElement.className = 'tooltip tooltip-static';
          //Set the offset for this overlay.
          //设置偏移量
          measureTooltip.setOffset([0, -7]);
          //清空绘制要素
          sketch = null;
          //清空测量提示要素
          measureTooltipElement = null;
          //创建测量提示框
          createMeasureTooltip();
          //Removes an event listener using the key returned by on() or once().
          //移除事件监听
          ol.Observable.unByKey(listener);
          //移除地图单击事件
          kpst._this.removeEventListener('singleclick');
        }, this);
      }
      //创建帮助提示框
      function createHelpTooltip() {
        //如果已经存在帮助提示框则移除
        if (helpTooltipElement) {
          helpTooltipElement.parentNode.removeChild(helpTooltipElement);
        }
        //创建帮助提示要素的div
        if (!helpTooltipElement)
          helpTooltipElement = document.createElement('div');
        //设置帮助提示要素的样式
        helpTooltipElement.className = 'tooltip hidden';
        //创建一个帮助提示的覆盖标注
        helpTooltip = new ol.Overlay({
          element: helpTooltipElement,
          offset: [15, 0],
          positioning: 'center-left'
        });
        //将帮助提示的覆盖标注添加到地图中
        kpst._this.addOverlay(helpTooltip);
      }
      //创建测量提示框
      function createMeasureTooltip() {
        //创建测量提示框的div
        // if (!measureTooltipElement)
        measureTooltipElement = document.createElement('div');
        measureTooltipElement.setAttribute('id', 'lengthLabel');
        //设置测量提示要素的样式
        measureTooltipElement.className = 'tooltip tooltip-measure';
        //创建一个测量提示的覆盖标注
        measureTooltip = new ol.Overlay({
          element: measureTooltipElement,
          offset: [0, -15],
          positioning: 'bottom-center'
        });
        //将测量提示的覆盖标注添加到地图中
        kpst._this.addOverlay(measureTooltip);
      }
      //格式化测量长度
      var formatLength = function (line) {
        //定义长度变量
        var length;
        //计算平面距离
        length = Math.round(line.getLength() * 100) / 100;
        //定义输出变量
        var output;
        //如果长度大于1000，则使用km单位，否则使用m单位
        if (length > 1000) {
          output = (Math.round(length / 1000 * 100) / 100) + ' ' + 'km'; //换算成KM单位
        } else {
          output = (Math.round(length * 100) / 100) + ' ' + 'm'; //m为单位
        }
        return output;
      };
      //格式化测量面积
      var formatArea = function (polygon) {
        //定义面积变量
        var area;
        //获取平面面积
        area = polygon.getArea();
        // }
        //定义输出变量
        var output;
        //当面积大于10000时，转换为平方千米，否则为平方米
        if (area > 10000) {
          output = (Math.round(area / 1000000 * 100) / 100) + ' ' + 'km<sup>2</sup>';
        } else {
          output = (Math.round(area * 100) / 100) + ' ' + 'm<sup>2</sup>';
        }
        return output;
      };
      //添加交互绘图对象
      addInteraction();
    }

    // 清除提示对象
    function clear() {
      source.clear()
      kpst._this.getOverlays().clear();
      kpst._this.removeLayer(vector);
      kpst._this.removeControl(scaleLineControl);
    }
    kpst._this.measure = measure
    kpst._this.clear = clear

    // 图层标注添加

    //矢量标注样式设置函数，设置image为图标ol.style.Icon
    function createLabelStyle(feature, icon, scale, opacity) {
      return (new ol.style.Style({
        image: new ol.style.Icon({
          opacity: opacity,
          src: icon,
          scale: scale // 标注图标大小
        }),
        text: new ol.style.Text({
          textAlign: "center", // 位置
          textBaseline: "middle", // 基准线
          font: "normal 12px 微软雅黑", // 文字样式
          text: feature.get("name"),
          fill: new ol.style.Fill({
            // 文本填充样式（即文字颜色)
            color: "#333"
          }),
          stroke: new ol.style.Stroke({
            color: "#Fff",
            width: 1
          })
        })
      }));
    }

    // 添加标注
    function draw(arr, icon, scale, opacity) {
      var me = this;
      /*********************显示地标**************************/
      // 设置标识范围
      var maxX = 99;
      var minX = 78;
      var maxY = 36;
      var minY = 26;
      //创建空的矢量容器
      var vectorSource = new ol.source.Vector({});

      for (let i = 1; i <= arr.length; i++) {
        let t1 = Math.random() * (maxX - minX + 1) + minX;
        let t2 = Math.random() * (maxY - minY + 1) + minY;
        //创建图标特性
        var iconFeature = new ol.Feature({
          geometry: new ol.geom.Point([t1, t2], "XY"),
          name: arr[i - 1]
        });
        //设置点要素样式
        iconFeature.setStyle(
          createLabelStyle(iconFeature, icon, scale, opacity)
        );
        //将图标特性添加进矢量中
        vectorSource.addFeature(iconFeature);
      }
      //创建矢量层
      var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: createLabelStyle(iconFeature, icon, scale, opacity)
      });
      kpst._this.rvl = vectorLayer
      // kpst._this.removeLayer(vectorLayer);
      // kpst._this.addLayer(vectorLayer);
    }
    kpst._this.draw = draw
    kpst._this.createLabelStyle = createLabelStyle
    // 设置标识文字
    var arr = ["s0", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9"];
    // 设置标识图标
    var src = "https://openlayers.org/en/latest/examples/data/icon.png";
    var scale = 0.5;
    var opacity = 0.5;
    draw(arr, src, scale, opacity);
    /*********************显示弹出层**************************/
    var container = document.getElementById("popup");
    var content = document.getElementById("popup-content");
    var popupCloser = document.getElementById("popup-closer");
    var overlay = new ol.Overlay({
      element: container,
      autoPan: true
    });
    // 弹窗显示
    function showPop(coodinate) {
      if (container) {
        overlay.setPosition(coodinate);
        coodinate = [coodinate[0].toFixed(2), coodinate[1].toFixed(2)]
        content.innerHTML = "<p>你点击的坐标为：" + coodinate + "</p>";
        kpst._this.addOverlay(overlay);
      }
    }
    kpst._this.showPop = showPop
    // 点击弹窗
    kpst._this.on('click', function (e) {
      var pixel = kpst._this.getEventPixel(e.originalEvent);
      kpst._this.forEachFeatureAtPixel(pixel, function (feature) {
        var coodinate = e.coordinate;
        overlay.setPosition(coodinate);
        coodinate = [coodinate[0].toFixed(2), coodinate[1].toFixed(2)]
        content.innerHTML = "<p>你点击的坐标为：" + coodinate + "</p>";
        kpst._this.addOverlay(overlay);
      });
    });
    // 弹窗关闭按钮
    if (popupCloser) {
      popupCloser.addEventListener('click', function () {
        overlay.setPosition(undefined);
      });
    }

    // 定位图标显示
    function showDot(coordinate) {
      // 动态创建这个div，并将这个div作为overlay的Element，添加到地图中
      // var point_div = document.createElement('div');
      // point_div.id = "dot";
      // point_div.style.width = '10px'
      // point_div.style.height = '10px'
      // point_div.style.background = 'red'
      var point_div = document.getElementById('dot');
      point_div.style.display = 'block'
      var point_overlay = new ol.Overlay({
        element: point_div,
        // positioning: 'center-center'
      });

      // kpst._this.removeOverlay(point_overlay);
      // kpst._this.addOverlay(point_overlay);
      point_overlay.setPosition(coordinate);
      point_overlay.setPositioning("center-center");
      kpst._this.point = point_overlay
    }
    kpst._this.markOverlay = overlay
    kpst._this.showDot = showDot
  }

}
export default kpst
