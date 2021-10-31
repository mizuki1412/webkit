import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {configKitInit} from "../lib/store";
import {useRouter} from "../lib/router";
import {routes} from "./router";
import {routeBaseAfter, routeBaseBefore} from "../lib/router/intercepter";
import {KitEmpty, KitIcon, KitModal, KitTable} from "../lib/components";
import {VueEcharts} from "../lib/plugin";

const app = createApp(App)
configKitInit(import.meta.env)
// 全局注册lib组件
app.use(VueEcharts)
app.use(KitEmpty)
app.use(KitModal)
app.use(KitTable)
app.use(KitIcon)

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
