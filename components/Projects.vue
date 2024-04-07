<template>
  <section class="projects-section" id="projects">
    <!-- replace below svg with a tProjectsSectionAnimatedSvg -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="419"
      height="1926"
      viewBox="0 0 419 1926"
      fill="none"
    >
      <path
        d="M172.09 207.456C275.09 96.0918 172.09 10.6 127.09 12.4574C82.0901 14.3149 12.5901 49.0918 12.5901 128.477C12.5901 358.592 309.59 400.592 309.59 400.592C309.59 400.592 406.593 423.092 406.592 400.592C406.591 378.092 308.592 400.592 308.592 400.592L12.5918 462.592C12.5918 462.592 288.584 550.592 406.584 664.592C406.584 664.592 10.084 556.092 12.584 710.092C13.0411 738.249 54.584 742.592 80.584 747.592C82.8554 748.029 177.084 790.592 108.584 860.592C176.584 790.592 82.0946 748.389 80.584 748.092C19.584 736.092 12.584 775.592 12.584 775.592C12.584 831.092 92.084 831.092 92.084 831.092C92.084 831.092 12.2819 831.092 12.584 887.592C12.93 952.319 148.584 951.592 148.584 951.592C148.584 951.592 12.584 951.592 12.584 993.592C12.584 1035.59 148.584 1035.59 148.584 1035.59C47.584 1035.59 67.584 1130.59 67.584 1130.59C67.584 1130.59 75.084 1231.59 125.084 1189.59C175.084 1147.59 68.084 1130.59 68.084 1130.59C68.084 1130.59 12.584 1130.59 12.584 1189.59C12.584 1280.59 138.584 1280.59 138.584 1280.59C130.584 1280.59 132.584 1330.59 109.584 1330.59C70.0464 1330.59 12.584 1330.59 12.584 1359.59C12.584 1422.43 148.584 1445.59 148.584 1445.59C148.584 1445.59 12.584 1439.09 12.584 1477.59C12.584 1500.59 105.584 1576.59 105.584 1576.59C105.584 1576.59 139.584 1600.09 139.584 1605.59C139.584 1611.09 148.584 1639.59 73.584 1622.59C148.584 1639.09 138.584 1611.09 138.584 1605.59C138.584 1600.09 105.584 1577.59 105.584 1577.59C105.584 1577.59 12.584 1542.59 12.584 1605.59C12.584 1721.59 112.584 1721.59 406.584 1721.59H12.584C12.584 1721.59 138.584 1741.72 138.584 1799.59C138.584 1828.59 112.584 1828.59 112.584 1828.59C78.084 1828.59 68.084 1764.59 46.584 1764.59C23.8361 1764.59 13.584 1789.84 13.584 1812.59C13.584 1882.09 96.584 1913.59 96.584 1913.59"
        stroke="#790101"
        stroke-width="24"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <h2>{{ $t("tProjectsSectionTitle") }}</h2>
    <div class="projects-container">
      <span>
        <h3>{{ $t("tProjectsSectionSubtitle0") }}</h3>
        <div class="projects">
          <button
            @click="
              openLeft('left', {
                name: '00',
                project: 0,
              })
            "
          >
            <div>
              <NuxtImg
                preset
                src="https://placehold.co/1200x630"
                alt="message here"
                lazy
              />
            </div>
            <div>
              <h4>{{ $t("tProjectsSectionProjectName00") }}</h4>
              <p>{{ $t("tProjectsSectionProjectDescription00") }}</p>
              <u>{{ $t("tProjectsSectionProjectLinkLabel00") }}</u>
            </div>
          </button>
          <button
            @click="
              openLeft('left', {
                name: '01',
                project: 1,
              })
            "
          >
            <div>
              <NuxtImg
                preset
                src="https://placehold.co/1200x630"
                alt="message here"
                lazy
              />
            </div>
            <div>
              <h4>{{ $t("tProjectsSectionProjectName01") }}</h4>
              <p>{{ $t("tProjectsSectionProjectDescription01") }}</p>
              <u>{{ $t("tProjectsSectionProjectLinkLabel01") }}</u>
            </div>
          </button>
          <button
            @click="
              openLeft('left', {
                name: '02',
                project: 2,
              })
            "
          >
            <div>
              <NuxtImg
                preset
                src="https://placehold.co/1200x630"
                alt="message here"
                lazy
              />
            </div>
            <div>
              <h4>{{ $t("tProjectsSectionProjectName02") }}</h4>
              <p>{{ $t("tProjectsSectionProjectDescription02") }}</p>
              <u>{{ $t("tProjectsSectionProjectLinkLabel02") }}</u>
            </div>
          </button>
        </div>
      </span>
      <span>
        <h3>{{ $t("tProjectsSectionSubtitle1") }}</h3>
        <div class="projects">
          <button
            @click="
              openRight('Right', {
                name: '10',
                project: 10,
              })
            "
          >
            <div>
              <NuxtImg
                preset
                src="https://placehold.co/1200x630"
                alt="message here"
                lazy
              />
            </div>
            <div>
              <h4>{{ $t("tProjectsSectionProjectName10") }}</h4>
              <p>{{ $t("tProjectsSectionProjectDescription10") }}</p>
              <u>{{ $t("tProjectsSectionProjectLinkLabel10") }}</u>
            </div>
          </button>
          <button
            @click="
              openRight('Right', {
                name: '11',
                project: 11,
              })
            "
          >
            <div>
              <NuxtImg
                preset
                src="https://placehold.co/1200x630"
                alt="message here"
                lazy
              />
            </div>
            <div>
              <h4>{{ $t("tProjectsSectionProjectName11") }}</h4>
              <p>{{ $t("tProjectsSectionProjectDescription11") }}</p>
              <u>{{ $t("tProjectsSectionProjectLinkLabel11") }}</u>
            </div>
          </button>
          <button
            @click="
              openRight('Right', {
                name: '12',
                project: 12,
              })
            "
          >
            <div>
              <NuxtImg
                preset
                src="https://placehold.co/1200x630"
                alt="message here"
                lazy
              />
            </div>
            <div>
              <h4>{{ $t("tProjectsSectionProjectName12") }}</h4>
              <p>{{ $t("tProjectsSectionProjectDescription12") }}</p>
              <u>{{ $t("tProjectsSectionProjectLinkLabel12") }}</u>
            </div>
          </button>
        </div>
      </span>
    </div>
  </section>

  <!-- Asides -->
  <ProgressBar
    :filled="filled"
    :left="left"
    :right="right"
    :value="progress"
  ></ProgressBar>
  <aside
    ref="textt"
    @scroll="onScroll"
    :class="[left ? 'opened' : 'closed', 'left text-section']"
  >
    <div v-if="leftData.project === 0" class="container">
      <section class="aside-section">
        <h2>{{ $t("tAsideSectionProjectTitle00") }}{{ leftData?.name }}</h2>
        <div class="video">
          <!-- tAsideSectionLeftProjectVideo00 - video should auto play without sound -->
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NpEaa2P7qZI?si=S6zeA9zNr6gfISbh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-details">{{
              $t("tAsideSectionProjectSituationLabel00")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-details">
          <article>
            {{ $t("tAsideSectionProjectSituationDescription00") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-challenge">{{
              $t("tAsideSectionProjectChallengeLabel00")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-challenge">
          <article>
            {{ $t("tAsideSectionProjectChallengeDescription00") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-action">{{
              $t("tAsideSectionProjectActionLabel00")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-action">
          <article>
            {{ $t("tAsideSectionProjectActionDescription00") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-solution">{{
              $t("tAsideSectionProjectSolutionLabel00")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-solution">
          <article>
            {{ $t("tAsideSectionProjectSolutionDescription00") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-results">{{
              $t("tAsideSectionProjectResultLabel00")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-results">
          <article>
            {{ $t("tAsideSectionProjectResultDescription00") }}
          </article>
        </div>
      </section>
    </div>
    <div v-else-if="leftData.project === 1" class="container">
      <section class="aside-section">
        <h2>{{ $t("tAsideSectionProjectTitle01") }}{{ leftData?.name }}</h2>
        <div class="video">
          <!-- tAsideSectionLeftProjectVideo01 - video should auto play without sound -->
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NpEaa2P7qZI?si=S6zeA9zNr6gfISbh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-details">{{
              $t("tAsideSectionProjectSituationLabel01")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-details">
          <article>
            {{ $t("tAsideSectionProjectSituationDescription01") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-challenge">{{
              $t("tAsideSectionProjectChallengeLabel01")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-challenge">
          <article>
            {{ $t("tAsideSectionProjectChallengeDescription01") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-action">{{
              $t("tAsideSectionProjectActionLabel01")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-action">
          <article>
            {{ $t("tAsideSectionProjectActionDescription01") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-solution">{{
              $t("tAsideSectionProjectSolutionLabel01")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-solution">
          <article>
            {{ $t("tAsideSectionProjectSolutionDescription01") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-results">{{
              $t("tAsideSectionProjectResultLabel01")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-results">
          <article>
            {{ $t("tAsideSectionProjectResultDescription01") }}
          </article>
        </div>
      </section>
    </div>
    <div v-else-if="leftData.project === 2" class="container">
      <section class="aside-section">
        <h2>{{ $t("tAsideSectionProjectTitle02") }}{{ leftData?.name }}</h2>
        <div class="video">
          <!-- tAsideSectionLeftProjectVideo02 - video should auto play without sound -->
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NpEaa2P7qZI?si=S6zeA9zNr6gfISbh"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-details">{{
              $t("tAsideSectionProjectSituationLabel02")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-details">
          <article>
            {{ $t("tAsideSectionProjectSituationDescription02") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-challenge">{{
              $t("tAsideSectionProjectChallengeLabel02")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-challenge">
          <article>
            {{ $t("tAsideSectionProjectChallengeDescription02") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-action">{{
              $t("tAsideSectionProjectActionLabel02")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-action">
          <article>
            {{ $t("tAsideSectionProjectActionDescription02") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-solution">{{
              $t("tAsideSectionProjectSolutionLabel02")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-solution">
          <article>
            {{ $t("tAsideSectionProjectSolutionDescription02") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="left-results">{{
              $t("tAsideSectionProjectResultLabel02")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="left-results">
          <article>
            {{ $t("tAsideSectionProjectResultDescription02") }}
          </article>
        </div>
      </section>
    </div>
  </aside>
  <!-- Right Asides -->
  <aside
    @scroll="onScrolll"
    ref="texttt"
    :class="[right ? 'opened' : 'closed', 'right text-section']"
  >
    <div v-if="rightData.project === 10" class="container">
      <section class="aside-section">
        <h2>{{ $t("tAsideSectionProjectTitle10") }}{{ rightData.name }}</h2>
        <div class="video">
          <!-- tAsideSectionRightProjectVideo10 - video should auto play without sound -->
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XQu8TTBmGhA?si=Qs6UdlloE_um5mH8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-details">{{
              $t("tAsideSectionProjectSituationLabel10")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-details">
          <article>
            {{ $t("tAsideSectionProjectSituationDescription10") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-challenge">{{
              $t("tAsideSectionProjectChallengeLabel10")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-challenge">
          <article>
            {{ $t("tAsideSectionProjectChallengeDescription10") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-action">{{
              $t("tAsideSectionProjectActionLabel10")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-action">
          <article>
            {{ $t("tAsideSectionProjectActionDescription10") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-solution">{{
              $t("tAsideSectionProjectSolutionLabel10")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-solution">
          <article>
            {{ $t("tAsideSectionProjectSolutionDescription10") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-results">{{
              $t("tAsideSectionProjectResultLabel10")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-results">
          <article>
            {{ $t("tAsideSectionProjectResultDescription10") }}
          </article>
        </div>
      </section>
    </div>
    <div v-else-if="rightData.project === 11" class="container">
      <section class="aside-section">
        <h2>{{ $t("tAsideSectionProjectTitle11") }}{{ rightData.name }}</h2>
        <div class="video">
          <!-- tAsideSectionRightProjectVideo11 - video should auto play without sound -->
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XQu8TTBmGhA?si=Qs6UdlloE_um5mH8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-details">{{
              $t("tAsideSectionProjectSituationLabel11")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-details">
          <article>
            {{ $t("tAsideSectionProjectSituationDescription11") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-challenge">{{
              $t("tAsideSectionProjectChallengeLabel11")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-challenge">
          <article>
            {{ $t("tAsideSectionProjectChallengeDescription11") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-action">{{
              $t("tAsideSectionProjectActionLabel11")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-action">
          <article>
            {{ $t("tAsideSectionProjectActionDescription11") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-solution">{{
              $t("tAsideSectionProjectSolutionLabel11")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-solution">
          <article>
            {{ $t("tAsideSectionProjectSolutionDescription11") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-results">{{
              $t("tAsideSectionProjectResultLabel11")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-results">
          <article>
            {{ $t("tAsideSectionProjectResultDescription11") }}
          </article>
        </div>
      </section>
    </div>
    <div v-else-if="rightData.project === 12" class="container">
      <section class="aside-section">
        <h2>{{ $t("tAsideSectionProjectTitle12") }}{{ rightData.name }}</h2>
        <div class="video">
          <!-- tAsideSectionRightProjectVideo12 - video should auto play without sound -->
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XQu8TTBmGhA?si=Qs6UdlloE_um5mH8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-details">{{
              $t("tAsideSectionProjectSituationLabel12")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-details">
          <article>
            {{ $t("tAsideSectionProjectSituationDescription12") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-challenge">{{
              $t("tAsideSectionProjectChallengeLabel12")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-challenge">
          <article>
            {{ $t("tAsideSectionProjectChallengeDescription12") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-action">{{
              $t("tAsideSectionProjectActionLabel12")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-action">
          <article>
            {{ $t("tAsideSectionProjectActionDescription12") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-solution">{{
              $t("tAsideSectionProjectSolutionLabel12")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-solution">
          <article>
            {{ $t("tAsideSectionProjectSolutionDescription12") }}
          </article>
        </div>
        <details open>
          <summary>
            <span role="term" aria-details="right-results">{{
              $t("tAsideSectionProjectResultLabel12")
            }}</span>
          </summary>
        </details>
        <div role="definition" id="right-results">
          <article>
            {{ $t("tAsideSectionProjectResultDescription12") }}
          </article>
        </div>
      </section>
    </div>
  </aside>
  <button
    @click="closeAside"
    :class="[
      active === 'left' ? 'left' : active === 'right' ? 'right' : '',
      `position-button ${activeLink}`,
    ]"
  >
    ◀
  </button>
  <button disabled :class="[`chat-button ${section}`]">
    <div class="chat-button-label">
      <p>{{ text }}</p>
    </div>
    <div class="chat-button-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
  <!-- button -->
</template>

<script setup>
// Import necessary functions and objects from Vue
import { ref, onMounted, watchEffect } from "vue";
import { computed } from "vue";

// Define reactive variables and refs
const leftData = ref({});
const rightData = ref({});
const progress = ref(0);
const textt = ref(null);
const texttt = ref(null);
const left = ref(false);
const right = ref(false);
const active = ref(null);
const activeLink = ref("hidden");
const section = ref("section-0");
const text = ref("");

// Function to handle scroll event for the left aside section
const onScroll = () => {
  const textRef = textt.value;
  const progressValue =
    textRef.scrollTop / (textRef.scrollHeight - textRef.clientHeight);
  progress.value = Math.min(Math.max(progressValue, 0), 1);
};

// Function to handle scroll event for the right aside section
const onScrolll = () => {
  const texttRef = texttt.value;
  const progressValue =
    texttRef.scrollTop / (texttRef.scrollHeight - texttRef.clientHeight);
  progress.value = Math.min(Math.max(progressValue, 0), 1);
};

// Computed property to calculate the percentage of progress
const percentageText = computed(() => `${Math.round(progress.value * 100)}%`);
const filled = ref("");
// Function to open the left aside section
const openLeft = (x, value) => {
  left.value = !left.value;
  active.value = "left";
  leftData.value = value;
  filled.value = "blue";
  progress.value = 0;
};

// Function to open the right aside section
const openRight = (x, value) => {
  right.value = !right.value;
  active.value = "right";
  rightData.value = value;
  filled.value = "gray";
  progress.value = 0;
};

// Function to close the aside section
const closeAside = () => {
  if (active.value === "left") {
    left.value = false;
    active.value = null;
  } else if (active.value === "right") {
    right.value = false;
    active.value = null;
  } else {
    //go to top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This makes the scroll smooth
    });
  }
};

// Function to handle scroll position and update active link and section text
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const skillsSection = document.getElementById("skills");
  const projectsSection = document.getElementById("projects");
  const aboutSection = document.getElementById("about");
  const contactSection = document.getElementById("contact");

  if (
    skillsSection &&
    scrollPosition >= skillsSection.offsetTop &&
    scrollPosition < projectsSection.offsetTop
  ) {
    activeLink.value = "";
    section.value = "section-1";
    text.value = "Hello!";
  } else if (
    projectsSection &&
    scrollPosition >= projectsSection.offsetTop &&
    scrollPosition < aboutSection.offsetTop
  ) {
    activeLink.value = "";
    section.value = "section-2";
    text.value = "Any Questions?";
  } else if (
    aboutSection &&
    scrollPosition >= aboutSection.offsetTop &&
    scrollPosition < contactSection.offsetTop
  ) {
    activeLink.value = "about";
    text.value = "Lets Chat!";
  } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
    activeLink.value = "";
    section.value = "section-3";
    text.value = "kashif h";
  } else {
    activeLink.value = "hidden";
    section.value = "section-0";
    text.value = "";
  }
};

// Add scroll event listener for handling scroll position changes
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Watch for changes in left and right values to toggle body overflow
onMounted(() => {
  const body = document.body;
  if (body) {
    watchEffect(() => {
      if (left.value || right.value) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
      }
    });
  }
});
</script>

<style scoped>
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
}

.progress-bar {
  height: 8px;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: white;
  overflow: hidden;
  position: fixed;
  bottom: 0%;
  z-index: 99999;
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
  background: green !important;
  height: 100%;
  width: 100%;
  transform: translate3d(-100%, 0, 0);
  background: #10435d;
  z-index: 12000;
}
</style>
