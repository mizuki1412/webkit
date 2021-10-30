
import KitEmpty from './kit-empty.vue'
import { ElEmpty } from 'element-plus'

export default {
  install:function(Vue){
    Vue.use(ElEmpty)
    Vue.component('KitEmpty',KitEmpty)
  }
}
