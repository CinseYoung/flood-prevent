<template>
  <div id="login-wrap">
     <div class="top">
        <div><span class="app">{{this.loginTop.App}}</span></div>
        <div><span class="help">{{this.loginTop.help}}</span></div>
     </div>
     <div class="logo"><span>西藏自治区水利信息统一身份认证</span></div>
     <div class="login-body">
       <div class="login-main">
          <div class="login-label">{{this.label}}</div>
          <div class="login-form">
             <component :is="currentComponent"></component>
          </div>
          <div class="login-tabs">
              <span v-for="(item,index) in tabs" :key="item.title" @click="tabarbtn(item.title,index)">
                 <i :class="{active:label===item.title}">
                   <img :src="item.src" />
                 </i>
                 {{item.title}}
              </span>
          </div>
       </div>
     </div>
    <div class="foot">
    <span>建设单位&nbsp;:&nbsp;西藏自治区水利厅&nbsp;&nbsp;&nbsp;技术支持&nbsp;:&nbsp;浙江贵仁信息科技股份有限公司</span>
  </div>
  </div>
</template>
<script>
  import index from './index.js'
  export default index
</script>
<style lang="scss">
   @import "./index.scss";
</style>