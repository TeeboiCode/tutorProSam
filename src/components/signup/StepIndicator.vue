<template>
  <div class="step-indicators mb-4">
    <div class="step-line"></div>
    <div class="step-dots">
      <div
        v-for="step in totalSteps"
        :key="step"
        class="step-dot"
        :class="{ active: currentStep === step }"
      >
        {{ step }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepIndicator",
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<style scoped>
/* Step indicators */
.step-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: var(--spacing-lg) 0;
}

.step-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--light-purple);
  z-index: 1;
}

.step-dots {
  display: flex;
  justify-content: space-between;
  width: 80%;
  position: relative;
  z-index: 2;
}

.step-dot {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--background-white);
  border: 2px solid var(--light-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--text-muted);
  transition: var(--transition-normal);
}

.step-dot.active {
  background-color: var(--royal-purple);
  border-color: var(--royal-purple);
  color: white;
}
</style>
