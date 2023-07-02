import { App, Plugin } from 'vue';

import { ExamplePlugin } from './Example';
import { ButtonPlugin } from './Button';

const youthKitPlugin: Plugin = {
  install(app: App) {
    ExamplePlugin.install?.(app);
    ButtonPlugin.install?.(app);
  },
};

export default youthKitPlugin;

export * from './Example';
export * from './Button';
