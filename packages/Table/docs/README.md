<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 表格

这是 youthKit 的 Table 组件

## 基础用法

> 通过 `options` 属性来渲染 Table 组件, 可以自定义表头和数据对象, 并为表头、内容和整个表格分别定义样式

<Preview comp-name="Table" demo-name="demo">
  <demo />
</Preview>

## 属性

|     参数      |        说明         |  类型   |       可选值       |        默认值         | 是否必填 |
| :-----------: | :-----------------: | :-----: | :----------------: | :-------------------: | :------: |
|   `options`   |      数据对象       | Object  |         --         | {fileds:[], datas:[]} |    是    |
|    `size`     |      表格尺寸       | string  | mini/default/small |       `default`       |    否    |
| `showHeader`  |    是否显示表头     | Boolean |    true / false    |        `true`         |    否    |
|  `headStyle`  |   自定义表格样式    | Object  |         --         |          --           |    否    |
|  `rowStyle`   |   自定义内容样式    | Object  |         --         |          --           |    否    |
| `customClass` | 自定义 Table 的类名 | String  |         -          |           -           |    否    |

## fileds 字段

|  参数   |     说明     |  类型  |      可选值       | 参数说明                 |
| :-----: | :----------: | :----: | :---------------: | ------------------------ |
| `filed` |   表头键名   | String |        --         | datas 字段中应有对应选项 |
| `title` |   表头名称   | String |        --         | --                       |
| `alige` | 水平对齐方式 | String | left/center/right | left                     |
| `width` |   列宽(px)   | String |        --         | --                       |
