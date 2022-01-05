import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)//必须Vue.use(插件)安装插件

const routes = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: 'Home'
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About'
    },
    component: About
  },
  {
    path: '/user/:id',
    name: 'User',
    meta: {
      title: 'User'
    },
    component: User
  },
  {
    path:'/profile',
    meta: {
      title: 'Profile'
    },
    component: Profile
  }
]

const router = new VueRouter({//创建router对象
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
})

export default router
