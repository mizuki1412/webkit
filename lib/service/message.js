import {message, Modal} from "ant-design-vue";

// 提供两种提示错误的方式
// params: type(modal/message), content-详细描述
export function errorMessage(title, params){
  if(!params) params = {}
  if(params.type==='modal'){
    Modal.error({
      title: title
    })
  }else{
    message.error(title)
  }
}

export function successMessage(title, params){
  if(!params) params = {}
  if(params.type==='modal'){
    Modal.success({
      title: title
    })
  }else{
    message.success(title)
  }
}
