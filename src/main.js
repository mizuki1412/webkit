import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
const app = createApp(App)

// plugins
import {pluginEcharts} from "./plugin/echarts";
pluginEcharts(app)
import {pluginAnt, pluginAntIconFont} from "./plugin/ant";
pluginAnt(app)
pluginAntIconFont(app)

// directive 指令
import {directiveDialogDrag} from "../lib/directive/dialog-drag";
directiveDialogDrag(app)

// 全局注册lib组件
import {ComponentName} from "../lib/components";
import kitEmpty from '../lib/components/kit-empty.vue'
app.component(ComponentName.Empty, kitEmpty)

// router
import {useRouter} from "../lib/router";
import {routes} from "./router";
useRouter(app, routes)

app.config.productionTip = false;
app.mount('#app')
