<template>
  <div v-if="ifHome">
    <home />
  </div>
  <div v-else>
    <headerBlock id="headerBlock" />
    <div class="yk-kit-doc">
      <aside v-if="!ifAside">
        <router-link v-for="(link, index) in data.links" :key="index" :to="link.path">{{
          link.name
        }}</router-link>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import headerBlock from './components/header-block.vue';
import home from './components/home.vue';
import ComponentList from 'packages/list.json';
import { reactive, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const $route = useRoute();
const data = reactive({
  links: ComponentList.map((item) => ({
    path: `/components/${item.compName}`,
    name: item.compZhName,
  })),
});
const ifAside = computed(() => $route.path === '/youthKit');
const ifHome = computed(() => $route.path === '/');
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
  margin-left: 150px;

  aside {
    width: 100px;
    padding: 15px;
    flex: 1;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    // margin-left: 50px;
    // margin-right: 50px;
    overflow: auto;
    position: sticky;
    top: 64px;
    z-index: 998;
    height: calc(100vh - 100px);
  }
  main {
    width: 100%;
    flex: 6;
    padding: 15px;
    overflow: auto;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
      Geneva, Verdana, sans-serif;
    margin-right: 150px;
    // display: flex;
  }
}
</style>
