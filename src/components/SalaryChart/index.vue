<template>
  <div>
    <h1>各城市平均工资分布图</h1>
    <div ref="map" class="map-wrapper">
    </div>

  </div>

</template>

<script>
import dataList from '@/utils/load'

export default {
  name: "SalaryChart",
  data() {
    return {
      myEchart: null,
      option: null
    }
  },
  methods: {
    loadData() {

      this.option = {
        tooltip: {
          formatter: function (params) {
            return params.seriesName + '<br />' + params.name + '：' + params.value
          }//数据格式化
        },
        visualMap: {
          min: 0,
          max: 10,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'],//取值范围的文字
          inRange: {
            color: ['#e0ff00', '#006e00']//取值范围的颜色
          },
          show: true//图注
        },
        geo: {
          map: 'china',
          roam: false,//不开启缩放和平移
          zoom: 1.23,//视角缩放比例
          label: {
            normal: {
              show: true,
              fontSize: '10',
              color: 'rgba(0,0,0,0.7)'
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: '#F3B329',//鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            name: '平均工资',
            type: 'map',
            geoIndex: 0,
            data: dataList
          }
        ]
      };

      this.myEchart = this.$echarts.init(this.$refs.map)
      this.myEchart.setOption(this.option)
    }
  },
  components: {},
  mounted() {
    this.loadData()
  }
}
</script>

<style scoped lang="scss">
.app {
}

h1 {
  margin: auto;
  text-align: center;
}

.map-wrapper {
  width: 100%;
  height: 100vh;
}
</style>
