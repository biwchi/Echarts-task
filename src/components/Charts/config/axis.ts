import type { EChartsOption } from "echarts";

import { AppColors } from "@/common";

export const axisConfig: {
  yAxis: EChartsOption["yAxis"];
  xAxis: EChartsOption["xAxis"];
} = {
  yAxis: {
    axisLabel: {
      color: AppColors.TEXT,
      margin: 15,
      fontFamily: "'Inter', sans-serif",
    },
    type: "value",
    splitLine: {
      lineStyle: {
        color: AppColors.GRID_LINE,
        width: 1,
      },
    },
  },
  xAxis: {
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: AppColors.TEXT,
      margin: 15,
      fontFamily: "'Inter', sans-serif",
    },
    boundaryGap: false,
    data: Array.from({ length: 31 }).map((_, i) => i + 1),
  },
};
