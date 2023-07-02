import { App, Plugin } from 'vue';
import Button from './src/Button.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('ykButton', Button);
  },
};

export { Button };
