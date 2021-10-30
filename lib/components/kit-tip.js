
import KitTip from './kit-tip.vue'
import {ElTooltip} from "element-plus";

export default {
  install:function(Vue){
    Vue.use(ElTooltip)
    Vue.component('KitTip',KitTip)
  }
}
