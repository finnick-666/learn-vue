<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-icon"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path)
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>
