import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import {buildMenu} from "./menu";

export function useRouter(app, routes){
  let mode;
  if(import.meta.env.VITE_ROUTE_MODE==='history' || import.meta.env.VITE_ROUTE_MODE==='' || !import.meta.env.VITE_ROUTE_MODE){
    mode = createWebHistory(import.meta.env.BASE_URL)
  }else{
    mode = createWebHashHistory(import.meta.env.BASE_URL)
  }
  const router = createRouter({
    history: mode,
    routes,
    // 跳转时 回到顶部
    // scrollBehavior() {
    //   // savedPosition
    //   return {
    //     x: 0,
    //     y: 0,
    //   };
    // },
  })
  app.use(router)
  // 构建菜单数据
  buildMenu(routes)
  return router
}

export * from './menu'
