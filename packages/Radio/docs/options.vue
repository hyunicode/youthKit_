<template>
  <yk-radio
    v-model="radioVal"
    :options="radioOptions"
    labelFiled="name"
    valueFiled="id"
    @change="radioChange"
  ></yk-radio>
</template>

<script setup lang="ts">
import { reactive, ref, Ref } from 'vue';
const radioVal: Ref<number> = ref(0);
const state = reactive<{
  radioOptions: { name: string; id: number | string }[];
}>({
  radioOptions: [
    { name: '中国', id: 'CN' },
    { name: '英国', id: 'UK' },
    { name: '德国', id: 'DE' },
    { name: '法国', id: 'FR' },
  ],
});

const radioChange: (e: any) => void = (e: any) => console.log(e.value);

const { radioOptions } = state;
</script>
