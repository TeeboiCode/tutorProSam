<template>
  <nav class="navigation">
    <TopNav />
    <MainNav />
    <AnnouncementBanner />
  </nav>
</template>

<script>
import TopNav from "./navigation/TopNav.vue";
import MainNav from "./navigation/MainNav.vue";
import AnnouncementBanner from "./navigation/AnnouncementBanner.vue";

export default {
  name: "Navigation",
  components: {
    TopNav,
    MainNav,
    AnnouncementBanner,
  },
};
</script>

<style scoped>
.navigation {
  background: var(--background-white);
  box-shadow: var(--shadow-sm);
  /* position: sticky;
  top: 0;
  z-index: 1000; */
}
</style>
