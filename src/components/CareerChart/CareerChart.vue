<template>
  <div>
    <div ref="map" class="map-wrapper"></div>
  </div>
</template>

<script>
import dataList from '@/utils/load2'

export default {
  name: "CareerChart.vue",
  data(){
    return {
      myEchart: null,
      option: null,

    }
  },
  methods:{
    loadData(){


      console.log(dataList)
      this.option = {
        title: {
          text: '各行业岗位数量',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: dataList.legendData
        },
        series: [
          {
            name: '岗位方向',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: dataList.seriesData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      this.myEchart = this.$echarts.init(this.$refs.map)
      this.myEchart.setOption(this.option)
    }
  },
  mounted() {
    this.loadData()
  }

}
</script>

<style scoped>

</style>
