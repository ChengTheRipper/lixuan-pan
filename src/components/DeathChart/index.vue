<template>
  <div>
    <div ref="map" class="map-wrapper"></div>
  </div>
</template>

<script>
import ecStat from "echarts-stat";

export default {
  name: "LineChart",
  data() {
    return {
      option: null,
      eChart: null,
    };
  },
  computed: {},
  props: ["mapDate", "mapData", "mapTitle"],
  methods: {
    loadData() {
      const newData = [];
      const len = Math.min(this.mapData.length, this.mapDate.length);
      for (let i = 0; i < len; ++i) {
        newData.push[(i, this.mapData[i])];
      }

      this.option = {
        xAxis: {
          type: "category",
          data: this.mapDate
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.mapData,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
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
