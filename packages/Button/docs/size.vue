<template>
  <div>
    <yk-button round style="margin: 5px; vertical-align: top" size="large">LARGE</yk-button>
    <yk-button round style="margin: 5px; vertical-align: top">DEFAULT</yk-button>
    <yk-button round style="margin: 5px; vertical-align: top" size="small">SMALL</yk-button>
  </div>

  <div>
    <yk-button type="success" round style="margin: 5px; vertical-align: top" size="large"
      >LARGE</yk-button
    >
    <yk-button type="success" round style="margin: 5px; vertical-align: top">DEFAULT</yk-button>
    <yk-button type="success" round style="margin: 5px; vertical-align: top" size="small"
      >SMALL</yk-button
    >
  </div>

  <div>
    <yk-button type="warning" round style="margin: 5px; vertical-align: top" size="large"
      >LARGE</yk-button
    >
    <yk-button type="warning" round style="margin: 5px; vertical-align: top">DEFAULT</yk-button>
    <yk-button type="warning" round style="margin: 5px; vertical-align: top" size="small"
      >SMALL</yk-button
    >
  </div>

  <div>
    <yk-button type="danger" round style="margin: 5px; vertical-align: top" size="large"
      >LARGE</yk-button
    >
    <yk-button type="danger" round style="margin: 5px; vertical-align: top">DEFAULT</yk-button>
    <yk-button type="danger" round style="margin: 5px; vertical-align: top" size="small"
      >SMALL</yk-button
    >
  </div>

  <div>
    <yk-button type="info" round style="margin: 5px; vertical-align: top" size="large"
      >LARGE</yk-button
    >
    <yk-button type="info" round style="margin: 5px; vertical-align: top">DEFAULT</yk-button>
    <yk-button type="info" round style="margin: 5px; vertical-align: top" size="small"
      >SMALL</yk-button
    >
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;
}
</style>
