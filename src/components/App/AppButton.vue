<script setup lang="ts">
const props = defineProps<{
  selected?: boolean;
}>();

const classes = {
  "app-button": true,
  selected: props.selected,
};
</script>

<template>
  <button :class="classes">
    <slot name="left-item" />
    <slot />
  </button>
</template>

<style scoped>
.app-button {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  background-color: var(--color-secondary-bg);
  color: var(--color-text);
  align-items: center;
  display: flex;
  gap: 8px;
}

.app-button.selected {
  background-color: var(--color-primary);
  color: var(--color-white);
}
</style>
