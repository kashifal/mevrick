<template>
  <section class="about-section" id="about">
    <div class="bio">
      <h2>{{ $t("tAboutSectionTitle") }}</h2>
      <p>{{ $t("tAboutSectionBio") }}</p>
      <h3>{{ $t("tAboutSectionSubtitle0") }}</h3>
      <ul>
        <li>{{ $t("tAboutSectionListItem00") }}</li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li>{{ $t("tAboutSectionListItem01") }}</li>
        <li>{{ $t("tAboutSectionListItem02") }}</li>
      </ul>
      <h3>{{ $t("tAboutSectionSubtitle1") }}</h3>
      <ul>
        <li>{{ $t("tAboutSectionListItem10") }}</li>
        <li>{{ $t("tAboutSectionListItem11") }}</li>
        <li>{{ $t("tAboutSectionListItem12") }}</li>
      </ul>
    </div>
    <NuxtImg
      class="background"
      preset
      src="https://placehold.co/1121x1445"
      alt="message here"
      lazy
    />
  </section>
</template>

<script setup>
const { locale, setLocale } = useI18n();
</script>

<style scoped></style>
