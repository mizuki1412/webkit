import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
const app = createApp(App)

// directive 指令
import {directiveDialogDrag} from "../lib/directive/dialog-drag";
directiveDialogDrag(app)

// plugins组件
import {pluginEcharts} from "./plugin/echarts";
pluginEcharts(app)
import {pluginAnt, pluginAntIconFont} from "./plugin/ant";
pluginAnt(app)
pluginAntIconFont(app)
// 全局注册lib组件
import {ComponentName} from "../lib/components";
import kitEmpty from '../lib/components/kit-empty.vue'
app.component(ComponentName.Empty, kitEmpty)

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
