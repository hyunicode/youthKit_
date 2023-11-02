import { App, Plugin } from 'vue';
import Radio from './src/Radio.vue';
import RadioGroup from './src/RadioGroup.vue';

export const RadioPlugin: Plugin = {
  install(app: App) {
    app.component('yk-radio', Radio);
    app.component('yk-radio-group', RadioGroup);
  },
};

export { Radio };
