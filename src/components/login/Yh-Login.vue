<template>
  <div class="yh_login">
    <div class="login_box">
      <img src="../../assets/image/login/header_icon.svg" class="avatar" alt="">
      <h1>Login Here</h1>
      <form>
        <p>Username</p>
        <input type="text" name="" placeholder="Enter Username">
        <p>Password</p>
        <input type="password" name="" placeholder="Enter Password">
        <input type="submit" name="" value="Login">
        <a href="#">Lost your password?</a> <br>
        <a href="#">Don't have an account?</a>
      </form>
      <!--<h1>登录</h1>
      <form>
        <p>用户名</p>
        <input type="text" name="" placeholder="输入用户名">
        <p>密码</p>
        <input type="password" name="" placeholder="输入密码">
        <input type="submit" name="" value="登录">
        <a href="#">忘记密码?</a> <br>
        <a href="#">没有账号?</a>
      </form>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "Yh-Login"
  }
</script>

<style scoped>
  .yh_login {
    width: 100%;
    height: 100vh;

    background-size: 100%;
    background: url("../../assets/image/bg/bg1.jpg") center;
    font-family: sans-serif;
  }

  .login_box {
    width: 320px;
    height: 420px;
    background: #000;
    color: #fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 70px 30px;
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
  }

  h1 {
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 22px;
  }

  .login_box p {
    margin: 0;
    padding: 0;
    font-weight: bold;
  }

  .login_box input {
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
  }

  .login_box input[type="text"],input[type="password"] {
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
  }

  .login_box input[type="submit"] {
    border: none;
    outline: none;
    height: 40px;
    background: #fb2525;
    color: #fff;
    font-size: 18px;
    border-radius: 18px;
  }

  .login_box input[type="submit"]:hover {
    cursor: pointer;
    background: #ffc107;
    color: #000;
  }

  .login_box a {
    text-decoration: none;
    font-size: 12px;
    line-height: 20px;
    color: darkgrey;
  }

  .login_box a:hover {
    color: #ffc107;
  }

</style>