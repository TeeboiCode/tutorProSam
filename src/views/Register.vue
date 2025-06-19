<template>
  <div
    class="register-container d-flex justify-content-center align-items-center overflow-hidden"
  >
    <div class="container">
      <div
        class="row justify-content-center align-items-center min-vh-100 py-5"
      >
        <div class="col-md-8 col-lg-6">
          <div class="register-card bg-white rounded-4 shadow">
            <div class="text-center mb-4">
              <div class="icon-circle mb-3">
                <i class="bi bi-person-plus text-purple"></i>
              </div>
              <h2 class="text-purple mb-2">Create Account</h2>
              <p class="text-muted">
                Join our community of learners and educators
              </p>
            </div>

            <form @submit.prevent="handleSubmit">
              <!-- Step Indicators -->
              <div class="step-indicators mb-5">
                <div class="d-flex justify-content-between">
                  <div class="step" :class="{ active: currentStep >= 1 }">
                    <div class="step-circle">
                      <i class="bi bi-person"></i>
                    </div>
                    <div class="step-label">Account</div>
                  </div>
                  <div class="step" :class="{ active: currentStep >= 2 }">
                    <div class="step-circle">
                      <i class="bi bi-credit-card"></i>
                    </div>
                    <div class="step-label">Payment</div>
                  </div>
                  <div class="step" :class="{ active: currentStep >= 3 }">
                    <div class="step-circle">
                      <i class="bi bi-check-circle"></i>
                    </div>
                    <div class="step-label">Complete</div>
                  </div>
                </div>
              </div>

              <!-- Step 1: Personal Details -->
              <PersonalDetailsForm
                v-if="currentStep === 1"
                v-model="formData"
                @validation="(valid) => (isStep1Valid = valid)"
              />

              <div class="button-group d-flex justify-content-end mt-4">
                <button
                  v-if="currentStep === 1"
                  type="submit"
                  class="btn btn-primary"
                  :disabled="!isStep1Valid"
                >
                  Continue
                </button>
              </div>
            </form>

            <!-- Add other steps like Step 2 and Step 3 here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PersonalDetailsForm from "../components/signup/PersonalDetailsForm.vue";
import { ref } from "vue";

const currentStep = ref(1);
const isStep1Valid = ref(false);

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

const handleSubmit = () => {
  if (isStep1Valid.value) {
    console.log("Step 1 Valid. Proceeding to Step 2.");
    currentStep.value++;
    console.log("Form Data:", formData.value);
  }
};
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.register-card {
  padding: 2rem;
  width: 100%;
  max-width: 600px;
}

.step-indicators {
  position: relative;
  padding: 0 40px;
}

.step-indicators::before {
  content: "";
  position: absolute;
  top: 20px;
  left: 60px;
  right: 60px;
  height: 2px;
  background: var(--gradient-soft);
  z-index: 1;
}

.step {
  position: relative;
  z-index: 2;
  text-align: center;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--light-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px;
  transition: var(--transition-normal);
}

.step.active .step-circle {
  background: var(--gradient-primary);
  color: white;
}

.step-label {
  font-size: 0.875rem;
  color: var(--text-muted);
  transition: var(--transition-normal);
}

.step.active .step-label {
  color: var(--royal-purple);
  font-weight: 500;
}

@media (max-width: 768px) {
  .register-card {
    padding: var(--spacing-lg);
    margin: var(--spacing-md);
  }

  .step-indicators {
    padding: 0 20px;
  }

  .step-indicators::before {
    left: 40px;
    right: 40px;
  }
}
</style>
