<template>
  <button
    class="yk-button"
    :class="[
      `yk-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
      `yk-button--${size}`,
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
// import { Button } from '..';
interface Props {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  size?: 'large' | 'small' | 'medium';
}
withDefaults(defineProps<Props>(), {
  type: 'primary',
  plain: false,
  round: false,
  circle: false,
  disabled: false,
  size: 'medium',
});
defineEmits(['click']);

// mouseup => blur
onMounted(() => {
  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.yk-button');
  document.addEventListener('mouseup', (e) => {
    const target = e.target as HTMLElement;
    target.classList.contains('yk-button') && target.blur();
  });
});
</script>

<style scoped lang="scss">
@import '/src/assets/global.scss';
.yk-button {
  height: auto;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  appearance: none;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 8px 16px;
  font-size: 12px;
  border-radius: 5px;
  &:hover:not(.is-disabled),
  &:focus {
    color: #409eff;
    border-color: transparent;
    background-color: #eef5fe;
  }
}

.yk-button--primary {
  color: #fff;
  background-color: $primary;
  border-color: $primary;
  &:hover:not(.is-disabled),
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.yk-button--success {
  color: #fff;
  background-color: $success;
  border-color: $success;
  &:hover:not(.is-disabled),
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}

.yk-button--info {
  color: #fff;
  background-color: $info;
  border-color: $info;
  &:hover:not(.is-disabled),
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}

.yk-button--warning {
  color: #fff;
  background-color: $warning;
  border-color: $warning;
  &:hover:not(.is-disabled),
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}

.yk-button--danger {
  color: #fff;
  background-color: $danger;
  border-color: $danger;
  &:hover:not(.is-disabled),
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}

// 朴素button样式
.yk-button.is-plain {
  &:hover:not(.is-disabled),
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.yk-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover:not(.is-disabled),
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.yk-button--success.is-plain {
  color: #70c761;
  background: #edf8e9;
  &:hover:not(.is-disabled),
  &:focus {
    background: #70c761;
    border-color: #edf8e9;
    color: #fff;
  }
}

.yk-button--info.is-plain {
  color: #85888e;
  background: #f2f2f3;
  &:hover:not(.is-disabled),
  &:focus {
    background: #85888e;
    border-color: #f2f2f3;
    color: #fff;
  }
}
.yk-button--warning.is-plain {
  color: $warning;
  background: #f5dab1;
  &:hover:not(.is-disabled),
  &:focus {
    background: $warning;
    border-color: #f5dab1;
    color: #fff;
  }
}

.yk-button--danger.is-plain {
  color: #fe6164;
  background: #ffeeee;
  &:hover:not(.is-disabled),
  &:focus {
    background: #fe6164;
    border-color: #ffeeee;
    color: #fff;
  }
}

// round属性
.yk-button.is-round {
  border-radius: 100px;
  padding: 9px 16px;
}

//circle属性
.yk-button.is-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 8px;
}

// disabled属性
.yk-button.is-disabled {
  opacity: 0.8;
  cursor: not-allowed;
}

// 文字按钮
.yk-button--text {
  border-color: transparent;
  color: #409eff;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
  &:hover,
  &:focus {
    background: none;
  }
  & + .is-disabled {
    color: #a8abb6;
  }
}

// button组件尺寸
.yk-button--large {
  // padding: 12px 20px;
  height: auto;
  font-size: 16px;
}

.yk-button--small {
  // padding: 4px 8px;
  height: auto;
  font-size: 8px;
}
</style>
