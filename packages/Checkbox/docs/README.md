<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
import options from './options.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 多选框

这是 youthKit 的 Checkbox 组件

## 基础用法

> 通过 `options` 属性来渲染 Checkbox 组件, 可以自定义颜色, 排列方式, 禁用

<Preview comp-name="Checkbox" demo-name="demo">
  <demo />
</Preview>

## 自定义字段名(label, value)

> 通过 `label` 和 `value` 属性来自定义 option 的字段名

<Preview comp-name="Checkbox" demo-name="options">
  <options />
</Preview>

## 属性

|     参数      |          说明          |       类型        |        可选值        | 默认值  | 是否必填 |
| :-----------: | :--------------------: | :---------------: | :------------------: | :-----: | :------: |
|   `v-model`   |       选中状态值       | String\| Number\  |          -           |    -    |    是    |
|   `option`    |  Checkbox 的 选项配置  |       Array       |          -           |    -    |    是    |
|    `size`     |    Checkbox 的大小     |      String       | mini / default/small | default |    否    |
|   `inline`    |     是否为行内排列     |      Boolean      |     true / false     |  false  |    否    |
| `labelFiled`  | 自定义 label 的字段名  |      String       |          -           |    -    |    否    |
| `valueFiled`  | 自定义 value 的字段名  |      String       |          -           |    -    |    否    |
| `customColor` | 自定义 Checkbox 的颜色 |      String       |          -           |    -    |    否    |
| `customClass` | 自定义 Checkbox 的类名 |      String       |          -           |    -    |    否    |

## 事件

|  事件名  |          说明          | 参数列表 |       参数说明        |
| :------: | :--------------------: | :------: | :-------------------: |
| `change` | 绑定值变化时触发的事件 |  $event  | 对应的 <value, index> |
