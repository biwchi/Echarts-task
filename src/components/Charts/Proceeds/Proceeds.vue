<script setup lang="ts">
import type { EChartsOption } from "echarts";

import VChart from "vue-echarts";
import ProceedsSummary from "./ProceedsSummary.vue";

import { use } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { BarChart, LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import { axisConfig, gridConfig, tooltipConfig } from "../config";
import { AppColors } from "@/common";

const months = [
  "Янв",
  "Фев",
  "Мар",
  "Апр",
  "Май",
  "Июн",
  "Июл",
  "Авг",
  "Сен",
  "Окт",
  "Ноя",
  "Дек",
];

const option: EChartsOption = {
  tooltip: tooltipConfig,
  grid: {
    ...gridConfig,
    right: "3%",
  },
  yAxis: {
    ...axisConfig.yAxis,
    axisLabel: {
      color: AppColors.TEXT,
      margin: 30,
      fontFamily: "'Inter', sans-serif",
    },
  },
  xAxis: {
    ...axisConfig.xAxis,
    type: "category",
    data: months,
  },
  series: [
    {
      type: "bar",
      name: "Прочье",
      itemStyle: {
        color: AppColors.PRIMARY,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "transparent",
      },
      barCategoryGap: 15,
      stack: "bar",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      type: "bar",
      name: "ЗП",
      itemStyle: {
        color: AppColors.BLUE,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "transparent",
      },
      stack: "bar",
      data: [1, 4, 3, 2, 5, 6, 16, 8, 1, 5, 11, 12],
    },
    {
      type: "bar",
      name: "Мясо",
      itemStyle: {
        color: AppColors.PURPLE,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "transparent",
      },
      stack: "bar",
      data: [5, 1, 3, 2, 5, 6, 16, 8, 1, 5, 11, 12],
    },
  ],
};

use([TooltipComponent, GridComponent, BarChart, LineChart, SVGRenderer]);
</script>

<template>
  <div class="proceeds">
    <h1>ОБЩАЯ ВЫРУЧКА</h1>

    <ProceedsSummary />
    <VChart class="proceeds__chart" :option="option" />
  </div>
</template>

<style scoped>
.proceeds {
  max-width: 600px;
}

.proceeds h1 {
  font-size: 18px;
  font-weight: 500;
}

.proceeds__chart {
  height: 300px;
}
</style>
