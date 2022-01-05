import axios from "axios";


export default function request(config) {
  const instance = axios.create({
    baseURL: "http://httpbin.org",
    timeout: 5000,
  })

  return instance(config)
}
