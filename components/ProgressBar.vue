<template>
  <div v-if="left || right" class="progress-bar">
    <div :class="[`filled-bar ${filled}`]" :style="barStyle"></div>
    <!-- <span class="text">Progress: {{ left }}</span> -->
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["value", "right", "left", "filled"]);

const barStyle = computed(() => ({
  transform: `translate3d(-${(1 - props.value) * 100}%, 0, 0)`,
  width: `${props.value * 100}%`,
}));

const percentageText = computed(() => `${Math.round(props.value * 100)}%`);
</script>

<style scoped>
.progress-bar {
  position: relative;
  height: 100%;
}

.filled-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 12000;
  transition: transform 0.6s ease-in-out; /* Add smooth transition for transform */
}

.blue {
  background-color: #10435d !important;
}

.gray {
  background-color: #444444 !important;
}
</style>
