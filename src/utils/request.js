import axios from 'axios';
import qs from 'qs';
import config from '@/config';
const service = axios.create({
  baseURL: config.baseUrl,
})
//定义格式
service.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}

const get = (url,params)=>{
  return service.get(url,{
    params
  })
}

const post = (url,params) =>{
  return service.post(url,{
    ...params
  })
}

const postForm = (url,form)=>{
  return service.post(url,qs.stringify(form))
}

export default{
  get, post, postForm,
}