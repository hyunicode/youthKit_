import { App, Plugin } from 'vue';

{{ importPlugins }}

const MYKitPlugin: Plugin = {
  install(app: App) {
    {{ installPlugins }}
  },
};

export default MYKitPlugin;

{{ exportPlugins }}