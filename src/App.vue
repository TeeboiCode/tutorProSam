<template>
  <div class="app-wrapper">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.getters.isAuthenticated);

    const logout = () => {
      store.commit("logout");
    };

    return {
      isAuthenticated,
      logout,
    };
  },
};
</script>

<style>
#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  max-width: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Ensure the router view takes up remaining space */
.router-view {
  flex: 1;
}
</style>
