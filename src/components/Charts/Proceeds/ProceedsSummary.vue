<script setup lang="ts">
import ProceedsSummaryItem from "./ProceedsSummaryItem.vue";

import { AppColors } from "@/common";

const summary = [
  {
    title: "Общее оплачено",
    value: "1 123 500 ₽",
  },
  {
    title: "Деньги за мясо",
    value: "145 200 ₽",
    color: AppColors.PURPLE,
  },
  {
    title: "Расходы на ЗП",
    value: "1 223 500 ₽",
    color: AppColors.PRIMARY,
  },
  {
    title: "Прочее",
    value: "23 500 ₽",
    color: AppColors.BLUE,
  },
];
</script>

<template>
  <div class="summary">
    <ProceedsSummaryItem
      v-for="summaryItem in summary"
      :key="summaryItem.title"
      :title="summaryItem.title"
      :value="summaryItem.value"
      :color="summaryItem.color"
    />
  </div>
</template>

<style scoped>
.summary {
  display: flex;
  justify-content: space-between;
}

.summary > * {
  border-left: 1px solid var(--color-grid-line);
  padding-left: 12px;
}

.summary > *:first-child {
  border: none;
  padding: 0;
}
</style>
