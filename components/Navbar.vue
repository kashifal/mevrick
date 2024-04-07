<template>
  <header>
    <nav>
      <ul>
        <li :class="{ active: activeLink === 'intro' }">
          <a @click="scrollToSection('intro')" href="#intro">Intro</a>
        </li>
        <li :class="{ active: activeLink === 'skills' }">
          <a @click="scrollToSection('skills')" href="#skills">Skills</a>
        </li>
        <li :class="{ active: activeLink === 'projects' }">
          <a @click="scrollToSection('projects')" href="#projects">Projects</a>
        </li>
        <li :class="{ active: activeLink === 'about' }">
          <a @click="scrollToSection('about')" href="#about">About</a>
        </li>
        <li :class="{ active: activeLink === 'contact' }">
          <a @click="scrollToSection('contact')" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  <!-- button -->
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const activeLink = ref("intro"); // Default active link

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      console.log(`#${entry.target.id} is now in view`);
      activeLink.value = entry.target.id;
    }
  });
};
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
    activeLink.value = "skills";
  } else if (
    projectsSection &&
    scrollPosition >= projectsSection.offsetTop &&
    scrollPosition < aboutSection.offsetTop
  ) {
    activeLink.value = "projects";
  } else if (
    aboutSection &&
    scrollPosition >= aboutSection.offsetTop &&
    scrollPosition < contactSection.offsetTop
  ) {
    activeLink.value = "about";
  } else if (contactSection && scrollPosition >= contactSection.offsetTop) {
    activeLink.value = "contact";
  } else {
    activeLink.value = "intro";
  }
};

onMounted(() => {
  // Set the active link based on the current URL hash value
  const currentHash = window.location.hash;
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: "0px",

    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  // Observe the sections
  const skillsSection = document.getElementById("skills");
  const projectsSection = document.getElementById("projects");
  const aboutSection = document.getElementById("about");
  const contactSection = document.getElementById("contact");

  if (skillsSection) {
    observer.observe(skillsSection);
  }
  if (projectsSection) {
    observer.observe(projectsSection);
  }
  if (aboutSection) {
    observer.observe(aboutSection);
  }
  if (contactSection) {
    observer.observe(contactSection);
  }

  // Clean up the observer when the component is unmounted
  onUnmounted(() => {
    observer.disconnect();
  });

  // Add scroll event listener to handle active link on scroll
  window.addEventListener("scroll", handleScroll);
});

const scrollToSection = (section) => {
  const el = document.querySelector(`#${section}`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });

    activeLink.value = section;
  }
};

//navbar
</script>

<style scoped>
.active {
  font-weight: bold;
}
</style>
