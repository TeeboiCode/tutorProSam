<template>
  <div class="register-container">
    <div class="register-card">
      <h2>Register</h2>
      <StepIndicator :current-step="currentStep" :total-steps="totalSteps" />

      <form @submit.prevent="handleSubmit">
        <!-- Step 1: Personal Details -->
        <div v-if="currentStep === 1">
          <PersonalDetailsForm
            v-model="formData"
            @validation="(valid) => (isStep1Valid = valid)"
          />
          <div class="button-group">
            <button type="button" @click="nextStep" :disabled="!isStep1Valid">
              Continue
            </button>
          </div>
        </div>

        <!-- Step 2: Additional Information -->
        <div v-if="currentStep === 2">
          <AdditionalInfoForm
            v-model="formData"
            @validation="(valid) => (isStep2Valid = valid)"
          />
          <div class="button-group">
            <button type="button" @click="prevStep">Back</button>
            <button type="button" @click="nextStep" :disabled="!isStep2Valid">
              Continue
            </button>
          </div>
        </div>

        <!-- Step 3: Payment -->
        <div v-if="currentStep === 3">
          <PaymentForm v-model="formData" />
          <div class="button-group">
            <button type="button" @click="prevStep">Back</button>
            <button type="submit" :disabled="!isPaymentComplete">
              Complete Registration
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import StepIndicator from "../components/signup/StepIndicator.vue";
import PersonalDetailsForm from "../components/signup/PersonalDetailsForm.vue";
import AdditionalInfoForm from "../components/signup/AdditionalInfoForm.vue";
import PaymentForm from "../components/signup/PaymentForm.vue";
import axios from "axios";

export default {
  name: "Register",
  components: {
    StepIndicator,
    PersonalDetailsForm,
    AdditionalInfoForm,
    PaymentForm,
  },
  setup() {
    const router = useRouter();
    const currentStep = ref(1);
    const totalSteps = 3;
    const isStep1Valid = ref(false);
    const isStep2Valid = ref(false);
    const isPaymentComplete = ref(false);

    const formData = ref({
      // Step 1: Personal Details
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      // Step 2: Additional Information
      maritalStatus: "",
      dob: "",
      state: "",
      localGovt: "",
      address: "",
      nationality: "",
      nin: "",
      department: "",
      gender: "",
      privacyPolicy: false,
      // Step 3: Payment
      paymentStatus: "pending",
      paypalOrderId: "",
      paymentDate: null,
      paymentAmount: 2.5,
    });

    const updateFormData = (newData) => {
      Object.assign(formData.value, newData);
    };

    // Validation functions
    const validateStep1 = () => {
      const { firstName, lastName, email, password, confirmPassword, phone } =
        formData.value;
      isStep1Valid.value =
        firstName.length >= 2 &&
        lastName.length >= 2 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
        password.length >= 6 &&
        password === confirmPassword &&
        /^0\d{9,14}$/.test(phone);
    };

    const validateStep2 = () => {
      const {
        maritalStatus,
        dob,
        state,
        localGovt,
        address,
        nationality,
        nin,
        department,
        gender,
        privacyPolicy,
      } = formData.value;

      isStep2Valid.value =
        maritalStatus &&
        dob &&
        state &&
        localGovt &&
        address &&
        nationality &&
        /^\d+$/.test(nin) &&
        department &&
        gender &&
        privacyPolicy;
    };

    // Watch for changes in form data
    watch(
      () => formData.value,
      () => {
        if (currentStep.value === 1) {
          validateStep1();
        } else if (currentStep.value === 2) {
          validateStep2();
        }
      },
      { deep: true }
    );

    const nextStep = () => {
      console.log("Current Step:", currentStep.value);
      console.log("Step 1 Valid:", isStep1Valid.value);
      console.log("Step 2 Valid:", isStep2Valid.value);

      if (currentStep.value < totalSteps) {
        if (currentStep.value === 1 && !isStep1Valid.value) {
          console.log("Step 1 validation failed");
          return;
        }
        if (currentStep.value === 2 && !isStep2Valid.value) {
          console.log("Step 2 validation failed");
          return;
        }
        currentStep.value++;
        console.log("Moving to step:", currentStep.value);
      }
    };

    const prevStep = () => {
      if (currentStep.value > 1) {
        currentStep.value--;
      }
    };

    const handleSubmit = async () => {
      try {
        // 1. Create PayPal order first
        const orderResponse = await axios.post("/api/student/create-order");

        if (orderResponse.data.id) {
          // 2. Capture the payment with user data
          const captureResponse = await axios.post(
            "/api/student/capture-payment",
            {
              orderId: orderResponse.data.id,
              userData: formData.value,
            }
          );

          if (captureResponse.data.message === "Registration successful") {
            // Show success message
            alert("Registration successful! Redirecting to home page...");
            // Redirect to home page
            router.push("/");
          }
        }
      } catch (error) {
        console.error("Registration error:", error);
        alert("Registration failed. Please try again.");
      }
    };

    return {
      currentStep,
      totalSteps,
      isStep1Valid,
      isStep2Valid,
      isPaymentComplete,
      formData,
      updateFormData,
      nextStep,
      prevStep,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
}

.register-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
