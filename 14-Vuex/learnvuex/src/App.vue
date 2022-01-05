<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h3>{{$store.state.count}}</h3>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <HelloVuex></HelloVuex>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREASE, DECREASE} from "./store/mutation-types";

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: 'I am a message',
      }
    },
    methods: {
      add() {
        this.$store.commit(INCREASE)
      },
      sub() {
        this.$store.commit(DECREASE)
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
