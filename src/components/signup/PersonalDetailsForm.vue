<template>
  <div class="fade-in">
    <h4 class="text-center mb-4">Personal Details</h4>

    <form @submit.prevent="submit">
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="firstName"
          v-model="formData.firstName"
          @blur="validateField('firstName')"
          :class="{ 'is-invalid': errors.firstName }"
          placeholder="First Name"
          required
        />
        <div class="invalid-feedback" v-if="errors.firstName">
          {{ errors.firstName }}
        </div>
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="lastName"
          v-model="formData.lastName"
          @blur="validateField('lastName')"
          :class="{ 'is-invalid': errors.lastName }"
          placeholder="Last Name"
          required
        />
        <div class="invalid-feedback" v-if="errors.lastName">
          {{ errors.lastName }}
        </div>
      </div>

      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="formData.email"
          @blur="validateField('email')"
          :class="{ 'is-invalid': errors.email }"
          placeholder="Email"
          required
        />
        <div class="invalid-feedback" v-if="errors.email">
          {{ errors.email }}
        </div>
      </div>

      <div class="mb-3">
        <input
          type="tel"
          class="form-control"
          id="phone"
          v-model="formData.phone"
          @blur="validateField('phone')"
          :class="{ 'is-invalid': errors.phone }"
          placeholder="Phone Number"
          required
        />
        <div class="invalid-feedback" v-if="errors.phone">
          {{ errors.phone }}
        </div>
      </div>

      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="formData.password"
          @blur="validateField('password')"
          :class="{ 'is-invalid': errors.password }"
          placeholder="Password"
          required
        />
        <div class="invalid-feedback" v-if="errors.password">
          {{ errors.password }}
        </div>
      </div>

      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          v-model="formData.confirmPassword"
          @blur="validateField('confirmPassword')"
          :class="{ 'is-invalid': errors.confirmPassword }"
          placeholder="Confirm Password"
          required
        />
        <div class="invalid-feedback" v-if="errors.confirmPassword">
          {{ errors.confirmPassword }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PersonalDetailsForm",
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  emits: ["update:modelValue", "validation"],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue });
    const errors = ref({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

    const validateField = (field) => {
      switch (field) {
        case "firstName":
          if (!formData.value.firstName) {
            errors.value.firstName = "First name is required";
          } else if (!/^[a-zA-Z]+$/.test(formData.value.firstName)) {
            errors.value.firstName = "First name should contain only letters";
          } else {
            errors.value.firstName = "";
          }
          break;
        case "lastName":
          if (!formData.value.lastName) {
            errors.value.lastName = "Last name is required";
          } else if (!/^[a-zA-Z]+$/.test(formData.value.lastName)) {
            errors.value.lastName = "Last name should contain only letters";
          } else {
            errors.value.lastName = "";
          }
          break;
        case "email":
          if (!formData.value.email) {
            errors.value.email = "Email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
            errors.value.email = "Please enter a valid email address";
          } else {
            errors.value.email = "";
          }
          break;
        case "phone":
          if (!formData.value.phone) {
            errors.value.phone = "Phone number is required";
          } else if (!/^0\d{9,14}$/.test(formData.value.phone)) {
            errors.value.phone =
              "Please enter a valid phone number starting with 0";
          } else {
            errors.value.phone = "";
          }
          break;
        case "password":
          if (!formData.value.password) {
            errors.value.password = "Password is required";
          } else if (formData.value.password.length < 6) {
            errors.value.password = "Password must be at least 6 characters";
          } else {
            errors.value.password = "";
          }
          break;
        case "confirmPassword":
          if (!formData.value.confirmPassword) {
            errors.value.confirmPassword = "Please confirm your password";
          } else if (
            formData.value.confirmPassword !== formData.value.password
          ) {
            errors.value.confirmPassword = "Passwords do not match";
          } else {
            errors.value.confirmPassword = "";
          }
          break;
      }

      // Check if all fields are valid
      const isValid = Object.values(errors.value).every((error) => !error);
      emit("validation", isValid);
    };

    const submit = () => {
      // Validate all fields on submit
      Object.keys(errors.value).forEach((field) => validateField(field));
      const isValid = Object.values(errors.value).every((error) => !error);

      if (isValid) {
        emit("update:modelValue", { ...formData.value });
      }
    };

    return {
      formData,
      errors,
      submit,
      validateField,
    };
  },
};
</script>

<style scoped>
/* Animation for step transitions */
.fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}
</style>
