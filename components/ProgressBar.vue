<template>
  <div v-if="left || right === true" class="progress-bar">
    <div
      :class="[`filled-bar ${filled}`]"
      :style="{
        transform: `translate3d(-${(1 - value) * 100}%, 0, 0)`,
        width: `${value * 100}%`,
      }"
    ></div>
    <!-- <span class="text">Progress: {{ left }}</span> -->
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["value", "right", "left", "filled"]);

const percentageText = computed(() => `${Math.round(props.value * 100)}%`);
</script>

<style scoped>
.filled-bar {
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  transform: translate3d(-100%, 0, 0);

  z-index: 12000;
}
/* Your ProgressBar component styles here */
.blue {
  background-color: #10435d !important;
}
.gray {
  background-color: #444444 !important;
}
</style>
