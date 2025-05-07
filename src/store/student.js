import api from "../services/api";

export default {
  namespaced: true,
  state: {
    registrationStatus: null,
    registrationError: null,
    isRegistering: false,
  },
  mutations: {
    SET_REGISTRATION_STATUS(state, status) {
      state.registrationStatus = status;
    },
    SET_REGISTRATION_ERROR(state, error) {
      state.registrationError = error;
    },
    SET_REGISTERING(state, isRegistering) {
      state.isRegistering = isRegistering;
    },
  },
  actions: {
    async registerStudent({ commit, dispatch }, { orderId, userData }) {
      commit("SET_REGISTERING", true);
      commit("SET_REGISTRATION_ERROR", null);

      try {
        console.log(
          "Starting student registration with PayPal order:",
          orderId
        );

        // First, notify the backend about the PayPal payment
        const paymentResponse = await api.post(
          "/api/payments/capture-payment",
          {
            orderId,
            userData,
          }
        );

        if (paymentResponse.data.success) {
          console.log("Payment capture notification successful");

          // Then register the student
          const registrationResponse = await api.post("/api/student/register", {
            ...userData,
            paypalOrderId: orderId,
            paymentStatus: "completed",
            paymentDate: new Date().toISOString(),
          });

          if (registrationResponse.data.success) {
            commit("SET_REGISTRATION_STATUS", "success");
            return registrationResponse.data;
          } else {
            throw new Error(
              registrationResponse.data.message || "Registration failed"
            );
          }
        } else {
          throw new Error(
            paymentResponse.data.error || "Payment capture failed"
          );
        }
      } catch (error) {
        console.error("Registration error:", error);
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Registration failed";
        commit("SET_REGISTRATION_ERROR", errorMessage);
        throw new Error(errorMessage);
      } finally {
        commit("SET_REGISTERING", false);
      }
    },
  },
  getters: {
    registrationStatus: (state) => state.registrationStatus,
    registrationError: (state) => state.registrationError,
    isRegistering: (state) => state.isRegistering,
  },
};
