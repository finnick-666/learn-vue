import Vue from "vue";
import Vuex from "vuex"

//1.安装插件
Vue.use(Vuex);

//2.创建对象
const store = new Vuex.Store({
  state: {
    count:0
  },
  mutations: {//方法，可以传递参数
    increase(state) {
      state.count++
    },
    decrease(state) {
      state.count--
    }
  },
  actions: {

  },
  getters: {//类比computed

  },
  modules: {

  },
})

//3.导出store
export default store
