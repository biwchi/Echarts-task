<script setup lang="ts">
import Plan from "@/components/Charts/Plan/Plan.vue";
import Proceeds from "@/components/Charts/Proceeds/Proceeds.vue";
</script>

<template>
  <div class="wrapper">
    <Plan />
    <Proceeds />
  </div>
</template>

<style scoped>
.wrapper {
  min-height: 100vh;
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  gap: 100px;
}
</style>
