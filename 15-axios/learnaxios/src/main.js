import Vue from 'vue'
import App from './App'

import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//全局
// axios.defaults.baseURL = "http://httpbin.org"
// axios.defaults.timeout = 5000
//
// axios({
//   url: "/anything",
//   method: "get"
// }).then(res => {
//   console.log(res);
// })
//
// const value= "SFRUUEJJTiBpcyBhd2Vzb21l"
//
// axios({
//   url: `/base64/${value}`,
//   method: "get"
// }).then(res => {
//   console.log(res.data);
// })
//
// axios.all([axios({
//   url: "/anything",
//   method: "get"
// }), axios({
//   url: `/base64/${value}`,
//   method: "get"
// })]).then(res => console.log(res))

//创建实例
//
// const instance = axios.create({
//   baseURL: "http://httpbin.org",
//   timeout: 5000,
// })
//
// instance({
//   url: "/anything"
// }).then(res => {
//   console.log(res);
// })

import service from "../api/request"

service({
  url: "/anything"
}).then(res => console.log(res))
  .catch(err => console.log(err))
