import { App, Plugin } from 'vue';

import { ExamplePlugin } from './Example';
import { ButtonPlugin } from './Button';
import { RadioPlugin } from './Radio';
import { CheckboxPlugin } from './Checkbox';
import { TablePlugin } from './Table';

const MYKitPlugin: Plugin = {
  install(app: App) {
    ExamplePlugin.install?.(app);
    ButtonPlugin.install?.(app);
    RadioPlugin.install?.(app);
    CheckboxPlugin.install?.(app);
    TablePlugin.install?.(app);
  },
};

export default MYKitPlugin;

export * from './Example';
export * from './Button';
export * from './Radio';
export * from './Checkbox';
export * from './Table';
