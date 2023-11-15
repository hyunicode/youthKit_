import { App, Plugin } from 'vue';
import Checkbox from './src/Checkbox.vue';

export const CheckboxPlugin: Plugin = {
  install(app: App) {
    app.component('yk-checkbox', Checkbox);
  },
};

export {
  Checkbox,
};
