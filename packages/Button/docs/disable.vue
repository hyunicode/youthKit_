<template>
  <span style="font-size: large; font-weight: bold; margin: 15px">禁用状态</span>
  <div>
    <yk-button type="primary" disabled @click="event($event)">DEFAULT</yk-button>
    <yk-button type="success" style="margin: 5px" disabled>SUCCESS</yk-button>
    <yk-button type="warning" style="margin: 5px" disabled>WARNING</yk-button>
    <yk-button type="danger" style="margin: 5px" disabled>DANGER</yk-button>
    <yk-button type="info" style="margin: 5px" disabled>INFO</yk-button>
  </div>
</template>

<script setup lang="ts">
const event = (e: any) => {
  console.log(e.target.textContent);
};
</script>

<style lang="scss" scoped>
.div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;
}
</style>
