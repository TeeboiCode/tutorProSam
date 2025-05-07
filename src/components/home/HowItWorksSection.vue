<template>
  <section class="how-it-works-section py-5">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">How It Works</h2>
        <p class="section-subtitle">
          Get started with our platform in four simple steps
        </p>
      </div>

      <div class="row g-4">
        <div class="col-md-3" v-for="(step, index) in steps" :key="index">
          <div
            class="step-card"
            :class="{ 'fade-in': true }"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="icon-circle mb-4">
              <i :class="step.icon"></i>
            </div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HowItWorksSection",
  data() {
    return {
      steps: [
        {
          icon: "bi bi-person-plus text-purple",
          title: "Create an Account",
          description:
            "Sign up as a student or tutor and complete your profile with your preferences and expertise.",
        },
        {
          icon: "bi bi-search text-purple",
          title: "Find Your Match",
          description:
            "Browse through tutors or subjects to find the perfect match for your learning needs.",
        },
        {
          icon: "bi bi-calendar-check text-purple",
          title: "Schedule Sessions",
          description:
            "Book tutoring sessions at times that work for you and prepare for your learning journey.",
        },
        {
          icon: "bi bi-graph-up text-purple",
          title: "Track Progress",
          description:
            "Monitor your improvement with detailed progress reports and adjust your learning path as needed.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.how-it-works-section {
  background-color: var(--background-white);
  position: relative;
  overflow: hidden;
}

.section-title {
  color: var(--royal-purple);
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: 3px;
}

.section-subtitle {
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.step-card {
  background: var(--background-light);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  height: 100%;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-normal);
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(20px);
  text-align: center;
}

.step-card.fade-in {
  animation: fadeInUp 0.8s ease forwards;
}

.step-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.step-number {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: var(--shadow-md);
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--gradient-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: var(--transition-normal);
}

.step-card:hover .icon-circle {
  transform: scale(1.1);
  background: var(--gradient-primary);
}

.icon-circle i {
  font-size: 2rem;
  color: var(--royal-purple);
  transition: var(--transition-normal);
}

.step-card:hover .icon-circle i {
  color: white;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0;
  color: var(--text-primary);
}

.step-description {
  color: var(--text-muted);
  margin-bottom: 0;
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
  .step-card {
    margin-bottom: var(--spacing-md);
  }
}
</style>
