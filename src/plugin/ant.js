
import "ant-design-vue/dist/antd.css";
import Antd from 'ant-design-vue';

export function pluginAnt(app){
  app.use(Antd);
}

// iconfont
import { createFromIconfontCN } from '@ant-design/icons-vue';
export function pluginAntIconFont(app){
  if(import.meta.env.VITE_ICON_FONT_URL && import.meta.env.VITE_ICON_FONT_URL!==""){
    const IconFont = createFromIconfontCN({
      scriptUrl: import.meta.env.VITE_ICON_FONT_URL,
    });
    app.component('icon-font', IconFont)
  }
}
