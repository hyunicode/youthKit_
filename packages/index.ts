import { App, Plugin } from 'vue';

import { ExamplePlugin } from './Example';
import { ButtonPlugin } from './Button';
import { RadioPlugin } from './Radio';

const MYKitPlugin: Plugin = {
  install(app: App) {
    ExamplePlugin.install?.(app);
    ButtonPlugin.install?.(app);
    RadioPlugin.install?.(app);
  },
};

export default MYKitPlugin;

export * from './Example'
export * from './Button'
export * from './Radio'