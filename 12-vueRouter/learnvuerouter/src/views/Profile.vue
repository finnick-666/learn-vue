<template>
  <div>
    <h1>This is user info page</h1>
  </div>
</template>

<script>
export default {
    name: "Profile",
    computed: {
        userId() {
            return this.$route.params.abc;
        }
    }
}
</script>

<style>

</style>