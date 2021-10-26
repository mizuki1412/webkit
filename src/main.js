import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {configKitInit} from "../lib/store/configkit";
const app = createApp(App)
configKitInit(import.meta.env)

// plugins组件
import {pluginEcharts} from "../lib/plugin/echarts";
pluginEcharts(app)
// 全局注册lib组件
import {ComponentName} from "../lib/components";
import kitEmpty from '../lib/components/kit-empty.vue'
import kitModal from '../lib/components/kit-modal.vue'
import kitTip from '../lib/components/kit-tip.vue'
import kitTable from '../lib/components/kit-table.vue'
app.component(ComponentName.Empty, kitEmpty)
app.component(ComponentName.Modal, kitModal)
app.component(ComponentName.Tip, kitTip)
app.component(ComponentName.Table, kitTable)

// router
import {useRouter} from "../lib/router";
import {routes} from "./router";
import {routeBaseAfter, routeBaseBefore} from "../lib/router/intercepter";

const router = useRouter(app, routes)
router.beforeEach((to,from,next)=>{
  routeBaseBefore(to,from,next)
})
router.afterEach((to)=>{
  routeBaseAfter(to)
})

app.config.productionTip = false;
app.mount('#app')
