import {v4 as uuidv4} from 'uuid'
// 获取用户临时标识
export function getUserTempId(){
  let userTempId = localStorage.getItem('USERTEMPID_KEY')
  if(!userTempId){
    // 创建临时标识
    userTempId = uuidv4()
    // 保存临时Id
    localStorage.setItem('USERTEMPID_KEY',userTempId)
  }
  return userTempId
}