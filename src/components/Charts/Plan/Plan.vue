<script setup lang="ts">
import type { EChartsOption, SeriesOption } from "echarts";

import VChart from "vue-echarts";
import PlanModes, { Mode } from "./PlanModes.vue";

import { AppColors } from "@/common";
import { computed, ref, watch } from "vue";
import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import { tooltipConfig, axisConfig, gridConfig } from "../config";

const generateData = () =>
  Array.from({ length: 31 }).map(() => Math.floor(Math.random() * 100));

const initialSeries: SeriesOption[] = [
  {
    name: "План",
    type: "line",
    data: generateData(),
    symbol: "circle",
    symbolSize: 10,
    lineStyle: {
      color: AppColors.PRIMARY,
    },
    itemStyle: {
      color: AppColors.PRIMARY,
    },
    areaStyle: {
      color: AppColors.PRIMARY,
      opacity: 0.2,
    },
  },
  {
    name: "Факт",
    type: "line",
    symbol: "circle",
    data: generateData(),
    symbolSize: 10,
    lineStyle: {
      color: AppColors.BLUE,
    },
    itemStyle: {
      color: AppColors.BLUE,
    },
    areaStyle: {
      color: AppColors.BLUE,
      opacity: 0.7,
    },
  },
];

const series = ref<SeriesOption[]>(initialSeries);
const selectedMode = ref<Mode>({
  name: "Все",
  value: "all",
});

const option = computed<EChartsOption>(() => ({
  animation: false,
  tooltip: tooltipConfig,
  yAxis: axisConfig.yAxis,
  xAxis: axisConfig.xAxis,
  grid: gridConfig,
  series: series.value,
}));

use([SVGRenderer, LineChart, GridComponent, TooltipComponent]);
watch(selectedMode, (newMode) => {
  if (newMode.value === "all") {
    return (series.value = initialSeries);
  }

  series.value = initialSeries.filter((s) => s.name !== newMode.name);
});
</script>

<template>
  <div class="plan">
    <PlanModes
      :selected-mode="selectedMode"
      @change-mode="selectedMode = $event"
    />

    <VChart :option="option" />
  </div>
</template>

<style scoped>
.plan {
  height: 400px;
}
</style>
