import type { EChartsOption } from "echarts";

import { AppColors } from "@/common";

export const tooltipConfig: EChartsOption["tooltip"] = {
  trigger: "axis",
  align: "center",
  verticalAlign: "bottom",
  backgroundColor: AppColors.SECONDARY_BG,
  borderWidth: 0,
  padding: [8, 16],
  shadowColor: "rgba(0, 0, 0, 0)",
  formatter: (params) => {
    let string: string = "";

    (
      params as Array<{ seriesName: string; marker: string; value: number }>
    ).forEach((param) => {
      string += `<div>
          <span>${param.seriesName}</span><br/>
          ${param.marker} <span style="color: #ffffff; font-weight: 600;">${param.value}</span>
        </div>`;
    });

    return `<div style="display: flex; align-items: center; gap: 20px;">${string}</div>`;
  },
  axisPointer: {
    label: {
      show: false,
    },
    lineStyle: {
      color: AppColors.PRIMARY,
    },
  },
};
