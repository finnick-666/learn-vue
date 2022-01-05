<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home" tag="button" active-class="active">Home</router-link> |
      <router-link to="/about" tag="button" active-class="active">About</router-link> |
      <router-link :to="'/user/'+userId" tag="button" active-class="active">User</router-link> |
      <router-link :to="{path: '/profile', query: {name: 'tom', age: 12}}" tag="button" active-class="active">Profile</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      userId: 'tom'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.active {
  color: rgb(25, 202, 134)
}
</style>
