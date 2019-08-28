import request from '@/utils/request';
import config from '@/config/config';
export function image(data){
  return request({
    url: config.changeImg,
    method: 'post',
    data
  })
}
export function num(data){
  return request({
    url: config.showNum,
    method: 'post',
    data
  })
 
}