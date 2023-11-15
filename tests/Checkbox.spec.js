import { mount } from '@vue/test-utils';
import Checkbox from '../packages/Checkbox/src/Checkbox.vue';
import { ref } from 'vue';
const radioValue = ref('radioValue');

describe('render', () => {
  it('component exists', () => {
    const wrapper = mount(Checkbox);
    expect(wrapper.exists()).toBe(true);
  });
  it('props-options', () => {
    const wrapper = mount(Checkbox, {
      props: {
        options: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' },
          { label: '选项3', value: '3', disabled: true },
        ],
      },
    });
    const checkbox = wrapper.findAll('.yk-checkbox-label');
    expect(checkbox.length).toBe(3);
  });
});
