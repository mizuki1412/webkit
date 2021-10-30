
import KitTable from './kit-table.vue'
import {ElTable, ElPagination} from "element-plus";

export default {
  install:function(Vue){
    Vue.use(ElTable)
    Vue.use(ElPagination)
    Vue.component('KitTable',KitTable)
  }
}
