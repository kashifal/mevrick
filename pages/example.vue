<template>
  <div id="app">
    <div class="card">
      <ProgressBar :value="progress"></ProgressBar>
      <div class="text-section" ref="textt" @scroll="onScroll">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
        architecto voluptatum, laboriosam quisquam quod minus molestias. Rem ut
        quidem, corrupti nihil molestiae deserunt, iusto velit unde atque
        mollitia, eum ad maiores exercitationem. Soluta harum sit cupiditate
        eos, commodi itaque nihil, beatae dolorem ducimus, repudiandae, vero quo
        corporis sed laborum at maxime dicta dolores perferendis! Possimus
        repellat velit iste quod recusandae suscipit vitae ex soluta nostrum
        animi saepe eius itaque, voluptas, sapiente minima quo culpa explicabo
        necessitatibus distinctio. Veritatis amet tempora, consectetur molestias
        optio eveniet laudantium, tenetur aspernatur nobis ratione sit hic in
        impedit quod deserunt recusandae atque, ipsam molestiae sequi!
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const progress = ref(0);
const textt = ref(null);

const onScroll = () => {
  const textRef = textt.value;
  const progressValue =
    textRef.scrollTop / (textRef.scrollHeight - textRef.clientHeight);
  progress.value = Math.min(Math.max(progressValue, 0), 1);
};

const percentageText = computed(() => `${Math.round(progress.value * 100)}%`);
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 1px 0 0;
  width: 100vw;
  height: 100vh;
  background: #6b5ca5;
}

html {
  padding: 0;
  margin: 0;
}

.card {
  border-radius: 3px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  font-size: 18px;
  color: #444;
  width: 300px;
  margin: 10px auto;
  height: 150px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
}

.text-section {
  height: 100%;
  max-height: 100%;
  padding: 0 10px 10px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

.progress-bar {
  height: 30px;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 3px 3px 0 0;
}

.textt {
  font-size: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 2;
}

.filled-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: translate3d(-100%, 0, 0);
  background: #eef0ff;
  z-index: 2;
}
</style>
