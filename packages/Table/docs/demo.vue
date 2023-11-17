<template>
  <yk-table
    :options="options"
    :headStyle="headStyle"
    :showHeader="showHeader"
    size="small"
  ></yk-table>
</template>

<script setup>
import { ref } from 'vue';
const showHeader = ref(true);
const headStyle = ref({ backgroundColor: 'rgb(220, 220, 220)' });

const options = ref({
  fileds: [
    { field: 'attr', title: '参数', align: 'center' },
    { field: 'type', title: '类型', align: 'center' },
    { field: 'desc', title: '说明', align: 'center', width: '400px' },
    { field: 'sel', title: '可选值', align: 'center' },
    { field: 'def', title: '默认值', align: 'center' },
  ],
  datas: [
    {
      attr: 'options',
      type: 'Object',
      desc: '表格数据 fileds 和 datas, 其中fileds为表头, datas为数据',
      sel: '——',
      def: '{fileds:[], datas:[]}',
    },
    {
      attr: 'size',
      type: 'String',
      desc: '表格尺寸大小',
      sel: 'default / small / mini',
      def: 'default',
    },
    {
      attr: 'showHeader',
      type: 'Boolean',
      desc: '是否显示表头',
      sel: 'true / false',
      def: 'true',
    },
    {
      attr: 'headStyle',
      type: 'Object',
      desc: '自定义表头样式',
      sel: '——',
      def: '——',
    },
    {
      attr: 'rowStyle',
      type: 'Object',
      desc: '自定义内容样式',
      sel: '——',
      def: '——',
    },
    {
      attr: 'customClass',
      type: 'String',
      desc: '自定义表格组件整体的Class类名',
      sel: '——',
      def: '——',
    },
  ],
});
</script>

<style lang="scss" scoped></style>
