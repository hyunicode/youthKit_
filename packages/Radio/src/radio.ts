import { computed, inject } from 'vue';

export const radioProps = {
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
  disabled: Boolean,
  checked: Boolean,
  size: String,
  border: Boolean,
};

export const radioEmits = ['update:modelValue', 'change'];

export const useRadio = (props: any, emits: any) => {
  const radioGroupProp: any = inject('radioGroupKey', undefined);
  const isGroup = computed(() => !!radioGroupProp);
  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroupProp.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroupProp.changeEvent(val);
      } else {
        emits('update:modelValue', val);
        emits('change', val);
      }
    },
  });

  const disabled = computed(() => (props.disabled ? props.disabled : radioGroupProp?.disabled));

  const checked = computed(() => (props.checked ? props.checked : radioGroupProp?.checked));

  const size = computed(() => (props.size ? props.size : radioGroupProp?.size));

  const label = computed(() => props.label);

  const border = computed(() => (props.border ? props.border : radioGroupProp?.border));

  const classes = computed(() => ({
    'is-disabled': disabled.value,
    [`y-radio-${size.value}`]: size.value,
    'is-bordered': border.value,
    'is-checked': modelValue.value === label.value,
  }));

  return {
    modelValue,
    disabled,
    size,
    label,
    classes,
    checked,
  };
};
