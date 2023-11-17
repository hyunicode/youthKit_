import { App, Plugin } from 'vue';
import Table from './src/Table.vue';

export const TablePlugin: Plugin = {
  install(app: App) {
    app.component('yk-table', Table);
  },
};

export {
  Table,
};
