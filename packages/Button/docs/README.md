<!-- 加载 demo 组件 start -->

<script setup>
import demo from './demo.vue'
import disable from './disable.vue'
import size from './size.vue'
import group from './group.vue'
</script>

<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 按钮

这是 youthKit 的 Button 组件

## 基础用法

<Preview comp-name="Button" demo-name="demo">
  <demo />
</Preview>

## 禁用状态

<preview comp-name="Button" demo-name="disable">
  <disable />
</Preview>

## size 属性

<preview comp-name="Button" demo-name="size">
  <size />
</Preview>

## ButtonGroup

<Preview comp-name="Button" demo-name="group">
  <group />
</Preview>

## 属性

<style>
table th:first-of-type {
    width: 4cm;
}
table th:nth-of-type(2) {
    width: 200pt;
}
table th:nth-of-type(3) {
    width: 8em;
}
</style>

|    参数    | 说明           |  类型   |   可选值    |  默认值   | 是否必填 |
| :--------: | :------------- | :-----: | :---------: | :-------: | :------: |
|   `type`   | 按钮类型       | string  |   `enum`    | `primary` |    否    |
|  `plain`   | 是否为朴素按钮 | boolean | true, false |  `false`  |    否    |
|  `round`   | 是否为圆角按钮 | boolean | true, false |  `false`  |    否    |
|  `circle`  | 是否为圆形按钮 | boolean | true, false |  `false`  |    否    |
| `disabled` | 是否禁用按钮   | boolean | true, false |  `false`  |    否    |
|   `size`   | 按钮大小       | string  |   `enum`    | `medium`  |    否    |

## 事件

| 事件名  |   说明   | 参数列表 |     参数说明     |
| :-----: | :------: | :------: | :--------------: |
| `click` | 点击事件 |  $event  | 原生的 dom event |
