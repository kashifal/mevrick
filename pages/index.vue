<template>
  <div>
    <div
      class="scroll-indicator"
      :style="{ width: scrollPercentage + '%' }"
    ></div>
    <!-- {{ locale }}
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('fr')">fr</button> -->
    <Navbar />
    <main>
      <hero />
      <section class="progress-section" aria-hidden="true">
        <div class="progress main"></div>
      </section>
      <!-- Skills -->
      <Skills />
      <!-- Projects -->
      <Projects />
      <!-- About -->
      <About />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrollPercentage = ref(0);

const updateScrollProgress = () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight =
    document.documentElement.clientHeight || window.innerHeight;
  scrollPercentage.value = (scrollTop / (scrollHeight - clientHeight)) * 100;
};

onMounted(() => {
  window.addEventListener("scroll", updateScrollProgress);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollProgress);
});
const left = ref(false);
const { locale, setLocale } = useI18n();
const openLeft = () => {
  left.value = !left.value;
};
</script>
<style scoped>
.scroll-indicator {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 8px; /* Height of the scroll indicator */
  background-color: #790101; /* Color of the scroll indicator */
  z-index: 9999;
  transition: width 0.5s ease; /* Transition effect for smooth width changes */
}
</style>
