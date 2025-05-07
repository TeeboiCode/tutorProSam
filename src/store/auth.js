import axios from "axios";
import Swal from "sweetalert2";

const API_URL = "http://localhost:3000";

const state = {
  user: null,
  loading: false,
  error: null,
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

const actions = {
  async registerStudent({ commit }, formData) {
    commit("SET_LOADING", true);
    try {
      // Register student
      const registerResponse = await axios.post(
        `${API_URL}/api/student/register`,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          role: "student",
          paymentStatus: "pending",
        }
      );

      if (registerResponse.data) {
        // Create payment
        const paymentResponse = await axios.post(
          `${API_URL}/api/student/create-payment`,
          {
            studentId: registerResponse.data.studentId,
            amount: formData.paymentAmount,
            currency: "USD",
            description: "Student Registration Fee",
          }
        );

        if (paymentResponse.data.id) {
          // Redirect to PayPal
          window.location.href = paymentResponse.data.links.find(
            (link) => link.rel === "approve"
          ).href;
        }
      }
    } catch (error) {
      commit("SET_ERROR", error.response?.data?.error || "Registration failed");
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text:
          error.response?.data?.error ||
          "An error occurred during registration",
      });
    } finally {
      commit("SET_LOADING", false);
    }
  },

  async handlePaymentSuccess({ commit }, { studentId, orderId }) {
    try {
      const response = await axios.post(
        `${API_URL}/api/student/payment-success`,
        {
          studentId,
          orderId,
        }
      );

      if (response.data.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your registration is now complete!",
        }).then(() => {
          // Redirect to login page
          window.location.href = "/login";
        });
      }
    } catch (error) {
      commit(
        "SET_ERROR",
        error.response?.data?.error || "Payment verification failed"
      );
      Swal.fire({
        icon: "error",
        title: "Payment Verification Failed",
        text:
          error.response?.data?.error ||
          "An error occurred while verifying your payment",
      });
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
