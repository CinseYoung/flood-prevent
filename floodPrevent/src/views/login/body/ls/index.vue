<template>
  <div class="form" :model="form" >
      <div class="login-topm">
      <img src="@/assets/login/password2.png" style="top: 30px;"/>
      <input type="text" name="dt"  placeholder="请输入临时授权码" v-model="form.password" style="margin-top: 20px;"/>
    </div>
      <div class="login-topm" style=" margin-top: 30px;">
        <img src="@/assets/login/yz.png" style="top: 30px;"/>
      <input type="text" placeholder="验证码" style="width: 180px;margin-top: 20px;" v-model="form.code" />
      <div class="yanzhengm" @click="refreshCode" style="margin-top: 20px;">
          <s-identify :identifyCode="identifyCode"></s-identify>
      </div>
    </div>
    <div class="login-btn" @click="loginAction()" style=" margin-top: 40px;">
      <span>登录</span>
    </div>
  </div>
</template>
<script>
import ls from './index.js'
export default ls
</script>
<style lang="scss">
@import "../index.scss";
</style>
