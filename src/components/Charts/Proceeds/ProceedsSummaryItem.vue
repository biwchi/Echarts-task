<script setup lang="ts">
import { AppColors } from "@/common";

type Props = {
  title: string;
  value: string;
  color?: AppColors;
};

defineProps<Props>();
</script>

<template>
  <div>
    <div class="summary-item__title">
      <div v-if="color" class="summary-item__circle" />
      <h1>{{ title }}</h1>
    </div>
    <span class="summary-item__value">{{ value }}</span>
  </div>
</template>

<style scoped>
.summary-item__title {
  display: flex;
  gap: 7px;
  align-items: center;
}

.summary-item__title h1 {
  color: var(--color-text);
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
}

.summary-item__value {
  font-size: 1.5rem;
  font-weight: 600;
}

.summary-item__circle {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: v-bind(color);
}
</style>
