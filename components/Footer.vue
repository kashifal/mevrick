<template>
  <footer style="" class="contact-footer" id="contact">
    <div>
      <ul>
        <li>{{ $t("tContactFooterTitle") }}</li>
        <li>
          <a href="tContactFooterLink0">{{ $t("tContactFooterLinkLabel0") }}</a>
        </li>
        <li>
          <a href="tContactFooterLink1">{{ $t("tContactFooterLinkLabel1") }}</a>
        </li>
        <li>
          <a href="tContactFooterLink2">{{ $t("tContactFooterLinkLabel2") }}</a>
        </li>
        <li>
          <a href="tContactFooterLink3">{{ $t("tContactFooterLinkLabel3") }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script setup>
const { locale, setLocale } = useI18n();
</script>
