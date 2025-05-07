<template>
  <section class="features-section">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">Why Choose Our Platform</h2>
        <p class="section-subtitle">
          Experience the difference with our comprehensive tutoring solutions
        </p>
      </div>

      <div class="row g-4">
        <div
          class="col-md-4 col-12"
          v-for="(feature, index) in features"
          :key="index"
        >
          <div
            class="feature-card"
            :class="{ 'fade-in': true }"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="d-flex align-items-center gap-3">
              <div class="icon-circle mb-4" :style="{ background: feature.bg }">
                <i :class="feature.icon"></i>
              </div>
              <h3 class="feature-title">{{ feature.title }}</h3>
            </div>
            <div class="image rounded rounded-4 overflow-hidden">
              <img :src="feature.src" class="w-100" alt="" />
            </div>
            <p class="feature-description mt-2">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturesSection",
  data() {
    return {
      features: [
        {
          icon: "bi bi-person-check text-purple",
          title: "Expert Tutors",
          description:
            "Get guidance from qualified, experienced educators in every subject.",
          bg: "#f0e6ff",
          src: new URL(
            "../../assets/images/SAMCY/Rectangle 384.png",
            import.meta.url
          ).href,
        },
        {
          icon: "bi bi-calendar-check text-purple",
          title: "Flexible Scheduling",
          description:
            "Learn at your pace with customizable schedules tailored to your needs.",
          bg: "#f0e6ff",
          src: new URL(
            "../../assets/images/SAMCY/Rectangle 382.png",
            import.meta.url
          ).href,
        },
        {
          icon: "bi bi-credit-card-fill  text-purple",
          title: "seamless payment",
          description: "Enjoy secure and hassle-free online payment options.",
          bg: "#f0e6ff",
          src: new URL(
            "../../assets/images/SAMCY/Rectangle 386.png",
            import.meta.url
          ).href,
        },

        // {
        //   icon: "bi bi-people text-purple",
        //   title: "Community Support",
        //   description:
        //     "Join a community of learners and educators to share experiences and knowledge.",
        // },
        // {
        //   icon: "bi bi-shield-check text-purple",
        //   title: "Secure Platform",
        //   description:
        //     "Your data and payments are protected with industry-standard security measures.",
        // },
      ],
    };
  },
};
</script>

<style scoped>
.features-section {
  background-color: #f1f1f1;
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
}

/* .features-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><circle cx="50" cy="50" r="1" fill="%23f0e6ff" opacity="0.5"/></svg>');
  opacity: 0.5;
  z-index: 0;
} */

.section-title {
  color: var(--accent-orange);
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  font-size: 20px;
}

/* .section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 3px;
} */

.section-subtitle {
  color: var(--text-primary);
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.7rem;
  line-height: 1.4;
}

.feature-card {
  background: var(--background-white);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
  height: 100%;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(20px);
}

.feature-card.fade-in {
  animation: fadeInUp 0.8s ease forwards;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 20%;
  background: var(--gradient-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  transition: var(--transition-normal);
}

.feature-card:hover .icon-circle {
  transform: scale(1.1);
  background: var(--soft-purple);
}

.icon-circle i {
  font-size: 2rem;
  color: var(--royal-purple);
  transition: var(--transition-normal);
}

.feature-card:hover .icon-circle i {
  color: white;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  /* margin: 1rem 0; */
  color: var(--text-primary);
  text-align: start;
}

.feature-description {
  color: var(--text-muted);
  margin-bottom: 0;
  text-align: start;
}

.image img {
  scale: 1.325 !important;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .feature-card {
    margin-bottom: var(--spacing-md);
  }
}
</style>
