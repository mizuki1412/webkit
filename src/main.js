import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {configKitInit} from "../lib/store";
import {useRouter} from "../lib/router";
import {routes} from "./router";
import {routeBaseAfter, routeBaseBefore} from "../lib/router/intercepter";
import {KitEmpty, KitIcon, KitModal, KitTable, KitTip} from "../lib/components";
import {VueEcharts} from "../lib/plugin";

const app = createApp(App)
configKitInit(import.meta.env)
// 全局注册lib组件
app.use(VueEcharts)
app.use(KitEmpty)
app.use(KitModal)
app.use(KitTip)
app.use(KitTable)
app.use(KitIcon)
import ids from 'virtual:svg-icons-names';
console.log(ids)
// router
const router = useRouter(app, routes)
router.beforeEach((to,from,next)=>{
  routeBaseBefore(to,from,next)
})
router.afterEach((to)=>{
  routeBaseAfter(to)
})

app.config.productionTip = false;
app.mount('#app')
