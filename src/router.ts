import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router';

let routes = [
  {
    title: '示例',
    name: 'Example',
    path: '/components/Example',
    component: () => import('packages/Example/docs/README.md'),
  },
  {
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import('packages/Button/docs/README.md'),
  },
  {
    title: '单选框',
    name: 'Radio',
    path: '/components/Radio',
    component: () => import('packages/Radio/docs/README.md'),
  },
];

routes = [
  {
    title: '首页',
    name: 'Home',
    path: '/youthKit',
    component: () => import('../README.md'),
  },
  ...routes,
];

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
