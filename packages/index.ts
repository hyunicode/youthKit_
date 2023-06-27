import { App, Plugin } from 'vue';

import { ExamplePlugin } from './Example';
import { ButtonPlugin } from './Button';

const MYKitPlugin: Plugin = {
  install(app: App) {
    ExamplePlugin.install?.(app);
    ButtonPlugin.install?.(app);
  },
};

export default MYKitPlugin;

export * from './Example'
export * from './Button'