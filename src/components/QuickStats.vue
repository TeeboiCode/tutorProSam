<template>
  <div class="stats-container">
    <div class="stats-wrapper" :class="{ loading: isStatsLoading }">
      <!-- Students Stats -->
      <div class="stat-card">
        <h3 class="stat-number">{{ animatedStats.totalStudents }}+</h3>
        <p class="stat-label">Students</p>
      </div>

      <div class="divider"></div>

      <!-- Tutors Stats -->
      <div class="stat-card">
        <h3 class="stat-number">{{ animatedStats.totalTutors }}+</h3>
        <p class="stat-label">Expert Tutors</p>
      </div>

      <div class="divider"></div>

      <!-- Success Rate Stats -->
      <div class="stat-card">
        <h3 class="stat-number">{{ animatedStats.successRate }}%</h3>
        <p class="stat-label">Success Rate</p>
      </div>

      <div class="divider"></div>

      <!-- Subjects Stats -->
      <div class="stat-card">
        <h3 class="stat-number">{{ animatedStats.totalSubjects }}+</h3>
        <p class="stat-label">Subjects & Programs</p>
      </div>
    </div>

    <!-- Error message -->
    <div v-if="statsError" class="error-message">
      {{ statsError }}
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "QuickStats",
  setup() {
    const store = useStore();

    // Animated stats that will be displayed
    const animatedStats = reactive({
      totalStudents: 0,
      totalTutors: 0,
      successRate: 0,
      totalSubjects: 0,
    });

    // Get stats from store using computed properties
    const stats = computed(() => store.getters.platformStats);
    const isStatsLoading = computed(() => store.getters.isStatsLoading);
    const statsError = computed(() => store.getters.statsError);

    // Function to animate counting up
    const animateValue = (start, end, duration, property) => {
      const range = end - start;
      const increment = range / (duration / 16); // 60fps
      let current = start;

      const animate = () => {
        current += increment;
        if (
          (increment > 0 && current >= end) ||
          (increment < 0 && current <= end)
        ) {
          animatedStats[property] = end;
        } else {
          animatedStats[property] = Math.round(current);
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    // Watch for changes in the stats data from Vuex store
    watch(
      stats,
      (newStats) => {
        if (newStats && Object.keys(newStats).length > 0) {
          // Start animations when stats data changes
          setTimeout(() => {
            animateValue(0, newStats.totalStudents, 2000, "totalStudents");
            animateValue(0, newStats.totalTutors, 2000, "totalTutors");
            animateValue(0, newStats.successRate, 2000, "successRate");
            animateValue(0, newStats.totalSubjects, 2000, "totalSubjects");
          }, 100);
        }
      },
      { deep: true }
    );

    onMounted(() => {
      // Dispatch action to fetch stats from API
      store.dispatch("fetchStats");
    });

    return {
      animatedStats,
      isStatsLoading,
      statsError,
    };
  },
};
</script>

<style scoped>
.stats-container {
  width: 100%;
  background: var(--gradient-primary);
  padding: 3rem 0;
  box-shadow: var(--shadow-lg);
}

.stats-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: relative;
}

.stat-card {
  flex: 1;
  text-align: center;
  padding: 1rem;
  color: white;
  transition: var(--transition-normal);
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 0.5rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-label {
  font-size: 1.1rem;
  margin: 0;
  color: var(--light-purple);
}

.divider {
  width: 1px;
  height: 50px;
  background: var(--light-purple);
  margin: 0 1rem;
  opacity: 0.5;
}

.error-message {
  text-align: center;
  color: white;
  background-color: rgba(255, 0, 0, 0.3);
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 4px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Loading state */
.loading {
  position: relative;
}

.loading::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .stats-wrapper {
    flex-direction: column;
    padding: 1rem;
  }

  .stat-card {
    width: 100%;
    padding: 1.5rem 0;
  }

  .divider {
    width: 80%;
    height: 1px;
    margin: 0.5rem 0;
  }

  .stat-number {
    font-size: 2rem;
  }
}
</style>
