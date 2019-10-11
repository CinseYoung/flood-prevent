
/* eslint-disable */
import { mapState } from 'vuex'
export default {
  data() {
    return {
      idx: 0,
      active: 0,
      type: "",
      mtype: null,
      presentation: [
        { value: 0, name: "网格对比" },
        { value: 1, name: "卷帘对比" }
      ],
      types: [
        { name: "避洪转移图", color: "#999" },
        { name: "淹没范围图", color: "#999" },
        { name: "风险区划图", color: "#999" }
      ],
      tools: [
        { icon: "py-icon", name: "平移" },
        { icon: "full-icon", name: "全幅" },
        { icon: "fd-icon", name: "拉框放大" },
        { icon: "sx-icon", name: "拉框缩小" },
        { icon: "cj-icon", name: "测距" },
        { icon: "cm-icon", name: "测面" },
        { icon: "qc-icon", name: "清除" },
        { icon: "bh-icon", name: "标绘" },
        { icon: "dy-icon", name: "打印" },
        { icon: "jt-icon", name: "截图" },
        { icon: "qp-icon", name: "全屏" }
      ],floodData:[]
    };
  },
 
  computed: { ...mapState(['showLeft']) },
  created() {
    
  },
 
  methods: {
    setSourceData(data){
       this.floodData=data
       if(data.length>0)
          this.choose(data[0],0)
    },
    // 全屏  //el为全屏对象  // 判断各种浏览器，找到正确的方法
    launchFullScreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen(); return true
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen(); return true
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(); return true
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen(); return true
      }
    },
    // 退出全屏
    exitFullScreen(el) {
      if (document.exitFullscreen) {
        document.exitFullscreen(); return true
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); return true
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen(); return true
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen(); return true
      }
    },


    // 打印页面
    printpage(myDiv) {
      var newstr = document.getElementById(myDiv).innerHTML;
      var oldstr = document.body.innerHTML;
      document.body.innerHTML = newstr;
      window.print();
      document.body.innerHTML = oldstr;
      return false;
    },
    // 工具栏点击事件
    handleClick(data, index, e) {
      var me = this;
      me.active = index;
      me.$store.state.mapOpName = data.name;
      // 获取拉框控件DragZoom进行引用
      var arr = me.map._this.interactions.getArray()
      var dragzoom = arr[9]
      // 获取地图容器dom
      var map_container = document.querySelector("#map_container")
      // 标绘
      if (data.name == "标绘") {
        this.$store.state.isPlot = !this.$store.state.isPlot;
      }
      //拉框放大/缩小
      // 绑定放大缩小按钮事件
      if (data.name == "拉框放大" || data.name == "拉框缩小") {
        // 设置鼠标样式为十字瞄准线
        map_container.style.cursor = "crosshair";
        // 激活拉框控件DragZoom
        dragzoom.setActive(true)
        if (data.name == "拉框放大") {
          // 设置拉框放大
          dragzoom.out_ = false;
        } else {
          // 设置拉框缩小 
          dragzoom.out_ = true;
        }
      } else {
        // 禁用DragZoom控件
        dragzoom.setActive(false);
        map_container.style.cursor = "default";
      }
      //测距/面
      var draw = me.map._this.interactions.getArray()[10]
      me.map._this.removeInteraction(draw);
      if (data.name == '测距' || data.name == '测面') {
        me.map._this.interactions.array_ = arr.slice(0, 10)
        if (data.name == '测距') {
          me.mtype = 'LineString'
        } else {
          me.mtype = 'Polygon'
        }
        me.map._this.measure(me.mtype)
      } else if (data.name == '清除') {
        me.map._this.clear()
      }
      // 全幅
      if (data.name == '全幅') {
        me.$store.state.showLeft = !me.$store.state.showLeft
      }
      // 全屏
      if (data.name == '全屏') {
        // 启动全屏!
        me.launchFullScreen(document.documentElement);
        data.name = '退出全屏'
      } else if (data.name == '退出全屏') {
        me.exitFullScreen();
        data.name = '全屏'
      }
      // 截图
      if (data.name == '截图') {
        // 调用html2canvas插件
        html2canvas(document.body, {
          allowTaint: false,
          foreignObjectRendering: true,
          taintTest: false,
          useCORS: true,//火狐浏览器添加项
          onrendered: function (canvas) {
            var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            var userAgent = navigator.userAgent;
            //判断是否是IE11
            if (-1 !== userAgent.indexOf("Trident")) {
              var arr = image.split(',');
              var mime = arr[0].match(/:(.*?);/)[1];
              var bstr = atob(arr[1]);
              var n = bstr.length;
              var u8arr = new Uint8Array(n);
              while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
              }
              window.navigator.msSaveBlob(new Blob([u8arr], { type: mime }), "download.png");
            } else {
              canvas.id = "mycanvas";
              //生成base64图片数据
              var dataUrl = canvas.toDataURL();
              var newImg = document.createElement("img");
              newImg.setAttribute('crossOrigin', 'anonymous');
              newImg.src = dataUrl;
              var b = document.createElement('a')
              b.setAttribute("href", dataUrl)
              b.setAttribute("download", "img.png")
              document.body.appendChild(b)//火狐浏览器添加项
              b.click(); b.remove()
            }
          }
        });

      }
      // 打印
      if (data.name == '打印') {
        me.printpage('app')
      }
    },
    choose(data, index) {
      this.idx = index;
     // this.map.addLayer(data.url,[91.198 ,29.642],10)
     this.map.addFeatures()
    },
    getType: function () {
      let mapc = document.querySelector('.map_content')
      let map = document.getElementById('map_container')
      let map1 = document.querySelector('.map1')
      if (this.type == 1) {
        if (!map1) {
          map1 = document.createElement('div')
          map1.id = 'map_container'
          map1.style = `width:100%;height:100%`
          map1.className = 'map1'
          map1.innerHTML = map.innerHTML
          mapc.appendChild(map1)
        }
      } else {
        if (map1) {
          mapc.removeChild(map1)
        }
      }
    },
  }
};