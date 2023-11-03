import { mount } from '@vue/test-utils';
import Radio from '../packages/Radio/src/Radio.vue';
import { ref } from 'vue';
const radioValue = ref('radioValue');

describe('render', () => {
  it('component exists', () => {
    const wrapper = mount(Radio);
    expect(wrapper.exists()).toBe(true);
  });
  it('props-options', () => {
    const wrapper = mount(Radio, {
      props: {
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
          { label: '选项3', value: '3', disabled: true },
        ],
      },
    });
    const radio = wrapper.findAll('.yk-radio-round');
    expect(radio.length).toBe(3);
  });
});
