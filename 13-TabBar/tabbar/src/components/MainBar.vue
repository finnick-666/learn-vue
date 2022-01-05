<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/image/TabBar/all.svg" alt="all">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="yellow">
      <img slot="item-icon" src="~assets/image/TabBar/category.svg" alt="category">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="green">
      <img slot="item-icon" src="~assets/image/TabBar/cart-Empty.svg" alt="cart">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/me" activeColor="purple">
      <img slot="item-icon" src="~assets/image/TabBar/bussiness-man.svg" alt="me">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
export default {
  name: "MainBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
