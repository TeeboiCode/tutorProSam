import { createStore } from "vuex";
import api from "../services/api";
import auth from "./auth";
import student from "./student";

export default createStore({
  state: {
    user: null,
    isAuthenticated: false,
    token: localStorage.getItem("token") || null,
    stats: {
      totalStudents: 0,
      totalTutors: 0,
      successRate: 0,
      totalSubjects: 0,
    },
    statsLoading: false,
    statsError: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },
    CLEAR_USER(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token");
    },
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    setStats(state, stats) {
      state.stats = stats;
    },
    setStatsLoading(state, isLoading) {
      state.statsLoading = isLoading;
    },
    setStatsError(state, error) {
      state.statsError = error;
    },
  },
  actions: {
    async createPayPalOrder({ commit }) {
      try {
        const response = await api.post("/api/student/create-order");
        return response.data;
      } catch (error) {
        throw new Error("Failed to create PayPal order");
      }
    },
    async register({ commit }, { orderId, userData }) {
      try {
        const response = await api.post("/api/student/capture-payment", {
          orderId,
          userData,
        });
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Registration failed");
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await api.post("/api/auth/login", credentials);
        commit("SET_USER", response.data.user);
        commit("SET_TOKEN", response.data.token);
        return response.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "Login failed");
      }
    },
    logout({ commit }) {
      commit("CLEAR_USER");
    },
    async fetchStats({ commit }) {
      commit("setStatsLoading", true);
      commit("setStatsError", null);

      try {
        const response = await api.get("/api/stats");
        commit("setStats", response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
        commit(
          "setStatsError",
          "Failed to load statistics. Please try again later."
        );
      } finally {
        commit("setStatsLoading", false);
      }
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
    platformStats: (state) => state.stats,
    isStatsLoading: (state) => state.statsLoading,
    statsError: (state) => state.statsError,
  },
  modules: {
    auth,
    student,
  },
});
