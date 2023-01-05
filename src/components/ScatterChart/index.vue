<template>
    <div>
      <div ref="map" class="map-wrapper"></div>
    </div>
  </template>
  
  <script>
  
  
  
  
  export default {
    name: "ScatterChart",
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
          title: {
            left: 'center',
            text: this.mapTitle
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
          series: [
            {
              name: this.mapTitle,
              type: 'scatter',
              
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
  