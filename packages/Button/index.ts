import { App, Plugin } from 'vue';
import Button from './src/Button.vue';
import ButtonGroup from './src/ButtonGroup.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('ykButton', Button);
    app.component('ykButtonGroup', ButtonGroup);
  },
};

export { Button };
