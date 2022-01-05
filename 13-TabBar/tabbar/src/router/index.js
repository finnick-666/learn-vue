import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home/Home";
import Category from "../pages/category/Category";
import Cart from "../pages/cart/Cart";
import Me from "../pages/me/Me";

Vue.use(VueRouter);

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/me',
    component: Me
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
