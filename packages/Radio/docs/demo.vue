<template>
  <yk-radio
    v-model="radioVal"
    :options="radioOptions"
    :inline="false"
    customColor="green"
    @change="radioChange"
  ></yk-radio>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const radioVal = ref<string | number>('CN');

const radioChange: (e: any) => void = (e: any) => console.log(e);
const radioOptions = [
  { label: '中国', value: 'CN' },
  { label: '英国', value: 'UK' },
  { label: '德国', value: 'DE' },
  { label: '法国', value: 'FR', disabled: true },
];
</script>
