import { Modal } from 'ant-design-vue';
import {createVNode} from "vue";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';

// title, content, ok, cancel
export function confirm(params){
  if(!params) params = {}
  let props = {
    icon: createVNode(ExclamationCircleOutlined),
  }
  props.title = params.title?params.title:'是否确认删除?';
  if(params.content){
    props.content = createVNode('div', { style: 'color:red;' }, params.content);
  }
  if(params.ok){
    props.onOk = params.ok
  }
  if(params.cancel){
    props.onCancel = params.cancel
  }
  Modal.confirm(props);
}
