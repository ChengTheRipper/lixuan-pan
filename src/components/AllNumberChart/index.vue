<template>
  <div>
    <div ref="map" class="map-wrapper"></div>
  </div>
</template>

<script>
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
      const len = Math.min(this.mapDate.length, this.mapData.confirm.length);
      for (let i = 0; i < len; ++i) {
        newData.push({
            type: 'radar',
            symbol: 'none',
            lineStyle: {
                width: 1
            },
            emphasis: {
                areaStyle: {
                    color: 'rgba(0,250,0,0.3)'
                }
            },
            data: [
              {
                value: [
                    this.mapData.confirm[i],
                    this.mapData.heal[i],
                    this.mapData.dead[i],
                    this.mapData.storeConfirm[i]
                ]
              }  
            ]
        });
      }

      this.option = {
        title: {
          text: this.mapTitle,
          top: 10,
          left: 10,
        },
        visualMap: {
          top: "middle",
          right: 10,
          color: ["red", "yellow"],
          calculable: true,
        },
        radar: {
          indicator: [
            { text: "确认人数", max: 4000000 },
            { text: "治愈人数", max: 400000 },
            { text: "死亡人数", max: 40000 },
            { text: "新增确诊人数", max: 100000 },
            
          ],
        },
        series: newData
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
