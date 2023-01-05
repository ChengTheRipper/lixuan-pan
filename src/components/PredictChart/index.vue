<template>
  <div>
    <div :style="{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0'}">
      <input type="text"  placeholder="请输入预测天数" :style="{width: '10vw', height: '5vh', marginRight: '10px'}"/>
      <button v-on:click="loadData()" :style="{width: '10vw', height: '5vh' ,backgroundColor: '#91c7ae'}">预测</button>
    </div>
    <div ref="map" class="map-wrapper"></div>
  </div>
</template>

<script>
import data from './data.json'

export default {
  name: "PredictChart",
  methods: {
    loadData() {
      this.option =  {
        title: {
          text: '疫情趋势分析'
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['感染人数', '恢复+死亡人数']
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: (new Array(20)).fill(0).map((_, index) => index + 1)
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '感染人数',
            type: 'bar',
            data: data[0],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
          },
          {
            name: '恢复+死亡人数',
            type: 'bar',
            data: data[1],
            markPoint: {
              data: [
                { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }]
            }
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
    // this.loadData()
  }
}
</script>

<style scoped>

</style>
