<template>
  <div class="fade-in">
    <h4 class="text-center mb-4">Additional Information</h4>

    <form @submit.prevent="submit">
      <div class="mb-3">
        <select
          class="form-control"
          id="maritalStatus"
          v-model="formData.maritalStatus"
          @blur="validateField('maritalStatus')"
          :class="{ 'is-invalid': errors.maritalStatus }"
          required
        >
          <option value="">Select Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
        <div class="invalid-feedback" v-if="errors.maritalStatus">
          {{ errors.maritalStatus }}
        </div>
      </div>

      <div class="mb-3">
        <input
          type="date"
          class="form-control"
          id="dob"
          v-model="formData.dob"
          @blur="validateField('dob')"
          :class="{ 'is-invalid': errors.dob }"
          required
        />
        <div class="invalid-feedback" v-if="errors.dob">
          {{ errors.dob }}
        </div>
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="state"
          v-model="formData.state"
          @blur="validateField('state')"
          :class="{ 'is-invalid': errors.state }"
          placeholder="State"
          required
        />
        <div class="invalid-feedback" v-if="errors.state">
          {{ errors.state }}
        </div>
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="localGovt"
          v-model="formData.localGovt"
          @blur="validateField('localGovt')"
          :class="{ 'is-invalid': errors.localGovt }"
          placeholder="Local Government"
          required
        />
        <div class="invalid-feedback" v-if="errors.localGovt">
          {{ errors.localGovt }}
        </div>
      </div>

      <div class="mb-3">
        <textarea
          class="form-control"
          id="address"
          v-model="formData.address"
          @blur="validateField('address')"
          :class="{ 'is-invalid': errors.address }"
          placeholder="Address"
          required
        ></textarea>
        <div class="invalid-feedback" v-if="errors.address">
          {{ errors.address }}
        </div>
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="nationality"
          v-model="formData.nationality"
          @blur="validateField('nationality')"
          :class="{ 'is-invalid': errors.nationality }"
          placeholder="Nationality"
          required
        />
        <div class="invalid-feedback" v-if="errors.nationality">
          {{ errors.nationality }}
        </div>
      </div>

      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          id="nin"
          v-model="formData.nin"
          @blur="validateField('nin')"
          :class="{ 'is-invalid': errors.nin }"
          placeholder="National ID Number (NIN)"
          required
        />
        <div class="invalid-feedback" v-if="errors.nin">
          {{ errors.nin }}
        </div>
      </div>

      <div class="mb-3">
        <select
          class="form-control"
          id="department"
          v-model="formData.department"
          @blur="validateField('department')"
          :class="{ 'is-invalid': errors.department }"
          required
        >
          <option value="">Select Department</option>
          <option value="Science">Science</option>
          <option value="Commercial">Commercial</option>
          <option value="Art">Art</option>
        </select>
        <div class="invalid-feedback" v-if="errors.department">
          {{ errors.department }}
        </div>
      </div>

      <div class="mb-3">
        <select
          class="form-control"
          id="gender"
          v-model="formData.gender"
          @blur="validateField('gender')"
          :class="{ 'is-invalid': errors.gender }"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div class="invalid-feedback" v-if="errors.gender">
          {{ errors.gender }}
        </div>
      </div>

      <div class="mb-3 form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="privacyPolicy"
          v-model="formData.privacyPolicy"
          @blur="validateField('privacyPolicy')"
          :class="{ 'is-invalid': errors.privacyPolicy }"
          required
        />
        <label class="form-check-label" for="privacyPolicy">
          I agree to the privacy policy and terms of service
        </label>
        <div class="invalid-feedback" v-if="errors.privacyPolicy">
          {{ errors.privacyPolicy }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AdditionalInfoForm",
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
      maritalStatus: "",
      dob: "",
      state: "",
      localGovt: "",
      address: "",
      nationality: "",
      nin: "",
      department: "",
      gender: "",
      privacyPolicy: "",
    });

    const validateField = (field) => {
      switch (field) {
        case "maritalStatus":
          errors.value.maritalStatus = !formData.value.maritalStatus
            ? "Marital status is required"
            : "";
          break;
        case "dob":
          errors.value.dob = !formData.value.dob
            ? "Date of birth is required"
            : "";
          break;
        case "state":
          errors.value.state = !formData.value.state ? "State is required" : "";
          break;
        case "localGovt":
          errors.value.localGovt = !formData.value.localGovt
            ? "Local government is required"
            : "";
          break;
        case "address":
          errors.value.address = !formData.value.address
            ? "Address is required"
            : "";
          break;
        case "nationality":
          errors.value.nationality = !formData.value.nationality
            ? "Nationality is required"
            : "";
          break;
        case "nin":
          if (!formData.value.nin) {
            errors.value.nin = "NIN is required";
          } else if (!/^\d+$/.test(formData.value.nin)) {
            errors.value.nin = "NIN must contain only numbers";
          } else {
            errors.value.nin = "";
          }
          break;
        case "department":
          errors.value.department = !formData.value.department
            ? "Department is required"
            : "";
          break;
        case "gender":
          errors.value.gender = !formData.value.gender
            ? "Gender is required"
            : "";
          break;
        case "privacyPolicy":
          errors.value.privacyPolicy = !formData.value.privacyPolicy
            ? "You must agree to the privacy policy"
            : "";
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
</style>
