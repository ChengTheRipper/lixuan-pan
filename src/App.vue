<template>
  <div id="app">
<!--    <SalaryChart/>-->
<!--    <div :style="{height: '1200px'}"></div>-->
<!--    <CareerChart/>-->
    <PandemicChart/>
  </div>
</template>

<script>
import PandemicChart from '@/components/PandemicChart'

export default {
  name: 'App',
  components: {
    PandemicChart
  }
}
</script>

<style lang="scss">
  .map-wrapper {
    width: 100%;
    height: 80vh;
  }
</style>
