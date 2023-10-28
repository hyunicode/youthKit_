import { mount } from '@vue/test-utils';
import {{ compName }} from '../packages/{{ compName }}/src/{{ compName }}.vue';


describe('render', () => {
  it('component exists', () => {
    const wrapper = mount({{ compName }});
    expect(wrapper.exists()).toBe(true);
  });
});
