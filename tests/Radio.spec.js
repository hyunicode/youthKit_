import { mount } from '@vue/test-utils';
import Radio from '../packages/Radio/src/Radio.vue';
import { ref } from 'vue';
const radioValue = ref('radioValue');

describe('render', () => {
  it('component exists', () => {
    const wrapper = mount(Radio);
    expect(wrapper.exists()).toBe(true);
  });
  it('component props', () => {
    const wrapper = mount(Radio, {
      props: {
        label: 'radio',
        disabled: true,
        border: true,
        modelValue: radioValue.value,
      },
    });
    expect(wrapper.props().label).toBe('radio');
    expect(wrapper.props().disabled).toBe(true);
    expect(wrapper.props().border).toBe(true);
    expect(wrapper.props().modelValue).toBe('radioValue');
  });
  it('component events', async () => {
    const wrapper = mount(Radio, {
      props: {
        modelValue: radioValue.value,
      },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted().change).toBeTruthy();
  });
});
