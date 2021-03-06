import axios from "axios";
import {baseUrl,timeout} from "@/services/config";
import {message} from "antd";

const instance = axios.create({
  baseURL:baseUrl,
  timeout:timeout
})

instance.interceptors.response.use((res)=>{
  return res.data
})

function getRes(url,params = {}){
  return new Promise((resolve,reject)=>{
    instance({
      url,
      params
    }).then(res=>{
      resolve(res)
    }).catch(err=>{
      message.error('接口调用失败')
    })
  })
}
//获取
export default getRes
