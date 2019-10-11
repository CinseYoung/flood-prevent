<template>
  <div class="login-former">
    <div class="erweima">
      <span>请使用"认证" APP扫一扫登录门户</span>
      <img src="@/assets/login/erwein.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    loginAction(_this) {

    }
  }
}
</script>

<style  lang="scss">

.login-former {
  height: 200px;
  .erweima {
    height: 60%;
     margin-top: 15px;
    img {
      display: block;
      margin: 0 auto;
      height: 138px;
      width: 138px;
      margin-top: 15px;
    }
    span {
      // margin-top: 20px;
      display: block;
      width: 100%;
      text-align: center;
      color: #fff;
    }
  }
}

</style>

