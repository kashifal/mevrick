<template>
  <section class="intro-section" id="intro">
    <h1>{{ $t("tIntroSectionTitle") }}</h1>
    <h2>{{ $t("tIntroSectionName") }}</h2>
    <h3>{{ $t("tIntroSectionSubtitle") }}</h3>
    <div class="img-marq" aria-hidden="true">
      <div class="circle-shadow"></div>
      <div class="box-shadow"></div>
      <div class="box-shadow shadow-right"></div>
      <div class="slide-img-left">
        <div class="box">
          <!-- All placehold.co links should be replaced by i18n tags for the corresponding section tIntroSectionImg0..., don't forget blurry placeholders tIntroSectionImgPlaceholder0 -->

          <NuxtImg
            src="https://placehold.co/1920x1080/png"
            alt="message here"
            lazy
          />
          <NuxtImg
            src="https://placehold.co/1920x1080/png"
            alt="message here"
            lazy
          />

          <NuxtImg
            src="https://placehold.co/1920x1080/png"
            alt="message here"
            lazy
          />
        </div>
        <div class="box">
          <NuxtImg
            src="https://placehold.co/1920x1080/png"
            alt="message here"
            lazy
          />
          <NuxtImg
            src="https://placehold.co/1920x1080/png"
            alt="message here"
            lazy
          />
          <NuxtImg
            src="https://placehold.co/1920x1080/png"
            alt="message here"
            lazy
          />
        </div>
      </div>
      <div class="slide-img-right">
        <div class="box">
          <NuxtImg
            src="https://placehold.co/1920x1080/png"
            alt="message here"
            lazy
          />
          <NuxtImg
            src="https://placehold.co/1920x1080/png"
            alt="message here"
            lazy
          />
          <NuxtImg
            src="https://placehold.co/1920x1080/png"
            alt="message here"
            lazy
          />
        </div>
        <div class="box">
          <NuxtImg
            src="https://placehold.co/1920x1080/png"
            alt="message here"
            lazy
          />
          <NuxtImg
            src="https://placehold.co/1920x1080/png"
            alt="message here"
            lazy
          />
          <NuxtImg
            src="https://placehold.co/1920x1080/png"
            alt="message here"
            lazy
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale, setLocale } = useI18n();
</script>
