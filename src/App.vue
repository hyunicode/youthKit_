<template>
  <headerBlock id="headerBlock" />
  <div class="yk-kit-doc">
    <aside>
      <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{
        link.name
      }}</router-link>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import headerBlock from './components/header-block.vue';
import ComponentList from 'packages/list.json';
import { reactive } from 'vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = reactive({
  links: ComponentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
  })),
});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#headerBlock {
  position: sticky;
  top: 0;
  z-index: 999;
}
.yk-kit-doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
      Geneva, Verdana, sans-serif;
  }
}
</style>
