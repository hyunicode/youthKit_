/* eslint-disable @typescript-eslint/no-unused-vars */
import { mount } from '@vue/test-utils';
import Button from '../packages/Button/src/Button.vue';

const TEXT = 'TEST TEXT';

describe('message test', () => {
  it('init', () => {
    expect(Button).toBeTruthy();
  });
  it('render-exist', () => {
    const wrapper = mount(Button);
    expect(wrapper.find('.yk-button').exists()).toBe(true);
  });
  it('render-slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: TEXT,
      },
    });
    expect(wrapper.text()).toBe(TEXT);
  });
  it('event-click', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: TEXT,
      },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
  const types = ['primary', 'success', 'warning', 'danger', 'info'];
  describe('props-type', () => {
    types.forEach((type) => {
      it(`props-type-${type}`, () => {
        const wrapper = mount(Button, {
          props: {
            type,
          },
        });
        expect(wrapper.classes()).toContain(`yk-button--${type}`);
      });
    });
  });
  const sizes = ['large', 'medium', 'small'];
  describe('props-size', () => {
    sizes.forEach((size) => {
      it(`props-size-${size}`, () => {
        const wrapper = mount(Button, {
          props: {
            size,
          },
        });
        expect(wrapper.classes()).toContain(`yk-button--${size}`);
      });
    });
  });
  it('props-round', () => {
    const wrapper = mount(Button, {
      props: {
        round: true,
      },
    });
    expect(wrapper.classes()).toContain('is-round');
  });
  it('props-circle', () => {
    const wrapper = mount(Button, {
      props: {
        circle: true,
      },
    });
    expect(wrapper.classes()).toContain('is-circle');
  });
  it('props-disabled', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    });
    await wrapper.trigger('click');
    expect(wrapper.classes()).toContain('is-disabled');
    expect(wrapper.emitted().click).toBeFalsy();
  });
});
