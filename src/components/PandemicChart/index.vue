<template>
  <div>
    <el-container>
      <el-header>
        <h1 class="header">
          今日疫情数据总览 2022/06/15
        </h1>
      </el-header>
      <el-main>
        <el-descriptions title="疫情数据（含港澳台）" border>
          <el-descriptions-item
            v-for="item in overall"
            :label="item.title"
            :key="item.title"
            ><span>{{ item.cur }}</span> <br />
            <span style="color: red">较昨日增加{{ item.incr }}</span>
          </el-descriptions-item>
        </el-descriptions>
        <div class="world-map">
          <MapChart :map-data="mapData" map-title="疫情数据" />
          <PieChart :map-data="mapData" map-title="饼状图" map-sub-title="疫情数据" />
        </div>
        <div class="map-select-group">
          <div
            v-for="(item, index) in chartsTitle"
            class="map-select-item"
            :class="{ selected: index === chartIndex }"
            :key="index"
            v-on:click="changeChart(index)"
          >
            {{ item }}
          </div>
        </div>
        <el-carousel
          trigger="click"
          height="1000px"
          ref="carousel"
          :autoplay="false"
          arrow="never"
        >
          <el-carousel-item>
            <LineChart
              :map-date="dayList.date"
              :map-data="dayList.confirm"
              map-title="确诊人数"
              map-line-color="#a31d13"
              map-high-color="#a31d13"
              map-low-color="#ffffff"
            />
          </el-carousel-item>
          <el-carousel-item>
            <ScatterChart
              :map-date="dayList.date"
              :map-data="dayList.heal"
              map-title="治愈人数"
            />
          </el-carousel-item>
          <el-carousel-item>
            <DeathChart
              :map-date="dayList.date"
              :map-data="dayList.dead"
              map-title="死亡人数"
            />
          </el-carousel-item>
          <el-carousel-item>
            <LineChart
              :map-date="dayList.date"
              :map-data="dayList.storeConfirm"
              map-title="新增确诊人数"
              map-line-color="#e44a3d"
            />
          </el-carousel-item>
          <el-carousel-item>
            <AllNumberChart
              :map-date="dayList.date"
              :map-data="dayList"
              map-title="雷达图"
            />
          </el-carousel-item>
          <el-carousel-item>
            <DailyChart/>
          </el-carousel-item>
          <el-carousel-item>
            <PredictChart/>
          </el-carousel-item>
        </el-carousel>
      </el-main>
      <el-footer> </el-footer>
    </el-container>
  </div>
</template>

<script>
import {
  fetchOverallData,
  fetchMapData,
  fetchDayList,
} from "@/utils/loadCitiesData";
import MapChart from "@/components/MapChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import ScatterChart from "@/components/ScatterChart";
import DeathChart from '@/components/DeathChart';
import AllNumberChart from '@/components/AllNumberChart';
import DailyChart from '@/components/DailyIncreaseChart'
import PredictChart from "@/components/PredictChart";

export default {
  name: "PandemicChart",
  components: {
    MapChart,
    LineChart,
    PieChart,
    ScatterChart,
    DeathChart,
    AllNumberChart,
    DailyChart,
    PredictChart
  },
  data() {
    return {
      mapChart: null,
      mapChartOpt: null,
      monthChart: null,
      monthChartOpt: null,

      overall: [],
      mapData: [],
      dayList: {},
      chartIndex: 0,
      chartsTitle: ["确诊人数", "治愈人数", "死亡人数", "新增确诊人数", "疫情各项数据雷达图", "亚洲病例每日新增人数", "疫情趋势预测"],
    };
  },

  methods: {
    loadDomesticPandemicData() {},
    loadSpecificCityData() {},
    changeChart(index) {
      this.chartIndex = index;
      this.$refs.carousel.setActiveItem(index);
    },
  },
  created() {
    this.overall = fetchOverallData();
    this.mapData = fetchMapData();
    this.dayList = fetchDayList();
    console.log(this.dayList);
  },
};
</script>

<style lang="scss">
.header {
  text-align: center;
}

.world-map {
  position: relative;
  overflow: hidden;
}

.map-select-group {
  display: flex;

  width: 100%;
  height: 10vh;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid black;
}

.map-select-item {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 10vh;
  border-left: 1px solid black;
  // border-right: 0px transparent;
  text-align: center;

  &:first-child {
    border-left: 1px solid transparent;
  }

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  &.selected {
    color: white;
    background-color: gray;
  }
}
</style>
