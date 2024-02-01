<script setup lang="ts">
import AppButton from "@/components/App/AppButton.vue";

import { AppColors } from "@/common";

export type Mode = { name: string; value: string; color?: string };

defineEmits<{ changeMode: [newMode: Mode] }>();
const props = defineProps<{ selectedMode: Mode }>();

const modes = [
  { name: "Все", value: "all" },
  { name: "План", value: "plan", color: AppColors.PRIMARY },
  { name: "Факт", value: "fact", color: AppColors.BLUE },
];

function getStyle(mode: Mode) {
  if (props.selectedMode.value !== mode.value) {
    return { backgroundColor: mode.color };
  }

  return { backgroundColor: AppColors.WHITE };
}
</script>

<template>
  <div class="modes">
    <AppButton
      v-for="mode in modes"
      :key="mode.value"
      :selected="mode.value === selectedMode.value"
      @click="$emit('changeMode', mode)"
    >
      <template v-if="mode.color" #left-item>
        <div class="mode__circle" :style="getStyle(mode)" />
      </template>

      {{ mode.name }}
    </AppButton>
  </div>
</template>

<style scoped>
.modes {
  display: flex;
  gap: 8px;
}

.mode__circle {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}
</style>
