<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/login">About</router-link>
    </div>
    <router-view/>-->
    <yh-login></yh-login>
  </div>
</template>

<style>

  body {
    margin: 0;
    padding: 0;
  }

</style>
<script>
  import YhLogin from "./components/login/Yh-Login";
  export default {
    components: {YhLogin}
  }
</script>