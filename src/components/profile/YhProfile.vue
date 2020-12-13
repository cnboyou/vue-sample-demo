<template>
  <div id="yh-profile">
    <div class="overlay"></div>
    <div class="page-wrap light-theme">
      <div class="wrap-center">
        <header class="header">
          <div class="avatar">
            <div class=""></div>
            <img src="../../assets/image/login/header_icon1.svg" alt="">
            <span class="name">WANGYIHAI</span>
            <h1 CLASS="hello-h1">ANIMATED PROFILE CARD</h1>

            <nav class="main-nav">
              <span autocapitalize="toggle-about"><i class="icon-xiala"></i></span>
            </nav>
          </div>
        </header>

        <div class="about" id="about">
          <div class="copy-block">
            <h2>About</h2>
            <p>
              Help people interested in this repository understand your project by adding a README.
              Help people interested in this repository understand your project by adding a README.
              Help people interested in this repository understand your project by adding a README.
              Help people interested in this repository understand your project by adding a README.
            </p>
            <h2>Ecommerce/cx</h2>
            <p>
              Help people interested in this repository understand your project by adding a README.
              Help people interested in this repository understand your project by adding a README.
              Help people interested in this repository understand your project by adding a README.
              Help people interested in this repository understand your project by adding a README.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "YhProfile"
  }


</script>

<style scoped>
  *, *:before, *:after {
    box-sizing: inherit;
  }

  #yh-profile, .page-wrap {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #yh-profile {
    font-family: Arial;
    font-size: 100%;
    font-weight: 400;
    line-height: 1;
    overflow: hidden;
  }

  h1, h2 {
    font-family: Tahoma;
    font-weight: 400;
    text-transform: uppercase;
    color: white;
    letter-spacing: 2px;
  }

  i {
    position: relative;
  }

  .overlay {
    position: absolute;
    z-index: 1;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background-position: center center;
    background-size: 100%;
    opacity: 1;
    filter: blur(5px);

  }

  .page-wrap {
    position: relative;
    z-index: 100;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)) , url("../../assets/image/bg/bg2.jpg");
    background-size: cover;
    background-position: center;
    height: 100%;
  }

  .wrap-center {
    width: 480px;
    overflow: hidden;
    transition: width 0.5s, background 0.5s;
  }

  .wrap-center.expand-width {
    width: 599px;
  }

  .light-theme .wrap-center{
    background: rgba(255, 255, 255, .0);
    color: rgba(0, 0, 0, .7);
  }

  .light-theme .wrap-center.bio-active {
    background: rgba(255, 255, 255, 0.9);
  }

  .dark-theme .wrap-center {
    background: rgba(0, 0, 0, .0);
    color: rgba(255, 255, 255, .9);
  }

  .header {
    width: 100%;
    position: relative;
    padding: 30px 0;
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(0,0,0,0.0);
    transition: border-bottom-color 0.5s;
  }

  .header .avatar {
    width: 180px;
    margin: 0 auto;
    backface-visibility: hidden;
    opacity: 1;
    transition: opacity 0.5s, width 0.5s;
    border: 3px solid white;
    border-radius: 150px;
    padding: 7px;
  }

</style>