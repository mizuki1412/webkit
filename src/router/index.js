
export const routes = [
  {
    path: "/full",
    name:"full",
    component: () => import('../views/page2/page3.vue'),
  },
  {
    path: '/',
    name: 'main',
    redirect:{name:"page1"},
    component: () => import('../views/main.vue'),
    meta:{
      menu: true
    },
    children:[
      {
        path: '/page1',
        name: 'page1',
        component: () => import('../views/page1/page1.vue'),
        meta:{
          menuTitle: "子页面1",
          icon: 'icon-home'
        }
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('../views/page2/page2.vue'),
        meta:{
          menuTitle: "子页面2",
          icon: 'icon-home'
        },
      },
      {
        path: "/page2/p1",
        name:"page2_p1",
        component: () => import('../views/page2/page3.vue'),
        meta:{
          menuTitle: "子页面2p1",
          menuBelong: "page2"
        },
      },
      {
        path: '/page3',
        name: 'page3',
        component: () => import('../views/page2/page2.vue'),
        meta:{
          menuTitle: "子页面2",
          icon: 'icon-home'
        },
      },
      {
        path: '/page4',
        name: 'page4',
        component: () => import('../views/page2/page2.vue'),
        meta:{
          menuTitle: "子页面2",
          icon: 'icon-home'
        },
      },
      {
        path: '/page5',
        name: 'page5',
        component: () => import('../views/page2/page2.vue'),
        meta:{
          menuTitle: "子页面2",
          icon: 'icon-home'
        },
      },
    ]
  }
]
