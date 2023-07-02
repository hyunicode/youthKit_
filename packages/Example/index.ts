import { App, Plugin } from 'vue';
import Example from './src/index.vue';

export const ExamplePlugin: Plugin = {
  install(app: App) {
    app.component('ykExample', Example);
  },
};

export { Example };
