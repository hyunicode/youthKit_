<template>
  <yk-checkbox
    v-model="checkboxVal"
    :options="checkOptions"
    labelFiled="name"
    valueFiled="id"
    @change="checkboxChange"
  ></yk-checkbox>
</template>

<script setup lang="ts">
import { reactive, ref, Ref } from 'vue';
const checkboxVal: Ref<number[]> = ref([0, 2]);
const state = reactive<{
  checkOptions: { name: string; id: number | string }[];
}>({
  checkOptions: [
    { name: '中国', id: 'CN' },
    { name: '英国', id: 'UK' },
    { name: '德国', id: 'DE' },
    { name: '法国', id: 'FR' },
  ],
});

const checkboxChange = (e: any) => {
  console.log(e.value, e.index);
};

const { checkOptions } = state;
</script>
