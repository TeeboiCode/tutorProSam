<template>
  <div class="fade-in">
    <h4 class="text-center mb-4">Payment Method</h4>
    <p class="text-center mb-4 text-muted">
      Select your preferred payment method
    </p>

    <div class="row g-4">
      <!-- Bank Transfer Option -->
      <div class="col-md-4">
        <div
          class="payment-option card h-100 p-3"
          :class="{ selected: selectedMethod === 'bank' }"
          @click="selectMethod('bank')"
        >
          <div class="card-body text-center p-0">
            <div class="payment-icon mb-3">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/emoji/48/bank-emoji.png"
                alt="bank-emoji"
              />
            </div>
            <h5 class="card-title">Bank Transfer</h5>
            <p class="card-text text-muted">
              Manual transfer to our bank account
            </p>
          </div>
        </div>
      </div>

      <!-- Card Payment Option -->
      <div class="col-md-4">
        <div
          class="payment-option card h-100 p-3"
          :class="{ selected: selectedMethod === 'card' }"
          @click="selectMethod('card')"
        >
          <div class="card-body p-0 text-center">
            <div class="payment-icon mb-3">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/cute-clipart/64/bank-cards.png"
                alt="bank-cards"
              />
            </div>
            <h5 class="card-title">Card Payment</h5>
            <p class="card-text text-muted">Pay with MasterCard or Visa</p>
          </div>
        </div>
      </div>

      <!-- PayPal Option -->
      <div class="col-md-4">
        <div
          class="payment-option card h-100 p-3"
          :class="{ selected: selectedMethod === 'paypal' }"
          @click="selectMethod('paypal')"
        >
          <div class="card-body p-0 text-center">
            <div class="payment-icon mb-3">
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/cute-clipart/64/paypal.png"
                alt="paypal"
              />
            </div>
            <h5 class="card-title">PayPal</h5>
            <p class="card-text text-muted">
              Easy payment for international students
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bank Transfer Details -->
    <div v-if="selectedMethod === 'bank'" class="mt-4">
      <div class="card payment-details">
        <div class="card-body">
          <h5 class="card-title mb-4">
            <i class="bi bi-bank me-2"></i>Bank Transfer Details
          </h5>
          <div class="bank-details mb-4">
            <div class="detail-item">
              <span class="label">Bank Name:</span>
              <span class="value">MoniCredit</span>
            </div>
            <div class="detail-item">
              <span class="label">Account Name:</span>
              <span class="value">Samcy Consult</span>
            </div>
            <div class="detail-item">
              <span class="label">Account Number:</span>
              <span class="value">7041604239</span>
            </div>
            <div class="detail-item">
              <span class="label">Amount:</span>
              <span class="value">$2.50</span>
            </div>
          </div>
          <form @submit.prevent="submitBankTransfer">
            <div class="mb-3">
              <label class="form-label">Transfer Reference Number</label>
              <input
                type="text"
                class="form-control"
                v-model="bankTransfer.reference"
                @blur="validateField('reference')"
                :class="{ 'is-invalid': errors.reference }"
                placeholder="Enter your transfer reference"
                required
              />
              <div class="invalid-feedback" v-if="errors.reference">
                {{ errors.reference }}
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Proof of Payment</label>
              <div class="file-upload">
                <input
                  type="file"
                  class="form-control"
                  @change="handleFileUpload"
                  accept="image/*"
                  required
                />
                <small class="text-muted"
                  >Upload screenshot of your transfer</small
                >
              </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">
              <i class="bi bi-check-circle me-2"></i>Confirm Payment
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Card Payment Form -->
    <div v-if="selectedMethod === 'card'" class="mt-4">
      <div class="card payment-details">
        <div class="card-body">
          <h5 class="card-title mb-4">
            <i class="bi bi-credit-card me-2"></i>Card Payment
          </h5>
          <form @submit.prevent="submitCardPayment">
            <div class="mb-3">
              <label class="form-label">Card Number</label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="cardPayment.number"
                  @blur="validateField('cardNumber')"
                  :class="{ 'is-invalid': errors.cardNumber }"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <span class="input-group-text">
                  <i class="bi bi-credit-card"></i>
                </span>
              </div>
              <div class="invalid-feedback" v-if="errors.cardNumber">
                {{ errors.cardNumber }}
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Expiry Date</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="cardPayment.expiry"
                  @blur="validateField('expiry')"
                  :class="{ 'is-invalid': errors.expiry }"
                  placeholder="MM/YY"
                  required
                />
                <div class="invalid-feedback" v-if="errors.expiry">
                  {{ errors.expiry }}
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">CVV</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="cardPayment.cvv"
                    @blur="validateField('cvv')"
                    :class="{ 'is-invalid': errors.cvv }"
                    placeholder="123"
                    required
                  />
                  <span class="input-group-text">
                    <i class="bi bi-shield-lock"></i>
                  </span>
                </div>
                <div class="invalid-feedback" v-if="errors.cvv">
                  {{ errors.cvv }}
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary w-100">
              <i class="bi bi-lock me-2"></i>Pay $2.50 Securely
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- PayPal Button -->
    <div v-if="selectedMethod === 'paypal'" class="mt-4">
      <div class="card payment-details">
        <div class="card-body text-center">
          <h5 class="card-title mb-4">
            <i class="bi bi-paypal me-2"></i>PayPal Payment
          </h5>
          <p class="mb-4 text-muted">
            Click the button below to pay with PayPal
          </p>
          <div id="paypal-button-container" class="paypal-button-wrapper"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { renderPayPalButton } from "@/services/paypal";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "PaymentForm",
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
  },
  emits: ["update:modelValue", "validation"],
  setup(props, { emit }) {
    const selectedMethod = ref("");
    const bankTransfer = ref({
      reference: "",
      proof: null,
    });
    const cardPayment = ref({
      number: "",
      expiry: "",
      cvv: "",
    });
    const errors = ref({
      reference: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
    const router = useRouter();
    const store = useStore();

    const selectMethod = (method) => {
      selectedMethod.value = method;
      emit("update:modelValue", {
        ...props.modelValue,
        paymentMethod: method,
      });

      // Initialize PayPal button when PayPal is selected
      if (method === "paypal") {
        renderPayPalButton(
          "paypal-button-container",
          props.modelValue.paymentAmount,
          handlePayPalSuccess,
          props.modelValue
        );
      }
    };

    const validateField = (field) => {
      switch (field) {
        case "reference":
          if (!bankTransfer.value.reference) {
            errors.value.reference = "Reference number is required";
          } else {
            errors.value.reference = "";
          }
          break;
        case "cardNumber":
          if (!cardPayment.value.number) {
            errors.value.cardNumber = "Card number is required";
          } else if (!/^\d{16}$/.test(cardPayment.value.number)) {
            errors.value.cardNumber = "Please enter a valid card number";
          } else {
            errors.value.cardNumber = "";
          }
          break;
        case "expiry":
          if (!cardPayment.value.expiry) {
            errors.value.expiry = "Expiry date is required";
          } else if (
            !/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardPayment.value.expiry)
          ) {
            errors.value.expiry = "Please enter a valid expiry date (MM/YY)";
          } else {
            errors.value.expiry = "";
          }
          break;
        case "cvv":
          if (!cardPayment.value.cvv) {
            errors.value.cvv = "CVV is required";
          } else if (!/^\d{3,4}$/.test(cardPayment.value.cvv)) {
            errors.value.cvv = "Please enter a valid CVV";
          } else {
            errors.value.cvv = "";
          }
          break;
      }

      const isValid = Object.values(errors.value).every((error) => !error);
      emit("validation", isValid);
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        bankTransfer.value.proof = file;
      }
    };

    const submitBankTransfer = () => {
      validateField("reference");
      if (!errors.value.reference && bankTransfer.value.proof) {
        emit("update:modelValue", {
          ...props.modelValue,
          paymentDetails: bankTransfer.value,
        });
      }
    };

    const submitCardPayment = () => {
      validateField("cardNumber");
      validateField("expiry");
      validateField("cvv");
      if (
        !errors.value.cardNumber &&
        !errors.value.expiry &&
        !errors.value.cvv
      ) {
        emit("update:modelValue", {
          ...props.modelValue,
          paymentDetails: cardPayment.value,
        });
      }
    };

    const handlePayPalSuccess = async (capture) => {
      try {
        // Update the form data with payment details
        const updatedData = {
          ...props.modelValue,
          paymentDetails: {
            method: "paypal",
            orderId: capture.id,
            status: capture.status,
            amount: capture.amount,
          },
        };
        emit("update:modelValue", updatedData);

        // Register the student using Vuex
        await store.dispatch("student/registerStudent", {
          orderId: capture.id,
          userData: props.modelValue,
        });

        // Navigate to success page
        router.push("/payment-success");
      } catch (error) {
        console.error("Registration failed:", error);

        // Show error message to user
        const errorMessage =
          error.message || "An error occurred during registration";
        // You can use a toast notification or alert here
        alert(errorMessage);

        // Reset the payment form
        selectedMethod.value = "";
        emit("update:modelValue", {
          ...props.modelValue,
          paymentMethod: "",
          paymentDetails: null,
        });
      }
    };

    return {
      selectedMethod,
      bankTransfer,
      cardPayment,
      errors,
      selectMethod,
      validateField,
      handleFileUpload,
      submitBankTransfer,
      submitCardPayment,
    };
  },
};
</script>

<style scoped>
.payment-option {
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  border-radius: 12px;
  overflow: hidden;
}

.payment-option:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.payment-option.selected {
  border-color: var(--primary-color);
  background-color: rgba(var(--primary-color-rgb), 0.05);
}

.payment-icon {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment-icon img {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.payment-details {
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.bank-details {
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #eee;
}

.detail-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.detail-item .label {
  color: #6c757d;
  font-weight: 500;
}

.detail-item .value {
  color: #212529;
  font-weight: 600;
}

.file-upload {
  border: 2px dashed #dee2e6;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
}

.file-upload:hover {
  border-color: var(--primary-color);
  background-color: rgba(var(--primary-color-rgb), 0.05);
}

.btn-paypal {
  background: none;
  border: none;
  padding: 0;
}

.paypal-button {
  height: 45px;
  transition: transform 0.3s ease;
}

.btn-paypal:hover .paypal-button {
  transform: scale(1.05);
}

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

/* Custom input styling */
.form-control {
  border-radius: 8px;
  padding: 0.75rem 1rem;
  border: 1px solid #dee2e6;
  transition: all 0.3s ease;
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.2rem rgba(var(--primary-color-rgb), 0.25);
}

.input-group-text {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  color: #6c757d;
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(var(--primary-color-rgb), 0.3);
}
</style>
