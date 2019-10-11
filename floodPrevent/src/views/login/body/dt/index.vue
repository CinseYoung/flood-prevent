<template>
  <div class="form" :model="form" >
    <div class="login-topm">
      <img src="@/assets/login/username1.png" alt />
      <input type="text" name="username" placeholder="请输入手机号" v-model="form.username" />
    </div>
    <div class="login-topm">
      <img src="@/assets/login/password2.png" />
      <input type="text" name="dt" style="width:220px" placeholder="请输入动态口令" v-model="form.password"/>
      <span style>获取动态口令</span>
    </div>
    <div class="login-topm">
      <img src="@/assets/login/yz.png" />
      <input type="text" placeholder="验证码" style="width: 180px;" v-model="form.code"/>
      <div class="yanzhengm" @click="refreshCode">
          <s-identify :identifyCode="identifyCode"></s-identify>
      </div>
    </div>
    <div class="login-btn" @click="loginAction()">
      <span>登录</span>
    </div>
  </div>
</template>
<script>
import dt from './index.js'
export default dt
</script>
<style  lang="scss">
@import "../index.scss"
</style>
