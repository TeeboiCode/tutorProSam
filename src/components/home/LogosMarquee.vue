<template>
  <div class="cards-logo" ref="cardLogo">
    <div class="logo-slide">
      <img
        v-for="(logo, index) in logos"
        :key="index"
        :src="logo.src"
        :alt="logo.alt"
      />
      <img
        v-for="(logo, index) in logos"
        :key="'clone-' + index"
        :src="logo.src"
        :alt="logo.alt"
      />
      <img
        v-for="(logo, index) in logos"
        :key="'clone2-' + index"
        :src="logo.src"
        :alt="logo.alt"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "LogosMarquee",
  data() {
    return {
      logos: [
        {
          src: new URL("../../assets/images/waec logo.png", import.meta.url)
            .href,
          alt: "WAEC Logo",
        },
        {
          src: new URL("../../assets/images/neco logo.png", import.meta.url)
            .href,
          alt: "NECO Logo",
        },
        {
          src: new URL("../../assets/images/jamb logo.png", import.meta.url)
            .href,
          alt: "JAMB Logo",
        },
        {
          src: new URL("../../assets/images/sat logo.png", import.meta.url)
            .href,
          alt: "SAT Logo",
        },
      ],
    };
  },
};
</script>

<style scoped>
.cards-logo {
  overflow: hidden;
  white-space: nowrap;
  background: var(--soft-purple);
  /* margin: 3.5em 0; */
  width: 100%;
  position: relative;
  padding: 2em 0;
}

.cards-logo .logo-slide {
  display: inline-block;
  animation: slide 30s linear infinite;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-10.33%);
  }
}

.cards-logo img {
  height: 70px;
  width: auto;
  opacity: 0.3;
  margin: 0 3.125em;
  position: relative;
  filter: grayscale(100%);
  transition: filter 0.3s ease, opacity 0.3s ease;
}

.cards-logo img:hover {
  filter: grayscale(0%);
  opacity: 1;
}

@media (max-width: 768px) {
  .cards-logo img {
    height: 50px;
    margin: 0 2em;
  }
}
</style>
