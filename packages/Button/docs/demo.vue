<template>
  <span style="font-size: large; font-weight: bold; margin: 15px">一般用法</span>
  <div>
    <yk-button type="primary" style="margin: 5px" @click="event($event)">DEFAULT</yk-button>
    <yk-button type="success" style="margin: 5px" @click="event($event)">SUCCESS</yk-button>
    <yk-button type="warning" style="margin: 5px" @click="event($event)">WARNING</yk-button>
    <yk-button type="danger" style="margin: 5px" @click="event($event)">DANGER</yk-button>
    <yk-button type="info" style="margin: 5px" @click="event($event)">INFO</yk-button>
  </div>
  <span style="font-size: large; font-weight: bold; margin: 15px">round属性</span>
  <div>
    <yk-button type="primary" style="margin: 5px" round>DEFAULT</yk-button>
    <yk-button type="success" style="margin: 5px" round>SUCCESS</yk-button>
    <yk-button type="warning" style="margin: 5px" round>WARNING</yk-button>
    <yk-button type="danger" style="margin: 5px" round>DANGER</yk-button>
    <yk-button type="info" style="margin: 5px" round>INFO</yk-button>
  </div>
  <span style="font-size: large; font-weight: bold; margin: 15px">plain属性</span>
  <div>
    <yk-button type="primary" style="margin: 5px" plain>DEFAULT</yk-button>
    <yk-button type="success" style="margin: 5px" plain>SUCCESS</yk-button>
    <yk-button type="warning" style="margin: 5px" plain>WARNING</yk-button>
    <yk-button type="danger" style="margin: 5px" plain>DANGER</yk-button>
    <yk-button type="info" style="margin: 5px" plain>INFO</yk-button>
  </div>

  <span style="font-size: large; font-weight: bold; margin: 15px">circle属性</span>
  <div>
    <yk-button type="primary" style="margin: 5px" circle>D</yk-button>
    <yk-button type="success" style="margin: 5px" circle>S</yk-button>
    <yk-button type="warning" style="margin: 5px" circle>W</yk-button>
    <yk-button type="danger" style="margin: 5px" circle>D</yk-button>
    <yk-button type="info" style="margin: 5px" circle>I</yk-button>
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
