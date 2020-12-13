<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/login">About</router-link>
    </div>
    <router-view/>-->
    <!--<yh-login></yh-login>-->
    <!--<yh-switch :size="1" :checked="checked[0]" @updated="(value) => updatedHandler(0, value)">Good</yh-switch>
    <yh-switch :size="1" :checked="checked[1]" @updated="(value) => updatedHandler(1, value)">Cheap</yh-switch>
    <yh-switch :size="1" :checked="checked[2]" @updated="(value) => updatedHandler(2, value)">Fast</yh-switch>
-->

    <!--<yh-profile></yh-profile>-->
    <yh-timeline></yh-timeline>
    <!--<yh-card3d></yh-card3d>-->
    <!--<yh-nav-menu></yh-nav-menu>-->
  </div>
</template>

<style>
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
  }

  body {
    margin: 0;
    padding: 0;
  }

</style>
<script>
  import YhLogin from "./components/login/YhLogin";
  import YhRegister from "./components/login/YhRegister";
  import YhSwitch from "./components/switch/YhSwitch";
  import YhProfile from "./components/profile/YhProfile";
  import YhTimeline from "./components/timeline/YhTimeline";
  import YhCard3d from "./components/card/YhCard3d";
  import YhNavMenu from "./components/nav/YhNavMenu";
  export default {
    data() {
      return {
        checked: [false, false, false],
        indexes: [],
      }
    },
    methods: {
      updatedHandler(index, value) {
        console.log(index, value)
        if (value && !this.indexes.includes(index)) {
          let newIndexes = [...this.indexes]
          newIndexes.push(index)
          this.indexes = newIndexes
        }

        if (!value && this.indexes.includes(index)) {
          let newIndexes = [...this.indexes]
          newIndexes.splice(this.indexes.indexOf(index), 1)
          this.indexes = newIndexes
        }

        if (this.indexes.length === 3) {
          let newIndexes = [...this.indexes]
          newIndexes.splice(0, 1)
          this.indexes = newIndexes
        }

        let checked = [false, false,false]

        if (typeof this.indexes[0] !== 'undefined') {
          checked[this.indexes[0]] = true
        }

        if (typeof this.indexes[1] !== 'undefined') {
          checked[this.indexes[1]] = true
        }

        this.checked = checked
      }
    },
    components: {YhNavMenu, YhCard3d, YhTimeline, YhProfile, YhSwitch, YhSwitch, YhRegister, YhLogin}
  }
</script>