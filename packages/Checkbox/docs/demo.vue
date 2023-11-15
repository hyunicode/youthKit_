<template>
  <yk-checkbox
    v-model="checkboxVal"
    :options="checkOptions"
    :inline="false"
    customColor="green"
    @change="checkChange"
  ></yk-checkbox>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
const checkboxVal = ref<Array<string | number>>([]);
const state = reactive({
  checkOptions: [
    { label: '中国', value: 'CN' },
    { label: '英国', value: 'UK' },
    { label: '德国', value: 'DE' },
    { label: '法国', value: 'FR', disabled: true },
  ],
});

const { checkOptions } = state;
const checkChange = (e: any) => {
  console.log(e.value, e.index);
};
</script>
