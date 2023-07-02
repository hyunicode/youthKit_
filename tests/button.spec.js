/* eslint-disable @typescript-eslint/no-unused-vars */
import { mount } from '@vue/test-utils';
import Buttion from '../packages/Button/src/index.vue';

const TEXT = 'TEST TEXT';

describe('message test', () => {
  it('renders default message', () => {
    const wrapper = mount(Buttion);
    expect(wrapper.text()).toBe('我是按钮组件我是原生按钮');
  });
  // it('renders props.message when passed', () => {
  //   const wrapper = mount(Buttion, {
  //     props: { message: TEXT },
  //   });
  //   expect(wrapper.text()).toBe('我是按钮组件我是原生按钮');
  // });
});
