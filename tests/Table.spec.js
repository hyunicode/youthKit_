import { mount } from '@vue/test-utils';
import Table from '../packages/Table/src/Table.vue';

const options = {
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
};

describe('render', () => {
  it('component exists', () => {
    const wrapper = mount(Table);
    expect(wrapper.exists()).toBe(true);
  });
  it('table options', () => {
    const wrapper = mount(Table, {
      props: {
        options: options,
      },
    });
    const ths = wrapper.findAll('th');
    const ths_text = ths.map((th) => th.text());
    expect(JSON.stringify(ths_text)).toBe(JSON.stringify(options.fileds.map((item) => item.title)));
  });
  it('prop showHeader', () => {
    for (const val of [true, false]) {
      const wrapper = mount(Table, {
        props: {
          options: options,
          showHeader: val,
        },
      });
      const thead = wrapper.find('thead');
      expect(thead.exists()).toBe(val);
    }
  });
});
