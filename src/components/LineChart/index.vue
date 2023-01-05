<template>
  <div>
    <div ref="map" class="map-wrapper"></div>
  </div>
</template>

<script>


import dataList from "@/utils/load";

export default {
  name: "LineChart",
  data() {
    return {
      option: null,
      eChart: null,
    }
  },
  computed:{

  },
  props: ['mapDate', 'mapData', 'mapTitle', 'mapLowColor', 'mapHighColor', 'mapLineColor'],
  methods: {
    loadData() {

      this.option = {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '100%'];
          }
        },
        title: {
          left: 'center',
          text: this.mapTitle
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.mapDate
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          },
          {
            start: 0,
            end: 100
          }
        ],
        series: [
          {
            name: this.mapTitle,
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: this.mapLineColor || '#262335'
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: this.mapHighColor || this.mapLineColor || '#000000'
                },
                {
                  offset: 1,
                  color: this.mapLowColor || '#ffffff'
                }
              ])
            },
            data: this.mapData
          }
        ]
      };

      this.$nextTick(()=>{
        this.eChart = this.$echarts.init(this.$refs.map)
        this.eChart.setOption(this.option)
      })
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style scoped>

</style>
