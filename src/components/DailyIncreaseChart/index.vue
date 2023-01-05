<template>
  <div>
    <div ref="map" class="map-wrapper"></div>
  </div>
</template>

<script>
import data from './data.json'

export default {
  name: "DailyIncreaseChart",

  computed: {},
  methods: {
    loadData() {
      this.option = {
        title: {
          top: 30,
          left: "center",
          text: "亚洲病例每日新增人数",
        },
        tooltip: {},
        visualMap: {
          min: 0,
          max: 10000,
          type: "piecewise",
          orient: "horizontal",
          left: "center",
          top: 65,
        },
        calendar: {
          top: 120,
          left: 30,
          right: 30,
          cellSize: ["auto", 13],
          range: "2022",
          itemStyle: {
            borderWidth: 0.5,
          },
          yearLabel: { show: false },
        },
        series: {
          type: "heatmap",
          coordinateSystem: "calendar",
          data,
        },
      };

      this.$nextTick(() => {
        this.eChart = this.$echarts.init(this.$refs.map);
        this.eChart.setOption(this.option);
      });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped></style>
