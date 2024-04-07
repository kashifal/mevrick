<template>
  <section class="skills-section" id="skills">
    <h2>{{ $t("tSkillsSectionTitle") }}</h2>
    <h3>{{ $t("tSkillsSectionSubtitle") }}</h3>
    <div class="skills">
      <article>
        <NuxtImg
          preload
          src="https://placehold.co/128"
          alt="message here"
          lazy
        />

        <p>{{ $t("tSkillsSectionTitle") }}</p>
      </article>
      <article>
        <NuxtImg src="https://placehold.co/128" alt="message here" lazy />
        <p>{{ $t("tSkillsSectionLabel1") }}</p>
      </article>
      <article>
        <NuxtImg src="https://placehold.co/128" alt="message here" lazy />
        <p>{{ $t("tSkillsSectionLabel2") }}</p>
      </article>
      <article>
        <NuxtImg src="https://placehold.co/128" alt="message here" lazy />
        <p>{{ $t("tSkillsSectionLabel3") }}</p>
      </article>
      <article>
        <NuxtImg src="https://placehold.co/128" alt="message here" lazy />
        <p>{{ $t("tSkillsSectionLabel4") }}</p>
      </article>
      <article>
        <NuxtImg src="https://placehold.co/128" alt="message here" lazy />
        <p>{{ $t("tSkillsSectionLabel5") }}</p>
      </article>
      <article>
        <NuxtImg src="https://placehold.co/128" alt="message here" lazy />
        <p>{{ $t("tSkillsSectionLabel6") }}</p>
      </article>
      <article>
        <NuxtImg src="https://placehold.co/128" alt="message here" lazy />
        <p>{{ $t("tSkillsSectionLabel7") }}</p>
      </article>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
