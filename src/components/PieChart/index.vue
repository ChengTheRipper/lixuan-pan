<template>
  <div>
    <div ref="map" class="pie-map-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: "PieChart",
  data() {
    return {
      option: null,
      echart: null,
    };
  },
  props: ["mapTitle", "mapSubTitle", "mapData"],
  methods: {
    loadData() {
      this.mapData = this.mapData.filter(item => item.name !== '台湾' && item.name !== '香港')
      this.option = {
        // title: {
        //   text: this.mapTitle,
        //   subtext: this.mapSubTitle,
        //   left: "center",
        // },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        // legend: {
        //   left: "center",
        //   top: "bottom",
        //   data: this.mapData.map((item) => item.name),
        // },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: this.mapSubTitle,
            type: "pie",
            radius: [20, 140],
            center: ["50%", "60%"],
            roseType: "radius",
            itemStyle: {
              borderRadius: 5,
            },
            label: {
              show: true,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: this.mapData,
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

<style scoped lang="scss">
.pie-map-wrapper {
  width: 50vw;
  height: 60vh;
  position: absolute;
  right: -10%;
  top: 10vh;
}
</style>
