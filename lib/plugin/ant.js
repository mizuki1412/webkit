
import "ant-design-vue/dist/antd.css";
import Antd from 'ant-design-vue';

export function pluginAnt(app){
  app.use(Antd);
}

// iconfont
import { createFromIconfontCN } from '@ant-design/icons-vue';
import {configKit} from "../store/configkit";
// env: VITE_ICON_FONT_URL
export function pluginAntIconFont(app){
  if(configKit.VITE_ICON_FONT_URL && configKit.VITE_ICON_FONT_URL!==""){
    const IconFont = createFromIconfontCN({
      scriptUrl: configKit.VITE_ICON_FONT_URL,
    });
    app.component('icon-font', IconFont)
  }
}
