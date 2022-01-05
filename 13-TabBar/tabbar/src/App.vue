<template>
  <div id="app">
    <router-view></router-view>
    <MainBar></MainBar>
  </div>
</template>

<script>

import MainBar from "components/MainBar";

export default {
  name: 'App',
  components: {
    MainBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
