<template>
  <div class="china-map-wrapper">
    <div ref="map" class="map-wrapper"></div>
  </div>
</template>

<script>




export default {
  name: "MapChart.vue",
  data() {
    return {
      option: null,
      eChart: null,
    }
  },
  computed:{

  },
  props: ['mapData', 'mapTitle', 'range'],
  methods: {
    loadData() {
      console.log(this.mapData);

      this.option = {
        tooltip: {
          formatter: function (params) {
            return params.seriesName + '<br />' + params.name + '：' + params.value
          }//数据格式化
        },
        title: {
          left: 'center',
          text: this.mapTitle
        },
        visualMap: {
          min: 0,
          max: 40,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'],//取值范围的文字
          inRange: {
            color: ['#ffffff', '#7f1100']//取值范围的颜色
          },
          show: true//图注
        },
        geo: {
          map: 'china',
          roam: false,//不开启缩放和平移
          zoom: 0.8,//视角缩放比例
          
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
            name: '确诊人数',
            type: 'map',
            geoIndex: 0,
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
.china-map-wrapper{
  width: 80vw;
  height: 80vh;
}
</style>
