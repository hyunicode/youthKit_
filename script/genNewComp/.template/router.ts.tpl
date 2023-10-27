import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

let routes = [{{ routes }}];

routes = [
    {
    path: '/',
    redirect: '/youthKit',
  },
  {
    title: '首页',
    name: 'Home',
    path: '/youthKit',
    component: () => import('../README.md'),
  },
  ...routes,
]

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
};

const router = createRouter(routerConfig as RouterOptions);

export default router;
