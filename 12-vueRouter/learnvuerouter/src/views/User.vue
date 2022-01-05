<template>
  <div class="user">
    <h1>This is user info page</h1>
    <p>{{userId}}</p>
  </div>
</template>

<script>
export default {
    name: "User",
    computed: {
        userId() {
            return this.$route.params.id;
        }
    }
}
</script>

<style>

</style>